import dynamic from "next/dynamic";
import Link from 'next/link';
// components
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import TypingAnimation from "@/components/TypingAnimation";
import Layout from "@/layout/Layout";

// assets
import me from '@/assets/newme.png'

//data
import { API_URL } from '@/config';
import { gql, GraphQLClient } from 'graphql-request'

const Portfolio = dynamic( () => import( "@/components/Portfolio" ), {
  ssr: false,
} );
const Index = ( { projects, blogs } ) => {
  return (
    <Layout title='Ben Andrews'>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Ben Andrews</h1>
                  <p className="lead">
                    I Build <TypingAnimation />
                  </p>
                  <p className="desc">
                    I build Web Applications for small to medium businesses, Charities and Non-Profits, I specialise in creating stylish, modern websites, web
                    services and online stores.
                  </p>
                  <div className="btn-bar">
                    <Link className="px-btn px-btn-theme" href="#work">
                      Projects
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">

                <div >
                  <img src={ me.src } title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */ }
      {/* about us */ }
      <About />
      {/* End about us */ }
      {/* Services */ }
      <Services />
      {/* End Services */ }
      {/* Portfolio */ }
      <Portfolio projects={ projects } />
      {/* End Portfolio */ }
      {/* Blog */ }
      <Blog blogs={ blogs } />
      {/* End Blog */ }
      {/* Contact us */ }
      <Contact />
    </Layout>
  );
};
export default Index;

export async function getServerSideProps() {
  const graphQLClient = new GraphQLClient( API_URL )

  const query = gql`
  {
      projects(sort: "createdAt:desc", pagination: {pageSize: 12}){
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
  blogs(sort: "createdAt:desc", pagination: {pageSize: 4}){
    data{
      id
      attributes{
        title
        content
        slug
        createdAt
        image{
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

  const response = await graphQLClient.request( query )

  return {
    props: { projects: response.projects.data, blogs: response.blogs.data }
  }
}
