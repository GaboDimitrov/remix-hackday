import { VariantsObject } from '../variant-types';

const titleTeaserVertical: VariantsObject = {
  layout: 'vertical',
  card: {
    mediaContainer: {
      spaceInline: 'space045',
    },
  },
  media: {
    loadingAspectRatio: '3:2',
  },
  title: {
    stylePreset: 'inkContrast',
    typographyPreset: {
      xl: 'editorialHeadline040',
      md: 'editorialHeadline030',
      xs: 'editorialHeadline020',
    },
    spaceStack: 'space045',
  },
  teaser: {
    stylePreset: 'inkContrast',
    typographyPreset: {
      md: 'editorialParagraph020',
      xs: 'editorialParagraph010',
    },
    spaceStack: 'space030',
  },
};

export default titleTeaserVertical;
