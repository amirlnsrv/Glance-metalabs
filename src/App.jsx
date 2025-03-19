import { RouterProvider } from "react-router-dom";

import { routes } from "./routes/routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
