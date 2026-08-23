// Stage 2 — 진짜 레이아웃 (여기가 이 프로젝트의 심장부)
import { Analytics } from '@vercel/analytics/next';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { BottomDock } from '@/components/bottom-dock';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { ScrollToTop } from '@/components/scroll-to-top';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { SidebarProvider } from '@/components/ui/sidebar';
import { routing } from '@/i18n/routing';
import { AppSidebar } from '@/shared/ui/app-sidebar';
import '../globals.css';

// generateMetadata() / generateStaticParams()
// 리액트 문법이 아니라 Next.js가 특별히 인식하는 예약된 함수 이름입니다.
// 각각 <head> 태그 생성, 빌드 시 /ko·/en 정적 페이지를 미리 만들라는 지시입니다.
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('seo');

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: '/images/intro/character_op.png',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// async 함수인 Server Component
// 브라우저가 아니라 서버에서 실행되고, await params로 URL 파라미터를 받습니다.
export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<'/[locale]'>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      {/* TODO: add your own search-console site-verification meta tags here */}
      <body>
        {/* <ThemeProvider><NextIntlClientProvider><SidebarProvider> Provider를 겹겹이 감싸는 패턴.*/}
        {/* 각각 "다크모드 상태", "번역 텍스트", "사이드바 열림/닫힘 상태"를 하위 트리 전체에 공급합니다. */}
        <ThemeProvider
          storageKey="juno-portfolio-theme"
          attribute={'class'}
          defaultTheme="system"
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <SidebarProvider open>
              <AppSidebar />
              <main className="relative min-w-0 w-full overflow-x-clip">
                <ScrollProgress />
                <div className="fixed top-2 right-2 z-50 flex gap-2 ">
                  <AnimatedThemeToggler />
                  <LocaleSwitcher />
                </div>
                <div className="min-w-0 max-w-full overflow-x-clip">
                  {children}
                </div>
                <div className="fixed bottom-2 right-2 z-50 flex gap-2 items-end">
                  <BottomDock />
                  <ScrollToTop />
                </div>
              </main>
            </SidebarProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
      {/* TODO: wrap with <GoogleAnalytics gaId="..." /> from @next/third-parties/google using your own GA property */}
      <Analytics />
    </html>
  );
}
