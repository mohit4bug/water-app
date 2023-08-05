import { UserContextProvider } from './components/UserContext'
import Navigation from './navigation'

const App = () => {
  return (
    <UserContextProvider>
      <Navigation />
    </UserContextProvider>
  )
}

export default App
