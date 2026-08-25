import { useTranslations } from 'next-intl';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { LabeledSection } from './labeled-section';

export const CareerBreadcrumb = () => {
  const t = useTranslations('hero');
  return (
    <LabeledSection label={t('careerPath.label')} className="w-full max-w-xs">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <HoverCard openDelay={0}>
              <HoverCardTrigger>{t('o2corn')}</HoverCardTrigger>
              <HoverCardContent className="w-80">
                <CareerInfo
                  position="Android Mobile Developer"
                  period={{
                    start: '2019.10',
                    end: '2020.06',
                  }}
                  team="Mobile Team"
                />
              </HoverCardContent>
            </HoverCard>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <HoverCard openDelay={0}>
              <HoverCardTrigger>{t('everex')}</HoverCardTrigger>
              <HoverCardContent className="w-80">
                <CareerInfo
                  position="Lead Android & Flutter Mobile Developer"
                  period={{
                    start: '2020.10',
                    end: '2022.9',
                  }}
                  team="Domestic Mobile Team"
                />
              </HoverCardContent>
            </HoverCard>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <HoverCard openDelay={0}>
              <HoverCardTrigger>{t('ournow')}</HoverCardTrigger>
              <HoverCardContent className="w-80">
                <CareerInfo
                  position="Flutter Mobile Developer"
                  period={{
                    start: '2023.01',
                    end: '2023.05',
                  }}
                  team="Mobile Team"
                />
              </HoverCardContent>
            </HoverCard>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <HoverCard openDelay={0}>
              <HoverCardTrigger className="space-x-2 text-primary">
                {t('quickarchive')}
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <CareerInfo
                  position="Lead Flutter Mobile Developer"
                  period={{
                    start: '2025.01',
                    end: 'current',
                  }}
                  team="Mobile Team"
                />
              </HoverCardContent>
            </HoverCard>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </LabeledSection>
  );
};

const CareerInfo = ({
  position,
  period,
  team,
}: {
  position: string;
  period: {
    start: string;
    end: string;
  };
  team: string;
}) => {
  return (
    <dl className="grid grid-cols-[60px_1fr] gap-x-4 gap-y-1 text-sm">
      <dt className="text-muted-foreground">Position</dt>
      <dd className="font-medium">{position}</dd>
      <dt className="text-muted-foreground">Team</dt>
      <dd className="font-medium">{team}</dd>
      <dt className="text-muted-foreground">Period</dt>
      <dd className="font-medium">
        {period.start} ~ {period.end}
      </dd>
    </dl>
  );
};
