// page.tsx — 그 경로에서 실제로 보여줄 화면
import { redirect } from 'next/navigation';

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect('/ko'); // redirect("/ko") 한 줄. '/' 요청이 오면 그냥 기본 언어로 튕겨냄
}
