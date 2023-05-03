import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './testimonials.module.scss';

const ItemList = ({
	src,
	alt,
	width,
	height,
	name,
	role,
	comment,
	...rest
}) => {
	return (
		<motion.li {...rest} className={styles['testimonials-list_item']}>
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
		</motion.li>
	);
};

export default ItemList;
