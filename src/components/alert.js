import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Alert = ({ title, description, image, article }) => {
	const { site } = useStaticQuery(query);

	const { alert, alertLink } = site.siteMetadata;

	return (
		<div className="alert-wrapper">
			{alert ? (
				<a href={alertLink ? alertLink : `#`} rel="noreferrer" target="_blank" className="alert-link">
					<div className="alert">{alert}</div>
				</a>
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
