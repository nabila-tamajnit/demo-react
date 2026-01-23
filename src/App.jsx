import './App.css'
import { Demo1Component } from './demos/1_Base_Component/Demo1Component'

function App() {

  return (
    <>
      { new Date().toLocaleDateString('fr') }
      
      <Demo1Component name="HTML" type="Front-End" difficulty={1} />
      <Demo1Component name="Express" type="Back-End" difficulty={5} />
      <Demo1Component />
    </>
  )
}

export default App
