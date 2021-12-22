import {styled, getMediaQueryFromTheme} from 'newskit'
export const smallToMediumMobile = <T>(element: React.FC<T>) =>
  styled(element)`
    display: block;
    ${getMediaQueryFromTheme('md')} {
      display: none;
    }
  `
export const mediumToLargeDesktop = <T>(element: React.FC<T>) =>
  styled(element)`
    display: none;
    ${getMediaQueryFromTheme('md')} {
      display: block;
    }
  `

export const largeDesktop = <T>(element: React.FC<T>) =>
  styled(element)`
    display: none;
    ${getMediaQueryFromTheme('lg')} {
      display: block;
    }
  `

// export const replaceBaseURL = (
//     href: string | undefined,
//     defaultValue = ''
//   ): string => {
//     const { baseUrl } = useAccountContext()
//     return href?.replace('[baseURL]', baseUrl || '') || defaultValue
//   }