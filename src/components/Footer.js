import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';
const year = new Date().getFullYear();
function Footer() {
	return (
		<div className='footer'>
			<div className='socialMedia'>
				<InstagramIcon />
				<TwitterIcon />
				<FacebookIcon />
				<LinkedInIcon />
				<p> &copy; {year} Vinay Kumar</p>
			</div>
		</div>
	);
}

export default Footer;
