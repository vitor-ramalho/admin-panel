import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./app.css"
import Home from "./Pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import UserList from "./Pages/UserList/UserList";
import NewUser from "./Pages/NewUser/NewUser";
import User from "./Pages/User/User";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
