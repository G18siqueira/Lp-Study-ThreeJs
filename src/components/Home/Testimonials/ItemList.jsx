import Image from 'next/image';
import styles from './testimonials.module.scss';

const ItemList = ({ src, alt, width, height, name, role, comment }) => {
	return (
		<li className={styles['testimonials-list_item']}>
			<div className={styles['header']}>
				<Image src={src} alt={alt} width={width} height={height} />

				<div className={styles['name']}>
					<h3 className="p">{name}</h3>
					<span className="p light">{role}</span>
				</div>
			</div>
			<div className={styles['comment']}>
				<p className="light">{comment}</p>
			</div>
		</li>
	);
};

export default ItemList;
