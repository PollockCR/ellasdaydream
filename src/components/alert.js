import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const Alert = ({ title, description, image, article }) => {
	const { site } = useStaticQuery(query);

	const { alert, alertLink } = site.siteMetadata;

	return (
		<Link to={alertLink} className="alert-wrapper">
			<div className="alert">{alert}</div>
		</Link>
	);
};

export default Alert;

const query = graphql`
	query Alert {
		site {
			siteMetadata {
				alert
				alertLink
			}
		}
	}
`;
