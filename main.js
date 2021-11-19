import './style.css'
import utilA from './utils/utilA'
import utilB from './utils/utilB'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

utilA()
utilB()
