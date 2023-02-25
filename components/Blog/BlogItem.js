import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function BlogItem( { blog } ) {
  return (
    <div className="blog-grid" >
      <div className="blog-img">
        <Link href={ `/blog/${blog.attributes.slug}` }>
          { blog.attributes.image.data && ( <Image src={ blog.attributes.image.data.attributes.url } width={ 1000 } height={ 300 } /> ) }
        </Link>
      </div>
      <div className="blog-info">
        <div className="meta">{ blog.attributes.createdAt }</div>
        <h6>
          <Link href={ `/blog/${blog.attributes.slug}` }>

            { blog.attributes.title }

          </Link>
        </h6>
      </div>
    </div>

  )
}
