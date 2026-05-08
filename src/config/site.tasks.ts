export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Press Media',
    route: '/updates',
    description: 'Latest press media and newsroom publications.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/updates',
} as const
