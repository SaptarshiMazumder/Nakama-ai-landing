'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const VERTEX_SHADER = `
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;

uniform float uTime, uAttenuation, uLineThickness;
uniform float uBaseRadius, uRadiusStep, uScaleRate;
uniform float uOpacity, uNoiseAmount, uRotation, uRingGap;
uniform float uFadeIn, uFadeOut;
uniform float uMouseInfluence, uHoverAmount, uHoverScale, uParallax, uBurst;
uniform vec2 uResolution, uMouse;
uniform vec3 uColor, uColorTwo;
uniform int uRingCount;

const float HALF_PI = 1.5707963;
const float CYCLE = 3.45;

float fade(float t) {
  return t < uFadeIn
    ? smoothstep(0.0, uFadeIn, t)
    : 1.0 - smoothstep(uFadeOut, CYCLE - 0.2, t);
}

float ring(vec2 p, float ringRadius, float cutoff, float timeOffset, float px) {
  float t = mod(uTime + timeOffset, CYCLE);
  float radius = ringRadius + t / CYCLE * uScaleRate;
  float dist = abs(length(p) - radius);
  float angleNorm = atan(abs(p.y), abs(p.x)) / HALF_PI;
  float thickness = max(1.0 - angleNorm, 0.5) * px * uLineThickness;
  float halo = (1.0 - smoothstep(thickness, thickness * 1.5, dist)) + 1.0;
  dist += pow(cutoff * angleNorm, 3.0) * radius;
  return halo * exp(-uAttenuation * dist) * fade(t);
}

