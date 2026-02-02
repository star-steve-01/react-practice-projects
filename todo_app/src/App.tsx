import { useState } from "react";
import Sidebar from "./components/Sidebar.tsx";
import { ActiveTabContext } from "./context/ActiveTabContext.tsx";
import TaskPanel from "./components/TaskPanel.tsx";

function App() {

  const [activeTab, setActiveTab] = useState(0);

  return(
    <>
      <ActiveTabContext value={{ activeTab, setActiveTab }}>
        <Sidebar />
        <TaskPanel />
      </ActiveTabContext>
    </>
  );
}

export default App;