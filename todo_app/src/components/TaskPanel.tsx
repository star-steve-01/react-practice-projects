import { useContext, useState } from "react";
import "../css/task-panel.css";
import { ActiveTabContext } from "../context/ActiveTabContext";
import TaskWidget from "./Task";
import { LoadingStatusContext } from "../context/LoadingStatusContext";
import Notification from "./Notification.tsx";

type localStorageTask = {
  id: number,
  title: string,
  description: string,
  datetime: string,
  completed: boolean,
  tags: string[]
}

function TaskPanel() {

  const { activeTab } = useContext(ActiveTabContext);
  const [loadingStatus, setLoadingStatus] = useState(false);

  const data: localStorageTask[] = JSON.parse(localStorage.getItem("data")!);

  // filter data by current active tab on App.tsx state
  function filterDataByActiveTab(
    data: localStorageTask[],
    activeTab: number
  ): localStorageTask[] {
    const today = new Date().toISOString().slice(0, 10);

    return data.filter(task => {
      const taskDate = new Date(task.datetime).toISOString().slice(0, 10);

      switch (activeTab) {
      case 0:
        return taskDate == today;
      case 1:
        return taskDate > today;
      case 2:
        return true;
      case 3:
        return task.completed;
      default:
        return true;
      }
    });
  }

  // conditionally sets values for active tab
  const panelTitlesArr = ["Today", "Upcoming", "Filter & Tags", "Completed"];
  const panelIconsArr = ["calendar-date", "calendar-week", "tags", "check2-circle"];
  const panelTitle = panelTitlesArr[activeTab];
  const panelIcon = panelIconsArr[activeTab];

  const filteredData = filterDataByActiveTab(data, activeTab);
  const taskCount = filteredData.length;

  return(
    <LoadingStatusContext value={{ loadingStatus, setLoadingStatus }}>
      <div id="task-panel">
        {/* title section of task panel */}
        <div className="my-4 ms-5">
          <h5>
            <b><i className={`bi bi-${panelIcon}`}></i>&ensp;{panelTitle}</b>
          </h5>
          <p className="text-muted">{taskCount} task{(taskCount > 0) ? "s" : ""}</p>
        </div>

        <div className="mt-4 ms-5">
          {/* renders task component by each filter data task */}
          {filteredData.map((task) => {
            return(
              <TaskWidget
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                datetime={task.datetime}
                completed={task.completed}
                tags={task.tags}
              />
            );
          })}
          {/* sets loading status on loading */}
          {loadingStatus ? <Notification message="Loading..." /> : <></>}
        </div>
      </div>
    </LoadingStatusContext>
  );
}

export default TaskPanel;