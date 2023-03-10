import { createRoot } from "react-dom/client";
import { Counter } from "@/components";

const App = () => {
  return (
    <div>
      Hello Rspack!
      <Counter />
    </div>
  );
};

createRoot(document.querySelector("#root")!).render(<App />);
