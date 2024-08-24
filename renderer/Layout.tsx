export { Layout };

import React from "react";
import logoUrl from "./logo.svg";
import { PageContextProvider } from "./usePageContext";
import { Link } from "./Link";
import type { PageContext } from "vike/types";
import "./css/index.css";

function Layout({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Frame>
          <Sidebar>
            <Logo />
            <Link href="/">Inicio {pageContext.data?.title}</Link>
            <Link href="/articulos">Articulos</Link>
            <Link href="/clientes">Clientes</Link>
            <Link href="/venta">Venta</Link>
          </Sidebar>
          <Content>{children}</Content>
        </Frame>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return <div className="frame">{children}</div>;
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div id="sidebar" className="sidebar">
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <div id="page-content" className="page-content">
        {children}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src={logoUrl} height={64} width={64} alt="logo" />
    </div>
  );
}
