import { defineRouting } from 'next-intl/routing';
import { LOCALES } from './constant';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches

  localePrefix: 'as-needed', // 기본 언어(ko)는 URL에 /ko 안 붙임

  defaultLocale: 'ko',
  localeDetection: false,
});
