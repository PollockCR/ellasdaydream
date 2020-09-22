import React from "react";
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
	<footer className="site-footer">
		<div className="container">
			<p>
				"To know Ella was to love her." Made with{" "}
				<span className="icon -love">
					<RiHeart2Line />
				</span>{" "}
				Ella's friends and family. Website by{" "}
				<a
					href="https://catherinepollock.com/"
					target="_blank"
					rel="noreferrer"
				>
					Catherine Pollock
				</a>
				.
			</p>
			<p>
				<a
					href="https://www.instagram.com/ellasdaydream/"
					target="_blank"
					rel="noreferrer"
				>
					Ella's Daydream Instagram
				</a>{" "}
				|{" "}
				<a
					href="https://www.instagram.com/_ellayay/"
					target="_blank"
					rel="noreferrer"
				>
					Ella's Personal Instagram
				</a>
			</p>
		</div>
    <div class="fb-comments" data-href="https://ellasdaydream.com" data-numposts="5" data-width=""></div>
		<div id="fb-root"></div>
		<script
			async
			defer
			crossorigin="anonymous"
			src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0"
			nonce="GdVocdDv"
		></script>
	</footer>
);

export default Footer;
