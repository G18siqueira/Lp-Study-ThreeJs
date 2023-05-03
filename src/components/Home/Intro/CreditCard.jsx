import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

const CreditCard = ({ scale }) => {
	const creditCard = useGLTF('/credit_card_white/scene.gltf');

	return (
		<primitive
			object={creditCard.scene}
			scale={scale}
			position={[0, -2, 0]}
			rotation={[0, 2.8, 0]}
		/>
	);
};

useGLTF.preload('/credit_card_white/scene.gltf');

const CreditCardComponent = () => {
	const [scale, setScale] = useState(1.5);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 1024) return setScale(2);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<Canvas>
			<Suspense fallback={null}>
				<OrbitControls enableZoom={false} />
				<ambientLight intensity={0.8} />
				<spotLight position={[-3, 2, 1]} intensity={0.5} penumbra={1} />
				<CreditCard scale={scale} />
			</Suspense>
		</Canvas>
	);
};

export default CreditCardComponent;
