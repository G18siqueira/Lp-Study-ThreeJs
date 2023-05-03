import { rewards } from '@/constants';
import styles from './rewards.module.scss';
import EarthComponent from './Earth';
import BonecoComponent from './Boneco';

const Rewards = () => {
	const { title, list } = rewards || {};
	const renderList = list.map((item, i) => (
		<div key={i} className={styles['rewards-list_item']}>
			<h3 className="p">{item.title}</h3>
			<p className="light">{item.subtitle}</p>
		</div>
	));
	return (
		<section className={styles['rewards']}>
			<div className={`container ${styles['rewards-container']}`}>
				<div className={styles['rewards-content']}>
					<h2 className="title">{title}</h2>

					<div className={styles['rewards-list']}>{renderList}</div>
				</div>
				<div className={styles['rewards-object3d']}>
					<EarthComponent />
					{/* <BonecoComponent/> */}
				</div>
			</div>
		</section>
	);
};

export default Rewards;