void main() {
  float px = 1.0 / min(uResolution.x, uResolution.y);
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) * px;
  float cr = cos(uRotation);
  float sr = sin(uRotation);
  p = mat2(cr, -sr, sr, cr) * p;
  p -= uMouse * uMouseInfluence;
  float scale = mix(1.0, uHoverScale, uHoverAmount) + uBurst * 0.3;
  p /= scale;

  vec3 color = vec3(0.0);
  float ringCountFloat = max(float(uRingCount) - 1.0, 1.0);

  for (int i = 0; i < 10; i++) {
    if (i >= uRingCount) break;
    float fi = float(i);
    vec2 parallaxPos = p - fi * uParallax * uMouse;
    vec3 ringColor = mix(uColor, uColorTwo, fi / ringCountFloat);
    color = mix(
      color,
      ringColor,
      vec3(ring(parallaxPos, uBaseRadius + fi * uRadiusStep, pow(uRingGap, fi), i == 0 ? 0.0 : 2.95 * fi, px))
    );
  }

  color *= 1.0 + uBurst * 2.0;
  float noise = fract(
    sin(dot(gl_FragCoord.xy + uTime * 100.0, vec2(12.9898, 78.233))) * 43758.5453
  );
  color += (noise - 0.5) * uNoiseAmount;
  gl_FragColor = vec4(color, max(color.r, max(color.g, color.b)) * uOpacity);
}
`;

export default function Antigravity() {
  const mountRef = useRef(null);
  const propsRef = useRef(null);
  const mouseRef = useRef([0, 0]);
  const smoothMouseRef = useRef([0, 0]);
  const hoverAmountRef = useRef(0);
  const isHoveredRef = useRef(false);
  const burstRef = useRef(0);

  propsRef.current = {
    color: '#E8825E',
    colorTwo: '#F4A882',
    speed: 1,
    ringCount: 6,
    attenuation: 10,
    lineThickness: 2,
    baseRadius: 0.35,
    radiusStep: 0.1,
    scaleRate: 0.1,
    opacity: 1,
    blur: 0,
    noiseAmount: 0.06,
    rotation: 0,
    ringGap: 1.5,
    fadeIn: 0.7,
    fadeOut: 0.5,
    followMouse: false,
    mouseInfluence: 0.2,
    hoverScale: 1.2,
    parallax: 0.05,
    clickBurst: false,
  };

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true });
    } catch {
      return;
    }

    if (!renderer.capabilities.isWebGL2) {
      renderer.dispose();
      return;
    }

    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 10);
    camera.position.z = 1;

    const uniforms = {
      uTime: { value: 0 },
      uAttenuation: { value: 0 },
      uResolution: { value: new THREE.Vector2() },
      uColor: { value: new THREE.Color() },
      uColorTwo: { value: new THREE.Color() },
      uLineThickness: { value: 0 },
      uBaseRadius: { value: 0 },
      uRadiusStep: { value: 0 },
      uScaleRate: { value: 0 },
      uRingCount: { value: 0 },
      uOpacity: { value: 1 },
      uNoiseAmount: { value: 0 },
      uRotation: { value: 0 },
      uRingGap: { value: 1.6 },
      uFadeIn: { value: 0.5 },
      uFadeOut: { value: 0.75 },
      uMouse: { value: new THREE.Vector2() },
      uMouseInfluence: { value: 0 },
      uHoverAmount: { value: 0 },
      uHoverScale: { value: 1 },
      uParallax: { value: 0 },
      uBurst: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
      transparent: true,
    });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
    scene.add(quad);

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      renderer.setSize(width, height);
      renderer.setPixelRatio(dpr);
      uniforms.uResolution.value.set(width * dpr, height * dpr);
    };

    resize();
    window.addEventListener('resize', resize);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    const onMouseMove = (event) => {
      const rect = mount.getBoundingClientRect();
      mouseRef.current[0] = (event.clientX - rect.left) / rect.width - 0.5;
      mouseRef.current[1] = -((event.clientY - rect.top) / rect.height - 0.5);
    };
    const onMouseEnter = () => {
      isHoveredRef.current = true;
    };
    const onMouseLeave = () => {
      isHoveredRef.current = false;
      mouseRef.current[0] = 0;
      mouseRef.current[1] = 0;
    };
    const onClick = () => {
      burstRef.current = 1;
    };

    mount.addEventListener('mousemove', onMouseMove);
    mount.addEventListener('mouseenter', onMouseEnter);
    mount.addEventListener('mouseleave', onMouseLeave);
    mount.addEventListener('click', onClick);

    let frameId;
    const animate = (time) => {
      frameId = requestAnimationFrame(animate);
      const options = propsRef.current;

      smoothMouseRef.current[0] += (mouseRef.current[0] - smoothMouseRef.current[0]) * 0.08;
      smoothMouseRef.current[1] += (mouseRef.current[1] - smoothMouseRef.current[1]) * 0.08;
      hoverAmountRef.current += ((isHoveredRef.current ? 1 : 0) - hoverAmountRef.current) * 0.08;
      burstRef.current *= 0.95;
      if (burstRef.current < 0.001) burstRef.current = 0;

      uniforms.uTime.value = time * 0.001 * options.speed;
      uniforms.uAttenuation.value = options.attenuation;
      uniforms.uColor.value.set(options.color);
      uniforms.uColorTwo.value.set(options.colorTwo);
      uniforms.uLineThickness.value = options.lineThickness;
      uniforms.uBaseRadius.value = options.baseRadius;
      uniforms.uRadiusStep.value = options.radiusStep;
      uniforms.uScaleRate.value = options.scaleRate;
      uniforms.uRingCount.value = options.ringCount;
      uniforms.uOpacity.value = options.opacity;
      uniforms.uNoiseAmount.value = options.noiseAmount;
      uniforms.uRotation.value = (options.rotation * Math.PI) / 180;
      uniforms.uRingGap.value = options.ringGap;
      uniforms.uFadeIn.value = options.fadeIn;
      uniforms.uFadeOut.value = options.fadeOut;
      uniforms.uMouse.value.set(smoothMouseRef.current[0], smoothMouseRef.current[1]);
      uniforms.uMouseInfluence.value = options.followMouse ? options.mouseInfluence : 0;
      uniforms.uHoverAmount.value = hoverAmountRef.current;
      uniforms.uHoverScale.value = options.hoverScale;
      uniforms.uParallax.value = options.parallax;
      uniforms.uBurst.value = options.clickBurst ? burstRef.current : 0;

      renderer.render(scene, camera);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      resizeObserver.disconnect();
      mount.removeEventListener('mousemove', onMouseMove);
      mount.removeEventListener('mouseenter', onMouseEnter);
      mount.removeEventListener('mouseleave', onMouseLeave);
      mount.removeEventListener('click', onClick);
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      material.dispose();
    };
  }, []);

  const blurValue = propsRef.current?.blur ?? 0;

  return (
    <div
      ref={mountRef}
      className="antigravity-canvas"
      style={blurValue > 0 ? { filter: `blur(${blurValue}px)` } : undefined}
    />
  );
}
