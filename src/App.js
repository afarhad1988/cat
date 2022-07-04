import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/Header";
import Homepage from "./page/Homepage";
import Favorites from "./page/Favorites";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorite" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
