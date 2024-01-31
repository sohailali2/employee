import  { BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import { Home } from "../pages/home/home"
import Home from "../pages/home/home";
import About from "../pages/abouts/about";


const AppRoutes = () =>{
    return (
        <Routes>
            <Route path="" component={Home} ></Route>
            <Route path="/about" component={About} ></Route>
        </Routes>
    )
}


export default AppRoutes;