import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs obligatoires manquants.' });
  }

  try {
    await resend.emails.send({
      from: 'ACH Contact <onboarding@resend.dev>',
      to: 'assocoeurhumanitaire@gmail.com',
      replyTo: email,
      subject: `[ACH Contact] ${subject || 'Nouveau message'} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:32px;border:1px solid #eee;border-radius:16px;">
          <h2 style="color:#C94040;">❤️ Nouveau message — ACH</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#888;width:100px;">Nom</td><td style="font-weight:bold;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#888;">Email</td><td><a href="mailto:${email}" style="color:#C94040;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888;">Sujet</td><td>${subject || '—'}</td></tr>
          </table>
          <hr style="margin:24px 0;border:none;border-top:1px solid #eee;" />
          <p style="color:#444;line-height:1.8;white-space:pre-wrap;background:#f9f9f9;padding:16px;border-radius:8px;">${message}</p>
          <hr style="margin:24px 0;border:none;border-top:1px solid #eee;" />
          <p style="color:#aaa;font-size:12px;text-align:center;">Envoyé depuis assocoeurhumanitaire.org</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: "Erreur lors de l'envoi." });
  }
}