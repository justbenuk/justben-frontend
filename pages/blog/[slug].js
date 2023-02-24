import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// data
import { API_URL } from '@/config'
import { gql, GraphQLClient } from 'graphql-request'

// components
import Layout from '@/layout/Layout'

export default function BlogSingle( { blog } ) {

  return (
    <Layout blog title={ blog.title }>
      <div className="single-blog">
        <div className="container">
          { blog.image.data && ( <Image className="blog-feature-img" src={ blog.image.data.attributes.url } alt='project image' width={ 1000 } height={ 500 } /> ) }
          <div >
            <img src="static/img/single-blog.jpg" title="" alt="" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="article">
                <div className="article-title">
                  <h2>{ blog.title }</h2>
                </div>
                <div className='article-content' dangerouslySetInnerHTML={ { __html: blog.content } } />
              </article>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}

export async function getServerSideProps( params ) {

  const connect = new GraphQLClient( API_URL )

  const single = JSON.stringify( params.query.slug )

  //set up the query
  const query = gql`{
            blogs(filters: {slug: {eq:${single}}}){
                data{
                    attributes{
                        title
                        image{
                          data{
                            attributes{
                              url
                            }
                          }
                        }
                        content
                    }
                }
            }
    }`
  const response = await connect.request( query )

  return {
    props: { blog: response.blogs.data[ 0 ].attributes }
  }
}