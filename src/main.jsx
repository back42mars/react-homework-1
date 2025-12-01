import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppJS from './App-js.js'

const root = document.getElementById('root')

// const reactRoot = createRoot(root);
// reactRoot.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const imperativeApp = AppJS();

root.append(imperativeApp);
