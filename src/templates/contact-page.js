import React from "react";
import { graphql } from "gatsby";
import { RiSendPlane2Line } from "react-icons/ri";

import Layout from "../components/layout";
import SEO from "../components/seo";

export const pageQuery = graphql`
	query ContactQuery($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			excerpt(pruneLength: 140)
			frontmatter {
				title
			}
		}
		site {
			siteMetadata {
				title
			}
		}
	}
`;

const Contact = ({ data }) => {
	const { markdownRemark, site } = data; // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark;

	return (
		<Layout className="contact-page">
			<SEO
				title={frontmatter.title}
				description={frontmatter.title + " " + site.siteMetadata.title}
			/>
			<div className="wrapper">
				<h1>{frontmatter.title}</h1>
				<div
					className="description"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
				<form
					className="contact-form"
					action="/thanks"
					name="contact"
					method="POST"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
				>
					<input type="hidden" name="form-name" value="contact" />
					<p>
						<label>
							Name
							<input type="text" name="name" />
						</label>
					</p>
					<p>
						<label>
							Email
							<input type="email" name="email" />
						</label>
					</p>
					<p>
						<label>
							Post Title
							<input type="text" name="subject" />
						</label>
					</p>
					<p>
						<label>
							Post Description (~2 Sentences)
							<textarea name="description" rows="2"></textarea>
						</label>
					</p>
					<p>
						<label>
							Message<textarea name="message" rows="20"></textarea>
						</label>
					</p>
          <p>Please share links to images in the message field.</p>
          {/* <p>Images can be uploaded individually or together in a compressed file.</p>
					<p>
						<label>
							Image 1
							<input alt="image upload" type="file" name="image1" />
						</label>
						<label>
							Image 2<input alt="image upload" type="file" name="image2" />
						</label>
						<label>
							Image 3<input alt="image upload" type="file" name="image3" />
						</label>
						<label>
							Image 4<input alt="image upload" type="file" name="image4" />
						</label>
						<label>
							Image 5<input alt="image upload" type="file" name="image5" />
						</label>
						<label>
							Image 6<input alt="image upload" type="file" name="image6" />
						</label>
						<label>
							Image 7<input alt="image upload" type="file" name="image7" />
						</label>
						<label>
							Image 8<input alt="image upload" type="file" name="image8" />
						</label>
						<label>
							Image 9<input alt="image upload" type="file" name="image9" />
						</label>
						<label>
							Image 10<input alt="image upload" type="file" name="image10" />
						</label>
					</p> */}
					<p className="text-align-right">
						<button className="button" type="submit">
							Send Message{" "}
							<span className="icon -right">
								<RiSendPlane2Line />
							</span>
						</button>
					</p>
				</form>
			</div>
		</Layout>
	);
};

export default Contact;
