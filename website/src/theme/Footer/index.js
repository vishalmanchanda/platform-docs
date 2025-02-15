import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

function Footer() {
	const { footer } = useThemeConfig();

	return (
		<footer className="footer">
			<div className="container container--fluid">
				<div className="footer__content">
					<div className="footer__logo-section">
						<img
							src={useBaseUrl('/img/logo.svg')}
							alt="Logo"
							// className="footer__logo"
							width={130}
							height={50}
						/>
					</div>
					<div className="footer__text">
						Made with <span className="footer__heart">❤</span> by Platform team.
					</div>
					<div className="footer__social-links">
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
							<i className="fab fa-facebook"></i>
						</a>
						<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="https://chrome.google.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
							<i className="fab fa-chrome"></i>
						</a>
						<a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
							<i className="fab fa-dribbble"></i>
						</a>
						<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
							<i className="fab fa-linkedin"></i>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default React.memo(Footer);
