import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cabecalho from "./components/layout/Cabecalho";
import Home from "./pages/Home";
import HeavyMetal from "./pages/HeavyMetal";
import ClassicRock from "./pages/ClassicRock";
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <div className="container">
          <Menu />
          <main className="conteudo">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/classic">
                <ClassicRock />
              </Route>
              <Route path="/heavy">
                <HeavyMetal />
              </Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
