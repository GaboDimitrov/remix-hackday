import React from 'react'
import {
  styled,
  getColorCssFromTheme,
  Block,
  Divider,
  BlockProps,
} from 'newskit'
import { Link } from 'remix'
import { LayoutProps } from './types'
import { CollectionBlock } from '../global-types'
import StyledIconFilledChevronRight from '../common/icons/StyledIconFilledChevronRight'
import SectionTitleBar from '../common/SectionTitleBar'
import Row from './Row'

type StyledBackground = BlockProps & {
  isDarkBackground?: boolean
}

const StyledBackgroundBlock = styled(Block)<StyledBackground>`
  background: ${(props) =>
    props.isDarkBackground
      ? getColorCssFromTheme('color', 'interface030')
      : getColorCssFromTheme('color', 'transparent')};
`

const StyledDivider = styled(Divider)`
  ${getColorCssFromTheme('background', 'transparent')};
  ${getColorCssFromTheme('borderColor', 'transparent')};
`

const link = (href: string, stylePreset?: string) => (
  <Link
    type="standalone"
    to={href}
  >
    Link
    <StyledIconFilledChevronRight overrides={{ size: 'iconSize020' }} />
  </Link>
)

type SectionRowProps = {
  collection?: CollectionBlock
  isDarkBackground?: boolean
  showTitle?: boolean
  addTopSpace?: boolean
  titleBarStylePreset?: string
  titleBarColour?: string
} & LayoutProps

export const SectionRow: React.FC<SectionRowProps> = ({
  slice,
  collection,
  sectionURL,
  isDarkBackground,
  showTitle = true,
  addTopSpace,
  titleBarStylePreset,
  titleBarColour,
}) => (
  <StyledBackgroundBlock isDarkBackground={isDarkBackground}>
    {addTopSpace && (
      <Block spaceStack="space060" data-testid="addTopSpace">
        <StyledDivider />
      </Block>
    )}
    {showTitle && (
      <SectionTitleBar
        title={collection?.title as string}
        actionItem={() => link(sectionURL as string, titleBarStylePreset)}
        stylePreset={titleBarStylePreset}
        colour={titleBarColour}
      />
    )}
    <Block spaceStack={showTitle ? 'space070' : 'space000'}>
      <Row slice={slice} />
    </Block>
    <StyledDivider />
  </StyledBackgroundBlock>
)
