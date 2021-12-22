import React from 'react'
import { Cell } from 'newskit'

import { Page, UserData } from '../global-types'
import LayoutTemplate from '../grid/LayoutTemplate'
import pageBlock from './pageBlock'
import SectionTitleBar from '../common/SectionTitleBar'

const gridOverride = {
  xsMargin: 'space000',
  xsRowGutter: 'space000',
  xsColumnGutter: 'space000',
}

const SectionPage: React.FC<{
  page: Page
  isIndexPage?: boolean
  user?: UserData
}> = ({ page, user, isIndexPage = false }) => (
    <LayoutTemplate dataTestId="SectionGrid" gridOverride={gridOverride} user={user}>
      <Cell xs={12} md={10} mdOffset={1} data-testid="SectionCell">
        {isIndexPage && <SectionTitleBar title={page.title} />}
        {Array.isArray(page.body) &&
          page.body.map((block) => pageBlock(block.type as string)(block))}
      </Cell>
    </LayoutTemplate>
)

export default SectionPage
