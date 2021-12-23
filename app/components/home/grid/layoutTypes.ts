import React from 'react';
import { GridProps } from 'newskit';
import { UserData } from '../../helpers/global-types';

export type LayoutProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  withTopOffset?: boolean;
  withBottomOffset?: boolean;
  gridOverride?: GridProps;
  dataTestId?: string;
  user?: UserData;
};
