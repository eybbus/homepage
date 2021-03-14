import { Component } from "react";
import Logo from "../components/Icons/Logo";
import Layout from "../components/layout/layouts/Layout";
import Head from 'next/head'

export default class Home extends Component {
	render() {
		return (
			<Layout>
				<Head>
					<title>Eythors resume</title>
				</Head>
				<article
					style={{
						display: "FLex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<h1 style={{ margin: "auto" }}>I'm Eyþór Freyr Óskarsson</h1>
					<Logo width={300} height={300} style={{ margin: "60px auto" }} />
					<h1 style={{ margin: "auto" }}>Welcome to my portfolio</h1>
				</article>
			</Layout>
		);
	}
}
