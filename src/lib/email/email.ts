import { createTransport, SendMailOptions } from 'nodemailer'
import {
  emailHost,
  emailPassword,
  emailPort,
  emailRecipient,
  emailUser,
} from './constants'

const transporter = createTransport({
  port: emailPort,
  host: emailHost,
  auth: {
    user: emailUser,
    pass: emailPassword,
  },
  secure: true,
})

export async function sendEmail(
  options: Omit<SendMailOptions, 'from' | 'to'>
): Promise<{
  messageId: string
}> {
  return await new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        ...options,
        from: emailUser,
        to: emailRecipient,
      },
      (err, info) => {
        if (err) {
          return reject(err)
        }
        return resolve({ messageId: info.messageId })
      }
    )
  })
}
