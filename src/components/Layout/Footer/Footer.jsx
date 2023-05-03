import { footer } from '@/constants';
import styles from './footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	const { description, links, contact, copy, social } = footer || {};

	const renderLinks = links.map((link, i) => (
		<li key={i} className="p light">
			<Link href={link.url} aria-label={link.name}>
				{link.name}
			</Link>
		</li>
	));

	const renderContacts = contact.map((contact, i) => (
		<li key={i} className="p light">
			{contact}
		</li>
	));

	const renderSocial = social.map((social, i) => (
		<li key={i} className="p light">
			<Link href={social.url} aria-label="link social">
				{social.component}
			</Link>
		</li>
	));

	return (
		<footer className={styles['footer']}>
			<div className={`container ${styles['footer-container']}`}>
				<div className={styles['footer-content1']}>
					<div className={styles['column1']}>
						<Link href="/">
							<Image
								src="/logo.svg"
								alt="dsf bank"
								width={50}
								height={30}
							/>
						</Link>

						<p className="light">{description}</p>
					</div>
					<div className={styles['column2']}>
						<h2 className="p">Links úteis</h2>
						<ul>{renderLinks}</ul>
					</div>
					<div className={styles['column3']}>
						<h2 className="p">Contato</h2>
						<ul>{renderContacts}</ul>
					</div>
				</div>
				<div className={styles['footer-content2']}>
					<span className="p light">{copy}</span>
					<ul>{renderSocial}</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
