import React from 'react'
import {
  TitleBar,
  styled,
  getColorCssFromTheme,
  Block,
  BlockProps,
} from 'newskit'

type StyledTitleBarBlockProps = {
  colour?: string
} & BlockProps

const StyledTitleBarBlock = styled(Block)<StyledTitleBarBlockProps>`
  ${(props) =>
    props.colour
      ? getColorCssFromTheme('background', props.colour)
      : getColorCssFromTheme('background', 'inkBrand010')};
`

type SectionTitleBarProps = {
  title: string
  actionItem?: React.ComponentType
  colour?: string
  stylePreset?: string
}

const SectionTitleBar: React.FC<SectionTitleBarProps> = ({
  title,
  actionItem,
  colour,
  stylePreset,
}) => (
  <StyledTitleBarBlock
    colour={colour}
    spaceStack="space060"
    data-testid="SectionTitleBar"
  >
    <TitleBar
      actionItem={actionItem}
      overrides={{
        heading: {
          typographyPreset: {
            xl: 'editorialHeadline070',
            md: 'editorialHeadline060',
            xs: 'editorialHeadline050',
          },
          stylePreset: stylePreset || 'inkInverse',
        },
      }}
    >
      {title}
    </TitleBar>
  </StyledTitleBarBlock>
)

export default SectionTitleBar
