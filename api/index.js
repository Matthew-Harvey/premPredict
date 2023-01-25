var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_auth0_react = require("@auth0/auth0-react"), import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-6PIQBFIE.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "premPredict",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_auth0_react.Auth0Provider,
      {
        domain: "prempredict.eu.auth0.com",
        clientId: "NZMInCJMbT9JJznZkoJCCDE1V5D0bjlB",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 36,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 37,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 38,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 39,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  Profile: () => Profile,
  loader: () => loader
});
var import_auth0_react2 = require("@auth0/auth0-react"), import_node = require("@remix-run/node"), import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
async function loader() {
  return (0, import_node.json)({});
}
var Profile = () => {
  let load_data = (0, import_react3.useLoaderData)(), { user, isAuthenticated } = (0, import_auth0_react2.useAuth0)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row align-items-center profile-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "col-md-2 mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "img",
        {
          src: user == null ? void 0 : user.picture,
          alt: "Profile",
          className: "rounded-circle img-fluid profile-picture mb-3 mb-md-0"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/profile.tsx",
          lineNumber: 19,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "col-md text-center text-md-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: user == null ? void 0 : user.name }, void 0, !1, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "lead text-muted", children: user == null ? void 0 : user.email }, void 0, !1, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("pre", { className: "col-12 text-light bg-dark p-4", children: JSON.stringify(user, null, 2) }, void 0, !1, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader2
});
var import_auth0_react5 = require("@auth0/auth0-react"), import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react"), tf = __toESM(require("@tensorflow/tfjs"));

// app/comps/load.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Load() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { role: "status", className: "flex h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "m-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { "aria-hidden": "true", className: "w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }, void 0, !1, {
        fileName: "app/comps/load.tsx",
        lineNumber: 7,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentFill" }, void 0, !1, {
        fileName: "app/comps/load.tsx",
        lineNumber: 8,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/comps/load.tsx",
      lineNumber: 6,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Loading..." }, void 0, !1, {
      fileName: "app/comps/load.tsx",
      lineNumber: 10,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/comps/load.tsx",
    lineNumber: 5,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/comps/load.tsx",
    lineNumber: 4,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/comps/load.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/comps/loginbutton.tsx
var import_auth0_react3 = require("@auth0/auth0-react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), LoginButton = () => {
  let { loginWithPopup } = (0, import_auth0_react3.useAuth0)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { onClick: () => loginWithPopup(), children: "Log In" }, void 0, !1, {
    fileName: "app/comps/loginbutton.tsx",
    lineNumber: 7,
    columnNumber: 10
  }, this);
}, loginbutton_default = LoginButton;

