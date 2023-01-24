import { Text, Title } from '../../../style/fonts.style'
import ColorGlass from '../ColorGlassCard/ColorGlass'
import GlassCard from '../GlassCard/GlassCard'
import Architecture from './Architecture'
import Carousell from './Carousell'
import { CarousellImage } from './Carousell.style'
import { ProjectDetailContainer, ProjectDetailSplit, TextGroup } from './ProjectDetail.style'

export interface iProjectDetail {
	project: 'uam-estudiantes' | 'comove' | 'black-play' | 'flash-class' | 'american-language-web'
}
const ProjectDetail = (props: iProjectDetail) => {
	const { project } = props

	const details = {
		'uam-estudiantes': (
			<ProjectDetailContainer>
				<Title>Screenshots</Title>
				<Carousell folder={`/projects/${project}`} n={1} desktop={true} />
				<Title>The project</Title>
				<ProjectDetailSplit>
					<CarousellImage src={`/projects/${project}/screen-text.png`} alt={`${project} splash`} />
					<GlassCard>
						<ColorGlass color='magenta'>
							<TextGroup>
								<Text>This is an interactive web development for new students starting their education in the UAM University in Madrid.</Text>
								<Text>
									It consists on many sections describing the different instructions that they will follow throughout their university life.
								</Text>
								<Text>It is a different experience for mobile and for desktop.</Text>
							</TextGroup>
						</ColorGlass>
					</GlassCard>
				</ProjectDetailSplit>
				<Title>Architecture</Title>
				<Architecture stack={['react', 'sass', 'vercel']} />
			</ProjectDetailContainer>
		),
		comove: (
			<ProjectDetailContainer>
				<Title>Screenshots</Title>
				<Carousell folder={`/projects/${project}/client`} n={5} />
				<Title>The project - Client side</Title>
				<ProjectDetailSplit>
					<CarousellImage src={`/projects/${project}/client/screen-text.png`} alt={`${project} splash`} />
					<GlassCard>
						<ColorGlass color='magenta'>
							<TextGroup>
								<Text>
									This mobile app allows the users to find a personal trainer that will remotely monitor their training progress within the
									app trough a large database of pre-defined exercises that a trainer can use to build a complete plan.
								</Text>

								<Text>
									The app guides you through the exercise with a short instructional video as well as it monitors and applies restraints set
									by your trainer.
								</Text>

								<Text>
									The monitoring can be done using video-calls/recordings to send to your trainer, or trough the plan metadata when you finish
									it.
								</Text>
							</TextGroup>
						</ColorGlass>
					</GlassCard>
				</ProjectDetailSplit>
				<Carousell folder={`/projects/${project}/trainer`} n={5} />
				<Title>The project - Trainer side</Title>
				<ProjectDetailSplit>
					<CarousellImage src={`/projects/${project}/trainer/screen-text.png`} alt={`${project} splash`} />
					<GlassCard>
						<ColorGlass color='magenta'>
							<TextGroup>
								<Text>
									On the other hand, trainers can manage their clients, assign plans and exercises and manage their accounting within the app.
								</Text>

								<Text>
									Registration for trainers requires manual review from the human resources team to ensure proper certifications are met.
								</Text>

								<Text>
									We also allow gymnasiums to register their fleet and manage their entire service within the app, this feature requires
									integration services to be created for each gym.
								</Text>
							</TextGroup>
						</ColorGlass>
					</GlassCard>
				</ProjectDetailSplit>
				<Title>Architecture</Title>
				<Architecture stack={['react-native', 'react', 'sass', 'node', 'mongodb', 'aws', 'gitlab', 'stripe']} />
				<ProjectDetailSplit>
					<GlassCard>
						<ColorGlass color='magenta'>
							<TextGroup>
								<Text>
									There is a platform to manage every client/trainer/gym in the platform and to provide support for any issues that can happen
									with the service.
								</Text>

								<Text>
									This platform also allows the administrator to create and improve already existing exercises by tweaking their metadata or
									adding an instructional video.
								</Text>
							</TextGroup>
						</ColorGlass>
					</GlassCard>
					<img src={`/projects/arch/control-panel.png`} alt={`Control Panel`} />
				</ProjectDetailSplit>
				<ProjectDetailSplit>
					<img src={`/projects/arch/server.png`} alt={`Server`} />
					<GlassCard>
						<ColorGlass color='magenta'>
							<TextGroup>
								<Text>The API and DB are both hosted in AWS with a load balancer and self replicating nodes.</Text>

								<Text>CI/CD with GitLab</Text>

								<Text>The app itself can be found in both the Apple Store and Android Store.</Text>
							</TextGroup>
						</ColorGlass>
					</GlassCard>
				</ProjectDetailSplit>
			</ProjectDetailContainer>
		),
		'flash-class': (
			<ProjectDetailContainer>
				<Title>Screenshots</Title>
				<Carousell folder={`/projects/${project}/exercises`} n={5} />
				<Title>The project - Client side</Title>
				<ProjectDetailSplit>
					<CarousellImage src={`/projects/${project}/exercises/screen-text.png`} alt={`${project} splash`} />
					<GlassCard>
						<ColorGlass color='magenta'>
							<TextGroup>
								<Text>
									This mobile app allows the users to learn a new language using a dynamic set of exercises that reinforces learning by doing,
									with the added benefit of online lessons to further reinforce the concepts.
								</Text>

								<Text>This platform can be used both as a web app in desktop/mobile or a standalone app for mobile.</Text>

								<Text>
									Excercises can be free or paid, and there is a suscription that gives you full access to the entire catalog and to certain
									discounts on the online classes.
								</Text>
							</TextGroup>
						</ColorGlass>
					</GlassCard>
				</ProjectDetailSplit>
				<Carousell folder={`/projects/${project}/teachers`} n={5} />
				<Title>The project - Trainer side</Title>
				<ProjectDetailSplit>
					<CarousellImage src={`/projects/${project}/teachers/screen-text.png`} alt={`${project} splash`} />
					<GlassCard>
						<ColorGlass color='magenta'>
							<TextGroup>
								<Text>
									On the other hand, teachers can give online lessons to their students or group stufents, with a shared whiteboard and the
									possibility to add exercises to the lesson.
								</Text>

								<Text>
									Students can ask for an immediate lesson and wait for a match, or program a lesson to the future. While waiting for a lesson
									to start they have a pre-programmed activity to do in the meantime.
								</Text>

								<Text>
									Teachers can set their schedule and will receive notifications on students searching for classes if they are online.
								</Text>
							</TextGroup>
						</ColorGlass>
					</GlassCard>
				</ProjectDetailSplit>
				<Title>Architecture</Title>
				<Architecture stack={['ionic', 'react', 'sass', 'node', 'mongodb', 'aws', 'gitlab', 'stripe']} />
				<ProjectDetailSplit>
					<GlassCard>
						<ColorGlass color='magenta'>
							<TextGroup>
								<Text>
									There is a platform to manage students, teachers, exercises and classes as well as to provide support for any issues that
									can happen with the service.
								</Text>

								<Text>This platform has an exercise creator for multiple languages so that an expert can create courses dynamically.</Text>
							</TextGroup>
						</ColorGlass>
					</GlassCard>
					<img src={`/projects/arch/control-panel.png`} alt={`Control Panel`} />
				</ProjectDetailSplit>
				<ProjectDetailSplit>
					<img src={`/projects/arch/server.png`} alt={`Server`} />
					<GlassCard>
						<ColorGlass color='magenta'>
							<TextGroup>
								<Text>The API and DB are both hosted in AWS with a load balancer and self replicating nodes.</Text>

								<Text>The app itself can be found in both the Apple Store and Android Store as well as online in flash.app.</Text>
							</TextGroup>
						</ColorGlass>
					</GlassCard>
				</ProjectDetailSplit>
			</ProjectDetailContainer>
		),
		'black-play': (
			<ProjectDetailContainer>
				<Title>The Project</Title>
				<Carousell folder={`/projects/${project}`} n={3} />
				<GlassCard>
					<ColorGlass color='magenta'>
						<TextGroup>
							<Text>This web-app allows the user to follow and explore new content from their favourite creators in a vertical format.</Text>

							<Text>
								The interactions are done using cards that you swipe to the sides to view/explore creatores and up/down to view content for a
								specific creator that you like.
							</Text>

							<Text>The platform was originally intented and design with adult content in mind.</Text>
						</TextGroup>
					</ColorGlass>
				</GlassCard>
				<Title>Architecture</Title>
				<Architecture stack={['react', 'react-spring', 'sass', 'node', 'mongodb', 'aws', 'gitlab', 'stripe']} />
				<ProjectDetailSplit>
					<GlassCard>
						<ColorGlass color='magenta'>
							<TextGroup>
								<Text>There is a platform to manage suscriptions, clients and content creators.</Text>
							</TextGroup>
						</ColorGlass>
					</GlassCard>
					<img src={`/projects/arch/control-panel.png`} alt={`Control Panel`} />
				</ProjectDetailSplit>
				<ProjectDetailSplit>
					<img src={`/projects/arch/server.png`} alt={`Server`} />
					<GlassCard>
						<ColorGlass color='magenta'>
							<TextGroup>
								<Text>The API and DB are both hosted in AWS.</Text>

								<Text>The web page was unlisted since it's creation in 2019 due to financing issues.</Text>
							</TextGroup>
						</ColorGlass>
					</GlassCard>
				</ProjectDetailSplit>
			</ProjectDetailContainer>
		),
		'american-language-web': (
			<ProjectDetailContainer>
				<Title>Screenshots</Title>
				<Carousell folder={`/projects/${project}/web`} n={7} />
				<Title>The project</Title>
				<ProjectDetailSplit>
					<CarousellImage src={`/projects/${project}/web/screen-text.png`} alt={`${project} splash`} />
					<GlassCard>
						<ColorGlass color='magenta'>
							<TextGroup>
								<Text>
									This interactive web allows you to dynamically search trough American Language Academy's courses and change parameters
									within each course to find a suitable course.
								</Text>
							</TextGroup>
						</ColorGlass>
					</GlassCard>
				</ProjectDetailSplit>
				<Title>Architecture</Title>
				<Architecture stack={['angular', 'sass', 'node', 'mongodb', 'aws', 'strapi']} />
				<ProjectDetailSplit>
					<GlassCard>
						<ColorGlass color='magenta'>
							<TextGroup>
								<Text>
									For this to work, the front end is connected to a Strapi v3 server containing all the courses with their parameters so that
									the client can keep the data updated and relevant without a programmer's input.
								</Text>
							</TextGroup>
						</ColorGlass>
					</GlassCard>
					<img src={`/projects/arch/control-panel.png`} alt={`Control Panel`} />
				</ProjectDetailSplit>
				<ProjectDetailSplit>
					<img src={`/projects/arch/server.png`} alt={`Server`} />
					<GlassCard>
						<ColorGlass color='magenta'>
							<TextGroup>
								<Text>
									The deployment is hosted in AWS with a load balancer since this web also hosts interactive sections and the access to their
									internal platform.
								</Text>

								<Text>CI/CD with GitLab</Text>
							</TextGroup>
						</ColorGlass>
					</GlassCard>
				</ProjectDetailSplit>
				<Title>Branding</Title>
				<ProjectDetailSplit>
					<img src={`/projects/${project}/extra/branding.png`} alt={`${project} branding`} />
					<GlassCard>
						<ColorGlass color='magenta'>
							<TextGroup>
								<Text>The project also included digital and physical branding based on corporate color schemes and shapes.</Text>

								<Text>
									Here we can see part of those constraints represented as well as some of the marketing material that was used troughout the
									project.
								</Text>
							</TextGroup>
						</ColorGlass>
					</GlassCard>
				</ProjectDetailSplit>
				<Carousell folder={`/projects/${project}/extra`} n={3} />
			</ProjectDetailContainer>
		)
	}

	return details[project]
}

export default ProjectDetail
