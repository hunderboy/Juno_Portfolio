import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
// 요청이 서버에 도착했을 때 제일 먼저 걸리는 것은 -> 미들웨어

// 페이지 코드가 실행되기 전에 모든 요청을 가로채는 함수입니다.
// 여기서는 URL을 보고 "이 사람 언어가 뭐지 (ko/en)"를 판단해서 라우팅(routing)을 조정합니다.
export default createMiddleware(routing);

export const config = {
  // matcher는 "어떤 경로에 이 미들웨어를 적용할지" 정규식입니다.
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … `/favicon` and `/images`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|favicon|images|.*\\..*).*)',
};
