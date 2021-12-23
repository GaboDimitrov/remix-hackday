import React from 'react';
import { Card, Block, TextBlock, ImageProps } from 'newskit';
import teaserVariants, { VariantsName } from './teaserVariants';

export interface TeaserProps {
  variant?: VariantsName;
  url?: string;
  title: string;
  teaser?: string;
  media: ImageProps;
}

const Teaser: React.FC<TeaserProps> = ({ variant = 'base', url, title, teaser, media }) => {
  const presets = teaserVariants[variant];
  return (
    <Card
      layout={presets.layout}
      href={url}
      media={{
        ...presets.media,
        ...media,
      }}
      overrides={presets.card}
    >
      <Block spaceStack={presets.title.spaceStack}>
        <TextBlock as="h3" stylePreset={presets.title.stylePreset} typographyPreset={presets.title.typographyPreset}>
          {title}
        </TextBlock>
      </Block>
      {teaser && presets.teaser && (
        <Block spaceStack={presets.teaser.spaceStack}>
          <TextBlock stylePreset={presets.teaser.stylePreset} typographyPreset={presets.teaser.typographyPreset}>
            {teaser}
          </TextBlock>
        </Block>
      )}
    </Card>
  );
};

export default Teaser;
