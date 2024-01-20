import MenuBar from "./components/menuBar";
import Root from "./components/root";
import useAuthentication from "./hooks/useAuth";
import LoginPage from "./pages/login";

const App = () => {
  const { isLoggedIn } = useAuthentication();
  return  ( 
    isLoggedIn ?
    <div>
        <Root />
        <MenuBar />
    </div> 
   : <LoginPage/> )
  
      
}

export default App;
