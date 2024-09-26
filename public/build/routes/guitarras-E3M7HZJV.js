import {
  guitarras_default
} from "/build/_shared/chunk-FGK7JUJP.js";
import {
  Outlet,
  useOutletContext
} from "/build/_shared/chunk-QFDPI2QQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-BZJ5NWMX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/guitarras.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\guitarras.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\guitarras.jsx"
  );
}
function links() {
  return [{
    rel: "stylesheet",
    href: guitarras_default
  }];
}
function Tienda() {
  _s();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context: useOutletContext() }, void 0, false, {
    fileName: "app/routes/guitarras.jsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/guitarras.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s(Tienda, "Rs4YI5kq4BSSMksQP+yCYpEjKVU=", false, function() {
  return [useOutletContext];
});
_c = Tienda;
var guitarras_default2 = Tienda;
var _c;
$RefreshReg$(_c, "Tienda");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  guitarras_default2 as default,
  links
};
//# sourceMappingURL=/build/routes/guitarras-E3M7HZJV.js.map
