import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import MakeAccount from './MakeAccount';
import AccountInfo from './AccountInfo';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Main />}/>
        <Route exact path='/make-account' element={<MakeAccount />} />
        <Route exact path='/account-info' element={<AccountInfo />} />
      </Routes>
    </div>
  );
}

export default App;
