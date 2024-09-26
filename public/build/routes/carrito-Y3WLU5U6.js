import {
  useOutletContext
} from "/build/_shared/chunk-QFDPI2QQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-BZJ5NWMX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/carrito.jsx
var import_react = __toESM(require_react());

// app/styles/carrito.css
var carrito_default = "/build/_assets/carrito-KG4QTHZL.css";

// app/routes/carrito.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\carrito.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\carrito.jsx"
  );
}
function links() {
  return [{
    rel: "stylesheet",
    href: carrito_default
  }];
}
function meta() {
  return [{
    title: "GuitarLa- Carito de compras",
    description: "Venta de guitarras, musica, blog, carrito de compras, tienda"
  }];
}
function Carrito() {
  _s();
  const [total, setTotal] = (0, import_react.useState)(0);
  const {
    carrito,
    actualizarCantidad
  } = useOutletContext();
  (0, import_react.useEffect)(() => {
    const calculoTotal = carrito.reduce((total2, producto) => total2 + producto.cantidad * producto.precio, 0);
    setTotal(calculoTotal);
  }, [carrito]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "contenedor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "heading", children: "Carrito de Compras" }, void 0, false, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carrito", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Articulos" }, void 0, false, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 52,
          columnNumber: 17
        }, this),
        carrito.length === 0 ? "Carrito Vacio" : carrito.map((producto) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "producto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: producto.imagen, alt: `Imagen del producto ${producto.nombre}` }, void 0, false, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 56,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 55,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "nombre", children: producto.nombre }, void 0, false, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 60,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Cantidad: " }, void 0, false, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 61,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: producto.cantidad, className: "select", onChange: (e) => actualizarCantidad({
              cantidad: +e.target.value,
              id: producto.id
            }), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", children: "1" }, void 0, false, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 68,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "2", children: "2" }, void 0, false, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 69,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "3", children: "3" }, void 0, false, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 70,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "4", children: "4" }, void 0, false, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 71,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "5", children: "5" }, void 0, false, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 72,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 63,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "precio", children: [
              "$",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: producto.precio }, void 0, false, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 75,
                columnNumber: 56
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 75,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "subtotal", children: [
              "Subtotal: $",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: producto.precio * producto.cantidad }, void 0, false, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 76,
                columnNumber: 68
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 76,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 59,
            columnNumber: 29
          }, this)
        ] }, producto.id, true, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 54,
          columnNumber: 83
        }, this))
      ] }, void 0, true, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "resumen", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Resumen del Pedido" }, void 0, false, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 83,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Total a pagar: $",
          total
        ] }, void 0, true, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 84,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 82,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 50,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/carrito.jsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s(Carrito, "Lc1Sc/a+xfCn3ngyFurKOBTa+J0=", false, function() {
  return [useOutletContext];
});
_c = Carrito;
var carrito_default2 = Carrito;
var _c;
$RefreshReg$(_c, "Carrito");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  carrito_default2 as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/carrito-Y3WLU5U6.js.map
