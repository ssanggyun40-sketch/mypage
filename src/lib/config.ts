export interface ValueItem {
  emoji: string;
  title: string;
  titleEn?: string;
  desc: string;
  descEn?: string;
}

export interface HighlightItem {
  label: string;
  labelEn?: string;
  value: string;
  valueEn?: string;
}

export interface SocialItem {
  platform: string;
  url: string;
  label?: string;
}

const DEMO_VALUES: ValueItem[] = [
  {
    emoji: '✦',
    title: '진정성',
    titleEn: 'Authenticity',
    desc: '.진정성은 **말보다 행동으로 꾸준히 보여주는 진심**입니다.',
  },
  {
    emoji: '✦',
    title: '일관성',
    titleEn: 'Since 2023, I have been steadily running a blog and YouTube channel.',
    desc: '2023년부터지금까지 꾸준하게 블로그,유튜브를운영하고있읍니다.',
    descEn: 'A newsletter published every single week since 2019. I believe consistency builds trust.',
  },
  {
    emoji: '✦',
    title: '호기심',
    titleEn: 'Curiosity',
    desc: '새로운 미래를 꿈꾸는 인생을 살아 갑니다',
    descEn: 'I live a life dreaming of a new future',
  }
];

const DEMO_HIGHLIGHTS: HighlightItem[] = [
  { label: '구독자 합산', labelEn: 'Total Subscribers', value: '84,000+', valueEn: '84,000+' },
  { label: '협업 브랜드', labelEn: 'Brand Collabs', value: '120+', valueEn: '120+' },
  { label: '뉴스레터 연속 발행', labelEn: 'Newsletter Streak', value: '312주', valueEn: '312 Weeks' }
];

const _basePath = process.env.NEXT_PUBLIC_REPO_NAME ? `/${process.env.NEXT_PUBLIC_REPO_NAME}` : '';

function parseJSON<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || '신상균',
  nameEn: process.env.NEXT_PUBLIC_SITE_NAME_EN || 'sanggyun.shin',
  tagline: process.env.NEXT_PUBLIC_TAGLINE || '콘텐츠로 세상을 연결하는 크리에이터',
  taglineEn: process.env.NEXT_PUBLIC_TAGLINE_EN || 'Hello, I am someone who runs a blog and YouTube.',
  heroImageUrl: process.env.NEXT_PUBLIC_HERO_IMAGE_URL || `${_basePath}/images/1785400562924-upload.webp`,
  story:
    process.env.NEXT_PUBLIC_STORY ||
    '안녕하세요, 저는 신상균입니다.블로그,유튜브를하고있어요.',
  storyEn:
    process.env.NEXT_PUBLIC_STORY_EN ||
    'Hello, I am someone who runs a blog and YouTube.',
  storyTitle: process.env.NEXT_PUBLIC_STORY_TITLE || '블로그,유튜브 운영',
  storyTitleEn: process.env.NEXT_PUBLIC_STORY_TITLE_EN || 'Manage a blog and YouTube channel',
  values: parseJSON<ValueItem[]>(process.env.NEXT_PUBLIC_VALUES, DEMO_VALUES),
  highlights: parseJSON<HighlightItem[]>(process.env.NEXT_PUBLIC_HIGHLIGHTS, DEMO_HIGHLIGHTS),
  galleryImages: parseJSON<string[]>(process.env.NEXT_PUBLIC_GALLERY_IMAGES, [
  `${_basePath}/images/1785403151113-upload.webp`,
  `${_basePath}/images/1785402344992-upload.webp`,
  `${_basePath}/images/1785402860490-upload.webp`,
  `${_basePath}/images/1785403209001-upload.webp`,
  `${_basePath}/images/1785402419937-upload.webp`,
  `${_basePath}/images/1785403270570-upload.webp`,
  `${_basePath}/images/1785402580586-upload.webp`,
  `${_basePath}/images/1785402619646-upload.webp`,
  `${_basePath}/images/1785403528664-upload.webp`
]),
  email: process.env.NEXT_PUBLIC_EMAIL || 'hello@jiwonlee.kr',
  socials: parseJSON<SocialItem[]>(process.env.NEXT_PUBLIC_SOCIALS, [
  { platform: 'youtube', url: 'https://youtube.com' },
  { platform: 'instagram', url: 'https://instagram.com' }
]),
  gradientFrom: '#ee5b2b',
  gradientTo: '#0a1af5',
  parallaxEnabled: true,
  fontFamily: 'Pretendard',
  galleryColumns: '3',
  designPreset: 'creator',
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
};

export type SiteConfig = typeof siteConfig;
