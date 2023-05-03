import { testimonials } from '@/constants';
import styles from './testimonials.module.scss';

import ItemList from './ItemList';

const Testimonials = () => {
	const { title, list } = testimonials || {};
	const renderList = list.map((item, i) => (
		<ItemList
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
				<h2 className="title">{title}</h2>
				<ul className={styles['testimonials-list']}>{renderList}</ul>
			</div>
		</section>
	);
};

export default Testimonials;
