export const emailHost = process.env.EMAIL_HOST
export const emailUser = process.env.EMAIL_USER
export const emailPassword = process.env.EMAIL_PASSWORD
export const emailRecipient = process.env.EMAIL_RECIPIENT
export const emailPort = Number.parseInt(process.env.EMAIL_PORT ?? '465')
