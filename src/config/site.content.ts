import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Media press media platform',
  },
  footer: {
    tagline: 'Distribution-ready press newsroom',
  },
  hero: {
    badge: 'Latest updates',
    title: ['Clear publishing, simple reading, no extra noise.'],
    description:
      'A minimal article-style publishing template built for regular updates, announcements, and media distribution posts.',
    primaryCta: {
      label: 'Browse latest posts',
      href: '/updates',
    },
    secondaryCta: {
      label: 'Contact us',
      href: '/contact',
    },
    searchPlaceholder: 'Search posts',
    focusLabel: 'Latest',
    featureCardBadge: 'editor note',
    featureCardTitle: 'Recent updates appear directly on the homepage.',
    featureCardDescription:
      'The homepage works as a clean front page so new posts stay visible without decorative sections getting in the way.',
  },
  home: {
    metadata: {
      title: 'Press media distribution and newsroom updates',
      description:
        'Publish and explore media press media, newsroom coverage, and business announcements with GlobalBriefingAI.',
      openGraphTitle: 'Press media distribution and newsroom updates',
      openGraphDescription:
        'A modern press media platform for media visibility, distribution, and growth.',
      keywords: ['press media', 'media distribution', 'newsroom', 'business announcements'],
    },
    introBadge: 'About',
    introTitle: 'A quiet publishing template made for regular updates.',
    introParagraphs: [
      'This template is designed for sites that publish straightforward updates and want the homepage to behave like a clean front page rather than a product landing page.',
      'Posts are visible immediately, archives stay easy to scan, and the reading page keeps the focus on the article itself.',
      'The interface is intentionally simple so the site feels usable, familiar, and fast to update.',
    ],
    sideBadge: 'What it prioritizes',
    sidePoints: [
      'Recent posts directly on the homepage.',
      'Simple archive layout with sidebar search and recent items.',
      'Readable article pages without comments or extra modules.',
      'A publishing-first structure that stays easy to maintain.',
    ],
    primaryLink: {
      label: 'Open archive',
      href: '/updates',
    },
    secondaryLink: {
      label: 'Contact desk',
      href: '/contact',
    },
  },
  cta: {
    badge: 'Get in touch',
    title: 'Use this template when publishing regular updates matters more than visual effects.',
    description:
      'A straightforward layout for announcements, media coverage, partner updates, and newsroom-style content.',
    primaryCta: {
      label: 'Contact us',
      href: '/contact',
    },
    secondaryCta: {
      label: 'View archive',
      href: '/updates',
    },
  },
  taskSectionHeading: 'Latest posts',
  taskSectionDescriptionSuffix: 'Read the newest published updates.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles',
    description: 'Read the latest posts and long-form updates.',
  },
  listing: {
    title: 'Listings',
    description: 'Explore listings and directory-style entries.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Browse classifieds and short-form notices.',
  },
  image: {
    title: 'Images',
    description: 'Browse image-led updates and visual posts.',
  },
  profile: {
    title: 'Profiles',
    description: 'View profile pages and public identities.',
  },
  sbm: {
    title: 'Bookmarks',
    description: 'Browse curated resources and saved links.',
  },
  pdf: {
    title: 'Resources',
    description: 'Open PDFs and downloadable files.',
  },
  mediaDistribution: {
    title: 'Press Media',
    description: 'Read the latest published press media and media announcements.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: { title: 'Listings', paragraphs: ['Directory entries and service pages.'], links: [{ label: 'Home', href: '/' }] },
  article: { title: 'Articles', paragraphs: ['General long-form article feed.'], links: [{ label: 'Home', href: '/' }] },
  classified: { title: 'Classifieds', paragraphs: ['Short-form posts and notices.'], links: [{ label: 'Home', href: '/' }] },
  image: { title: 'Images', paragraphs: ['Image-first posts and galleries.'], links: [{ label: 'Home', href: '/' }] },
  profile: { title: 'Profiles', paragraphs: ['Profile pages and identity surfaces.'], links: [{ label: 'Home', href: '/' }] },
  sbm: { title: 'Bookmarks', paragraphs: ['Curated saved links and references.'], links: [{ label: 'Home', href: '/' }] },
  pdf: { title: 'Resources', paragraphs: ['Downloadable files and documents.'], links: [{ label: 'Home', href: '/' }] },
  social: { title: 'Social', paragraphs: ['Short updates and activity.'], links: [{ label: 'Home', href: '/' }] },
  comment: { title: 'Comments', paragraphs: ['Commentary and response posts.'], links: [{ label: 'Home', href: '/' }] },
  org: { title: 'Organizations', paragraphs: ['Organization pages and entities.'], links: [{ label: 'Home', href: '/' }] },
  mediaDistribution: {
    title: 'Press Media',
    paragraphs: [
      'This newsroom archive is designed for press media discovery with category-led scanning and clear publication metadata.',
      'Browse the latest announcements, open full media details, and move through related media coverage from one place.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
