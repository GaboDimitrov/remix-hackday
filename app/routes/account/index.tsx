import { getMediaQueryFromTheme, Grid, styled } from "newskit";
import React from "react";
import Sidenav from "~/components/account/sidenav";

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

export default function PersonalDetails() {
  return <LayoutWrapper>
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
  
//   <OffSetArea offset={true}><Grid
//   // margin={{
//   //   xsMargin: 'space050',
//   //   smMargin: 'space060',
//   //   mdMargin: 'space000',
//   // }}
//   // gutter={{
//   //   xsColumnGutter: 'space020',
//   //   smColumnGutter: 'space040',
//   // }}
// >
//   asd
// </Grid>
// </OffSetArea>
}