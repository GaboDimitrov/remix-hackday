import React, { ReactNode } from 'react'
import { styled, getColorCssFromTheme, getMediaQueryFromTheme } from 'newskit'

const Wrapper = styled.div`
  ${getMediaQueryFromTheme('xs')} {
    ${getColorCssFromTheme('backgroundColor', 'interfaceBackground')};
  }
`
export const Gutter: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
)
