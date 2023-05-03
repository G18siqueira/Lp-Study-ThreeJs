import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

const Earth = ({ scale }) => {
	const earth = useGLTF('/earth/scene.gltf');
	return (
		<primitive
			object={earth.scene}
			scale={scale}
			position={[0, 0, 0]}
			rotation={[-0.25, 1.02, 0]}
		/>
	);
};

useGLTF.preload('/earth/scene.gltf');

const EarthComponent = () => {
	const [scale, setScale] = useState(0.6);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 1024) return setScale(1);
			setScale(0.6);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<Canvas>
			<Suspense>
				<OrbitControls enableZoom={false} autoRotate={true} />
				<ambientLight intensity={0.05} />
				<spotLight position={[9, 6, 0]} intensity={0.5} penumbra={1} />
				<Earth scale={scale} />
			</Suspense>
		</Canvas>
	);
};

export default EarthComponent;
