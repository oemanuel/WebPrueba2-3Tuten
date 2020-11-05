import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Problem2 from './screens/problem2'
import Problem3 from './screens/problem3'
import NavBar from './components/NavBar'

function App() {
  return( 
    <>
   <Provider store={store}>
     <BrowserRouter>
     <NavBar/>
     <Switch>
       <Route path="/problem2"> 
          <Problem2/>
       </Route>
       <Route path="/problem3"> 
          <Problem3/>
       </Route>
     </Switch>
     </BrowserRouter>
   </Provider>
    </>
    );
}

export default App;
