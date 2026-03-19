import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function buildEmailHtml(fields) {
  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:8px 12px;font-weight:600;white-space:nowrap;color:#555;border-bottom:1px solid #eee">${k}</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${String(v).replace(/\n/g, '<br/>')}</td></tr>`)
    .join('');
  return `<table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%;max-width:600px">${rows}</table>`;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { type } = body;

    let subject = '';
    let fields = {};

    if (type === 'waitlist') {
      subject = `[Waitlist] ${body.name} — ${body.service || 'No service selected'}`;
      fields = {
        'Name': body.name,
        'Email': body.email,
        'Company': body.company,
        'Service Interest': body.service,
        'Use Case': body.useCase,
      };
    } else if (type === 'contact') {
      subject = `[Contact] ${body.inquiryType || 'General'} — ${body.name}`;
      fields = {
        'Name': body.name,
        'Email': body.email,
        'Inquiry Type': body.inquiryType,
        'Message': body.message,
      };
    } else if (type === 'support') {
      subject = `[Support] ${body.service || 'General'} — ${body.name}`;
      fields = {
        'Name': body.name,
        'Email': body.email,
        'Service': body.service,
        'Issue': body.message,
      };
    } else {
      subject = `[Website] Message from ${body.name || body.email}`;
      fields = body;
    }

    await transporter.sendMail({
      from: `"Nakama AI Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: body.email,
      subject,
      html: buildEmailHtml(fields),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
