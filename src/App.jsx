import { BrowserRouter } from 'react-router-dom'
import './App.css'
import MainRouter from './routes/MAinRouter'

function App() {

  return (
    <div className="App border-4 border-blue-600 h-screen">
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
