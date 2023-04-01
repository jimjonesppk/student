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
        <Route path='/add' element={<Addstudent data={{id:'',name:'',brand:'',quantiy:'',Rupeese:''}}method="post" />}/>
     </Routes>
    </div>
  );
}

export default App;
