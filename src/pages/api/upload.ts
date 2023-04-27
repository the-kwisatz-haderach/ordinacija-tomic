import { sendEmail } from '@lib/email/email'
import formidable from 'formidable'
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: false,
  },
}

const parseFiles = (
  req: NextApiRequest
): Promise<{
  fields: formidable.Fields
  files: formidable.Files
}> =>
  new Promise((resolve, reject) => {
    const form = formidable({ multiples: true })
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
          subject: 'Yo',
          text: JSON.stringify(parsed.fields),
          attachments: files.map((file) => ({
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
