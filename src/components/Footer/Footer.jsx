
import React from "react";
import { List, ListItem } from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite";
import Grid from '@material-ui/core/Grid';


const Footer = (props) => {
	return (
		<footer>
			<div className="footer" style={{}}>
				<Grid item xs={12}>
					<ul >
						<li >
							<a href="https://www.facebook.com" title="Facebook">Facebook</a>
						</li >
						<li >
							<a href="https://www.instagram.com" title="Instagram">Instagram</a>
						</li>
						<li >
							<a href="https://github.com/william175pasta" title="GitHub">GitHub</a>
						</li>
						<li >
							&copy; Copy Posted by: william.
                    </li>
					</ul>
				</Grid>
			</div >
		</footer>
	);
};

export default Footer;
