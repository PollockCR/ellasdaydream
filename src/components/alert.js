import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const Alert = ({ title, description, image, article }) => {
	const { site } = useStaticQuery(query);

	const { alert, alertLink } = site.siteMetadata;

	return (
		<div className="alert-wrapper">
			{alert ? (
				<Link to={alertLink ? alertLink : `#`} className="alert-link">
					<div className="alert">{alert}</div>
				</Link>
			) : null}
		</div>
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
