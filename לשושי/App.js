import logo from './logo.svg';
import './App.css';
import Component1 from './Homework1/component1';
import Component2 from './Homework1/component2';
import ProductsComponent from './Homework2/ProductsComponent';
import SliderPictures from './HomeWork4/SliderPictures';
import BananaComp from './HomeWork4/BananaComp';
import PeachComp from './HomeWork4/PeachComp';
import KiwiComp from './HomeWork4/KiwiComp';
import StrawberryComp from './HomeWork4/StrawberryComp';
import UseRefExample from './Homework7/UseRefExample';
import UseFormExample from './Homework7/UseFormExample';
import ShopComponent from './FinalProject/components/ShopComponent';
import store from './FinalProject/redux/store';
import { Provider } from 'react-redux';
import Navbar from './FinalProject/components/Navbar';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <Component1></Component1> */}
        {/* <ProductsComponent></ProductsComponent> */}
        {/* <SliderPictures><BananaComp></BananaComp><PeachComp></PeachComp><KiwiComp></KiwiComp><StrawberryComp></StrawberryComp></SliderPictures>*/}
         {/* <UseRefExample></UseRefExample> */}
         
         {/* <NavbarComponent></NavbarComponent> */}
       {/* <Provider store={store}>
          
          <ShopComponent></ShopComponent>
        </Provider>  */}


       {/* <UseFormExample></UseFormExample>  */}
       
     
      <h1>Jewles By Shoshi&Yoceved</h1>
      <Provider store={store}>    
      <BrowserRouter >
      <Navbar></Navbar> 
      </BrowserRouter>    
        </Provider>  
     
      </div>
    </div>
  );
}

export default App;
