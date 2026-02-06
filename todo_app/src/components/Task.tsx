import { useContext, useState } from "react";
import { LoadingStatusContext } from "../context/LoadingStatusContext";

type TaskProps = {
  id: number,
  title: string,
  description: string,
  datetime: string,
  completed: boolean,
  tags: string[]
}

type localStorageTask = {
  id: number,
  title: string,
  description: string,
  datetime: string,
  completed: boolean,
  tags: string[]
}

function TaskWidget(props: TaskProps) {

  const { id, title, description, datetime, completed } = props;
  const [btnCompleted, setBtnCompleted] = useState(completed);
  const { setLoadingStatus } = useContext(LoadingStatusContext);

  const date = new Date(datetime);

  // internal date formatter
  const formattedDatetime = date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).replace(",", "");

  // edits localStorage on button toggle
  function toggleCompletedById(id: number) {
    setLoadingStatus(true);
    setTimeout(() => {   
      const tasks: localStorageTask[] = JSON.parse(localStorage.getItem("data")!);
      const updatedTasks = tasks.map((task) => {
        if (task.id == id) {
          task.completed = !task.completed;
        }
        return task;
      });
      localStorage.setItem("data", JSON.stringify(updatedTasks));
  
      setBtnCompleted(!btnCompleted);
      setLoadingStatus(false);
    }, 500);
  }

  return(
    <>
      {/* task widget card - represents a task and its info */}
      <div className="task-widget card">
        <div className="card-body row">
          <div className="col-1 mt-1">
            {/* circle check button */}
            {/* conditionally style the button based on completed status */}
            <button className={(btnCompleted) ? "completed-true-btn" : "completed-false-btn"}
              onClick={() => toggleCompletedById(id)}
            >
              <span className="small text-muted">
                <i className="bi bi-check"></i>
              </span>
            </button>
          </div>
          {/* main card snippet */}
          <div className="col-10">
            <h6 className="card-title">{title}</h6>
            <p className="card-text small">{description}</p>
            <p className="card-text small">
              <i className="bi bi-calendar"></i>&ensp;{formattedDatetime}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskWidget;