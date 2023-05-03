import CreditCardComponent from './CreditCard';
import { intro } from '@/constants';
import { motion } from 'framer-motion';
import styles from './intro.module.scss';

const Intro = () => {
	const { title, subtitle, caption } = intro || {};

	const motionProps = (initialX, finalX) => ({
		initial: { opacity: 0, x: initialX },
		whileInView: { opacity: 1, x: finalX },
		viewport: { once: true },
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: 1,
			delay: 0.15,
		},
	});

	return (
		<section className={styles['intro']}>
			<div className={`container ${styles['intro-container']}`}>
				<motion.div
					{...motionProps(-100, 0)}
					className={styles['intro-content']}
				>
					<span>{caption}</span>
					<h1>{title}</h1>
					<p>{subtitle}</p>
				</motion.div>
				<motion.div
					{...motionProps(100, 0)}
					className={styles['intro-object3d']}
				>
					<CreditCardComponent />
				</motion.div>
			</div>
		</section>
	);
};

export default Intro;
