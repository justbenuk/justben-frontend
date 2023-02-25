import React from 'react'
import Link from "next/link";

// componants
import Layout from '@/layout/Layout';
import BlogItem from '@/components/Blog/BlogItem';

//data
import { API_URL } from '@/config';
import { gql, GraphQLClient } from 'graphql-request'


export default function index( { blogs, number } ) {

  //handle the pagination logic
  let nextpage = 0
  let prevpage = 0

  if ( parseInt( number ) >= parseInt( blogs.meta.pagination.pageCount ) ) {
    nextpage = parseInt( blogs.meta.pagination.pageCount )
  } else {
    nextpage = parseInt( number ) + 1
  }
  if ( parseInt( number ) <= 1 ) {
    prevpage = 1
  } else {
    prevpage = parseInt( number ) - 1
  }
  return (
    <Layout blog title='Blogs'>
      <div className="blog-listing" id="blog">
        <div className="container">
          <div className="title text-center">
            <h3>Our Blogs</h3>
          </div>
          <div className="row">
            { blogs.data.map( ( item ) => (
              <div className="col-md-6 m-15px-tb">
                <BlogItem blog={ item } key={ item.id } />
              </div>
            ) ) }
            <div className="col-12 blog-pagination">
              { parseInt( blogs.meta.pagination.pageCount ) > 1 && (
                <ul className="pagination justify-content-center">
                  <li className={ `page-item ${blogs.meta.pagination.page == 1 ? "disabled" : ""}` }>
                    <Link
                      className="page-link"
                      href={ `/blog?page=${prevpage}` }
                    >
                      <i className="fas fa-chevron-left" />
                    </Link>
                  </li>
                  <li className='page-item' style={ { padding: '0px 10px' } }>
                    Total Pages: { blogs.meta.pagination.total }
                  </li>
                  <li className={ `page-item ${blogs.meta.pagination.page == 2 ? "disabled" : ""}` }>
                    <Link
                      className="page-link"
                      href={ `/blog?page=${nextpage}` }
                    >
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </li>
                </ul>
              ) }
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}

export async function getServerSideProps( { query: { page = 1 } } ) {
  const number = page

  const graphQLClient = new GraphQLClient( API_URL )

  const query = gql`
  {
  blogs(sort: "createdAt:desc", pagination: {page: ${page}, pageSize:4}){
    data{
      attributes{
        title
        slug
        createdAt
        content
        image{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  meta{
    pagination{
      page
      pageSize
      pageCount
      total
    }
  }
  }
  }`

  const response = await graphQLClient.request( query )

  return {
    props: { blogs: response.blogs, number: number }
  }
}
