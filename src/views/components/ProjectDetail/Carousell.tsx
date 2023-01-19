import { CarousellContainer, CarousellImage } from './Carousell.style'

export interface iCarousell {
	folder: string
	n: number
	desktop?: boolean
}
const Carousell = (props: iCarousell) => {
	const { n, folder, desktop = false } = props
	const screens = []

	for (let i = 1; i <= n; i++) {
		screens[i] = `${folder}/screen-${i}.png`
	}

	return (
		<CarousellContainer>
			{screens.map(screen => (desktop ? <img src={screen} alt={screen} key={screen} /> : <CarousellImage src={screen} alt={screen} key={screen} />))}
		</CarousellContainer>
	)
}

export default Carousell
