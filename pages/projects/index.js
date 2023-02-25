import React from 'react'
import Link from "next/link";
// data
import { API_URL } from '@/config'
import { gql, GraphQLClient } from 'graphql-request'

// components
import Layout from '@/layout/Layout'
import PortfolioList from '@/components/Portfolio/PortfolioList';

export default function ProjectIndex( { projects, number } ) {

  //handle the pagination logic
  let nextpage = 0
  let prevpage = 0

  if ( parseInt( number ) >= parseInt( projects.meta.pagination.pageCount ) ) {
    nextpage = parseInt( projects.meta.pagination.pageCount )
  } else {
    nextpage = parseInt( number ) + 1
  }
  if ( parseInt( number ) <= 1 ) {
    prevpage = 1
  } else {
    prevpage = parseInt( number ) - 1
  }
  return (
    <Layout blog title='My Projects'>
      <div className="blog-listing" id="projects">
        <div className="container">
          <div className="title text-center">
            <h3>My projects</h3>
          </div>
          <div className="row">
            { projects.data.map( ( item ) => (
              <div className="col-md-6 m-15px-tb">
                <PortfolioList blog={ item } key={ item.id } />
              </div>
            ) ) }
            <div className="col-12 blog-pagination">
              { parseInt( projects.meta.pagination.pageCount ) > 1 && (
                <ul className="pagination justify-content-center">
                  <li className={ `page-item ${projects.meta.pagination.page == 1 ? "disabled" : ""}` }>
                    <Link
                      className="page-link"
                      href={ `/projects?page=${prevpage}` }
                    >
                      <i className="fas fa-chevron-left" />
                    </Link>
                  </li>
                  <li className='page-item' style={ { padding: '0px 10px' } }>
                    Total Pages: { projects.meta.pagination.total }
                  </li>
                  <li className={ `page-item ${projects.meta.pagination.page == 2 ? "disabled" : ""}` }>
                    <Link
                      className="page-link"
                      href={ `/projects?page=${nextpage}` }
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
    projects(sort: "createdAt:desc", pagination: {page: ${page}, pageSize:4}){
    data{
      id
      attributes{
        title
        brief
        slug
        desktop{
          data{
            attributes{
              url
            }
          }
        }
        category{
          data{
            attributes{
              slug
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
    props: { projects: response.projects, number: number }
  }
}
