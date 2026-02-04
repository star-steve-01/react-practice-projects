import "../css/sidebar.css";
import AddTaskModal from "./AddTaskModal.tsx";
import SidebarBtn from "./SidebarBtn.tsx";

function Sidebar() {
  return(
    <>
      <div id="sidebar-container">
        {/* title of sidebar */}
        <h5 className="my-4 ms-4">
          <b><i className="bi bi-back"></i>&ensp;Task Manager</b>
        </h5>

        {/* add task btn now tirggers #addTaskModal */}
        <button 
          id="add-task-btn" 
          className="btn my-4 ms-4"
          data-bs-toggle="modal"
          data-bs-target="#addTaskModal"
        >
          <b><i className="bi bi-patch-plus"></i>&ensp;Add Task</b>
        </button>
        <br></br>

        {/* side bar buttons as tabs list */}
        <div className="my-4">
          <SidebarBtn label="Today" iconName="calendar-date" activeTabIndex={0} />
          <SidebarBtn label="Upcoming" iconName="calendar-week" activeTabIndex={1} />
          <SidebarBtn label="Filter & Tags" iconName="tags" activeTabIndex={2} />
          <SidebarBtn label="Completed" iconName="check2-circle" activeTabIndex={3} />
        </div>
      </div>

      <AddTaskModal />
    </>
  );
}

export default Sidebar;