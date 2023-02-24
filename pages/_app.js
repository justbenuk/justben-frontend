import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "@/layout/PreLoader";
import "../styles/glitch.css";
import "../styles/globals.css";
function MyApp( { Component, pageProps } ) {
  const [ load, setLoad ] = useState( true );
  useEffect( () => {
    setTimeout( () => {
      setLoad( false );
    }, 1000 );
  }, [] );

  return (
    <Fragment>
      { load && <PreLoader /> }
      <Component { ...pageProps } />
    </Fragment>
  );
}

export default MyApp;
