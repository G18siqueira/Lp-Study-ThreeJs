import Experience from '@/components/Home/Experience/Experience';
import Intro from '@/components/Home/Intro/Intro';
import Resources from '@/components/Home/Resources/Resources';
import Rewards from '@/components/Home/Rewards/Rewards';
import Testimonials from '@/components/Home/Testimonials/Testimonials';
import PageSeo from '@/components/Layout/PageSeo';
import Head from 'next/head';
export default function Home() {
	return (
		<PageSeo title="DSF Bank" description="">
			<Intro />
			<Experience />
			<Resources />
			<Rewards />
			<Testimonials />
		</PageSeo>
	);
}
