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
var app_default = "/build/_assets/app-6MQVHQN4.css";

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
  }, fantasty_stats_return = await (await fetch("https://fantasy.premierleague.com/api/bootstrap-static/")).json(), standings_return = await (await fetch("https://api.football-data.org/v4/competitions/PL/standings", options)).json(), matches_return = await (await fetch("https://api.football-data.org/v4/competitions/PL/matches", options)).json();
  return (0, import_node.json)({ date: new Date(), matches: matches_return, fantasy: fantasty_stats_return, standings: standings_return });
}
function sortFunctionHigh(a, b) {
  return new Date(a[1]) === new Date(b[1]) ? 0 : new Date(a[1]) > new Date(b[1]) ? -1 : 1;
}
function sortFunctionLow(a, b) {
  return new Date(a[1]) === new Date(b[1]) ? 0 : new Date(a[1]) < new Date(b[1]) ? -1 : 1;
}
function Index() {
  let load_data = (0, import_react3.useLoaderData)();
  console.log(load_data);
  let fixtures = [], results = [];
  for (let match in load_data.matches.matches)
    load_data.matches.matches[match].status.toUpperCase() == "FINISHED" ? results.push([load_data.matches.matches[match], load_data.matches.matches[match].utcDate]) : fixtures.push([load_data.matches.matches[match], load_data.matches.matches[match].utcDate]);
  fixtures = fixtures.sort(sortFunctionLow), results = results.sort(sortFunctionHigh);
  let overall_table = [];
  for (let team in load_data.standings.standings[0].table)
    overall_table.push(load_data.standings.standings[0].table[team]);
  let predict = (data2) => {
    let weights = tf.tensor([2.5, 0.01]);
    return data2.dot(weights);
  }, infectedPeople = [2, 5, 12, 30], infectedCountries = [1, 1, 4, 5], data = tf.tensor([infectedPeople[1], infectedCountries[1]]), prediction = predict(data);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "navbar sticky top-0 bg-white z-50", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "navbar-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { tabIndex: 0, className: "btn btn-ghost lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h8m-8 6h16" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 81,
            columnNumber: 129
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { tabIndex: 0, className: "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/predict", children: "Predict" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 84,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 84,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/fixtures", children: "Fixtures" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 85,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 85,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/results", children: "Results" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 86,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 86,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/table", children: "Table" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 87,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 87,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 83,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "btn btn-ghost normal-case text-xl", href: "/", children: "premPredict" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "navbar-center hidden lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "menu menu-horizontal px-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/predict", children: "Predict" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 94,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 94,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/fixtures", children: "Fixtures" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 95,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/results", children: "Results" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 96,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 96,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/table", children: "Table" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 97,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 97,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "navbar-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "btn", children: "Get started" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hero bg-base-200 my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hero-content text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: load_data.matches.competition.emblem, alt: "League Emblem", className: "m-auto justify-center w-40" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-5xl font-bold", children: [
        load_data.matches.competition.name,
        " Predictions"
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 108,
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
        lineNumber: 109,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "btn btn-primary", children: "Get Started" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 110,
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
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "m-auto justify-center text-2xl font-semibold text-center", children: "Results" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 117,
          columnNumber: 13
        }, this),
        results.map((result) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "grid grid-cols-3 my-4 max-w-xl m-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: result[0].homeTeam.crest, alt: "Team Emblem", className: "m-auto justify-center w-10" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 120,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "m-auto justify-center text-center", children: [
              result[0].score.fullTime.home,
              " - ",
              result[0].score.fullTime.away
            ] }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 122,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "m-auto justify-center text-center", children: new Intl.DateTimeFormat("en-GB").format(new Date(result[1].toString())) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 123,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 121,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: result[0].awayTeam.crest, alt: "Team Emblem", className: "m-auto justify-center w-10" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, this)
        ] }, result[0].id, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 119,
          columnNumber: 15
        }, this))
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "m-auto justify-center text-2xl font-semibold text-center", children: "Fixtures" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 130,
          columnNumber: 13
        }, this),
        fixtures.map((fixture) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "grid grid-cols-3 my-4 max-w-xl m-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: fixture[0].homeTeam.crest, alt: "Team Emblem", className: "m-auto justify-center w-10" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 133,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "m-auto justify-center text-center", children: " - " }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 135,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "m-auto justify-center text-center", children: new Intl.DateTimeFormat("en-GB").format(new Date(fixture[1].toString())) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 136,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 134,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: fixture[0].awayTeam.crest, alt: "Team Emblem", className: "m-auto justify-center w-10" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 138,
            columnNumber: 17
          }, this)
        ] }, fixture[0].id, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 132,
          columnNumber: 15
        }, this))
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "m-auto justify-center text-2xl font-semibold text-center", children: "Table" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 143,
          columnNumber: 13
        }, this),
        overall_table.map((pos) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "grid grid-cols-3 my-4 max-w-xl m-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "m-auto justify-center", children: pos.position }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 146,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: pos.team.crest, alt: "Team Emblem", className: "m-auto justify-center w-10" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 147,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "m-auto justify-center", children: pos.points }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 148,
            columnNumber: 17
          }, this)
        ] }, pos.team.id, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 145,
          columnNumber: 15
        }, this))
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 142,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 115,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "7994c89c", entry: { module: "/build/entry.client-XCHZLFYJ.js", imports: ["/build/_shared/chunk-N4RF36SG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CGW6562X.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-JRXEAYLU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-7994C89C.js" };

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
