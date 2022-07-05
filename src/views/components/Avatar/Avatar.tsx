import { AvatarTitle } from '../../../style/fonts.style'
import GlassCard from '../GlassCard/GlassCard'
import { AvatarContainer, AvatarLineArt, AvatarName } from './Avatar.style'

const Avatar = () => {
  return (
    <AvatarContainer>
      <AvatarLineArt>
        <img src='line-art.svg' width={300} alt='line-art' />
      </AvatarLineArt>
      <img src='profile.png' width={200} alt='Profile' />
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
