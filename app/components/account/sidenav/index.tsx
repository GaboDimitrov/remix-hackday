import React from 'react';
import {
  styled,
  getColorCssFromTheme,
  getMediaQueryFromTheme,
  Menu,
  MenuItem,
  Block,
  Scroll,
  Stack,
  TextBlock,
} from 'newskit';
export const navigationSecondaryHeight = '48px';
import { useLocation } from 'react-router-dom';

const NavContainer = styled.div<{ backgroundColor?: string | undefined }>`
  overflow: auto;
  height: ${navigationSecondaryHeight};
  ${({ backgroundColor }) => backgroundColor && getColorCssFromTheme('backgroundColor', backgroundColor)};
  width: 100%;
  ${getMediaQueryFromTheme('lg')} {
    width: 300px;
    min-height: 100vh;
    position: fixed;
    left: 0;
  }
`;

const StyledScroll = styled(Scroll)`
  overflow-x: auto;
  overflow-y: auto;
  ${getMediaQueryFromTheme('lg')} {
    overflow-x: initial;
    overflow-y: initial;
  }
`;

const StyledMenu = styled(Menu)`
  > ul {
    flex-direction: row;
    ${getMediaQueryFromTheme('lg')} {
      flex-direction: column;
    }
  }

  > ul li {
    margin-bottom: 0px;
  }

  > ul li a:focus-visible {
    border: none;
    margin-bottom: 2px;
    margin-top: 2px;
    min-height: 44px;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  white-space: nowrap;
`;

const SideNav: React.FC<{user: any}> = (user) => {
  const sideNav = [
    {
      text: 'Account',
      href: '/account',
      id: 'account',
    },
    {
      text: 'Personal Details',
      href: '/account/personal-details',
      id: 'personal-details',
    },
    {
      text: 'Subscription & Billing',
      href: '/account/subscription-and-billing',
      id: 'subscription-and-billing',
    },
    {
      text: 'Newsletters & Alerts',
      href: '/account/newsletters-and-alerts',
      id: 'newsletters-and-alerts',
    },
  ];

  const location = useLocation();
  const slug = location.pathname.split('/')[location.pathname.split('/').length - 1];
  console.log(slug);

  return (
    <NavContainer data-testid="NavigationSecondary" backgroundColor="interface020">
      <Block
        spaceStack={{
          lg: 'space070',
        }}
      />
      <Block>
        <StyledScroll
          overrides={{
            overlays: {
              size: {
                xs: 'sizing090',
                lg: 'sizing000',
              },
            },
          }}
        >
          {Array.isArray(sideNav) && (
            <StyledMenu vertical aria-label="main">
              {sideNav.map(({ id, href, text }) => (
                <StyledMenuItem
                  href={href}
                  key={id}
                  selected={slug.indexOf(href.split('/')[href.split('/').length - 1]) > -1}
                  overrides={{
                    typographyPreset: 'utilityButton030',
                    stylePreset: {
                      xs: 'navigationSecondayHorizontal',
                      lg: 'menuItemVertical',
                    },
                  }}
                >
                  {text}
                </StyledMenuItem>
              ))}
            </StyledMenu>
          )}
        </StyledScroll>
        <Stack stackDistribution="space-between" flow="vertical-center" spaceInline="space020">
          <TextBlock>{user.user.firstName}</TextBlock>
          <TextBlock>{user.user.lastName}</TextBlock>
          <TextBlock>
            {user.user.address.town} {user.user.address.postcode}
          </TextBlock>
        </Stack>
      </Block>
    </NavContainer>
  );
};

export default SideNav;
