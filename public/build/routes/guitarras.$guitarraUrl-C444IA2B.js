import {
  require_guitarras
} from "/build/_shared/chunk-IKNDCZRE.js";
import "/build/_shared/chunk-FGK7JUJP.js";
import {
  useLoaderData,
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

// app/routes/guitarras.$guitarraUrl.jsx
var import_react = __toESM(require_react());
var import_guitarras = __toESM(require_guitarras());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\guitarras.$guitarraUrl.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\guitarras.$guitarraUrl.jsx"
  );
}
function meta({
  data
}) {
  if (!data || Object.keys(data).length === 0) {
    return [{
      title: "Guitarra No Encontrada"
    }, {
      descripcion: `Guitarras, venta de guitarras, guitarra no encontrada`
    }];
  }
  return [{
    title: `GuitarLA - ${data.data[0].attributes.nombre}`
  }, {
    descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
  }];
}
function Guitarra() {
  _s();
  const {
    agregarCarrito
  } = useOutletContext();
  const [cantidad, setCantidad] = (0, import_react.useState)("0");
  const guitarra = useLoaderData();
  const {
    nombre,
    descripcion,
    precio,
    imagen
  } = guitarra.data[0].attributes;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Debes seleccionar una cantidad");
      return;
    } else {
    }
    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    };
    agregarCarrito(guitarraSeleccionada);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "imagen", src: imagen.data.attributes.url, alt: "imagen guitarra" }, void 0, false, {
      fileName: "app/routes/guitarras.$guitarraUrl.jsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: nombre }, void 0, false, {
        fileName: "app/routes/guitarras.$guitarraUrl.jsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "texto", children: descripcion }, void 0, false, {
        fileName: "app/routes/guitarras.$guitarraUrl.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "precio", children: [
        "$",
        precio
      ] }, void 0, true, {
        fileName: "app/routes/guitarras.$guitarraUrl.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, className: "formulario", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "cantidad", children: "Cantidad" }, void 0, false, {
          fileName: "app/routes/guitarras.$guitarraUrl.jsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { onChange: (e) => setCantidad(parseInt(e.target.value)), id: "cantidad", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "-- Seleccione --" }, void 0, false, {
            fileName: "app/routes/guitarras.$guitarraUrl.jsx",
            lineNumber: 97,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", children: "1" }, void 0, false, {
            fileName: "app/routes/guitarras.$guitarraUrl.jsx",
            lineNumber: 98,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "2", children: "2" }, void 0, false, {
            fileName: "app/routes/guitarras.$guitarraUrl.jsx",
            lineNumber: 99,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "3", children: "3" }, void 0, false, {
            fileName: "app/routes/guitarras.$guitarraUrl.jsx",
            lineNumber: 100,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "4", children: "4" }, void 0, false, {
            fileName: "app/routes/guitarras.$guitarraUrl.jsx",
            lineNumber: 101,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "5", children: "5" }, void 0, false, {
            fileName: "app/routes/guitarras.$guitarraUrl.jsx",
            lineNumber: 102,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/guitarras.$guitarraUrl.jsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "submit", value: "Agregar al Carrito" }, void 0, false, {
          fileName: "app/routes/guitarras.$guitarraUrl.jsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/guitarras.$guitarraUrl.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/guitarras.$guitarraUrl.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/guitarras.$guitarraUrl.jsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
}
_s(Guitarra, "itq7AlFIVpII2lzQoh5/Z+668WE=", false, function() {
  return [useOutletContext, useLoaderData];
});
_c = Guitarra;
var guitarras_guitarraUrl_default = Guitarra;
var _c;
$RefreshReg$(_c, "Guitarra");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  guitarras_guitarraUrl_default as default,
  meta
};
//# sourceMappingURL=/build/routes/guitarras.$guitarraUrl-C444IA2B.js.map
