import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar';
import FinalForm from "./components/formFields/FinalForm";
import ContactYou from "./components/ContactYou";

// function App() {
//   return (
//     <div className="App">
//       <Navbar></Navbar>
//       <FinalForm></FinalForm>
//     </div>
//   );
// }

const App = () => (
  <Router>
    <Navbar></Navbar>
    <Switch>
      <Route exact path="/" component={FinalForm}></Route>
      <Route path="/contactyou" component={ContactYou}></Route>
    </Switch>
  </Router>
);

export default App;
