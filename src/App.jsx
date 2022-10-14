import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cabecalho from "./components/layout/Cabecalho";
import Home from "./pages/Home";
import HeavyMetal from "./pages/HeavyMetal";
import ClassicRock from "./pages/ClassicRock";
function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/heavy">
            <HeavyMetal />
          </Route>
          <Route path="/classic">
            <ClassicRock />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
