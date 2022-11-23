import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";

//priyanka


function App() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <Login />;
  }
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
