import Contador from "./container/Contador.container";
import Decrementar from "./container/Decrementar.container";
import Incrementar from "./container/Incrementar.container"
import {Provider} from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Contador />
      <Incrementar />
      <Decrementar />
    </Provider>
  );
}

export default App;