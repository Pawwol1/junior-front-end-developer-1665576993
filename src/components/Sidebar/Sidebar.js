import React from 'react';
import sidebarData, { sidebarIcons } from './SidebarData';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar__title">YOUR TASKS</h1>
      <div className="sidebar__separator" />
      <ul className="sidebar__list">
        {sidebarData.map((task, id) => {
          return (
            <li key={id} className={`sidebar__list-el ${task.status}`}>
              {sidebarIcons.map(
                (icon) =>
                  task.status === icon.status && (
                    <img key={icon.url} src={icon.url} alt="" />
                  )
              )}
              {task.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
