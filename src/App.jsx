
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import LoginPage from './Pages/LoginPage'
import ProtectedRoutes from './components/ProtectedRoutes'
import HomeScreen from './Pages/HomeScreen'
import TodayTodos from './Pages/Todos/TodoyTodos'
import { Route, Routes } from 'react-router-dom'
import UpcomingTodos from './Pages/Todos/UpcomingTodos'
import CompletedTodos from './Pages/Todos/CompletedTodos'
import PendingTodos from './Pages/Todos/PendingTodos'
import { getTodo } from './services/operations/todos'
import { useEffect } from 'react'
import AddTodo from './Pages/AddTodo'
import SignUpPage from './Pages/SignUpPage'
import Loader from './components/Loader'
function App() {
const isLoggedIn = useSelector((state)=>state.Login.value)

const loaderStatus = useSelector((state)=>state.loader)
  return (
   <>
 {
   loaderStatus && <Loader/>
 }
   <Routes>
  
   <Route path='/'  element={<LoginPage></LoginPage>}></Route>
   <Route path='/signup' element={<SignUpPage></SignUpPage>}></Route>
<Route path='/homescreen' 
element={
  <ProtectedRoutes>
   <HomeScreen>
   </HomeScreen>
</ProtectedRoutes>}
>

<Route index element={<TodayTodos></TodayTodos>}></Route>
<Route path='/homescreen/upcoming'  element={<UpcomingTodos></UpcomingTodos>}></Route>
<Route path='/homescreen/completed' element={<CompletedTodos></CompletedTodos>}></Route>
<Route path='/homescreen/pending' element={<PendingTodos></PendingTodos>}></Route>

<Route path='/homescreen/createTodo' element={<AddTodo></AddTodo>}></Route>
<Route path='/homescreen/editTodo' element={<AddTodo></AddTodo>}></Route>
</Route>




   </Routes>


   </>
 
  )
}

export default App
