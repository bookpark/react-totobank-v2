import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import MakeAccount from './MakeAccount';
import InquireAccount from './InquireAccount';
import Deposit from './Deposit';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Main />}/>
        <Route exact path='/make-account' element={<MakeAccount />} />
        <Route exact path='/account-info' element={<InquireAccount />} />
        <Route exact path='/deposit' element={<Deposit />} />
        {/* <Route exact path='/withdraw' element={<Withdraw />} /> */}
      </Routes>
    </div>
  );
}

export default App;
