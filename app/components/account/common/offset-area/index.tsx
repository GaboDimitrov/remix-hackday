import { styled, getMediaQueryFromTheme } from "newskit";

type OffsetProps = {
  offset: boolean | number
}


export const OffSetArea = styled.div<OffsetProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${getMediaQueryFromTheme('lg')} {
    padding-top: 20px;
    padding-left: ${({ offset }) => (offset ? '300' : '0')}px;
  }
`