import { useState } from "react";
import Sidebar from "./components/Sidebar.tsx";
import { ActiveTabContext } from "./context/ActiveTabContext.tsx";

function App() {

  const [activeTab, setActiveTab] = useState(0);

  return(
    <>
      <ActiveTabContext value={{ activeTab, setActiveTab }}>
        <Sidebar />
      </ActiveTabContext>
    </>
  );
}

export default App;