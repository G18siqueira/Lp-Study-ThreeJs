import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

const Boneco = ({ scale }) => {
	const boneco = useGLTF('/boneco/scene.gltf');
	return (
		<primitive
			object={boneco.scene}
			scale={scale}
			PerspectiveCamera={[3, 1, 1000]}
			position={[0, 0, 0]}
			rotation={[0, 0, 0]}
		/>
	);
};

useGLTF.preload('/boneco/scene.gltf');

const BonecoComponent = () => {
	const [scale, setScale] = useState(3);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 1024) return setScale(1);
			setScale(3);
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
				<Boneco scale={scale} />
			</Suspense>
		</Canvas>
	);
};

export default BonecoComponent;
