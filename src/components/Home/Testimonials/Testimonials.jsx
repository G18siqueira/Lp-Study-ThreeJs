import { testimonials } from '@/constants';
import { motion } from 'framer-motion';
import ItemList from './ItemList';

import styles from './testimonials.module.scss';

const Testimonials = () => {
	const { title, list } = testimonials || {};

	const motionProps = {
		offScreen: {
			opacity: 0,
			y: 50,
		},
		onScreen: (i = 2) => ({
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				bounce: 0.4,
				duration: 2,
				delay: 0.2 * i,
			},
		}),
	};

	const renderList = list.map((item, i) => (
		<ItemList
			variants={motionProps}
			viewport={{ once: true }}
			initial={'offScreen'}
			whileInView={'onScreen'}
			custom={i}
			key={i}
			src={item.avatar}
			alt={item.name}
			width={74}
			height={74}
			name={item.name}
			role={item.role}
			comment={item.comment}
		/>
	));
	return (
		<section id="testimonials" className={styles['testimonials']}>
			<div className={`container ${styles['testimonials-container']}`}>
				<motion.h2
					variants={motionProps}
					viewport={{ once: true }}
					initial={'offScreen'}
					whileInView={'onScreen'}
					className="title"
				>
					{title}
				</motion.h2>
				<ul className={styles['testimonials-list']}>{renderList}</ul>
			</div>
		</section>
	);
};

export default Testimonials;