// app/comps/logoutbutton.tsx
var import_auth0_react4 = require("@auth0/auth0-react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), LogoutButton = () => {
  let { logout } = (0, import_auth0_react4.useAuth0)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "button",
    {
      onClick: () => logout(),
      children: "Log Out"
    },
    void 0,
    !1,
    {
      fileName: "app/comps/logoutbutton.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  );
}, logoutbutton_default = LogoutButton;

// app/comps/nav.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Navbar({ params }) {
  let param = JSON.parse(params);
  return console.log(param.user, param.auth), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "navbar sticky top-0 bg-white z-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "navbar-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "dropdown", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { tabIndex: 0, className: "btn btn-ghost lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h8m-8 6h16" }, void 0, !1, {
          fileName: "app/comps/nav.tsx",
          lineNumber: 13,
          columnNumber: 131
        }, this) }, void 0, !1, {
          fileName: "app/comps/nav.tsx",
          lineNumber: 13,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/comps/nav.tsx",
          lineNumber: 12,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { tabIndex: 0, className: "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "btn btn-ghost", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "/predict", children: "Predict" }, void 0, !1, {
            fileName: "app/comps/nav.tsx",
            lineNumber: 16,
            columnNumber: 55
          }, this) }, void 0, !1, {
            fileName: "app/comps/nav.tsx",
            lineNumber: 16,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/comps/nav.tsx",
            lineNumber: 16,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "btn btn-ghost", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "/fixtures", children: "Fixtures" }, void 0, !1, {
            fileName: "app/comps/nav.tsx",
            lineNumber: 17,
            columnNumber: 55
          }, this) }, void 0, !1, {
            fileName: "app/comps/nav.tsx",
            lineNumber: 17,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/comps/nav.tsx",
            lineNumber: 17,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "btn btn-ghost", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "/results", children: "Results" }, void 0, !1, {
            fileName: "app/comps/nav.tsx",
            lineNumber: 18,
            columnNumber: 55
          }, this) }, void 0, !1, {
            fileName: "app/comps/nav.tsx",
            lineNumber: 18,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/comps/nav.tsx",
            lineNumber: 18,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "btn btn-ghost", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "/table", children: "Table" }, void 0, !1, {
            fileName: "app/comps/nav.tsx",
            lineNumber: 19,
            columnNumber: 55
          }, this) }, void 0, !1, {
            fileName: "app/comps/nav.tsx",
            lineNumber: 19,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/comps/nav.tsx",
            lineNumber: 19,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/comps/nav.tsx",
          lineNumber: 15,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/comps/nav.tsx",
        lineNumber: 11,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "btn btn-ghost normal-case text-xl", href: "/", children: "premPredict" }, void 0, !1, {
        fileName: "app/comps/nav.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/comps/nav.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "navbar-center hidden lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "menu menu-horizontal px-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "btn btn-ghost", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "/predict", children: "Predict" }, void 0, !1, {
        fileName: "app/comps/nav.tsx",
        lineNumber: 26,
        columnNumber: 55
      }, this) }, void 0, !1, {
        fileName: "app/comps/nav.tsx",
        lineNumber: 26,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/comps/nav.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "btn btn-ghost", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "/fixtures", children: "Fixtures" }, void 0, !1, {
        fileName: "app/comps/nav.tsx",
        lineNumber: 27,
        columnNumber: 55
      }, this) }, void 0, !1, {
        fileName: "app/comps/nav.tsx",
        lineNumber: 27,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/comps/nav.tsx",
        lineNumber: 27,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "btn btn-ghost", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "/results", children: "Results" }, void 0, !1, {
        fileName: "app/comps/nav.tsx",
        lineNumber: 28,
        columnNumber: 55
      }, this) }, void 0, !1, {
        fileName: "app/comps/nav.tsx",
        lineNumber: 28,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/comps/nav.tsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "btn btn-ghost", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "/table", children: "Table" }, void 0, !1, {
        fileName: "app/comps/nav.tsx",
        lineNumber: 29,
        columnNumber: 55
      }, this) }, void 0, !1, {
        fileName: "app/comps/nav.tsx",
        lineNumber: 29,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/comps/nav.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/comps/nav.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/comps/nav.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "navbar-end", children: param.auth ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: param.user.picture, alt: "pfp", className: "rounded-full m-2 w-8 h-8" }, void 0, !1, {
        fileName: "app/comps/nav.tsx",
        lineNumber: 39,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(logoutbutton_default, {}, void 0, !1, {
        fileName: "app/comps/nav.tsx",
        lineNumber: 40,
        columnNumber: 23
      }, this)
    ] }, void 0, !0, {
      fileName: "app/comps/nav.tsx",
      lineNumber: 38,
      columnNumber: 19
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(loginbutton_default, {}, void 0, !1, {
      fileName: "app/comps/nav.tsx",
      lineNumber: 35,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/comps/nav.tsx",
      lineNumber: 34,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/comps/nav.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/comps/nav.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
async function loader2() {
  var _a;
  let options = {
    method: "GET",
    headers: {
      "X-Auth-Token": (_a = process.env.PUBLIC_FOOTBALL_API_KEY) == null ? void 0 : _a.toString()
    }
  }, fantasty_stats_return = await (await fetch("https://fantasy.premierleague.com/api/bootstrap-static/")).json(), standings_return = await (await fetch("https://api.football-data.org/v4/competitions/PL/standings", options)).json(), matches_return = await (await fetch("https://api.football-data.org/v4/competitions/PL/matches", options)).json();
  return (0, import_node2.json)({ date: new Date(), matches: matches_return, fantasy: fantasty_stats_return, standings: standings_return });
}
function sortFunctionHigh(a, b) {
  return new Date(a[1]) === new Date(b[1]) ? 0 : new Date(a[1]) > new Date(b[1]) ? -1 : 1;
}
function sortFunctionLow(a, b) {
  return new Date(a[1]) === new Date(b[1]) ? 0 : new Date(a[1]) < new Date(b[1]) ? -1 : 1;
}
function Index() {
  let load_data = (0, import_react4.useLoaderData)();
  console.log(load_data);
  let fixtures = [], results = [];
  for (let match in load_data.matches.matches)
    load_data.matches.matches[match].status.toUpperCase() == "FINISHED" ? results.push([load_data.matches.matches[match], load_data.matches.matches[match].utcDate]) : new Date() < new Date(load_data.matches.matches[match].utcDate) && fixtures.push([load_data.matches.matches[match], load_data.matches.matches[match].utcDate]);
  fixtures = fixtures.sort(sortFunctionLow), results = results.sort(sortFunctionHigh);
  let overall_table = [];
  for (let team in load_data.standings.standings[0].table)
    overall_table.push(load_data.standings.standings[0].table[team]);
  let predict = (data2) => {
    let weights = tf.tensor([2.5, 0.01]);
    return data2.dot(weights);
  }, infectedPeople = [2, 5, 12, 30], infectedCountries = [1, 1, 4, 5], data = tf.tensor([infectedPeople[1], infectedCountries[1]]), prediction = predict(data), { isLoading, isAuthenticated, user } = (0, import_auth0_react5.useAuth0)(), sendparam = JSON.stringify({ auth: isAuthenticated, user });
  return isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Load, {}, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 89,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 88,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Navbar, { params: sendparam }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "hero bg-base-200 my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "hero-content text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: load_data.matches.competition.emblem, alt: "League Emblem", className: "m-auto justify-center w-40" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 99,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-5xl font-bold", children: [
        load_data.matches.competition.name,
        " Predictions"
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 100,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "py-6", children: [
        "Predicted next day infections... infected people: ",
        data.dataSync()[0],
        ", infected countries ",
        data.dataSync()[1],
        ", prediction: ",
        prediction.dataSync()[0]
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 101,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 98,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 97,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "m-auto justify-center text-2xl font-semibold text-center", children: "Results" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 108,
          columnNumber: 15
        }, this),
        results.map((result) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "grid grid-cols-3 my-4 max-w-xl m-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: result[0].homeTeam.crest, alt: "Team Emblem", className: "m-auto justify-center w-10" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 111,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "m-auto justify-center text-center", children: [
              result[0].score.fullTime.home,
              " - ",
              result[0].score.fullTime.away
            ] }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 113,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "m-auto justify-center text-center", children: new Intl.DateTimeFormat("en-GB").format(new Date(result[1].toString())) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 114,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 112,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: result[0].awayTeam.crest, alt: "Team Emblem", className: "m-auto justify-center w-10" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 116,
            columnNumber: 19
          }, this)
        ] }, result[0].id, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 110,
          columnNumber: 17
        }, this))
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "m-auto justify-center text-2xl font-semibold text-center", children: "Fixtures" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 121,
          columnNumber: 15
        }, this),
        fixtures.map((fixture) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "grid grid-cols-3 my-4 max-w-xl m-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: fixture[0].homeTeam.crest, alt: "Team Emblem", className: "m-auto justify-center w-10" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 124,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "m-auto justify-center text-center", children: " - " }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 126,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "m-auto justify-center text-center", children: new Intl.DateTimeFormat("en-GB").format(new Date(fixture[1].toString())) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 127,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 125,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: fixture[0].awayTeam.crest, alt: "Team Emblem", className: "m-auto justify-center w-10" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 129,
            columnNumber: 19
          }, this)
        ] }, fixture[0].id, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 123,
          columnNumber: 17
        }, this))
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "m-auto justify-center text-2xl font-semibold text-center", children: "Table" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this),
        overall_table.map((pos) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "grid grid-cols-3 my-4 max-w-xl m-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "m-auto justify-center", children: pos.position }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 137,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: pos.team.crest, alt: "Team Emblem", className: "m-auto justify-center w-10" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 138,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "m-auto justify-center", children: pos.points }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 139,
            columnNumber: 19
          }, this)
        ] }, pos.team.id, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 136,
          columnNumber: 17
        }, this))
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 106,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 94,
    columnNumber: 7
  }, this);
}

