import Create_bank_account from "../pages/create_bank_account/Create_bank_account";
import Home_page from "../pages/home_page/home_page";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([

  {
    path: "/create",
    element: <Create_bank_account />,
  },
]);

function App() {
  return <><RouterProvider router={router} /></>;
}

export default App;
