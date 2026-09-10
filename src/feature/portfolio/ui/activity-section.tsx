'use client';

import {
  Clapperboard,
  FileText,
  GitBranch,
  Link as LinkIcon,
  Rss,
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionLayout from './section-layout';

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, easing: [0.22, 1, 0.36, 1] },
  },
};

export default function ActivitySection() {
  const t = useTranslations('Activity');
  // const openSource = [
  //   {
  //     title: 'wavesurfer.js',
  //     desc: t('opensource.wavesurfer'),
  //     href: 'https://github.com/katspaugh/wavesurfer.js',
  //   },
  //   {
  //     title: 'handy-snippets',
  //     desc: t('opensource.handy-snippets'),
  //     href: 'https://github.com/your-username/your-repo',
  //   },
  // ];

  const studentprojects = [
    {
      title: t('studentproject.step-1.title'),
      desc: t('studentproject.step-1.desc'),
      href: 'https://kindhearted-layer-487.notion.site/Medium-1df391bd206741b98f3c93596939284d',
    },
    {
      title: t('studentproject.step-2.title'),
      desc: t('studentproject.step-2.desc'),
      href: 'https://kindhearted-layer-487.notion.site/Kick-Off-48e71b313d194d34992a3822bb1ca03d',
    },
  ];

  const lectures = [
    {
      title: t('lecture.title'),
      desc: t('lecture.desc'),
      href: 'https://kindhearted-layer-487.notion.site/Fundermental-3d08f3fa3b9280bcb00dcd247be571aa',
    },
  ];

  const blogs = [
    {
      title: 'Tistory',
      desc: t('blog.description'),
      href: 'https://hunderboy-ultra90.tistory.com/',
    },
  ];

  return (
    <SectionLayout id="Activity" title="Activity" description={t('subtitle')}>
      <motion.div variants={itemVariants}>
        <Accordion
          className="w-full"
          defaultValue={['opensource', 'studentwork']}
          type="multiple"
        >
          {/* <AccordionItem value="opensource">
            <AccordionTrigger>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <GitBranch className="size-4 text-muted-foreground" />
                  <div className="text-left font-semibold text-base">
                    {t('group.opensource')}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <ul className="list-disc pl-4 space-y-2">
                {openSource.map((it) => (
                  <li
                    key={it.title}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="flex-1">
                      <span className="font-medium">{it.title}</span>
                      <span className="mx-2">|</span>
                      <span className="text-secondary-foreground">
                        {it.desc}
                      </span>
                    </span>
                    {it.href && (
                      <Link
                        href={it.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <LinkIcon className="size-4" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem> */}

          <AccordionItem value="studentproject">
            <AccordionTrigger>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="size-4 text-muted-foreground" />
                  <div className="text-left font-semibold text-base">
                    {t('group.studentproject')}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <ul className="list-disc pl-4 space-y-2">
                {studentprojects.map((it) => (
                  <li
                    key={it.title}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="flex-1">
                      <span className="font-medium">{it.title}</span>
                      <span className="mx-2">|</span>
                      <span className="text-secondary-foreground">
                        {it.desc}
                      </span>
                    </span>
                    {it.href && (
                      <Link
                        href={it.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <LinkIcon className="size-4" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="lecture">
            <AccordionTrigger>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clapperboard className="size-4 text-muted-foreground" />
                  <div className="text-left font-semibold text-base">
                    {t('group.lecture')}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <ul className="list-disc pl-4 space-y-2">
                {lectures.map((it) => (
                  <li
                    key={it.title}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="flex-1">
                      <span className="font-medium">{it.title}</span>
                      <span className="mx-2">|</span>
                      <span className="text-secondary-foreground">
                        {it.desc}
                      </span>
                    </span>
                    {it.href && (
                      <Link
                        href={it.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <LinkIcon className="size-4" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="blog">
            <AccordionTrigger>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <Rss className="size-4 text-muted-foreground" />
                  <div className="text-left font-semibold text-base">
                    {t('group.blog')}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 space-y-4">
              <ul className="list-disc pl-4 space-y-2">
                {blogs.map((it) => (
                  <li
                    key={it.title}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="flex-1">
                      <span className="font-medium">{it.title}</span>
                      <span className="mx-2">|</span>
                      <span className="text-secondary-foreground">
                        {it.desc}
                      </span>
                    </span>
                    {it.href && (
                      <Link
                        href={it.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <LinkIcon className="size-4" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <iframe
                title={t('blog.iframeTitle')}
                src="https://hunderboy-ultra90.tistory.com/"
                className="w-full min-h-[400px] rounded-md border"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </SectionLayout>
  );
}
