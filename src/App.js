import logo from './logo.svg';
import './App.css';
import View from './components/View';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Addstudent from './components/Addstudent';

function App() {
  return (
    <div className="App">
     {/* <View></View> */}
     <Navbar></Navbar>
     <Routes>
        <Route path='/' element={<View></View>}/>
        <Route path='/add' element={<Addstudent></Addstudent>}/>
     </Routes>
    </div>
  );
}

export default App;
