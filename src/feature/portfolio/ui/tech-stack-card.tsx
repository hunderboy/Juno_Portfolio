'use client';

import { useTranslations } from 'next-intl';
import { StackChip } from '@/components/stack-chip';
import { Card, CardContent } from '@/components/ui/card';
import { LabeledSection } from './labeled-section';

type StackGroup = {
  title: string;
  chips: string[];
  summary: string;
};

const groups: StackGroup[] = [
  {
    title: 'Mobile',
    chips: ['android', 'java', 'kotlin', 'flutter', 'dart'],
    summary: 'Android · Java · Kotlin · Flutter · Dart',
  },
  {
    title: 'Infra',
    chips: ['firebase'],
    summary: 'Firebase · App Distiribution · Crashlytics',
  },
  {
    title: 'Tooling & CI/CD',
    chips: ['git', 'github', 'codemagic', 'github_actions'],
    summary: 'Git · GitHub · Code Magic · Github Actions',
  },
  {
    title: 'Others',
    chips: ['ndk', 'ml_kit', 'exo_player'],
    summary: 'NDK · ML kit · Exo Player(Video Player)',
  },
];

export default function TechStackCard() {
  const t = useTranslations('hero');

  return (
    <Card badgeTitle={t('techStack.card_label')} className="w-full ">
      <CardContent className="space-y-5 pt-2">
        {groups.map(({ title, chips, summary }) => (
          <LabeledSection key={title} label={title}>
            <div className="flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between">
              <p className="m-0 min-w-0 flex-1 text-pretty text-sm leading-6 text-foreground/90">
                {summary}
              </p>
              <StackChip
                className="w-full shrink-0 shadow sm:w-auto"
                stackList={chips}
                size={22}
                max={chips.length}
              />
            </div>
          </LabeledSection>
        ))}
      </CardContent>
    </Card>
  );
}
