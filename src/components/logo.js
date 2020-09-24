import React from "react";
import { Link } from "gatsby";

const Logo = (props) => (
	<div className="site-logo font-secondary">
		<Link to="/" className="site-logo-link">
			<span className="site-logo-overlay" aria-hidden>{props.title}</span>{props.title}
		</Link>
	</div>
);

export default Logo;
