import "./App.css";
import { Banner } from "./component/Banner";
import { Header } from "./component/Header";
import { Form } from "./component/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Form/>
    </div>
  );
}

export default App;
