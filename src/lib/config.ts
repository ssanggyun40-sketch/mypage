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
    desc: '광고처럼 느껴지지 않는 콘텐츠. 내가 직접 써봤거나 뿿는 것만 이야기합니다.',
  },
  {
    emoji: '✦',
    title: '일관성',
    titleEn: 'Consistency',
    desc: '2019년부터 한 주도 거르지 않은 뉴스레터. 꾸준함이 신뢰를 만든다고 생각해요.',
    descEn: 'A newsletter published every single week since 2019. I believe consistency builds trust.',
  },
  {
    emoji: '✦',
    title: '호기심',
    titleEn: 'Curiosity',
    desc: '새로운 플랫폼, 새로운 포맷, 새로운 사람. 배움을 멈추지 않는 것이 제 원동력입니다.',
    descEn: 'New platforms, new formats, new people — never stopping learning is what keeps me going.',
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
  storyTitle: process.env.NEXT_PUBLIC_STORY_TITLE || '',
  storyTitleEn: process.env.NEXT_PUBLIC_STORY_TITLE_EN || '',
  values: parseJSON<ValueItem[]>(process.env.NEXT_PUBLIC_VALUES, DEMO_VALUES),
  highlights: parseJSON<HighlightItem[]>(process.env.NEXT_PUBLIC_HIGHLIGHTS, DEMO_HIGHLIGHTS),
  galleryImages: parseJSON<string[]>(process.env.NEXT_PUBLIC_GALLERY_IMAGES, [
  'https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=600&q=85&auto=format&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=600&h=900&q=85&auto=format&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1602492665157-639323eadd31?w=600&q=85&auto=format&fit=crop',
  'https://plus.unsplash.com/premium_photo-1661407583811-f39558a8e0cd?w=600&h=400&q=85&auto=format&fit=crop',
  'https://plus.unsplash.com/premium_photo-1661412988741-45fcf3074878?w=600&h=800&q=85&auto=format&fit=crop',
  'https://plus.unsplash.com/premium_photo-1664476946415-19cdad721c53?w=600&q=85&auto=format&fit=crop&crop=faces'
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
