import React from "react"
import { Link , graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import { GiDolphin } from "react-icons/gi"

import Layout from "../components/layout"
import PostCard from "../components/post-card"
import SEO from "../components/seo"

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
		) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
						title
						featuredImage {
							childImageSharp {
								fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
							}
            }
            relation
          }
        }
      }
    }
  }
`
const Pagination = (props) => (
  <div className="pagination">
    <ul>
      {!props.isFirst && (
        <li>
          <Link to={props.prevPage} rel="prev">
          <span className="icon -left"><RiArrowLeftLine/></span> Previous
          </Link>
        </li>
      )}
      {Array.from({ length: props.numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`} >
          <Link
            to={`${props.blogSlug}${i === 0 ? '' : i + 1}`}
            className={props.currentPage === i + 1 ? "is-active num" : "num"}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!props.isLast && (
        <li>
          <Link to={props.nextPage} rel="next">
            Next <span className="icon -right"><RiArrowRightLine/></span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)
class BlogIndex extends React.Component {
  render() {
    
    const { data } = this.props
    const { currentPage, numPages } = this.props.pageContext
    const blogSlug = '/posts/' 
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? blogSlug : blogSlug + (currentPage - 1).toString()
    const nextPage = blogSlug + (currentPage + 1).toString()

    const posts = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge =>
        <PostCard key={edge.node.id} data={edge.node} />
      )
    let props = {
      isFirst,
      prevPage,
      numPages,
      blogSlug,
      currentPage,
      isLast,
      nextPage
    }
    
    return (
      <Layout className="blog-page">
        <SEO
          title={"Posts — Page " + currentPage + " of " + numPages}
          description={"Ella's Daydream posts page " + currentPage + " of " + numPages }
        />
        <h1><GiDolphin/> Posts</h1>
        <div className="grids col-1 sm-2 lg-3">
          {posts}
        </div>
        <Pagination {...props} />
      </Layout>
    )
  }
}

export default BlogIndex