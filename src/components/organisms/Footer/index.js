import React from 'react';

import { FaFacebookSquare, FaLine, FaTwitterSquare, FaTelegram } from 'react-icons/fa';

import GoogleMapReact from 'google-map-react';
import styles from './index.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Footer = () => {
	const defaultProps = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 11,
	};

	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<div>
					<div>
						<h5>Follow-US</h5>
						<FaFacebookSquare className={styles.mediaIcon} />
						<FaLine className={styles.mediaIcon} />
						<FaTwitterSquare className={styles.mediaIcon} />
						<FaTelegram className={styles.mediaIcon} />
					</div>
					<div>
						<h5>Our-Sevice</h5>
						<p>
							<a href="https://www.surveycake.com/s/0m2x0">Payment-Method</a>
						</p>
						<p>
							<a href="https://www.surveycake.com/s/0m2x0">Shipping-information</a>
						</p>
						<p>
							<a href="https://www.surveycake.com/s/pwvG0">Frack-Oder</a>
						</p>
					</div>
					<div>
						<h5>Contact-Us</h5>
						<p>E-mail: oderspace@shop.com</p>
						<p>Phone: (02)2652-1100</p>
					</div>
				</div>
				<div>
					<div>
						<h5>Infromation</h5>
						<p>Adress:Taipei ChunShao Fushin BaDa Road 9th</p>
						<div style={{ height: '300px', width: '300px' }}>
							<GoogleMapReact
								bootstrapURLKeys={{ key: '' }}
								defaultCenter={defaultProps.center}
								defaultZoom={defaultProps.zoom}
							>
								<AnyReactComponent lat={59.955413} lng={130.337844} text="My Marker" />
							</GoogleMapReact>
						</div>
						<p>Open time : Mon to Sun 9:00am~22:00pm</p>
					</div>
				</div>
			</div>
			<div className={styles.copyright}>
				<p>Intense © 2018 . Privacy Policy All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
