import React from 'react'
import { Grid, Cell } from 'newskit'
import { LayoutProps } from './types'
import { outerGridOverride } from './gridUtils'
import { getBlock } from './Block'

const Row: React.FC<LayoutProps> = ({ slice }) => (
  <Grid {...outerGridOverride} data-testid={`${slice.name}-Grid`}>
    {slice.children.map((block, i) => (
      <Cell
        xs={12}
        md={6}
        xl={3}
        key={
          ('article' in block && block.article.id) ||
          ('author' in block && block.author.id) ||
          ('accountId' in block && block.id) ||
          i
        }
        data-testid={`titleTeaserVertical-${i}`}
      >
        {getBlock(block, 'titleTeaserVertical')}
      </Cell>
    ))}
  </Grid>
)

export default Row
