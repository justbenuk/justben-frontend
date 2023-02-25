import React from 'react'
import Link from 'next/link'

export default function PortfolioItem( { project } ) {
  return (
    <div className="grid-item">
      <div className="portfolio-box-01">
        <div className="portfolio-info">
          <h5 className="white-color font-weight-bold">{ project.title }</h5>
          <span>{ project.brief }</span>
        </div>
        <div className="portfolio-img">
          { project.desktop.data && (
            <img src={ project.desktop.data.attributes.url } title="" alt="" />
          ) }
          <div className="portfolio-icon">
            <Link
              href={ `/projects/${project.slug}` }
              className="gallery-link"
            >
              <span className="ti-plus" />
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}
