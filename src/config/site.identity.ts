export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'p9r0vd3fr3',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'GlobalBriefingAI',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Media press media platform',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'GlobalBriefingAI helps businesses publish, distribute, and scale media press media with a modern newsroom experience.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'globalbriefingai.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://globalbriefingai.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: 'https://img.freepik.com/free-photo/portrait-businesswoman-working-laptop_23-2148767031.jpg',
} as const
