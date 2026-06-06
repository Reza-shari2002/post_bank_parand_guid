import Create_bank_account from "../pages/create_bank_account/Create_bank_account";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home_page from "../pages/home_page/home_page"


function App() {
const router = createBrowserRouter([{path:"/" , element:<Create_bank_account></Create_bank_account>} , {path:"/home" , element:<Home_page></Home_page>}])


  return (
  
<><Create_bank_account></Create_bank_account></>

  
  );
}

export default App;
