import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "../css/admin.layout.module.css";
import { useAuth } from "../context/AuthContext";

function AdminLayout() {
  const { authenticated, login, logout } = useAuth();
  const navigate = useNavigate();
  if (!authenticated) {
    navigate("/login");
  }

  useEffect(() => {
    document
      .getElementById("close_sidebar")
      .addEventListener("click", function () {
        document.getElementById("sidebar").classList.add("hide_sidebar");
      });

    /* Mobile Sidebar */
    document
      .getElementById("mobile_menu")
      .addEventListener("click", function () {
        document.getElementById("sidebar").classList.remove("hide_sidebar");
      });

    // document.addEventListener("DOMContentLoaded", function () {
    var mainNavs = document.getElementsByClassName("mainNavItem");
    for (var i = 0; i < mainNavs.length; i++) {
      mainNavs[i].addEventListener("click", function () {
        var itemToHide = this.nextElementSibling;
        console.log(itemToHide);
        this.classList.toggle("active");
        itemToHide.classList.toggle("hideItem");
      });
    }
    // });
  });

  return (
    <div className="" id="main">
      <div id="sidebar" className="hide_sidebar">
        <div id="logo_container">
          <a href="#">
            <img src="./logo.avif" width="100" height="100" alt="" />
          </a>
        </div>
        <div id="close_sidebar">
          <span className="material-symbols-outlined" id="close_sidebar">
            close
          </span>
        </div>
        <ul>
          {/* <!--MAIN ITEM 1--> */}
          <li className="mainNavItem">
            <div>
              <span>ITEM 1</span>
              <span className="material-symbols-outlined"> expand_more </span>
            </div>
          </li>
          <div className="sub hideItem">
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

          {/* <!--MAIN ITEM 2--> */}
          <li className="mainNavItem">
            <div>
              <span>ITEM 2</span>
              <span className="material-symbols-outlined"> expand_more </span>
            </div>
          </li>
          <div className="sub hideItem">
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

          {/* <!--MAIN ITEM 3--> */}
          <li className="mainNavItem">
            <div>
              <span>ITEM 3</span>
              <span className="material-symbols-outlined"> expand_more </span>
            </div>
          </li>
          <div className="sub hideItem">
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

          {/* <!--MAIN ITEM 4--> */}
          <li className="mainNavItem">
            <div>
              <span>ITEM 4</span>
              <span className="material-symbols-outlined"> expand_more </span>
            </div>
          </li>
          <div className="sub hideItem">
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
      <div id="main_content">
        {/* <!-- <span className="material-symbols-outlined" id="mobile_menu"> menu </span> --> */}
        <div id="main_content_header">
          <span className="material-symbols-outlined" id="mobile_menu">
            view_comfy_alt
          </span>
          <div id="action_controls">
            <div id="profile">
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
        {/* CONTENTS WILL GO HERE */}
        <div id="content_container">
          <div id="content">
            <Outlet />
          </div>
          <div id="main_footer">
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
