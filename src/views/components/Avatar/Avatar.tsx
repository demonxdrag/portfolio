import { Suspense, useRef, useState } from 'react'
import { AvatarTitle } from '../../../style/fonts.style'
import GlassCard from '../GlassCard/GlassCard'
import { AvatarContainer, AvatarLineArt, AvatarName, AvatarView } from './Avatar.style'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from './Model'

const Avatar = () => {
	const avatarRef = useRef(null)
	const bodyRef = useRef(null)
	const [toggleBody, setBody] = useState(true)

	return (
		<AvatarContainer>
			<AvatarLineArt>
				<img src='line-art.svg' width={300} alt='line-art' />
			</AvatarLineArt>
			<AvatarView ref={bodyRef} show={toggleBody}>
				<Canvas camera={{ position: [2, 0, 12.25], fov: 15 }}>
					<ambientLight intensity={1.25} />
					<ambientLight intensity={0.1} />
					<directionalLight intensity={0.4} />
					<Suspense fallback={null}>
						<Model position={[1, -1.3, 6]} />
					</Suspense>
				</Canvas>
			</AvatarView>
			<AvatarView ref={avatarRef} show={!toggleBody}></AvatarView>
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
