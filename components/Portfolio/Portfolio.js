import Isotope from "isotope-layout";
import { useEffect, useRef } from "react";
import Link from 'next/link';

// components
import PortfolioItem from './PortfolioItem';

const Portfolio = ( { projects } ) => {
  // Isotope
  const isotope = useRef();
  useEffect( () => {
    isotope.current = new Isotope( ".portfolio-content", {
      itemSelector: ".grid-item",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    } );
    return () => isotope.current.destroy();
  } );

  return (
    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>My Projects.</h3>
        </div>
        {/* Portfolio Filter */ }
        <div className="portfolio-content grid-gutter-md grid-col-3 lightbox-gallery">
          { projects.map( ( item ) => (
            <PortfolioItem project={ item.attributes } key={ item.id } />
          ) ) }
        </div>
        <div className="col-12 read-more-blog text-center">
          <Link href="/projects" className="px-btn px-btn-theme">
            More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
