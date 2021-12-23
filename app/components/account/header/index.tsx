import React from 'react';
import {
  styled,
  getColorCssFromTheme,
  getSizingCssFromTheme,
  Divider,
  Image,
  Stack,
  Block,
  TextBlock,
  IconFilledChevronRight,
  IconFilledLogin,
  NewsKitIconProps,
  IconFilledHouse,
} from 'newskit';
import { smallToMediumMobile, mediumToLargeDesktop } from '../common/helpers';
import NewskitLogo from '~/components/home/common/NewskitLogo';
import { RemixLink } from '../common/Link';

const NavContainer = styled.header`
  ${getColorCssFromTheme('backgroundColor', 'interfaceBrand010')};
  width: 100%;
  ${getSizingCssFromTheme('padding', 'sizing050')};
`;

const DividerWrapper = styled.div`
  height: 32px;
  display: flex;
`;

const BlockDesktop = mediumToLargeDesktop(Block);

const ActionsContainer = styled(Block)`
  ${getColorCssFromTheme('backgroundColor', 'interfaceBrand010')};s
`;

const BlockMobile = smallToMediumMobile(Block);

const ActionsBlock = styled(BlockMobile)`
  ${getColorCssFromTheme('backgroundColor', 'whiteTint020')};
  ${getSizingCssFromTheme('minHeight', 'sizing080')}
`;
interface HeaderInterface {
  text: string;
  link: string;
  icon: React.ReactElement<NewsKitIconProps>;
  ariaLabel?: string;
}

const renderLinks = (topNav: HeaderInterface[]) => {
  const linksLength = topNav.length;
  return (
    linksLength && (
      <Stack flow="horizontal-center" stackDistribution="space-between" spaceInline="space040" wrap="nowrap">
        {topNav.map((link: HeaderInterface, index: number) => (
          <Block spaceInline={index < linksLength - 1 ? 'space060' : ''} key={link.text}>
            <Block spaceStack={{ xs: 'space000', md: 'space010' }} />
            <RemixLink
              type="standalone"
              aria-label={link.ariaLabel}
              href={link.link}
              external={false}
              overrides={{
                typographyPreset: {
                  xs: 'utilityLabel010',
                  md: 'utilityLabel020',
                },
                spaceInline: 'space020',
                stylePreset: 'linkStandaloneInverse',
              }}
            >
              {link.text}
              {link.icon}
            </RemixLink>
          </Block>
        ))}
      </Stack>
    )
  );
};
const Header = (): JSX.Element => {
  const topNav = [
    {
      text: 'Go to newskit.co.uk',
      link: '/',
      icon: <IconFilledChevronRight overrides={{ size: { md: 'iconSize020', xs: 'iconSize010' } }} />,
      ariaLabel: 'Go to homepage',
    },
    {
      text: 'Home',
      link: '/home',
      icon: <IconFilledHouse overrides={{ size: { md: 'iconSize020', xs: 'iconSize010' } }} />,
      ariaLabel: 'home',
    },
  ];
  return (
    <>
      {Array.isArray(topNav) && (
        <ActionsContainer>
          <ActionsBlock spaceInset="spaceInsetSquish040" data-testid="action-links-mobile">
            {renderLinks(topNav)}
          </ActionsBlock>
        </ActionsContainer>
      )}
      <NavContainer data-testid="NavigationPrimary">
        <Stack
          flow="horizontal-top"
          stackDistribution={{ xs: 'center', md: 'space-between' }}
          spaceInline={{ xs: 'space000', md: 'space040' }}
          wrap="nowrap"
        >
          <Block>
            <Stack
              flow="horizontal-center"
              stackDistribution={{ xs: 'center', md: 'flex-start' }}
              spaceInline={{ xs: 'space000', md: 'space040' }}
              wrap="nowrap"
            >
              <Block>
                <NewskitLogo />
              </Block>
              <BlockDesktop>
                <DividerWrapper>
                  <Divider vertical />
                </DividerWrapper>
              </BlockDesktop>
              <BlockDesktop>
                <TextBlock
                  stylePreset="inkInverse"
                  typographyPreset={{
                    md: 'utilityHeading030',
                  }}
                >
                  Account
                </TextBlock>
              </BlockDesktop>
            </Stack>
          </Block>

          {Array.isArray(topNav) && (
            <BlockDesktop data-testid="action-links-desktop">{renderLinks(topNav)}</BlockDesktop>
          )}
        </Stack>
      </NavContainer>
    </>
  );
};

export default Header;
