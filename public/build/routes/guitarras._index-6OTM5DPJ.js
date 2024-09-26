import {
  listado_guitarras_default
} from "/build/_shared/chunk-NHEXHMTP.js";
import {
  require_guitarras
} from "/build/_shared/chunk-IKNDCZRE.js";
import {
  useLoaderData
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

// app/routes/guitarras._index.jsx
var import_guitarras = __toESM(require_guitarras());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\guitarras._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\guitarras._index.jsx"
  );
  import.meta.hot.lastModified = "1696628648426.4126";
}
function meta() {
  return [{
    title: "GuitarLA - Tienda de Guitarras"
  }, {
    description: "GuitarLA - Nuestra Coleccion de Guitarras"
  }];
}
function Tienda() {
  _s();
  const guitarras = useLoaderData();
  console.log(guitarras);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(listado_guitarras_default, { guitarras }, void 0, false, {
    fileName: "app/routes/guitarras._index.jsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(Tienda, "GxeMWyZJ8Xjwm+vFyfY6HC4Z+JE=", false, function() {
  return [useLoaderData];
});
_c = Tienda;
var guitarras_index_default = Tienda;
var _c;
$RefreshReg$(_c, "Tienda");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  guitarras_index_default as default,
  meta
};
//# sourceMappingURL=/build/routes/guitarras._index-6OTM5DPJ.js.map
