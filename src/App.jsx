import Header from "./components/Header"
import Technologies from "./components/Technologies"
import Button from "./components/Button/Button"
import { useState } from "react"
import {ways, differences} from './data'

export default function App() {
  const [contentType, setContentType] = useState(null);

  function handleClick (type) {
    // content = type;
    setContentType(type)
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Мое обучение</h3>

          <ul>
            {
              ways.map(way => { return (<Technologies 
                key={way.title} //necessary key for react-tracking
                {...way}/>)})
            }
            {/* <Technologies title={ways[0].title} 
            description={ways[0].description}/>
            <Technologies {...ways[1]}/>
            <Technologies {...ways[2]}/>
            <Technologies {...ways[3]}/> */}
          </ul>
        </section>
        <section>
          <h3> Чем мы отличаемся от других </h3>

          <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Купить</Button>
          <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Продать</Button>
          <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Сдать</Button> 

          <p>{contentType ? differences[contentType] : <p>Нажми на меня</p>}</p>
        </section>
      </main>
    </div>
  )
}
