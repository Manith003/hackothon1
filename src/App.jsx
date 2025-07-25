import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { asynccurrentuser } from "./store/actions/UserActions";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynccurrentuser());
  }, []);
  return (
    <div className="App h-full w-full">
      <Nav />
      <Mainroutes />
      <Footer />
    </div>
  );
}

export default App;
