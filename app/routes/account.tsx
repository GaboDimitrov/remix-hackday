import { Block, getMediaQueryFromTheme, styled } from "newskit";
import React from "react";
import { Outlet, useLoaderData } from "remix";
import Header from "~/components/account/header";
import Sidenav from "~/components/account/sidenav";
import { getUser } from "~/user";

export const loader = () => {
  const user = getUser();

  return user
}

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
  const user = useLoaderData();
  return <div>
    <NavWrapper>
      <Header />
    </NavWrapper>
    <LayoutWrapper>
          <StickyDiv>
            <Sidenav user={user}/>
          </StickyDiv>
       
    </LayoutWrapper>
    <main><Outlet /></main>
  </div>
}