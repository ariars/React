import DirectionTest from './pages/DirectionTest'
import WrapTest from './pages/WrapTest'
import MainMaxTest from './pages/MainMaxTest'
import JustifyCenterTest from './pages/JustifyCenterTest'
import AlignTest from './pages/AlignTest'
import UserContainer from './pages/UserContainer'
import CardContainer from './pages/CardContainer'

export default function App() {
  return (
    <main>
      <CardContainer />
      <UserContainer />
      <AlignTest />
      <JustifyCenterTest />
      <MainMaxTest />
      <WrapTest />
      <DirectionTest />
    </main>
  )
}
