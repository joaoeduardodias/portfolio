/* eslint-disable no-unused-expressions */
import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const email = process.env.MAILADDRESS;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;

interface NodemailerTransporterGmail {
  service: string;
}

const { OAuth2 } = google.auth;

const OAuth2_client = new OAuth2(clientId, clientSecret);
OAuth2_client.setCredentials({ refresh_token: refreshToken });

const accessToken = OAuth2_client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: email,
    clientId,
    clientSecret,
    refreshToken,
    accessToken,
  },
} as NodemailerTransporterGmail);

interface MailerProps {
  senderMail: string;
  name: string;
  text: string;
}

const mailer = ({ senderMail, name, text }: MailerProps): Promise<unknown> => {
  const from =
    name && senderMail ? `${name} <${senderMail}> ` : `${name || senderMail}`;

  const message = {
    from,
    to: `${email}`,
    subject: `Nova mensagem de contato - ${name}`,
    text: `Email - <${senderMail}> \n ${text}`,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      error ? reject(error) : resolve(info);
    });
  });
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse
  // eslint-disable-next-line consistent-return
): Promise<void> => {
  const { senderMail, name, content } = req.body;

  if (senderMail === '' || name === '' || content === '') {
    return res.status(403).send({});
  }

  const mailerRes = await mailer({ senderMail, name, text: content });
  res.send(mailerRes);
};
