import React from "react";
// import Favorite from "@material-ui/icons/Favorite";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import footer2 from '../../contents/imagess/footer/footer-background.png'

const useStyles = makeStyles(theme => ({
	root: {

		padding: '30px',
		textAlign: 'center',
		fontSize: '16px',
		padding: '20px'
	},
	list: {
		listStyleType: "none",
		display: 'inline-block',
		padding: '0 50px',

	},
	aStyle: {

		textDecoration: 'none'
	}



}));

const Footer = (props) => {
	const classes = useStyles();
	return (
		<footer>
			<div className={classes.root}
				style={{ height: 150, backgroundImage: `url(${footer2})` }}>
				<Grid item xs={12} style={{ textAlign: 'center' }} >
					<ul style={{ listStyleType: 'none' }}>
						<li className={classes.list} >
							<a href="https://www.facebook.com" target="_blank" title="Facebook" style={{ textDecoration: 'none' }}>Facebook</a>
						</li >
						<li className={classes.list} >
							<a href="https://www.instagram.com" target="_blank" title="Instagram" style={{ textDecoration: 'none' }}>Instagram</a>
						</li>
						<li className={classes.list} >
							<a href="https://github.com/william175pasta" target="_blank" title="GitHub" style={{ textDecoration: 'none' }}>GitHub</a>
						</li>
						<li >
							&copy; Copy Posted by: william.
						</li>
					</ul>
				</Grid>
			</div >
		</footer >
	);
};

export default Footer;
