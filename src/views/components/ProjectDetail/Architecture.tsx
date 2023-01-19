import { Text } from '../../../style/fonts.style'
import { ArchContainer, ArchItem } from './Architecture.style'

export interface iArchitecture {
	stack: (
		| 'angular'
		| 'node'
		| 'react'
		| 'gitlab'
		| 'aws'
		| 'mongodb'
		| 'stripe'
		| 'sass'
		| 'ionic'
		| 'vercel'
		| 'strapi'
		| 'react-native'
		| 'react-spring'
		| 'redux'
	)[]
}
const Architecture = (props: iArchitecture) => {
	const { stack } = props

	return (
		<ArchContainer>
			{stack.map(arch => (
				<ArchItem key={arch}>
					<img src={`/arch/${arch}.svg`} alt={`${arch} icon`} />
					<Text>
						{arch
							.split('-')
							.map(w => w[0].toUpperCase() + w.substring(1))
							.join(' ')}
					</Text>
				</ArchItem>
			))}
		</ArchContainer>
	)
}

export default Architecture
