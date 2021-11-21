import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Landing from "./components/Landing";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./components/Login";

import { Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [brand, setbrand] = useState("Radar");

  return (
    <Router>
      <div className="App" style={{
        minHeight:"100vh"
      }}>
        {/* {user && <Alert variety="danger">{user}</Alert>} */}
        <Header text={brand} />
        <Switch>
          <Route path="/home">
            <Container className="d-flex align-items-center justify-content-center">
              <Main />
            </Container>
          </Route>
          <Route path="/about">
            <Container className="d-flex align-items-center justify-content-center">
              <About brand={brand} />
            </Container>
          </Route>
          <Route exact path="/">
            <Container className="d-flex align-items-center justify-content-center">
              <Landing brand={brand} />
            </Container>
          </Route>
        </Switch>
        <Container className="d-flex align-items-center justify-content-center mt-4">
          <Footer team={"Ben Daley, Aileen Hernandez, and Beric Bearnson"} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
