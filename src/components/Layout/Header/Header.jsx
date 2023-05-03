import Navbar from '../Navbar/Navbar';
import styles from './header.module.scss';

const Header = () => {
	return (
		<header className={styles['header']}>
			<div className={`container ${styles['']}`}>
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
