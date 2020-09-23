import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Logo from "./logo";
import Navigation from "./navigation";

import "../assets/scss/style.scss";
import Footer from "./footer";

const query = graphql`
	query LayoutQuery {
		site {
			siteMetadata {
				siteTitle: title
			}
		}
	}
`;

const Layout = ({ children, className }) => {
	const { site } = useStaticQuery(query);
	const { siteTitle } = site.siteMetadata;

	return (
		<div className="primary-container">
			<Header>
				<Logo title={siteTitle} />
				<Navigation />
			</Header>
			<div className="main-wrapper">
				<main className={"container " + className}>{children}</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