// app/routes/table.tsx
var table_exports = {};
__export(table_exports, {
  default: () => Index2,
  loader: () => loader3
});
var import_auth0_react6 = require("@auth0/auth0-react"), import_node3 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
async function loader3() {
  var _a;
  let options = {
    method: "GET",
    headers: {
      "X-Auth-Token": (_a = process.env.PUBLIC_FOOTBALL_API_KEY) == null ? void 0 : _a.toString()
    }
  }, fantasty_stats_return = await (await fetch("https://fantasy.premierleague.com/api/bootstrap-static/")).json(), standings_return = await (await fetch("https://api.football-data.org/v4/competitions/PL/standings", options)).json(), matches_return = await (await fetch("https://api.football-data.org/v4/competitions/PL/matches", options)).json();
  return (0, import_node3.json)({ date: new Date(), matches: matches_return, fantasy: fantasty_stats_return, standings: standings_return });
}
function Index2() {
  let load_data = (0, import_react5.useLoaderData)();
  console.log(load_data);
  let overall_table = [];
  for (let team in load_data.standings.standings[0].table)
    overall_table.push(load_data.standings.standings[0].table[team]);
  let { isLoading, isAuthenticated, user } = (0, import_auth0_react6.useAuth0)(), sendparam = JSON.stringify({ auth: isAuthenticated, user });
  return isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Load, {}, void 0, !1, {
    fileName: "app/routes/table.tsx",
    lineNumber: 65,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/table.tsx",
    lineNumber: 64,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Navbar, { params: sendparam }, void 0, !1, {
      fileName: "app/routes/table.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "max-w-6xl m-auto mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "m-auto justify-center text-2xl font-semibold text-center", children: "Table" }, void 0, !1, {
        fileName: "app/routes/table.tsx",
        lineNumber: 75,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { className: "grid grid-cols-4 my-4 max-w-xl m-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "m-auto justify-center", children: "Position" }, void 0, !1, {
          fileName: "app/routes/table.tsx",
          lineNumber: 77,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "m-auto justify-center", children: "Team" }, void 0, !1, {
          fileName: "app/routes/table.tsx",
          lineNumber: 78,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "m-auto justify-center", children: "Points" }, void 0, !1, {
          fileName: "app/routes/table.tsx",
          lineNumber: 79,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "m-auto justify-center", children: "Form" }, void 0, !1, {
          fileName: "app/routes/table.tsx",
          lineNumber: 80,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/table.tsx",
        lineNumber: 76,
        columnNumber: 17
      }, this),
      overall_table.map((pos) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { className: "grid grid-cols-4 my-4 max-w-xl m-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "m-auto justify-center", children: pos.position }, void 0, !1, {
          fileName: "app/routes/table.tsx",
          lineNumber: 84,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: pos.team.crest, alt: "Team Emblem", className: "m-auto justify-center w-10" }, void 0, !1, {
          fileName: "app/routes/table.tsx",
          lineNumber: 85,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "m-auto justify-center", children: pos.points }, void 0, !1, {
          fileName: "app/routes/table.tsx",
          lineNumber: 86,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "m-auto justify-center", children: pos.form }, void 0, !1, {
          fileName: "app/routes/table.tsx",
          lineNumber: 87,
          columnNumber: 21
        }, this)
      ] }, pos.team.id, !0, {
        fileName: "app/routes/table.tsx",
        lineNumber: 83,
        columnNumber: 19
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/table.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/table.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/table.tsx",
    lineNumber: 71,
    columnNumber: 7
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "8f76a588", entry: { module: "/build/entry.client-MTZEZ4NW.js", imports: ["/build/_shared/chunk-TF4HRXYO.js", "/build/_shared/chunk-4IYZMDEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-6B6GCU5D.js", imports: ["/build/_shared/chunk-FIBOST5T.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-7UV7Y55G.js", imports: ["/build/_shared/chunk-3TMSQRHY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile": { id: "routes/profile", parentId: "root", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/profile-QPS4HCGO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/table": { id: "routes/table", parentId: "root", path: "table", index: void 0, caseSensitive: void 0, module: "/build/routes/table-GSYPYR6W.js", imports: ["/build/_shared/chunk-3TMSQRHY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-8F76A588.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/table": {
    id: "routes/table",
    parentId: "root",
    path: "table",
    index: void 0,
    caseSensitive: void 0,
    module: table_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
