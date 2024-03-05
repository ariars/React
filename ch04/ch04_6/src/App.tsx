import ResponsiveContext from './pages/ResponsiveContext'
import { ResponsiveProvider } from './contexts'

export default function App() {
  return (
    <ResponsiveProvider>
      <main>
        <ResponsiveContext />
      </main>
    </ResponsiveProvider>
  )
}
