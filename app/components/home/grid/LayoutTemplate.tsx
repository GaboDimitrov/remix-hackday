import React from 'react';
import { Gutter } from './Gutter';
import { LayoutProps } from './layoutTypes';
import { MainGrid } from './MainGrid';

const LayoutTemplate: React.FC<LayoutProps> = ({ children, user, ...mainGridProps }) => (
  <>
    <Gutter>
      <MainGrid {...mainGridProps}>{children}</MainGrid>
    </Gutter>
  </>
);

export default LayoutTemplate;
