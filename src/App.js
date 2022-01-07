import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Homepage from "./Pages/Homepage";
import { themes } from "./Helpers/Theme";
import Login from "./Pages/Login";
import { useEffect, useState } from "react";
import { getBearerToken } from "./Auth";
import { useDispatch } from "react-redux";
import { LoadUser } from "./Actions/Actions";

function App() {
  const [bearerToken, setBearerToken] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } = getBearerToken(
        window.location.hash
      );
      localStorage.clear();

      localStorage.setItem("token", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);

      if (access_token) {
        setBearerToken(access_token);
      }
      dispatch(LoadUser());
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={themes}>
      <div className="App">
        <Router>
          <Switch>{bearerToken ? <Homepage /> : <Login />}</Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
