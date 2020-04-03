// USE FOR STYLING MAIN PAGE

import React from "react";
import Navbar from "../../components/navbar";
import Layout from "../../components/layout";

import Store from "../../components/store";

export default function MainPage() {
  return (
    <div>
    <Layout title="">
      {/* <Store /> */}
      <div>
          <div><h1>About Appquire</h1></div>
          <br/>
          <p>Welcome to Appquire, “The best place on the web to Aquire an App”! This app was designed to provide a platform  for all of the software developers out there who are trying to sell apps that they have created.  We came up with this idea because we are developers ourselves and wanted to work on something that could really be useful and meaningful to us and future aspiring devs.  Our team of developers are currently attending The Coding Boot Camp at UNC Charlotte and strive to give back to the tech community.  We hope you enjoy! -Appquire Dev Team</p>
      </div>
    </Layout>
    </div>
  );
}