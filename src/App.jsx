import { BlocContextProvider } from "./Context/blocContext";
import BlocForm  from "./components/blocForm";
import { BlocList } from "./components/blocList";

function App() {
  return (
    <BlocContextProvider>
      <BlocForm />
      <BlocList />
    </BlocContextProvider>
  );
}

export default App;