import "./App.css";
import { mainObj } from "./MainObj";
import ClippedDrawer from "./Components/ClippedDrawer";
import { useDispatch } from "react-redux";
import { storeMainObj } from "./Utils.jsx/AdminSlice";
import { storeMainObj as userObj } from "./Utils.jsx/UserSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(storeMainObj(mainObj));
  dispatch(userObj(mainObj))

  return (
    <div className="App">
      <ClippedDrawer />
    </div>
  );
}

export default App;
