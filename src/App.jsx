import './App.scss';
import Product from './component/Products/Product';
import Home from './component/Home';
import AddNewProduct from './component/AddNewProduct';
import 'react-image-lightbox/style.css';
import Nav from './component/Navigation/Nav';
import Weather from './component/Weather/Weather';

import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";


const App = () => {
   return (
      <Router>
         <Nav />
         <Switch>

            <Route exact={true} path="/">
               <div className="App">
                  <header className="App-header content-left">
                     <div style={{ textAlign: 'center' }}>
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                     </div>
                     <p>Quanzu</p>
                     <Home />
                  </header>
                  <div className="content-right">
                     <AddNewProduct />
                     <hr />
                     <Product />
                  </div>
               </div>
            </Route>

            <Route path="/product">
               <Product />
            </Route>
            <Route path="/weather">
               <Weather />
            </Route>
            <Route path="/about">
               <div>Hello I'm Quanzu</div>
            </Route>
            <Route path="*">
               <div>404 Not Found</div>
            </Route>
         </Switch>

      </Router>
   );
};

export default App;
