import { VariantsObject } from '../variant-types';

const featureVertical: VariantsObject = {
  layout: 'vertical',
  card: {
    mediaContainer: {
      spaceInline: {
        md: 'space050',
        xs: 'space045',
      },
    },
  },
  media: {
    loadingAspectRatio: '16:9',
  },
  title: {
    stylePreset: 'inkContrast',
    typographyPreset: {
      xl: 'editorialHeadline080',
      md: 'editorialHeadline070',
      xs: 'editorialHeadline040',
    },
    spaceStack: {
      md: 'space050',
      xs: 'space045',
    },
  },
  teaser: {
    stylePreset: 'inkContrast',
    typographyPreset: {
      xl: 'editorialSubheadline050',
      md: 'editorialSubheadline040',
      xs: 'editorialSubheadline020',
    },
    spaceStack: {
      md: 'space040',
      xs: 'space030',
    },
  },
};

export default featureVertical;
