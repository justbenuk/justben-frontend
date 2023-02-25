import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// data
import { API_URL } from '@/config/index'
import { GraphQLClient, gql } from 'graphql-request'

// comonents
import Layout from '@/layout/Layout'


export default function ProjectSingle( { project } ) {
    return (
        <Layout blog title={ project.title }>
            <div className="single-blog">
                <div className="container">
                    { project.desktop.data && ( <Image className="blog-feature-img" src={ project.desktop.data.attributes.url } alt='project image' width={ 1000 } height={ 500 } /> ) }
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <article className="article">
                                <div className="article-title">
                                    <h2>{ project.title }</h2>
                                </div>
                                <div className='article-content' dangerouslySetInnerHTML={ { __html: project.content } } />
                            </article>
                        </div>

                    </div>

                </div>
                <div style={ { display: 'flex', flexDirection: 'row', gap: 10, alignContent: 'center', justifyContent: 'center', margin: '40px 0px' } }>
                    { project.github && (
                        <Link className="px-btn px-btn-theme" href={ project.github } target="_blank">
                            <span>Github</span>
                        </Link>
                    ) }
                    { project.preview && (
                        <Link className="px-btn px-btn-theme" href={ project.preview } target="_blank">
                            <span>Live</span>
                        </Link>
                    ) }
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
            projects(filters: {slug: {eq:${single}}}){
                data{
                    attributes{
                        title
                        brief
                        content
                        github
                        preview
                        desktop{
                            data{
                                attributes{
                                    url
                                }
                            }
                        }
                    }
                }
            }
    }`
    const response = await connect.request( query )

    return {
        props: { project: response.projects.data[ 0 ].attributes }
    }
}
