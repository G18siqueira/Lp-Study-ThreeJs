import { rewards } from '@/constants';
import { motion } from 'framer-motion';
import EarthComponent from './Earth';
import BonecoComponent from './Boneco';
import styles from './rewards.module.scss';

const Rewards = () => {
	const { title, list } = rewards || {};

	const motionProps = (initialX, finalX) => ({
		initial: { opacity: 0, x: initialX },
		whileInView: { opacity: 1, x: finalX },
		viewport: { once: true },
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: 1,
			delay: 0.2,
		},
	});

	const renderList = list.map((item, i) => (
		<motion.div
			{...motionProps(-100, 0)}
			key={i}
			className={styles['rewards-list_item']}
		>
			<h3 className="p">{item.title}</h3>
			<p className="light">{item.subtitle}</p>
		</motion.div>
	));
	return (
		<section className={styles['rewards']}>
			<div className={`container ${styles['rewards-container']}`}>
				<div className={styles['rewards-content']}>
					<motion.h2 {...motionProps(-100, 0)} className="title">
						{title}
					</motion.h2>

					<div className={styles['rewards-list']}>{renderList}</div>
				</div>
				<motion.div
					{...motionProps(100, 0)}
					className={styles['rewards-object3d']}
				>
					<EarthComponent />
					{/* <BonecoComponent/> */}
				</motion.div>
			</div>
		</section>
	);
};

export default Rewards;
