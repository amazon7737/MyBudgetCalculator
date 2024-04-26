import logo from "./logo.svg";
import "./App.css";
import Main from "./Pages/Main";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import MyPayFriend from "./Components/MyPayFriend";
import BudgetScreen from "./BudgetScreens/BudgetScreen";
import AccountBookScreen from "./AccountBookScreens/AccountBookScreen";

function App() {
  // localStorage.setItem("budget", localStorage.getItem("budqget") - 10);
  // localStorage.setItem("item", [{ name: "강민이tc값", tc: 2000 }]);
  // let a = localStorage.getItem("budget");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route element={<RootLayout />}> */}
          <Route>
            <Route path="/" element={<BudgetScreen />} />
            <Route path="/2" element={<AccountBookScreen />} />

            {/* <Route path="/2" element={<Calculator />} />
            <Route path="/3" element={<MyPayFriend />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
