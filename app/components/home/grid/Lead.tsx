import React from 'react'
import { Grid, Cell } from 'newskit'
import { outerGridOverride, innerGridOverride } from './gridUtils'
import { getBlock } from './Block'
import { LayoutProps } from './types'

export const Lead: React.FC<LayoutProps> = ({ slice }) => (
  <Grid {...outerGridOverride} data-testid={`${slice.name}-Grid`}>
    <Cell xs={12} xl={8} data-testid="featureVerticalCell">
      {getBlock(slice.children[0], 'featureVertical')}
    </Cell>
    <Cell xs={12} xl={4} data-testid="titleTeaserVerticalsCell">
      <Grid {...innerGridOverride} data-testid={`${slice.name}-InnerGrid`}>
        <Cell xs={12} md={6} xl={12} data-testid="titleVerticalCell-1">
          {getBlock(slice.children[1], 'titleVertical')}
        </Cell>
        <Cell xs={12} md={6} xl={12} data-testid="titleVerticalCell-2">
          {getBlock(slice.children[2], 'titleVertical')}
        </Cell>
      </Grid>
    </Cell>
  </Grid>
)
