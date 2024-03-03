import { Title, Div } from '../components'
import * as D from '../data'

export default function MainMaxTest() {
  return (
    <section className="mt-4">
      <Title>MainMaxTest</Title>
      <Div className="p-4 bg-gray-300">
        <Div src={D.randomImage(800, 300)} className="bg-cover">
          <Div className="w-1/2 bg-blue-500 h-80" minWidth="300px" maxWidth="500px" />
        </Div>
      </Div>
    </section>
  )
}
