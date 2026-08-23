// layout.tsx — 해당 폴더 하위 모든 페이지를 감싸는 껍데기 (한 번만 렌더링, 페이지 이동해도 안 사라짐)
import type { Metadata } from 'next/types';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Juno Portfolio',
  icons: {
    icon: '/favicon.ico',
  },
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}
