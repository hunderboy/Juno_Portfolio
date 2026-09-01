'use client';

import Autoplay from 'embla-carousel-autoplay';
import { LinkIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { StackChip } from '@/components/stack-chip';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Lens } from '@/components/ui/lens';
import SectionLayout from './section-layout';

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  stacks: string[]; // can be many, UI shows top 5
  detailUrl?: string;
  link?: string;
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, easing: [0.22, 1, 0.36, 1] },
  },
};

const AUTOPLAY_OPTIONS = {
  delay: 5000000, // 나중에 5000으로 돌려야함
  stopOnInteraction: false,
  stopOnMouseEnter: true,
} as const;

export default function ProjectSection() {
  const t = useTranslations('Project');
  const plugin = useRef(Autoplay(AUTOPLAY_OPTIONS));

  const projects: ProjectItem[] = [
    {
      id: 'quick_archive',
      title: t('quick_archive.name'),
      description: t('quick_archive.description'),
      thumbnail: '/images/project/퀵카이브_프로젝트_이미지.png',
      link: 'https://quickarchive.co.kr',
      stacks: [
        'Flutter',
        'riverpod',
        'codemagic',
        'go_router',
        'firebase',
        'Github',
      ],
    },
    {
      id: 'ournow',
      title: t('ournow.name'),
      description: t('ournow.description'),
      thumbnail: '/images/project/Ournow_프로젝트_이미지.jpg',
      link: 'https://blog.naver.com/ournow/223158626426',
      stacks: ['Flutter', 'getx', 'firebase', 'Github'],
    },
    {
      id: 'mora',
      title: t('mora.name'),
      description: t('mora.description'),
      link: 'https://www.youtube.com/playlist?list=PLKxJhj-PIQUs',
      thumbnail: '/images/project/mora_15second.gif',
      stacks: [
        'Flutter',
        'getx',
        'ml_kit',
        'video_player',
        'firebase',
        'Github',
      ],
    },
    {
      id: 'knee_ex',
      title: t('knee_ex.name'),
      description: t('knee_ex.description'),
      thumbnail: '/images/project/knee_ex.webp',
      stacks: [
        'Android',
        'Kotlin',
        'Coroutine',
        'video_player',
        'Room',
        'Nodejs',
        'Github',
      ],
    },
    {
      id: 'reservation_toast',
      title: t('reservation_toast.name'),
      description: t('reservation_toast.description'),
      thumbnail: '/images/project/예약엔_토스트_이미지.png',
      stacks: ['Android', 'Java', 'Nodejs', 'Github'],
      link: 'https://www.youtube.com/watch?v=mnMv9qHsVMc',
    },
  ];

  return (
    <SectionLayout id="Project" title="Project" description={t('subtitle')}>
      <div className="min-w-0 overflow-hidden">
        <Carousel
          className="mx-auto w-full min-w-0 overflow-hidden"
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {projects.map((p) => (
              <CarouselItem
                key={p.id}
                className="min-w-0 max-w-full sm:basis-1/2 lg:basis-1/3"
              >
                <motion.div variants={itemVariants} className="min-w-0">
                  <Card className="min-w-0">
                    <CardHeader className="py-0 flex justify-between items-center h-8">
                      <CardTitle>{p.title}</CardTitle>
                      {p.link && (
                        <Button asChild size={'icon-sm'} variant="ghost">
                          <Link
                            href={p?.link || ''}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <LinkIcon />
                          </Link>
                        </Button>
                      )}
                    </CardHeader>
                    <CardContent className="min-w-0 w-full space-y-2">
                      <div className="overflow-hidden rounded-xl border bg-muted/20">
                        <Lens zoomFactor={3}>
                          <picture>
                            <source
                              srcSet={p.thumbnail || '/icons/amplify.svg'}
                              type="image/svg+xml"
                            />
                            <img
                              src={p.thumbnail || '/icons/amplify.svg'}
                              alt={p.title}
                              className="w-full object-contain aspect-video"
                            />
                          </picture>
                        </Lens>
                      </div>
                      <div className="h-20 relative">
                        <span className="w-full text-sm text-wrap text-secondary-foreground absolute top-0">
                          {p.description}
                        </span>
                      </div>
                      <div className="flex min-w-0 justify-end overflow-hidden">
                        <StackChip
                          stackList={p.stacks}
                          max={8}
                          className="min-w-0 max-w-full"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </SectionLayout>
  );
}
