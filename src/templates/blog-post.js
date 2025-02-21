import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import {
	RiArrowRightLine,
	RiArrowLeftLine,
	RiArrowRightSLine,
} from "react-icons/ri";
import { GiJellyfish } from "react-icons/gi";

import Layout from "../components/layout";
import BlogListHome from "../components/blog-list-home";
import SEO from "../components/seo";

const Pagination = (props) => (
	<div>
		<div className="pagination -post">
			<ul>
				{props.previous && props.previous.frontmatter.template === "blog-post" && (
					<li>
						<Link to={props.previous.frontmatter.slug} rel="prev">
							<p>
								<span className="icon -left">
									<RiArrowLeftLine />
								</span>{" "}
								Previous
							</p>
							<span className="page-title">
								{props.previous.frontmatter.title}
							</span>
						</Link>
					</li>
				)}
				{props.next && props.next.frontmatter.template === "blog-post" && (
					<li>
						<Link to={props.next.frontmatter.slug} rel="next">
							<p>
								Next{" "}
								<span className="icon -right">
									<RiArrowRightLine />
								</span>
							</p>
							<span className="page-title">{props.next.frontmatter.title}</span>
						</Link>
					</li>
				)}
			</ul>
		</div>
		<BlogListHome />
	</div>
);

const Post = ({ data, pageContext }) => {
	const { markdownRemark } = data; // data.markdownRemark holds your post data
	const { frontmatter, html, excerpt } = markdownRemark;
	const Image = frontmatter.featuredImage
		? frontmatter.featuredImage.childImageSharp.fluid
		: "";
	const { previous, next } = pageContext;

	let props = {
		previous,
		next,
	};

	return (
		<Layout className="page">
			<SEO
				title={frontmatter.title}
				description={
					frontmatter.description ? frontmatter.description : excerpt
				}
				image={Image}
				article={true}
			/>
			<article className="blog-post">
				<header className="featured-banner">
					<section className="article-header">
						<h1>
							{frontmatter.title} <GiJellyfish />
						</h1>
						<p>{frontmatter.relation}</p>
					</section>

					{Image ? (
						<Img
							fluid={Image}
							objectFit="contain"
							objectPosition="50% 50%"
							alt={frontmatter.featuredImageAlt}
							className="featured-image"
							showCaptions={true}
							style={{ maxHeight: "100vh", objectFit: "contain" }}
						/>
					) : (
						""
					)}
				</header>

				<div
					className="blog-post-content"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
				{frontmatter.cta &&
				frontmatter.cta.ctaLink &&
				frontmatter.cta.ctaText ? (
					<section className="blog-post-content text-align-center">
						<a
							href={frontmatter.cta.ctaLink}
							target="_blank"
							rel="noreferrer"
							className="button"
						>
							{frontmatter.cta.ctaText}
							<span className="icon -right">
								<RiArrowRightSLine />
							</span>
						</a>
					</section>
				) : null}
			</article>
			{(previous || next) && <Pagination {...props} />}
		</Layout>
	);
};

export default Post;

export const pageQuery = graphql`
	query BlogPostQuery($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			excerpt(pruneLength: 148)
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
				description
				featuredImage {
					childImageSharp {
						fluid(
							maxWidth: 1980
							quality: 80
							srcSetBreakpoints: [350, 700, 1050, 1400]
						) {
							...GatsbyImageSharpFluid
							...GatsbyImageSharpFluidLimitPresentationSize
						}
						resize(fit:CONTAIN) {
							src
						}
					}
				}
				featuredImageAlt
				relation
				cta {
					ctaText
					ctaLink
				}
			}
		}
	}
`;
