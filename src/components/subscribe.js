import React from "react";
import { RiSendPlane2Line } from "react-icons/ri";

const Subscribe = () => (
	<section className="footer-content mb-5p">
    <h2>Email List</h2>
		<form
			className="contact-form"
			action="/success"
			name="subscribe"
			method="POST"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
		>
			<input type="hidden" name="form-name" value="subscribe" />
			<p>Receive emails about upcoming events, art, and more.</p>
			<p>
				<input type="email" name="email" aria-label="email" placeholder="Email"/>
			</p>
			<p className="text-align-right">
				<button className="button" type="submit">
					Subscribe{" "}
					<span className="icon -right">
						<RiSendPlane2Line />
					</span>
				</button>
			</p>
		</form>
	</section>
);

export default Subscribe;
