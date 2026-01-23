import './App.css'
import { Demo1Component } from './demos/1_Base_Component/Demo1Component'
import { Demo2 } from './demos/2_Conditionnel/Demo2'
import { Exo1 } from './exos/1_Creation_Composant/Exo1'

function App() {

  return (
    <>
    <p>{ new Date().toLocaleDateString('fr') }</p>
      
      {/* ============== DEMO 1 ================ */}

      {/* Si vous souhaitez envoyer une chaine dans les props "". Si vous souhaitez envoyer autre chose, il faudra mettre les {} */}
      {/* <Demo1Component name="HTML" type="Front-End" difficulty={1} /> */}

      {/* <Demo1Component name="Express" type="Back-End" difficulty={5} /> */}

      {/* <Demo1Component /> */}

      {/* -------------- EXO 1 -------------- */}

      {/* <Exo1 name="Jon" age={35} /> */}
      {/* <Exo1 name="Arya" /> */}


      {/* =============== DEMO 2 =============== */}

      {/* Cas où la personne n'a pas d'animal */}
      <Demo2 owner="Khun" havePet={false} />

      {/* Cas où la personne a toutes les infos */}
      <Demo2 owner="Aude" havePet={true} name="Soup" image="https://media.discordapp.net/attachments/794983136777207829/1463904237388824587/IMG-20260117-WA0010.jpg?ex=69738690&is=69723510&hm=c0d5ec51871e6dcfe2ff2de21218eaaab61fcee30b2b363514c4766e4fd794b8&=&format=webp&width=604&height=805" type="chat" />

      {/* Cas où l'animal n'a pas de nom */}
      <Demo2 owner="JanMi" havePet={true} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tTTPGK57cb54SU7d-u3dDCH-RkHdjKvD6Q&s" type="chien" />

      {/* Cas où l'animal n'a pas d'image  */}
      <Demo2 owner="Aurélien" havePet={true} name="Chépu" type="chat" />
    </>
  )
}

export default App
