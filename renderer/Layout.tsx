export { Layout };

import React from "react";
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
  const pagesNoSidebar = ["inicio"];
  let pageTitle: string;
  pageContext.data?.title !== undefined
    ? (pageTitle = pageContext.data?.title)
    : (pageTitle = "");

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Frame>
          {!pagesNoSidebar.includes(pageTitle) && (
            <Sidebar>
              <Link href="/libros">Libros</Link>
              <Link href="/revistas">Revistas</Link>
              <Link href="/videos-educativos">Videos</Link>
            </Sidebar>
          )}
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
