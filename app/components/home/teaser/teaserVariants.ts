import titleTeaserVertical from './variants/titleTeaserVariant';
import titleVertical from './variants/titleVertical';
import featureVertical from './variants/featureVariant';
import { VariantsObject } from './variant-types';

const base: VariantsObject = {
  layout: 'vertical',
  card: {},
  media: {},
  title: {
    stylePreset: {},
    typographyPreset: {},
    spaceStack: 'space020',
  },
  teaser: {
    stylePreset: {},
    typographyPreset: {},
    spaceStack: 'space020',
  },
};

const teaserVariants = {
  base,
  titleTeaserVertical,
  titleVertical,
  featureVertical,
};

export default teaserVariants;

export type VariantsName = keyof typeof teaserVariants;
