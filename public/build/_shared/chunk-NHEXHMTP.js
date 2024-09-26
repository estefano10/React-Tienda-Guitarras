import {
  Link
} from "/build/_shared/chunk-QFDPI2QQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-BZJ5NWMX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/guitarra.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\guitarra.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\guitarra.jsx"
  );
  import.meta.hot.lastModified = "1695057692072.5137";
}
function Guitarra({
  guitarra
}) {
  const {
    descripcion,
    imagen,
    precio,
    url,
    nombre
  } = guitarra;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imagen.data.attributes.formats.medium.url, alt: `Imagen Guitarra ${nombre}` }, void 0, false, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: nombre }, void 0, false, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "descripcion", children: descripcion }, void 0, false, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "precio", children: [
        "$",
        precio
      ] }, void 0, true, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "enlace", to: `/guitarras/${url}`, children: "Ver Producto " }, void 0, false, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/guitarra.jsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = Guitarra;
var guitarra_default = Guitarra;
var _c;
$RefreshReg$(_c, "Guitarra");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/listado-guitarras.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\listado-guitarras.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\listado-guitarras.jsx"
  );
  import.meta.hot.lastModified = "1695962816733.1506";
}
function ListadoGuitarras({
  guitarras
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "heading", children: "Nuestra Coleccion" }, void 0, false, {
      fileName: "app/components/listado-guitarras.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    guitarras.length && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "guitarras-grid", children: guitarras == null ? void 0 : guitarras.map((guitarra) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(guitarra_default, { guitarra: guitarra == null ? void 0 : guitarra.attributes }, guitarra == null ? void 0 : guitarra.id, false, {
      fileName: "app/components/listado-guitarras.jsx",
      lineNumber: 29,
      columnNumber: 49
    }, this)) }, void 0, false, {
      fileName: "app/components/listado-guitarras.jsx",
      lineNumber: 28,
      columnNumber: 34
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/listado-guitarras.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = ListadoGuitarras;
var listado_guitarras_default = ListadoGuitarras;
var _c2;
$RefreshReg$(_c2, "ListadoGuitarras");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  listado_guitarras_default
};
//# sourceMappingURL=/build/_shared/chunk-NHEXHMTP.js.map
