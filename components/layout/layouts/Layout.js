import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Logo from "../../Icons/Logo";
import Navigator from "../Header/Navigator";
import ThemeButton from '../../ThemeButton'

const Main = styled.main`
  margin: 40px auto;
  width: 50%;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  padding: 0 10px;
  margin: 0px auto;
  border-bottom: 1px solid black;
	max-width: 1920px;
	background-color: ${props => props.theme.header.bg};
	color: ${props => props.theme.header.text};
`;

const Layout = ({ children }) => {
	return (
		<>
			<Header>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						padding: "10px 0px",
					}}
				>
					<Logo height="100%" width="auto" />
					<span style={{ marginLeft: "15px", fontSize: "18px" }}>
						Eybbus.me
          </span>
				</div>
				<Navigator>
					<ul>
						<li>
							<Link href="/">Resume</Link>
						</li>
						<li>
							<Link href="/blog">Blog</Link>
						</li>
						<li>
							<ThemeButton />
						</li>
					</ul>
				</Navigator>
			</Header>
			<Main>{children}</Main>
		</>
	);
};

export default Layout;
