import { Component } from "react";
import Logo from "../components/Icons/Logo";
import Layout from "../components/layout/layouts/Layout";
export default class Home extends Component {
  render() {
    return (
      <Layout>
        <article
          style={{
            display: "FLex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 style={{ margin: "auto" }}>I'm Eyþór Freyr Óskarsson</h1>
          <Logo width={400} height={400} style={{ margin: "auto" }} />
          <h1 style={{ margin: "auto" }}>Welcome to my portfolio</h1>
        </article>
      </Layout>
    );
  }
}
