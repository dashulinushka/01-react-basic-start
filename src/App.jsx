import Header from "./components/Header"
import Technologies from "./components/Technologies"
import Button from "./components/Button/Button"
import {ways} from './data'

export default function App() {
  let content = 'Нажми на кнопку'
  function handleClick (type) {
    console.log('b', type);
    content = type;
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Мое обучение</h3>

          <ul>
            <Technologies title={ways[0].title} 
            description={ways[0].description}/>
            <Technologies {...ways[1]}/>
            <Technologies {...ways[2]}/>
            <Technologies {...ways[3]}/>
          </ul>
        </section>
        <section>
          <h3> Чем мы отличаемся от других </h3>

          <Button onClick={() => handleClick('way')}>Купить</Button>
          <Button onClick={() => handleClick('easy')}>Продать</Button>
          <Button onClick={() => handleClick('prorgam')}>Сдать</Button> 

          <p>{content}</p>
        </section>
      </main>
    </div>
  )
}
