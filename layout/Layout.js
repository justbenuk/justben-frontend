import { Fragment } from "react";
import Head from 'next/head';
import ImageView from "../components/Utilis/ImageView";
import BackBtn from "./BackBtn";
import DayNightMood from "./DayNightMood";
import Header from "./Header";
const Layout = ( { children, blog, projects, title, description } ) => {
  return (
    <Fragment>
      <Head>
        <title>{ title ? title + ' - Freelance Developer' : 'Ben Andrews | Freelance Developer' }</title>
        <meta name="description" content={ description ? description : 'Freelance Web Developer, Based In Tamworth' } />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ImageView />
      {/* page loading */ }
      {/* End */ }
      {/* Header Start */ }
      <Header blog={ blog } projects={ projects } />
      {/* Main Start */ }
      <main className="main-left pp-main-section">{ children }</main>
      <DayNightMood />
      { blog && <BackBtn /> }
    </Fragment>
  );
};
export default Layout;
