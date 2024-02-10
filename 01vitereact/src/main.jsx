import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function myApp() {
  return (
      <h>Welcome to Own Function</h>
  )         
}

/*const reactElement = {
    type:'a',
    props: {
      href:'https://google.com',
      target:'_blank'
    },
    children:'Click me when ready to go google'
}*/

const anotherUser = (
  <a href='https://google.com'>Visit Google</a>
  )

const reactElement = React.createElement(
  'a', {href:'https://google.com', target:'_blank'},'Click me to Visit Google', anotherUser
  )

ReactDOM.createRoot(document.getElementById('root')).render(
 reactElement
)
