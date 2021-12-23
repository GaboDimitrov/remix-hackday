import { createTheme, newskitLightTheme, newskitDarkTheme } from 'newskit';

export const renderCustomLightTheme = createTheme({
  name: 'render-custom-light-theme',
  baseTheme: newskitLightTheme,
  overrides: {
    stylePresets: {
      dividerFooterHorizontal: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.interfaceNeutral010}}',
          borderWidth: '{{borders.borderWidthDefault}}',
        },
      },
      cardContainer: {
        base: {
          backgroundColor: '{{colors.transparent}}',
        },
      },
      cardContainerTeaser: {
        base: {
          backgroundColor: '{{colors.transparent}}',
        },
      },
      PastDueFirstNotice: {
        base: {
          backgroundColor: '{{colors.amber090}}',
        },
      },
      PastDueLastNotice: {
        base: {
          backgroundColor: '{{colors.red070}}',
        },
      },
      UpdatePaymentButton: {
        base: {
          backgroundColor: '{{colors.white}}',
          borderRadius: '{{borders.borderRadiusRounded020}}',
          color: '{{colors.inkBase}}',
        },
        visited: {
          color: '{{colors.inkBase}}',
        },
      },
    },
  },
});

export const renderCustomDarkTheme = createTheme({
  name: 'render-custom-dark-theme',
  baseTheme: newskitDarkTheme,
  overrides: {
    stylePresets: {
      cardContainer: {
        base: {
          backgroundColor: '{{colors.transparent}}',
        },
      },
      cardContainerTeaser: {
        base: {
          backgroundColor: '{{colors.transparent}}',
        },
      },
    },
  },
});
