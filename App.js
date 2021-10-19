import { 
 BrowserRouter as Router,
 Switch,
 
 Redirect,
 useLocation
} from 'react-router-dom';
import Login from './Components/Login';
import AddRoom from './Components/AddRoom';
import ChatRoom from './Components/ChatRoom';
import RoomList from './Components/RoomList';
import './App.css';

function App() {
  let location =useLocation();
 return(
   <Router>
     <div>
       <Redirect
       to={{
         pathname:"/roomlist",
         state:{from:location}
       }}/>
       <Switch>
         <Router path = "/login">
          <Login/>
         </Router>
         <SecureRoute path ="/roomlist">
           <RoomList/>
         </SecureRoute>
         <SecureRoute path ="/addroom">
           <AddRoom/>
         </SecureRoute>
         <SecureRoute path ="/chatroom/:room">
           <ChatRoom/>
         </SecureRoute>
       </Switch>
     </div>
   </Router>
 )
}

export default App;

function SecureRoute({children,...rest}){
  return(
    <Router
    {...rest}
    render ={({location})=>
    localStorage.getItem('nikename')?(
      children
    ):(
      <Redirect
      to = {{
        pathname:'login',
        state:{from:location}
    }}
    />
    )
  }
  />
  )
}
