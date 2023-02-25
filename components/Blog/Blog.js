import Link from "next/link";

//components
import BlogItem from './BlogItem';

const Blog = ( { blogs } ) => {
  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Latest Blog.</h3>
        </div>
        <div className="row">
          { blogs.map( ( item ) => (
            <div className="col-md-6 m-15px-tb">
              <BlogItem blog={ item } key={ item.id } />
            </div>
          ) ) }
        </div>
        <div className="col-12 read-more-blog text-center">
          <Link href="/blog" className="px-btn px-btn-theme">
            More Blogs
          </Link>
        </div>
      </div>
    </section >
  );
};
export default Blog;
