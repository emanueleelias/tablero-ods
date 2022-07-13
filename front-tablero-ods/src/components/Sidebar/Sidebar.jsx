import { useState } from "react";
import { BiMoon, BiSun, BiChevronLeft, BiLayout, BiCollection, BiCalendarStar, BiPackage, BiSliderAlt, BiUser } from "react-icons/bi";
import "./sidebar.scss";

const Sidebar = () => {

  const [isShrinkView, setIsShrinkView] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark" ? true : false);

  const handleSidebarView = () => {
    setIsShrinkView(!isShrinkView);
  };

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  const itemsList = [
    {icon: <BiLayout className='sidebar-listIcon' />, name: "Dashboard"}, 
    {icon: <BiCollection className="sidebar-listIcon" />, name: "Inbox"},
    {icon: <BiCalendarStar className="sidebar-listIcon" />, name: "Calendar"},
    {icon: <BiPackage className="sidebar-listIcon" />, name: "Activity"},
    {icon: <BiSliderAlt className="sidebar-listIcon" />, name: "Settings"}
]

  return (
    <div className={`sidebar-container${isShrinkView ? " shrink" : ""}`}>
      <button
        className="sidebar-viewButton"
        type="button"
        aria-label={isShrinkView ? "Expand Sidebar" : "Shrink Sidebar"}
        title={isShrinkView ? "Expand" : "Shrink"}
        onClick={handleSidebarView}
      >
        <BiChevronLeft />
      </button>

      <div className="sidebar-wrapper">
        <div className="sidebar-themeContainer">
          <label
            htmlFor="theme-toggle"
            className={`sidebar-themeLabel${isDarkMode ? " switched" : ""}`}
          >
            <input
              className="sidebar-themeInput"
              type="checkbox"
              id="theme-toggle"
              onChange={handleThemeChange}
            />
            <div className="sidebar-themeType light">
                <BiSun className="sidebar-listIcon" />
                <span className="sidebar-themeInputText">Light</span>
            </div>
            <div className="sidebar-themeType dark">
                <BiMoon className="sidebar-listIcon" />
                <span className="sidebar-themeInputText">Dark</span>
            </div>
          </label>
        </div>

        <ul className="sidebar-list">
            {itemsList.map( item => (
                <li key={item.name} className="sidebar-listItem active">
                    <a>
                        {item.icon}
                        <span className="sidebar-listItemText">{item.name}</span>
                    </a>
                </li>
            ) )}
        </ul>

        <div className="sidebar-profileSection">
            <BiUser className="sidebar-listIcon"/>
            <span>Monica Geller</span>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
