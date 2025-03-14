import Technologies from "./Technologies"
import { ways } from "../data"

export default function TeachingSection () {
  return (
    <section>
      <h3>Мое обучение</h3>
      
      <ul>
        {ways.map(way => {
          return (<Technologies
          key={way.title} //necessary key for react-tracking
          {...way} />)
        })}
      </ul>
    </section>
  )
}