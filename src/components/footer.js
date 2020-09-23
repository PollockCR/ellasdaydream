import React from "react";
import { Link } from "gatsby";
import { RiHeart2Line } from "react-icons/ri";
import { FaCat, FaDog } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => (
	<footer className="site-footer">
		<div className="mb-5p position-relative">
			<div
				class="fb-comments"
				data-href="https://ellasdaydream.com"
				data-numposts="5"
				data-width=""
			></div>
		</div>
		<div className="container">
			<div className="catdog">
				<a
					href="https://catherinepollock.com/"
					target="_blank"
					rel="noreferrer"
					className="catdog-link"
					title="catdog"
				>
					<FaCat />
					<FaDog />
				</a>
			</div>
			<div className="footer-content position-relative">
				<p>
					{" "}
					<span className="icon -love">
						<RiHeart2Line />
					</span>{" "}
					"To know Ella was to love her."{" "}
					<span className="icon -love">
						<RiHeart2Line />
					</span>
				</p>
				<p>
					<a
						href="https://www.instagram.com/ellasdaydream/"
						target="_blank"
						rel="noreferrer"
					>
						<IoLogoInstagram />
						@ellasdaydream
					</a>{" "}
					|{" "}
					<a
						href="https://www.instagram.com/_ellayay/"
						target="_blank"
						rel="noreferrer"
					>
						<IoLogoInstagram />
						@_ellayay
					</a>
				</p>
				<p>
					<Link to="/contact">Create Post</Link>
				</p>
			</div>
		</div>
	</footer>
);

export default Footer;
