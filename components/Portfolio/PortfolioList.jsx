import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function PortfolioList( { blog } ) {

  return (
    <div className="blog-grid" >
      <div className="blog-img">
        <Link href={ `/blog/${blog.attributes.slug}` }>
          { blog.attributes.desktop.data && ( <Image src={ blog.attributes.desktop.data.attributes.url } width={ 1000 } height={ 300 } /> ) }
        </Link>
      </div>
      <div className="blog-info">
        <div className="meta">{ blog.attributes.createdAt }</div>
        <h6>
          <Link href={ `/blog/${blog.attributes.slug}` }>

            { blog.attributes.title }

          </Link>
        </h6>
        <p>{ blog.attributes.brief }</p>
      </div>
    </div>

  )
}