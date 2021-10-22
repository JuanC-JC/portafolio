import React from "react";
import "../styles/general.scss";
import { Layout, Hero, About, Jobs, Projects, Contact } from "@components";

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Hero />
      <About />
      <Jobs />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
