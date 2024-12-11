import './App.css'
import LudoBoard from './LudoBoard'
import LikeButton from './LikeButton'
import TodoList from './TodoList'
import {MultipleImg} from './MultipleImg'
import JSXPractice from './JSXPractice'
import Bio from './Bio'
import Profile from './Profile'
import Form from './Form'
import List from './List'
import Conditions from './Conditions'
import Practice from './Practice'
import TodoLists from './TodoLists'
import Todo from './Todo'
import RefExample from './RefExample'
import Counter from './Counter'
import StateObject from './StateObject'
import UseEffect from './UseEffect'
import FacColor from './FacColor'
import ChildB from './ChildB'
import Software from './Software'
import UseRef from './UseRef'
import Header from './Header'
import UseMemo from './UseMemo'
import UseContext from './UseContext'
import ProductTab from './ProductTab'
import Count from './Count'
import ArrayStateObject from './ArrayStateObject'
import Lists from './Lists'
import Lottery from './Lottery'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {


  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>


    </Routes>
  )
}

export default App
