import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoReducer } from './08-useReducer/TodoReducer'
import { MainApp } from './09-useContext/MainApp'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import { Padre } from './07-tarea-memo/Padre'
// import { MultipleCustomHooks } from './examples/MultipleCustomHooks'
// import { CallbackHook } from './memos/CallbackHook'
// import { MemoHook } from './memos/MemoHook'
// import { Memorize } from './memos/Memorize'
// import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
// import { SimpleForm } from './useEffect/SimpleForm'
// import { Layout } from './useLayoutEffect/Layout'
// import { FocusScreen } from './useRef/FocusScreen'
// import { CounterApp } from './useState/CounterApp'
// import { CounterWithCustomHook } from './useState/CounterWithCustomHook'
// import './08-useReducer/intro-reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>,
  </BrowserRouter>

)
