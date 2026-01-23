import './App.css'
import { Demo1Component } from './demos/1_Base_Component/Demo1Component'
import { Exo1 } from './exos/1_Creation_Composant/Exo1'

function App() {

  return (
    <>
      { new Date().toLocaleDateString('fr') }
      
      <Demo1Component name="HTML" type="Front-End" difficulty={1} />
      <Demo1Component name="Express" type="Back-End" difficulty={5} />
      <Demo1Component />

      <Exo1 name="Jon" age={35} />
      <Exo1 name="Arya" />
    </>
  )
}

export default App
