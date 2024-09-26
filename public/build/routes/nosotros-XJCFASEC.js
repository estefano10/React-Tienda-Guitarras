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

// public/img/nosotros.jpg
var nosotros_default = "/build/_assets/nosotros-55PFFMUZ.jpg";

// app/styles/nosotros.css
var nosotros_default2 = "/build/_assets/nosotros-NEKAOWKX.css";

// app/routes/nosotros.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\nosotros.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\nosotros.jsx"
  );
}
function meta() {
  return [{
    title: "GuitarLA-Sobre Nosotros"
  }, {
    description: "Venta de guitarras, blog de musica"
  }];
}
function links() {
  return [{
    rel: "stylesheet",
    href: nosotros_default2
  }, {
    rel: "preload",
    href: nosotros_default,
    as: "image"
  }];
}
function Nosotros() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "contenedor nosotros", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "heading", children: "Nosotros" }, void 0, false, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: nosotros_default, alt: "imagen nosotros" }, void 0, false, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, ex vitae pretium rhoncus, tortor dolor aliquam dui, nec consectetur nunc justo non dui. Nam ut suscipit ipsum. Integer vehicula vulputate eros, vel porttitor nulla ultricies a. Fusce ut commodo felis. Etiam eget nisl interdum, faucibus dolor eu, scelerisque risus. Pellentesque vel massa rhoncus, hendrerit quam at, imperdiet mi. Curabitur vel volutpat felis, vitae ullamcorper ex." }, void 0, false, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 49,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/nosotros.jsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_c = Nosotros;
var nosotros_default3 = Nosotros;
var _c;
$RefreshReg$(_c, "Nosotros");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  nosotros_default3 as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/nosotros-XJCFASEC.js.map
