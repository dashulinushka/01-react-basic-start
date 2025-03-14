import React from "react"

// export default function IntroSection() {
//   return (
//     <section>
//       <h1 className="centered">Darya Babich</h1>
//       <h3 className="centered" style={{color: '#666'}}>учу React, JS, TS</h3>
//     </section>
//   )
// }

export default function IntroSection() {
  return React.createElement('section', null, [
    React.createElement('h1', {className: 'centered', key: 1}, 'Darya Babich'),
    React.createElement('h3', {className: 'centered', key: 2, style:{color: '#666'}}, 'учу React, JS, TS'),
  ])
}

// const e = React.createElement;
// export default function IntroSection() {
//   return e('section', null, [
//     e('h1', {className: 'centered'}, 'Darya Babich'),
//     e('h3', {className: 'centered', style:{color: '#666'}}, 'учу React, JS, TS'),
//   ])
// }