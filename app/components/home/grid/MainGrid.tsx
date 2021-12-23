import React from 'react';
import { Grid, Cell, styled, getColorCssFromTheme, GridProps, Block } from 'newskit';
import { LayoutProps } from './layoutTypes';

type StyledGrid = GridProps & {
  backgroundColor?: string;
};

const StyledGrid = styled(Grid)<StyledGrid>`
  ${({ backgroundColor, theme }) => `${getColorCssFromTheme('backgroundColor', backgroundColor as string)({ theme })}`}
`;

export const MainGrid: React.FC<LayoutProps> = ({
  children,
  backgroundColor,
  withTopOffset,
  withBottomOffset,
  gridOverride,
  dataTestId,
}) => {
  const gridProps = gridOverride || {
    mdMargin: 'space050',
    xsColumnGutter: 'space040',
    xsRowGutter: 'space000',
    xsMargin: 'space040',
  };
  return (
    <StyledGrid data-testid={dataTestId || 'PageLayout'} backgroundColor={backgroundColor} {...gridProps}>
      {withTopOffset && (
        <Cell xs={12}>
          <Block
            spaceStack={{
              xs: 'space070',
              lg: 'space080',
            }}
          />
        </Cell>
      )}
      {children}
      {withBottomOffset && (
        <Cell xs={12}>
          <Block
            spaceStack={{
              xs: 'space090',
            }}
          />
        </Cell>
      )}
    </StyledGrid>
  );
};
