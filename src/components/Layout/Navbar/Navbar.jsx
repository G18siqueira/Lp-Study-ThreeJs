import Link from 'next/link';
import styles from './navbar.module.scss';
import Image from 'next/image';
import { navLinks } from '@/constants';

const Navbar = () => {
	const renderLinks = navLinks.map((link, i) => (
		<li key={i} className={styles['navbar-nav_link']}>
			<Link href={link.url} aria-label={`link ${link.ariaLabel}`}>
				{link.name}
			</Link>
		</li>
	));

	return (
		<section className={styles['navbar']}>
			<div className={styles['navbar-logo']}>
				<Link href="" aria-label="">
					<Image
						src="logo.svg"
						alt="DSF Bank"
						width={50}
						height={30}
					/>
				</Link>
			</div>
			<nav className={styles['navbar-nav']}>
				<ul className={styles['navbar-nav_links']}>{renderLinks}</ul>
			</nav>
		</section>
	);
};

export default Navbar;
