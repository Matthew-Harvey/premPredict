/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Login from "./loginbutton";
import Logout from "./logoutbutton";

// @ts-ignore 
export default function Navbar({params}) {
    let param = JSON.parse(params);
    return (
        <div className="navbar sticky top-0 bg-white z-50">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="/predict"><button className="btn btn-ghost">Predict</button></a></li>
                <li><a href="/fixtures"><button className="btn btn-ghost">Fixtures</button></a></li>
                <li><a href="/results"><button className="btn btn-ghost">Results</button></a></li>
                <li><a href="/table"><button className="btn btn-ghost">Table</button></a></li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl" href="/">premPredict</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><a href="/predict"><button className="btn btn-ghost">Predict</button></a></li>
                <li><a href="/fixtures"><button className="btn btn-ghost">Fixtures</button></a></li>
                <li><a href="/results"><button className="btn btn-ghost">Results</button></a></li>
                <li><a href="/table"><button className="btn btn-ghost">Table</button></a></li>
            </ul>
          </div>
          <div className="navbar-end">
              {!param.user ? (
                  <div>
                    <Login />
                  </div>
                ) :
                  <div className="flex">
                      <img src={param.user.picture} alt="pfp" className="rounded-full m-2 w-8 h-8" />
                      <Logout />
                  </div>
              }
          </div>
        </div>
    )
}