import './App.css';
import Header from './HeaderAndFooter/header'
import Navbar from './Components/navbar'
import Footer from './HeaderAndFooter/footer'
import Home from './Components/Home/home'
import { Switch,Route } from 'react-router';
import About from './Components/About/about'
import CalTax from './Components/CalculateTax/caltax'
import Contact from './Components/Contact/contact'
function App() {
  return (
    <div>
    {/* <Header /> */}
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/about' exact component={About}></Route>
      <Route path='/caltax' exact component={CalTax}></Route>
      <Route path='/contact' exact component={Contact}></Route>
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
