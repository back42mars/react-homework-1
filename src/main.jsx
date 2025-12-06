import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppJS from './App-js.js'
import AppTeacher from './AppReactCreateElement.jsx'

const root = document.getElementById('root')

// const reactRoot = createRoot(root);
// reactRoot.render(
//   <StrictMode>
//     {/* <App /> */}
//     <AppTeacher />
//   </StrictMode>,
// )

const imperativeApp = AppJS();
root.append(imperativeApp);
