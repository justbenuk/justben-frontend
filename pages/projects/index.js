import React, { useState, useEffect } from 'react'

// data
import { API_URL } from '@/config'
import { gql, GraphQLClient } from 'graphql-request'

// components
import Layout from '@/layout/Layout'

export default function ProjectIndex( { projects } ) {

  return (
    <Layout title='My Projects'>
      <div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          { projects.map( ( project, idx ) => (
            <div key={ idx } project={ project } />
          ) ) }
        </div>
      </div >
    </Layout >
  )
}

export async function getServerSideProps( { query: { page = 1 } } ) {

  // set the page number 
  const number = parseFloat( page )

  console.log( number )
  //connection
  const graphqlClient = new GraphQLClient( API_URL )

  //build the query
  const query = gql`
  {
     projects(sort: "createdAt:desc"){
    data{
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
  }
  }`

  //dispatch the query
  const response = await graphqlClient.request( query )

  return {
    props: { projects: response.projects.data }
  }
}