import LoginButton from "./loginbutton";
import LogoutButton from "./logoutbutton";

export default function Navbar(avatar: any, isAuthenticated: any) {
    return (
        <div className="navbar sticky top-0 bg-white z-50">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="/predict">Predict</a></li>
                <li><a href="/fixtures">Fixtures</a></li>
                <li><a href="/results">Results</a></li>
                <li><a href="/table">Table</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl" href="/">premPredict</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><a href="/predict">Predict</a></li>
                <li><a href="/fixtures">Fixtures</a></li>
                <li><a href="/results">Results</a></li>
                <li><a href="/table">Table</a></li>
            </ul>
          </div>
          <div className="navbar-end">
              {!isAuthenticated ? (
                  <div>
                    <LoginButton />
                  </div>
                ) :
                  <div className="flex">
                      <img src={avatar} alt="pfp" className="rounded-full m-2 w-8 h-8" />
                      <LogoutButton />
                  </div>
              }
          </div>
        </div>
    )
}