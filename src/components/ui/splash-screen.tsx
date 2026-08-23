'use client'; // Next.js(App Router)에서 해당 파일이 서버가 아닌 브라우저(클라이언트)에서 실행되는 컴포넌트임을 알리는 지시어(Directive).
// useState, useEffect 등 브라우저 API/훅을 쓰려면 필수입니다.

import { motion } from 'motion/react'; // motion.div/h1 등 애니메이션 태그를 사용하기 위한 라이브러리
import { useEffect, useState } from 'react';

const HOLD_MS = 2400; // 스플래시 화면을 그대로 유지하는 시간(ms)
const FADE_OUT_MS = 700; // 페이드아웃(사라짐)에 걸리는 시간(ms)

type Stage = 'show' | 'out' | 'done'; // 표시 중 -> 사라지는 중 -> 완전히 제거됨

export default function SplashScreen() {
  const [stage, setStage] = useState<Stage>('show'); // 처음엔 'show' 상태로 시작

  useEffect(() => {
    // HOLD_MS 후에 stage를 'out'으로 바꿔 페이드아웃 애니메이션 트리거
    const fadeOutTimer = setTimeout(() => setStage('out'), HOLD_MS);
    // HOLD_MS + FADE_OUT_MS 후에 stage를 'done'으로 바꿔 컴포넌트를 완전히 제거
    const removeTimer = setTimeout(
      () => setStage('done'),
      HOLD_MS + FADE_OUT_MS,
    );
    // 언마운트 시 두 타이머를 정리(cleanup)
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []); // 빈 배열이므로 최초 마운트 시 1회만 실행

  if (stage === 'done') return null; // 'done' 단계에서는 아무것도 렌더링하지 않음(스플래시 제거)

  const isLeaving = stage === 'out'; // 현재 사라지는 중인지 여부

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black" // 화면 전체를 덮는 검정 오버레이, 내용은 중앙 정렬
      initial={{ opacity: 1, scale: 1 }} // 처음엔 완전 불투명, 원래 크기
      animate={{ opacity: isLeaving ? 0 : 1, scale: isLeaving ? 1.04 : 1 }} // 사라질 때 투명해지며 살짝 확대(1.04배)
      transition={{ duration: FADE_OUT_MS / 1000, ease: [0.22, 1, 0.36, 1] }} // 페이드아웃 지속시간(초 단위)과 감속 커브
      aria-hidden // 스크린리더에서 이 오버레이는 무시하도록 접근성 처리
    >
      <SpotlightGlow />
      <Wordmark />
      <Vignette />
    </motion.div>
  );
}

{
  /* 배경 광원(빛 번짐) 효과 */
}
function SpotlightGlow() {
  return (
    <motion.div
      className="pointer-events-none absolute size-[70vmin] rounded-full blur-3xl" // 클릭 통과 + 뷰포트 기준 70vmin 원을 강하게 블러 처리해 빛 번짐 연출
      initial={{ opacity: 0, scale: 0.6 }} // 투명하고 작게 시작
      animate={{ opacity: 0.55, scale: 1 }} // 1.6초에 걸쳐 서서히 커지며 나타남
      transition={{ duration: 1.6, ease: 'easeOut' }}
      style={{
        background:
          // 중심은 핑크/레드, 중간은 보라, 바깥은 투명한 방사형 그라디언트
          'radial-gradient(closest-side, rgba(255, 56, 100, 0.45), rgba(120, 80, 255, 0.18) 55%, transparent 75%)',
      }}
    />
  );
}

{
  /* 가장자리를 어둡게 하는 비네트 효과 */
}
function Vignette() {
  return (
    <div
      className="pointer-events-none absolute inset-0" // 화면 전체를 덮는 정적 오버레이(애니메이션 없음)
      style={{
        background:
          // 중앙 45%는 투명, 바깥으로 갈수록 검정(85%)으로 어두워지는 비네트 효과 -> 시선을 중앙 로고로 집중
          'radial-gradient(120% 90% at 50% 50%, transparent 45%, rgba(0,0,0,0.85) 95%)',
      }}
    />
  );
}

{
  /* 로고 텍스트 영역 */
}
function Wordmark() {
  return (
    <div className="relative z-10 flex flex-col items-center px-6">
      {/* overflow-hidden이 텍스트가 아래에서 위로 슬라이드업하며 나타나도록 마스킹 역할 */}
      <div className="overflow-hidden pb-1">
        <motion.h1
          initial={{ y: '110%' }} // 자기 높이의 110% 아래에서 시작
          animate={{ y: 0 }} // 제자리로 슬라이드업
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15, // 진입 시퀀스 중 가장 먼저 시작
          }}
          className="select-none text-5xl font-bold tracking-tight text-white md:text-7xl" // 드래그 선택 방지
        >
          Juno
        </motion.h1>
      </div>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }} // 왼쪽부터 오른쪽으로 늘어나는 밑줄 애니메이션
        transition={{ duration: 0.7, delay: 0.95, ease: [0.22, 1, 0.36, 1] }} // 로고 텍스트가 다 올라온 뒤 시작
        className="mt-5 h-[3px] w-32 origin-left rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-violet-500" // 로고 아래 그라디언트 밑줄
      />

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }} // 아래에서 살짝 위로 올라오며 페이드인
        transition={{ duration: 0.6, delay: 1.35, ease: 'easeOut' }} // 진입 시퀀스 중 가장 마지막에 시작
        className="mt-4 text-[11px] uppercase tracking-[0.4em] text-white/60 md:text-xs" // 넓은 자간의 캡션/태그라인 스타일
      >
        Mobile Engineer
      </motion.p>
    </div>
  );
}
