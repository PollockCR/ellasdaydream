import React from "react";
import { Link } from "gatsby";
import { RiArrowLeftSLine, RiBugLine } from "react-icons/ri";
import { AiOutlineQuestion } from "react-icons/ai";
import { BiHomeHeart } from "react-icons/bi";

import SEO from "../components/seo";
import Layout from "../components/layout";

const NotFound = () => (
	<Layout className="not-found-page">
		<SEO title="Page not found" />
		<div
			className="wrapper"
			style={{
				textAlign: "center",
			}}
		>
			<header>
				<AiOutlineQuestion
					style={{
						fontSize: "128px",
						color: "var(--primary-color)",
					}}
				/>
				<h1>Oops - we did not expect that to happen</h1>
				<p>You have wondered into the unknown.</p>
			</header>
			<p>
				<Link to="/" className="button mr-3 mb-3">
					<RiArrowLeftSLine className="icon -left" />
					<BiHomeHeart className="icon -left" /> Back to Homepage
				</Link>
				<Link to="/share" className="button -outline">
					<RiBugLine className="icon -left" /> Report this
				</Link>
			</p>
		</div>
	</Layout>
);

export default NotFound;
