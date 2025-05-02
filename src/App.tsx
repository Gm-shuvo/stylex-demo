import { Theme } from "@radix-ui/themes";
import "./App.css";
import Dashboard from "./components/Dashboard";
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <>
      <Theme>
        <Dashboard />
      </Theme>
    </>
  );
}

export default App;
