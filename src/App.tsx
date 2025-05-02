import { Theme } from "@radix-ui/themes";
import "./App.css";
import Dashboard from "./components/Dashboard";
import "@radix-ui/themes/styles.css";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
  return (
    <>
      <Theme>
        <ThemeProvider>
          <Dashboard />
        </ThemeProvider>
      </Theme>
    </>
  );
}

export default App;
