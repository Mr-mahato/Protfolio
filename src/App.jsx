/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */

// This is an object that i have made
const siteProps = {
  name: "Chandan Mahato",
  title: "Full Stack Developer & Programmer",
  email: "cmhandan@gmail.com.com",
  gitHub: "Chandan-Kumar-Mahato",
  instagram: "cha_ndu4404",
  linkedIn: "chandan-mahato%F0%9F%92%AF-aa76b7165",
  medium: "@cmhandan",
  twitter: "ChandanMahato10",
  youTube: "@growmoreyt4192",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
