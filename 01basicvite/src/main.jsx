import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createElement } from 'react'
import App from './App.jsx'

const reactElement = {
  type: 'a',
  props: {
    href: "https://google.com",
    target: '_blank'
  },
  children: 'Click me to visit google'
}

function myApp(){
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  )
}

const AnotherElement = (
  <a href="http://google.com" target='_blank'>Visit Google</a>
)

const areactElement = createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click to visit google' 
)

 createRoot(document.getElementById('root')).render(
  <App />
)
