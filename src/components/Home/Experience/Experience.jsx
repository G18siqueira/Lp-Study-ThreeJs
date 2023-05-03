import { experience } from '@/constants';
import styles from './experience.module.scss';

const Experience = () => {
	const renderExperience = experience.map((experience, i) => (
		<div
			key={i}
			className={`${styles['experience-content']} ${
				styles[`experience-content_${experience.color}`]
			}`}
		>
			<h2 className="title">{experience.title}</h2>
			<h3 className="p">{experience.subtitle}</h3>
		</div>
	));
	return (
		<section className={styles['experience']}>
			<div className={`container ${styles['experience-container']}`}>
				{renderExperience}
			</div>
		</section>
	);
};

export default Experience;
