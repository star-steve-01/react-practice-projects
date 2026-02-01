import "../css/sidebar.css";
import SidebarBtn from "./SidebarBtn.tsx";

function Sidebar() {
  return(
    <div id="sidebar-container">
      {/* title of sidebar */}
      <h5 className="my-4 ms-4">
        <b><i className="bi bi-list-task"></i>&ensp;Task Manager</b>
      </h5>

      {/* add task btn */}
      <button id="add-task-btn" className="btn my-4 ms-4">
        <i className="bi bi-patch-plus">&ensp;Add Task</i>
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
  );
}

export default Sidebar;