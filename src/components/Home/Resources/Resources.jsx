import { resources } from '@/constants';
import { motion } from 'framer-motion';
import styles from './resources.module.scss';

const Resources = () => {
	const { title, subtitle, list } = resources || {};

	const motionProps = {
		initial: { opacity: 0, y: 100 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true },
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: 0.8,
			delay: 0.15,
		},
	};

	const renderList = list.map((list, i) => (
		<li key={i} className={styles['resources-list_item']}>
			<div className={styles['icon']}>{list.icon}</div>
			<h3 className="p">{list.title}</h3>
			<h4 className="p light">{list.subtitle}</h4>
		</li>
	));
	return (
		<motion.section
			{...motionProps}
			id="resources"
			className={styles['resources']}
		>
			<div className={`container ${styles['resources-container']}`}>
				<div className={styles['resources-content']}>
					<h2 className="title">{title}</h2>
					<p className="light">{subtitle}</p>
				</div>
				<ul className={styles['resources-list']}>{renderList}</ul>
			</div>
		</motion.section>
	);
};

export default Resources;
