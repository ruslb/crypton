import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/auth/login';
import Home from './components/home';
import PrivateRoute from './utils/router/privateRoute'; 

function App() {
  return (
    <div className="App">
     <h1>Home page</h1>
	  <Routes>
		<Route element={<PrivateRoute/>}>
		<Route path="/" element={<Home/>} />
		</Route>
	
		<Route path="/login" element={<LoginPage/>} />
	  </Routes>
    </div>
  );
}

export default App;
