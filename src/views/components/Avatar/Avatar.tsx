import { AvatarContainer, AvatarLineArt, AvatarName, AvatarView } from './Avatar.style'
import { Suspense, useRef } from 'react'

import { AvatarTitle } from '../../../style/fonts.style'
import { Canvas } from '@react-three/fiber'
import GlassCard from '../GlassCard/GlassCard'
import { Model } from './Model'

const Avatar = () => {
	const bodyRef = useRef(null)

	return (
		<AvatarContainer>
			<AvatarLineArt>
				<img src='line-art.svg' width={300} alt='line-art' />
			</AvatarLineArt>
			<AvatarView ref={bodyRef}>
				<Canvas camera={{ position: [2, 0, 12.25], fov: 15 }}>
					<ambientLight intensity={1.5} />
					<ambientLight intensity={0.5} />
					<directionalLight intensity={0.7} />
					<Suspense fallback={null}>
						<Model position={[1, -1.3, 6]} />
					</Suspense>
				</Canvas>
			</AvatarView>
			{/* <img src='profile.png' width={200} alt='Profile' /> */}
			<AvatarName>
				<GlassCard>
					<img src='logo.svg' width={30} alt='logo' />
					<AvatarTitle>Adrian Pappalardo</AvatarTitle>
				</GlassCard>
			</AvatarName>
		</AvatarContainer>
	)
}

export default Avatar
