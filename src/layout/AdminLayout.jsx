import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "../css/admin.layout.module.css";

function AdminLayout() {
  const [sidebarHidden, setSidebarHidden] = useState(true);
  const [sidebarClose, setSidebarClose] = useState(true);

  function toggleSidebarMobile() {
    setSidebarHidden(!sidebarHidden);
  }
  function closeSidebar() {
    setSidebarClose(!sidebarClose);
  }

  return (
    <div className="" id={styles.main}>
      <div
        id={styles.sidebar}
        className={sidebarHidden ? styles.hide_sidebar : ""}
      >
        <div id={styles.logo_container}>
          <a href="#">
            <img src="./logo.avif" width="100" height="100" alt="" />
          </a>
        </div>
        <div id={styles.close_sidebar}>
          <span
            className="material-symbols-outlined"
            id={styles.close_sidebar}
            onClick={() => toggleSidebarMobile()}
          >
            close
          </span>
        </div>
        <ul>
          {/* MAIN ITEM 1 */}
          <li className={styles.mainNavItem}>
            <div>
              <span>ITEM 1</span>
              <span className="material-symbols-outlined"> expand_more </span>
            </div>
          </li>
          <div className={`${styles.sub} ${styles.hideItem}`}>
            <ul className="">
              <li>
                <a href="https:///www.google.com" target="_blank">
                  Google
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* MAIN ITEM 2 */}
          <li className={styles.mainNavItem}>
            <div>
              <span>ITEM 2</span>
              <span className="material-symbols-outlined"> expand_more </span>
            </div>
          </li>
          <div className={`${styles.sub} ${styles.hideItem}`}>
            <ul className="">
              <li>
                <a href="https:///www.google.com" target="_blank">
                  Google
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* MAIN ITEM 3 */}
          <li className={styles.mainNavItem}>
            <div>
              <span>ITEM 3</span>
              <span className="material-symbols-outlined"> expand_more </span>
            </div>
          </li>
          <div className={`${styles.sub} ${styles.hideItem}`}>
            <ul className="">
              <li>
                <a href="https:///www.google.com" target="_blank">
                  Google
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* MAIN ITEM 4 */}
          <li className={styles.mainNavItem}>
            <div>
              <span>ITEM 4</span>
              <span className="material-symbols-outlined"> expand_more </span>
            </div>
          </li>
          <div className={`${styles.sub} ${styles.hideItem}`}>
            <ul className="">
              <li>
                <a href="https:///www.google.com" target="_blank">
                  Google
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      <div id={styles.main_content}>
        {/* <span className="material-symbols-outlined" id="mobile_menu"> menu </span> */}
        <div id={styles.main_content_header}>
          <span
            className="material-symbols-outlined"
            id={styles.mobile_menu}
            onClick={() => toggleSidebarMobile()}
          >
            view_comfy_alt
          </span>
          <div id={styles.action_controls}>
            <div id={styles.profile}>
              <span>Profile</span>
              <div>
                <a href="#">
                  <span className="material-symbols-outlined"> logout </span>
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id={styles.content_container}>
          <div id={styles.content}>
            <h1>
              Main Content will occupy this
              placebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
              bbbbbbbbbbbbbbbbbbbbbbbbbbbb
            </h1>
          </div>
          <div id={styles.main_footer}>
            <footer>
              <span>
                Designed & Published By <em>Foster Amponsah Asante</em>
              </span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(AdminLayout);
