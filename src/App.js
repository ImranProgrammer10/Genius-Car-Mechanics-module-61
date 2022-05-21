import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Header></Header>
          <Routes>
          <Route exact path="/" element={ <Home></Home>}></Route>
            <Route path="/home" element={    <Home></Home>}></Route>
            <Route path="/login"element={    <Login></Login>}></Route>
            <Route path="/addService"element={ <AddService></AddService>}></Route>
            <Route path="/manageServices"element={ <ManageServices></ManageServices>}></Route>

            

<Route path="/booking/:serviceId" element={<PrivateRoute>
  <Booking></Booking>
            </PrivateRoute>}>
            </Route>

 <Route path="*" element={     <NotFound></NotFound>}></Route>

          </Routes>
       
         
          
         
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
