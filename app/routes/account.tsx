import { Block, getMediaQueryFromTheme, styled } from "newskit";
import React from "react";
import { Outlet } from "remix";
import Header from "~/components/account/header";
import Sidenav from "~/components/account/sidenav";


const NavWrapper = styled(Block)`
  width: 100%;
  z-index: 2;

  ${getMediaQueryFromTheme('md')} {
    position: sticky;
    top: 0;
  }
`

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex-direction: column;
  ${getMediaQueryFromTheme('lg')} {
    flex-direction: initial;
  }
`

const StickyDiv = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  ${getMediaQueryFromTheme('md')} {
    top: 80px;
  }
  ${getMediaQueryFromTheme('lg')} {
    width: initial;
    bottom: 0;
  }
`

export default function Account() {
  return <div>
    <NavWrapper>
      <Header />
    </NavWrapper>
    <LayoutWrapper>
          <StickyDiv>
            <Sidenav />
          </StickyDiv>
          {/* <OffSetArea offset={+sidebar}>
            <LayoutGrid
              hasSidebar={sidebar}
              margin={{
                xsMargin: 'space050',
                smMargin: 'space060',
                mdMargin: 'space000',
              }}
              gutter={{
                xsColumnGutter: 'space020',
                smColumnGutter: 'space040',
              }}
            >
              {children}
            </LayoutGrid>
            {footer && <FooterWrapper />}
          </OffSetArea> */}
    </LayoutWrapper>
    <main><Outlet /></main>
  </div>
}