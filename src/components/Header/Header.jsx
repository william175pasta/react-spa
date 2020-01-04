import React from "react";
import { useHistory } from "react-router-dom";
import * as _ from 'underscore';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';







const a11yProps = (index) => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
};

const hideNavLink = {
	display: "none"
};

export const routesData = [
	{ label: 'Home', path: '/' },
	{ label: 'About', path: '/about' },
	{ label: 'Active', path: '/active' }
];

const Header = (props) => {
	const [value, setValue] = React.useState(0);
	const history = useHistory();
	const handleChange = (event, newValue) => {
		const route = routesData[newValue];
		setValue(newValue);
		history.push(route.path);
	};
	return (

		<div>

			{/* <AppBar position="static">
				<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
					{routesData.length > 0 &&
						_.map(routesData, (item, index) => {
							return (
								<Tab key={index} label={item.label} {...a11yProps(index)} />
							);
						})
					}
				</Tabs>
			</AppBar> */}

			<Grid item xs={12}>
				<div style={{ textAlign: 'center' }}>
					{/* <img src='./contents/images/pasta.jpeg' style={{ width: '100%' }} /> */}
				</div>

				<Paper >
					<div className='headerTabs'>

						<Tab label="Homes" />
						<Tab label="About" />
						<Tab label="Contact" />
						<Tab label="Ative" />


					</div>
				</Paper>
			</Grid>
		</div>

	);
}

export default Header;