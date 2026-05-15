
import './App.css'
import { Users } from './components/Users'

export function App() {

  return (
    <div>
      <header>
        <h1>Users List</h1>
        <p>React props practice</p>
      </header>

      <Users />

      <footer>
        <small>Created for learning React</small>
      </footer>
    </div>
  )
}