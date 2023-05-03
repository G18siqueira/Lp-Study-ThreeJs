import { intro } from '@/constants';
import styles from './intro.module.scss';
import CreditCardComponent from './CreditCard';

const Intro = () => {
	const { title, subtitle, caption } = intro || {};

	return (
		<section className={styles['intro']}>
			<div className={`container ${styles['intro-container']}`}>
				<div className={styles['intro-content']}>
					<span>{caption}</span>
					<h1>{title}</h1>
					<p>{subtitle}</p>
				</div>
				<div className={styles['intro-object3d']}>
					<CreditCardComponent />
				</div>
			</div>
		</section>
	);
};

export default Intro;
