import { SubTitle, Text, Title } from '../../../style/fonts.style'
import ColorCard from '../../components/ColorCard/ColorCard'
import ColorGlass from '../../components/ColorGlassCard/ColorGlass'
import GlassCard from '../../components/GlassCard/GlassCard'
import DynamicButton from '../../components/iPadOS/DynamicButton'
import { Screen } from '../../components/Screen/Screen.style'
import YearCard from '../../components/YearCard/YearCard'
import { YearListContainer, YearDescription } from '../../components/YearCard/YearCard.style'
import { BigText, BioScreenContainer, BioScreenSplit, CardDecorator, HeightGroup, Relative, SoftText, TextGroup } from './Bio.style'

const Projects = () => {
	const initialDate = new Date('01 Mar 2016')
	const currentDate = new Date()
	const exDate = new Date(currentDate.getTime() - initialDate.getTime())

	const handleDownload = () => {
		fetch('/cv.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CV - Adrian Pappalardo - 2023.pdf';
                alink.click();
            })
        })
	}

	return (
		<Screen id='bio'>
			<Title>Bio</Title>
			<BioScreenContainer>
				<BioScreenSplit>
					<GlassCard>
						<ColorGlass color='orange'>
							<TextGroup>
								<Title>
									ADRIAN PAPPALARDO <SoftText>EST 1995</SoftText>
								</Title>
								<Text>Creative Developer</Text>
							</TextGroup>
						</ColorGlass>
					</GlassCard>
					<TextGroup>
						<Text>
							<b>Experience:</b>
						</Text>
						<Text>
							<b>{exDate.getFullYear() - 1970}</b> Years <b>{exDate.getMonth()}</b> months <b>{exDate.getDate()}</b> days
						</Text>
					</TextGroup>
					<HeightGroup>
						<BigText>Hi!</BigText>
						<TextGroup>
							<Text>I'm Adrian, and I hope you enjoyed this little project of mine, i'm a creative developer based in Madrid, Spain</Text>
							<Text>If you found something of your interest and would like to work together, contact me! details are in my CV</Text>
							<Text>Have a nice day!</Text>
						</TextGroup>
						<TextGroup>
							<Text>https://github.com/demonxdrag</Text>
							<Text>https://angel.co/u/adrian-pappalardo</Text>
							<Text>https://behance.net/adrianpappalardo</Text>
						</TextGroup>
					</HeightGroup>
					<DynamicButton onClick={() => handleDownload()}>
						<ColorCard marker={true} />
						<Text>Download CV</Text>
					</DynamicButton>
				</BioScreenSplit>
				<BioScreenSplit>
					<Relative>
						<CardDecorator>
							<ColorCard color='orange' />
						</CardDecorator>
						<DynamicButton>
							<YearListContainer>
								<YearCard year={2016}>
									<YearDescription>
										<SubTitle>Cloud Service Engineer</SubTitle>
										<Text>English Connection</Text>
										<Text>9 months - Madrid</Text>
									</YearDescription>
								</YearCard>
								<YearCard year={2017}>
									<YearDescription>
										<SubTitle>Product Development Manager</SubTitle>
										<Text>American Language Academy</Text>
										<Text>3 years - Madrid</Text>
									</YearDescription>
								</YearCard>
								<YearCard year={2018}>
									<YearDescription>
										<SubTitle>IT-Consultant</SubTitle>
										<Text>AKKA Technologies</Text>
										<Text>8 months - Geneva/Nice</Text>
									</YearDescription>
								</YearCard>
								<YearCard year={2020}>
									<YearDescription>
										<SubTitle>Co-Founder - Product Development</SubTitle>
										<Text>Mirror Studio</Text>
										<Text>1 year - Madrid</Text>
									</YearDescription>
								</YearCard>
								<YearCard year={2021}>
									<YearDescription>
										<SubTitle>Front-end Developer</SubTitle>
										<Text>Hedyla Technologies</Text>
										<Text>2 years - Barcelona</Text>
									</YearDescription>
								</YearCard>
							</YearListContainer>
						</DynamicButton>
					</Relative>
					<Relative>
						<CardDecorator>
							<ColorCard color='magenta' />
						</CardDecorator>
						<DynamicButton>
							<YearListContainer>
								<YearCard year={2013} color={'magenta'}>
									<YearDescription>
										<SubTitle>Bachelor's in Computer Engineering</SubTitle>
										<Text>Universidad Carlos III de Madrid</Text>
										<Text>4 years - Madrid</Text>
									</YearDescription>
								</YearCard>
								<YearCard year={2017} color={'magenta'}>
									<YearDescription>
										<SubTitle>Master's in Product design</SubTitle>
										<Text>ESDesign Barcelona</Text>
										<Text>1 year - Online</Text>
									</YearDescription>
								</YearCard>
							</YearListContainer>
						</DynamicButton>
					</Relative>
				</BioScreenSplit>
			</BioScreenContainer>
		</Screen>
	)
}

export default Projects
