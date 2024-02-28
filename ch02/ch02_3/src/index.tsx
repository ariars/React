import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'

export default function App() {
  return (
    <ul>
      <ClassComponent href="http://google.com" text="go to Google" />
      <ArrowComponent href="http://google.com" text="go to Google" />
    </ul>
  )
}
