import { Link, useLocation } from "react-router-dom"
import "./sidebar.css"
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material"
import { useState } from "react"

export default function Sidebar() {
  const location = useLocation().pathname

  return (
    <div className="flex h-[calc(100vh-50px)] bg-blue-200 overflow-y-scroll sticky top-12">
      <div className="sidebarWrapper px-4 text-gray-800">
        <div className="sidebarMenu mb-10">
          <h3 className="sidebarTitle text-sm font-semibold">Dashboard</h3>
          <ul className="mt-2">
            <Link to="/" className="link">
              <li
                className={`sidebarListItem ${
                  location === "/" ? "bg-gray-300" : ""
                }`}
              >
                <LineStyle className="sidebarIcon mr-2 w-6 h-6" />
                Home
              </li>
            </Link>
            <Link to="/analytic" className="link">
              <li
                className={`sidebarListItem ${
                  location === "/analytic" ? "bg-gray-300" : ""
                }`}
              >
                <Timeline className="sidebarIcon mr-2 w-6 h-6" />
                Analytics
              </li>
            </Link>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon mr-2 w-6 h-6" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle text-sm font-semibold">Master</h3>
          <ul className="mt-2">
            <Link to="/test" className="link">
              <li
                className={`sidebarListItem ${
                  location === "/test" ? "bg-gray-300" : ""
                }`}
              >
                <MailOutline className="sidebarIcon mr-2 w-6 h-6" />
                Test
              </li>
            </Link>
            <Link to="/units" className="link">
              <li
                className={`sidebarListItem ${
                  location === "/units" ? "bg-gray-300" : ""
                }`}
              >
                <LineStyle className="sidebarIcon mr-2 w-6 h-6" />
                Unit
              </li>
            </Link>
            <Link to="/menus" className="link">
              <li
                className={`sidebarListItem ${
                  location === "/menus" ? "bg-gray-300" : ""
                }`}
              >
                <LineStyle className="sidebarIcon mr-2 w-6 h-6" />
                Menu
              </li>
            </Link>
            <Link to="/indicators" className="link">
              <li
                className={`sidebarListItem ${
                  location === "/indicators" ? "bg-gray-300" : ""
                }`}
              >
                <LineStyle className="sidebarIcon mr-2 w-6 h-6" />
                Indicator
              </li>
            </Link>
            <Link to="/numerator-name" className="link">
              <li
                className={`sidebarListItem ${
                  location === "/numerator-name" ? "bg-gray-300" : ""
                }`}
              >
                <LineStyle className="sidebarIcon mr-2 w-6 h-6" />
                Indicator Numerator Name
              </li>
            </Link>
            <Link to="/denumeratro-name" className="link">
              <li
                className={`sidebarListItem ${
                  location === "/denumeratro-name" ? "bg-gray-300" : ""
                }`}
              >
                <LineStyle className="sidebarIcon mr-2 w-6 h-6" />
                Indicator Denumerator Name
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
