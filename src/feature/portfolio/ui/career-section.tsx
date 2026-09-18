'use client';
import { LinkIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import CompanyDetailInfoDialog from './company-detail-info-dialog';
import SectionLayout from './section-layout';

type CareerItem = {
  name: string;
  role?: string | string[];
  period?: string;
  description: string;
  links?: { title: string; href: string }[];
  thumbnail?: string;
  id: string;
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, easing: [0.22, 1, 0.36, 1] },
  },
};

export default function CareerSection() {
  const t = useTranslations('Career');

  const careers: CareerItem[] = [
    {
      id: 'quick-archive',
      name: t('quick-archive.name'),
      role: 'Lead Flutter Engineer & Co-founder',
      period: '2025.01 - current',
      description: t('quick-archive.description'),
      links: [{ title: 'Homepage', href: 'https://quickarchive.co.kr' }],
      thumbnail: '/images/company/quickarchive_logo.png',
    },
    {
      id: 'coaching',
      name: t('coaching.name'),
      role: 'Flutter Technical Mentor',
      period: '2023.09 - 2024.11',
      description: t('coaching.description'),
      links: [
        {
          title: 'Homepage',
          href: 'https://kindhearted-layer-487.notion.site/Fundermental-3d08f3fa3b9280bcb00dcd247be571aa',
        },
      ],
      thumbnail: '/images/company/coaching_logo.png',
    },
    {
      id: 'ournow',
      name: t('ournow.name'),
      role: 'Flutter Developer',
      period: '2023.01 - 2023.05',
      description: t('ournow.description'),
      links: [
        {
          title: 'Homepage',
          href: 'https://blog.naver.com/ournow/223158626426',
        },
      ],
      thumbnail: '/images/company/ournow_logo.png',
    },
    {
      id: 'everex',
      name: t('everex.name'),
      role: 'Lead Android, Flutter Developer',
      period: '2020.10 - 2022.09',
      description: t('everex.description'),
      thumbnail: '/images/company/everex_logo.png',
      links: [{ title: 'Homepage', href: 'https://everex.kr/' }],
    },
    {
      id: 'o2corn',
      name: t('o2corn.name'),
      role: 'Android Developer',
      period: '2018.12 - 2020.05',
      description: t('o2corn.description'),
      links: [
        {
          title: 'Homepage',
          href: 'https://m.blog.naver.com/donghwan1392/221594629506',
        },
        {
          title: 'Youtube',
          href: 'https://www.youtube.com/watch?v=mnMv9qHsVMc',
        },
      ],
      thumbnail: '/images/company/o2corn_logo.webp',
    },
  ];
  return (
    <SectionLayout id="Career" title="Career" description={t('subtitle')}>
      <div className="space-y-6">
        {careers.map((item, idx) => (
          <motion.div
            key={item.name}
            className="space-y-4"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[220px_1fr] items-start">
              <div className="rounded-xl border bg-card text-card-foreground overflow-hidden h-[140px] sm:h-[160px] flex items-center justify-center">
                {item.thumbnail ? (
                  <Image
                    unoptimized
                    priority
                    src={item.thumbnail}
                    alt={item.name}
                    className="h-full w-full object-contain bg-white"
                    width={220}
                    height={140}
                  />
                ) : (
                  <div className="text-sm text-muted-foreground">No Image</div>
                )}
              </div>

              <div className="space-y-1 flex flex-col justify-between h-full py-2">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-xl font-semibold leading-none">
                    {item.name}
                  </h3>
                  {item.period && (
                    <span className="text-sm text-muted-foreground">
                      {item.period}
                    </span>
                  )}
                </div>
                {item.role && (
                  <div className="text-sm text-muted-foreground">
                    {Array.isArray(item.role)
                      ? item.role.join(' · ')
                      : item.role}
                  </div>
                )}
                <p className="text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                  {item.links?.map((l) => (
                    <Button key={l.href} asChild variant="outline" size="sm">
                      <Link href={l.href} target="_blank" rel="noreferrer">
                        {l.title} <LinkIcon />
                      </Link>
                    </Button>
                  ))}
                  <CompanyDetailInfoDialog
                    company={item.id}
                    companyLabel={item.name}
                  />
                </div>
              </div>
            </div>
            {idx < careers.length - 1 && <Separator className="mt-6" />}
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
