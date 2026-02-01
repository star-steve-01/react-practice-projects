import { useContext } from "react";
import { ActiveTabContext } from "../context/ActiveTabContext.tsx";

type SidebarBtnProps = {
  label: string,
  iconName: string,
  activeTabIndex: number
}

function SidebarBtn(props: SidebarBtnProps) {

  const { activeTab, setActiveTab } = useContext(ActiveTabContext);
  const { label, iconName, activeTabIndex } = props;
  const iconClassName = `bi bi-${iconName}`;
  const btnClassName = (activeTab == activeTabIndex) ? "sidebar-btn-active" : "sidebar-btn";

  return(
    <>
      <button className={btnClassName}
        onClick={() => setActiveTab(activeTabIndex)}
      >
        <div className="ps-4">
          <i className={iconClassName}></i>&ensp;{label}
        </div>
      </button>
    </>
  );
}

export default SidebarBtn;