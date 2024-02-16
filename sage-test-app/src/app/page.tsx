import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { AppProps } from "next/app";
import { FC, Fragment } from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { NextPage } from "next/types";

export type NextPageWithLayout<P = any> = NextPage<P> & {
  getLayout?: FC<any>;
};

export default function Home() {
  return (
    <>
      <Header />
      <Features />
      <Footer />
    </>
  );
}
