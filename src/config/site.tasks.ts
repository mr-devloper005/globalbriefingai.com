export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Press Releases',
    route: '/updates',
    description: 'Latest press releases and newsroom publications.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/updates',
} as const
