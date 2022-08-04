import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/pages/Login/index';
import Main from './components/pages/MainPage/index'
function App(){
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Main/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }

export default App;
