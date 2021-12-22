import {
  Cell,
  styled,
  getColorCssFromTheme,
  getSizingCssFromTheme,
  getFontsFromTheme,
  Visible,
  getMediaQueryFromTheme,
  Stack,
  Block,
  IconFilledMenu,
} from 'newskit'

import { MainGrid } from '../grid/MainGrid'
import NewsKitLogoFull from '../common/NewskitLogo'
import NewsKitLogoShort from '../common/NewskitLogoShort'
import NavLink from '../common/NavLink'
import { Link } from 'remix'

export const headerSize = 'sizing090'

const StyledHeader = styled.div`
  ${getSizingCssFromTheme('height', headerSize)}
  ${getColorCssFromTheme('backgroundColor', 'neutral100')};
  a,
  a:visited:not(:disabled) {
    ${getColorCssFromTheme('color', 'white')};
    font-weight: bold;
    line-height: ${getFontsFromTheme('fontLineHeight040')};
  }
  ${getMediaQueryFromTheme('xs')} {
    ${getSizingCssFromTheme('paddingTop', 'sizing030')};
    ${getSizingCssFromTheme('paddingBottom', 'sizing030')};
    ${getSizingCssFromTheme('paddingLeft', 'sizing000')};
    ${getSizingCssFromTheme('paddingRight', 'sizing000')};
  }
  ${getMediaQueryFromTheme('lg')} {
    ${getSizingCssFromTheme('paddingTop', 'sizing030')};
    ${getSizingCssFromTheme('paddingBottom', 'sizing030')};
    ${getSizingCssFromTheme('paddingLeft', 'sizing090')};
    ${getSizingCssFromTheme('paddingRight', 'sizing090')};
  }
`

const pastDueBanner = {
  firstNotice: {
    title: "We haven't been able to take payment",
    text: 'You may need to update your payment details to keep your subscription.',
    button: 'Update payment details',
  },
  secondNotice: {
    title: 'Act now to keep your subscription',
    text: 'We’ve tried several times, but haven’t been able to take payment. Please update your payment details to keep your subscription.',
    button: 'Update payment details',
  },
  terminated: {
    title: 'Your subscription has been terminated',
    text: 'We didn’t receive payment for your subscription. To reactivate it, please call 0800 018 5177.',
  },
  cancelled: {
    title: 'Your subscription has been cancelled.',
    text: 'You’ll no longer have access to subscription benefits. To re-activate call 0800 555 1234.',
  },
  treshold: {
    firstNotice: 26,
    secondNotice: 30,
  },
}

type NavigationProps = {
  show: boolean
}

const BannerContainer = styled(Block)`
  position: sticky;
  top: 0;
  z-index: 1;
`

const NavigationContainer = styled.div<NavigationProps>`
  position: fixed;
  overflow: auto;
  width: 100%;
  min-height: 100vh;
  ${getColorCssFromTheme('backgroundColor', 'neutral100')};
  left: 0;
  ${getSizingCssFromTheme('top', headerSize)}
  z-index: 1;
  display: ${(props) => (props.show ? 'block' : 'none')};

  ${getMediaQueryFromTheme('md')} {
    display: block;
    position: relative;
    overflow: auto;
    width: initial;
    min-height: initial;
    background-color: initial;
    left: initial;
    top: initial;
    z-index: 1;
  }
`

const Navigation = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  ${getMediaQueryFromTheme('md')} {
    justify-content: flex-end;
    flex-direction: row;
  }
`

const NavButton = ({
  buttonText,
  href,
  isMobile,
  ariaLabel,
}: {
  buttonText: string
  href: string
  isMobile: boolean
  isLast?: boolean
  ariaLabel?: string
}) => (
  <Block
    as="span"
    spaceInline={{
      xs: 'space000',
      md: 'space050',
    }}
    spaceStack={isMobile ? 'space050' : ''}
  >
    <NavLink href={href} ariaLabel={ariaLabel} buttonText={buttonText} />
  </Block>
)

const Header: React.FC = () => {
  const mobileMenuControl = () => {
  }
  return (
    <>
      <StyledHeader>
        <MainGrid>
          <Cell xs={12}>
            <Stack
              flow="horizontal-center"
              stackDistribution="space-between"
              wrap="nowrap"
            >
              <Link
                type="standalone"
                to="/"
                aria-label="Home Page"
              >
                <Visible md lg xl>
                  <NewsKitLogoFull color="white" size="sizing120" />
                </Visible>
                <Visible xs sm>
                  <NewsKitLogoShort color="white" size="sizing120" />
                </Visible>
              </Link>
              <Stack
                flow="horizontal-center"
                stackDistribution="flex-end"
                wrap="nowrap"
              >
                <NavigationContainer  show={true}>
                  <Navigation>
                    {(
                      <Block
                        spaceStack="space050"
                        data-testid="mobile-block-space"
                      />
                    )}
                    <NavButton
                      buttonText="Section One"
                      href="/section-one"
                      isMobile={false}
                      ariaLabel="Section One Link"
                    />
                    <NavButton
                      buttonText="Section Two"
                      href="/section-two"
                      isMobile={false}
                      ariaLabel="Section Two Link"
                    />
                    <NavButton
                      buttonText="Section Three"
                      href="/section-three"
                      isMobile={false}
                      ariaLabel="Section Three Link"
                    />
                  </Navigation>
                </NavigationContainer>
                <Visible xs sm>
                  <Block spaceInline="space050">
                    <IconFilledMenu
                      overrides={{
                        size: 'iconSize030',
                        stylePreset: 'linkStandaloneInverse',
                      }}
                      onClick={mobileMenuControl}
                      role="button"
                      tabIndex={0}
                      aria-label="Mobile Menu Button"
                      data-testid="mobile-menu-btn"
                    />
                  </Block>
                </Visible>
              </Stack>
            </Stack>
          </Cell>
        </MainGrid>
      </StyledHeader>
     
    </>
  )
}

export default Header
