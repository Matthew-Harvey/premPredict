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
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-7OKNAPF6.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
var import_node = require("@remix-run/node"), import_react3 = require("@remix-run/react"), tf = __toESM(require("@tensorflow/tfjs")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
async function loader() {
  var _a;
  let options = {
    method: "GET",
    headers: {
      "X-Auth-Token": (_a = process.env.PUBLIC_FOOTBALL_API_KEY) == null ? void 0 : _a.toString()
    }
  }, fantasty_stats_return = await (await fetch("https://fantasy.premierleague.com/api/bootstrap-static/")).json(), api_football_return = await (await fetch("https://api.football-data.org/v4/competitions/PL/matches", options)).json();
  return (0, import_node.json)({ date: new Date(), api_football: api_football_return, fantasy: fantasty_stats_return });
}
function Index() {
  let test = (0, import_react3.useLoaderData)();
  console.log(test);
  let predict = (data2) => {
    let weights = tf.tensor([2.5, 0.01]);
    return data2.dot(weights);
  }, infectedPeople = [2, 5, 12, 30], infectedCountries = [1, 1, 4, 5], data = tf.tensor([infectedPeople[1], infectedCountries[1]]), prediction = predict(data);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "navbar bg-base-100 sticky top-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "navbar-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { tabIndex: 0, className: "btn btn-ghost lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h8m-8 6h16" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 43,
            columnNumber: 129
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 43,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 42,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { tabIndex: 0, className: "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { children: "Item 1" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 46,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 46,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { tabIndex: 0, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "justify-between", children: [
                "Parent",
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "fill-current", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 50,
                  columnNumber: 127
                }, this) }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 50,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/index.tsx",
                lineNumber: 48,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "p-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { children: "Submenu 1" }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 53,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 53,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { children: "Submenu 2" }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 54,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 54,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/index.tsx",
                lineNumber: 52,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 47,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { children: "Item 3" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 57,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 57,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "btn btn-ghost normal-case text-xl", children: "premPredict" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "navbar-center hidden lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "menu menu-horizontal px-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { children: "Item 1" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 64,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { tabIndex: 0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { children: [
            "Parent",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "fill-current", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 68,
              columnNumber: 125
            }, this) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 68,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "p-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { children: "Submenu 1" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 71,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 71,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { children: "Submenu 2" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 72,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 72,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { children: "Item 3" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "navbar-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "btn", children: "Get started" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hero bg-base-200 my-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hero-content text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-5xl font-bold", children: [
        test.api_football.competition.name,
        " Predictions"
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "py-6", children: [
        "Predicted next day infections... infected people: ",
        data.dataSync()[0],
        ", infected countries ",
        data.dataSync()[1],
        ", prediction: ",
        prediction.dataSync()[0]
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "btn btn-primary", children: "Get Started" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: test.api_football.competition.emblem, alt: "League Emblem", className: "m-auto justify-center" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "d91733be", entry: { module: "/build/entry.client-XCHZLFYJ.js", imports: ["/build/_shared/chunk-N4RF36SG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-E5IADX6R.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-GUWI6ZS4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-D91733BE.js" };

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
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
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
