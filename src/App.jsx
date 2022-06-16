import ReactQueryProvider from "./components/providers/ReactQueryProvider";
import Router from "./containers/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ReactQueryProvider>
          <Router />
        </ReactQueryProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
