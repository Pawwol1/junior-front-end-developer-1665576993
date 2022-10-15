import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data, { sidebarIcons } from '../../data/data';
import './Sidebar.scss';

function Sidebar() {
  const [active, setActive] = useState(3);

  return (
    <div className="sidebar">
      <h2 className="sidebar__title">YOUR TASKS</h2>
      <div className="sidebar__separator" />
      <ul className="sidebar__list">
        {data.map((task, id) => {
          return (
            <li
              key={id}
              id={id}
              className={`sidebar__list-el ${
                task.status == 'blocked' && 'blocked'
              } ${active == id && 'active'}`}
              onClick={() => setActive(id)}
            >
              <Link to={`/${id}`}>
                {sidebarIcons.map(
                  (icon) =>
                    task.status === icon.status && (
                      <img key={icon.url} src={icon.url} alt="" />
                    )
                )}
                {task.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
