import Link from "next/link";
import Image from 'next/image';
import { Fragment, useEffect, useState } from "react";
import { activeSection } from "@/config/utils";
import me from '@/assets/newme.png'
const Header = ( { blog, projects } ) => {
  const [ sideBarToggle, setSideBarToggle ] = useState( false );
  useEffect( () => {
    if ( !blog || !projects ) {
      activeSection();
    }
  }, [] );
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link href="/">
              Ben Andrews
            </Link>
          </div>
          <button
            className={ `toggler-menu ${sideBarToggle ? "open" : ""}` }
            onClick={ () => setSideBarToggle( !sideBarToggle ) }
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* End Header */ }
      {/* nav bar */ }
      <header
        className={ `header-left ${sideBarToggle ? "menu-open menu-open-desk" : ""
          }` }
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <Image className='img bg-white' src={ me.src } alt='profile-pic' width={ 80 } height={ 80 } />
              <h5>Ben Andrews</h5>
            </div>
          </div>
          { blog ? <MenuWithBlog /> : <MenuWithOutBlog /> }
        </div>
        <div className="nav justify-content-center social-icons">
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="#">
            <i className="fab fa-pinterest" />
          </a>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;

const MenuWithOutBlog = () => {
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="home" className="active">
        <a className="nav-link" href="#home">
          <i className="ti-home" />
          <span>Home</span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href="#about">
          <i className="ti-id-badge" />
          <span>About Me</span>
        </a>
      </li>
      <li data-menuanchor="services">
        <a className="nav-link" href="#services">
          <i className="ti-panel" />
          <span>Services</span>
        </a>
      </li>
      <li data-menuanchor="work">
        <a className="nav-link" href="#work">
          <i className="ti-bookmark-alt" />
          <span>Projects</span>
        </a>
      </li>
      <li data-menuanchor="blog" className="blog">
        <a className="nav-link" href="#blog">
          <i className="ti-layout-media-overlay-alt-2" />
          <span>Blogs</span>
        </a>
      </li>
      <li data-menuanchor="contactus">
        <a className="nav-link" href="#contactus">
          <i className="ti-map-alt" />
          <span>Contact Me</span>
        </a>
      </li>
    </ul>
  );
};

const MenuWithBlog = () => {
  useEffect( () => {
    window.addEventListener( "scroll", () =>
      document.querySelector( ".blog" ).classList.add( "active" )
    );
  } );

  return (
    <Fragment>
      <ul className="nav nav-menu" id="pp-menu">
        <li data-menuanchor="home">
          <Link href="/#home" className="nav-link">
            <i className="ti-home" />
            <span>Home</span>
          </Link>
        </li>
        <li data-menuanchor="about">
          <Link href="/#about" className="nav-link">

            <i className="ti-id-badge" />
            <span>About Me</span>

          </Link>
        </li>
        <li data-menuanchor="services">
          <Link href="/#services" className="nav-link">

            <i className="ti-panel" />
            <span>Services</span>

          </Link>
        </li>
        <li data-menuanchor="work">
          <Link href="/#work" className="nav-link">

            <i className="ti-bookmark-alt" />
            <span>Portfolio</span>

          </Link>
        </li>
        <li data-menuanchor="blog" className="blog active">
          <Link href="/#blog" className="nav-link">

            <i className="ti-layout-media-overlay-alt-2" />
            <span>Blogs</span>

          </Link>
        </li>
        <li data-menuanchor="contactus">
          <Link href="/#contactus" className="nav-link">

            <i className="ti-map-alt" />
            <span>Contact Me</span>

          </Link>
        </li>
      </ul>
    </Fragment>
  );
};


