import Link from "next/link";
import React from "react";
import Logo from "../../Icons/Logo";
import Header from "../Header/Header";
import Navigator from "../Header/Navigator";

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Navigator>
          <Link href="/">
            <Logo height="100%" width="auto" />
          </Link>
          <ul>
            <li>
              <Link href="/">Resume</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </Navigator>
      </Header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
