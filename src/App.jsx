import './App.css'

import { Tarea } from './componentes/Tarea'
import logo from './images/logo.png'

function App() {

  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img className='logo' src={logo} alt="logo" />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <Tarea/>
      </div>
    </div>
  )
}

export default App
