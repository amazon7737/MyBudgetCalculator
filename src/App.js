import logo from "./logo.svg";
import "./App.css";
import Main from "./Pages/Main";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import MyPayFriend from "./Components/MyPayFriend";
import BudgetScreen from "./BudgetScreens/BudgetScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            {/* <Route> */}
            <Route path="/" element={<MyPayFriend />} />
            <Route path="/2" element={<BudgetScreen />} />
            {/* <Route path="/2" element={<Calculator />} />
            <Route path="/3" element={<MyPayFriend />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
