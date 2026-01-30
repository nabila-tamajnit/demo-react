import './App.css'
import { Demo1Component } from './demos/1_Base_Component/Demo1Component'
import { Demo2 } from './demos/2_Conditionnel/Demo2'
import { Demo3 } from './demos/3_Collections/Demo3'
import { Demo4 } from './demos/4_Events/Demo4'
import { Demo5 } from './demos/5_State/Demo5'
import { Demo6 } from './demos/6_Formulaires/Demo6'
import { Demo6Bis } from './demos/6_Formulaires/Demo6Bis'
import { Demo6Lib } from './demos/6_Formulaires/Demo6Lib'
import { Demo7 } from './demos/7_Interaction/Demo7'
import { Exo1 } from './exos/1_Creation_Composant/Exo1'
import { Produit } from './exos/2_Conditionnel/Produit'
import { Movie } from './exos/3_Collections/Movie'
import { Exo4 } from './exos/4_State/Exo4'
import { Exo4Correction } from './exos/4_State/Exo4Correction'
import { Calculator } from './exos/5_Formulaires/calculator'

function App() {

  return (
    <>
      {/* <p>{new Date().toLocaleDateString('fr')}</p> */}

      {/* ============== DEMO 1 ================ */}

      {/* Si vous souhaitez envoyer une chaine dans les props "". Si vous souhaitez envoyer autre chose, il faudra mettre les {} */}
      {/* <Demo1Component name="HTML" type="Front-End" difficulty={1} /> */}

      {/* <Demo1Component name="Express" type="Back-End" difficulty={5} /> */}

      {/* <Demo1Component /> */}

      {/* -------------- EXO 1 -------------- */}

      {/* <Exo1 name="Jon" age={35} /> */}
      {/* <Exo1 name="Arya" /> */}


      {/* =============== DEMO 2 =============== */}

      {/* -> Cas où la personne n'a pas d'animal */}
      {/* <Demo2 owner="Khun" havePet={false} /> */}

      {/* -> Cas où la personne a toutes les infos */}
      {/* <Demo2 owner="Aude" havePet={true} name="Soup" image="https://www.zooplus.be/magazine/wp-content/uploads/2019/06/comprendre-le-langage-des-chats.webp" type="chat" /> */}

      {/* -> Cas où l'animal n'a pas de nom */}
      {/* <Demo2 owner="JanMi" havePet={true} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tTTPGK57cb54SU7d-u3dDCH-RkHdjKvD6Q&s" type="chien" /> */}

      {/* -> Cas où l'animal n'a pas d'image  */}
      {/* <Demo2 owner="Aurélien" havePet={true} name="Chépu" type="chat" /> */}

      {/* -------------- EXO 2 -------------- */}

      {/* <h1>🧶 Tendi'Knit 🧶</h1> */}
      {/* <h2>Parce que vos vêtements méritent que nos poignets y passent.</h2> */}
      {/* <p>Découvrez nos produits :</p> */}
      {/* <div className='flex flex-row justify-center items-center gap-3'>
      <Produit isAvailable={false} name="Le Over" />

      <Produit isAvailable={true} name="Le Lavan-doux" image="/src/assets/images/Lavandoux.png" description="Un pull aussi doux que les bisous de ta mamy, couleur lavande" price={200} />

      <Produit isAvailable={true} name="Le Varicelle" image="/src/assets/images/Varicelle.png" price={250} />

      <Produit isAvailable={true} name="Go Touch Grass" image="/src/assets/images/GoTouchGrass.png" description="Parce qu'il est important de se reconnecter à Dame Nature" price={300} promoPrice={225} />
      </div> */}


      {/* =============== DEMO 3 =============== */}
      {/* <Demo3 /> */}

      {/* -------------- EXO 3 -------------- */}
      {/* <Movie /> */}


      {/* =============== DEMO 4 =============== */}
      {/* <Demo4 /> */}


      {/* =============== DEMO 5 =============== */}
      {/* <Demo5 /> */}

      {/* -------------- EXO 4 -------------- */}
      {/* <Exo4/> */}
      {/* <Exo4Correction /> */}


      {/* =============== DEMO 6 =============== */}
      {/* <Demo6/> */}
      {/* <Demo6Bis/> */}
      {/* <Demo6Lib/> */}

      {/* -------------- EXO 5 -------------- */}
      {/* <Calculator /> */}


      {/* =============== DEMO 7 =============== */}
      <Demo7 />
    </>


  )
}

export default App
