import { sendEmail } from '@lib/email/email'
import formidable from 'formidable'
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: false,
  },
}

const translations: Record<string, string> = {
  firstname: 'Ime',
  email: 'Email',
  lastname: 'Prezime',
  phone: 'Telefon',
  service: 'Usluge',
  preferred_way_of_contact: 'Želim da me kontaktirate na',
}

const formatMessage = (fields: {
  firstname: string
  lastname: string
  email: string
  phone: string
  service: string
  preferred_way_of_contact: string
}): string => {
  return Object.entries(fields).reduce(
    (acc, [key, value]) =>
      acc + `<b>${translations[key] || ''}:</b> ${value}<br />`,
    ''
  )
}

const parseFiles = (
  req: NextApiRequest
): Promise<{
  fields: formidable.Fields
  files: formidable.Files
}> =>
  new Promise((resolve, reject) => {
    const form = formidable({
      multiples: true,
      maxFiles: 3,
    })
    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err)
      }
      return resolve({ fields, files })
    })
  })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST': {
      try {
        const parsed = await parseFiles(req)

        const files = Array.isArray(parsed.files.file)
          ? parsed.files.file
          : [parsed.files.file]

        await sendEmail({
          subject: 'Message received',
          html: formatMessage(parsed.fields as any),
          attachments: files.map((file) => ({
            filename: file.originalFilename || file.newFilename,
            path: file.filepath,
          })),
        })

        return res.status(200).send('Success!')
      } catch (err) {
        console.error(err)
        let message = ''
        if (err instanceof Error) {
          message = err.message
        }
        return res.status(500).send(message)
      }
    }
    default: {
      return res.status(404).end()
    }
  }
}
