export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'p9r0vd3fr3',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Globalbriefingai',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Independent media updates',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A simple newsroom-style publication for announcements, coverage, and media updates on Globalbriefingai.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'globalbriefingai.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://globalbriefingai.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
