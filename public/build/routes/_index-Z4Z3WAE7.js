import {
  listado_guitarras_default
} from "/build/_shared/chunk-NHEXHMTP.js";
import {
  require_posts
} from "/build/_shared/chunk-6YW4PO6Z.js";
import {
  blog_default
} from "/build/_shared/chunk-Q26XKGSQ.js";
import {
  listado_posts_default
} from "/build/_shared/chunk-RFYMCKH6.js";
import "/build/_shared/chunk-MXRNDEPG.js";
import {
  guitarras_default
} from "/build/_shared/chunk-FGK7JUJP.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:../models/guitarras.server
var require_guitarras = __commonJS({
  "empty-module:../models/guitarras.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:../models/curso.server
var require_curso = __commonJS({
  "empty-module:../models/curso.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_index.jsx
var import_guitarras = __toESM(require_guitarras());
var import_posts = __toESM(require_posts());
var import_curso = __toESM(require_curso());

// app/components/curso.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\curso.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\curso.jsx"
  );
  import.meta.hot.lastModified = "1696424277242.9197";
}
function Curso({
  curso
}) {
  const {
    contenido,
    imagen,
    titulo
  } = curso;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "curso", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { jsx: "true", children: `
            .curso{
                background-image:linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${imagen.data.attributes.url});
            }
        ` }, void 0, false, {
      fileName: "app/components/curso.jsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenedor curso-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "heading", children: titulo }, void 0, false, {
        fileName: "app/components/curso.jsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "texto", children: contenido }, void 0, false, {
        fileName: "app/components/curso.jsx",
        lineNumber: 39,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/curso.jsx",
      lineNumber: 37,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/curso.jsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/curso.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = Curso;
var _c;
$RefreshReg$(_c, "Curso");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/styles/curso.css
var curso_default = "/build/_assets/curso-46NNXVWH.css";

// app/routes/_index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.jsx"
  );
}
function meta() {
}
function links() {
  return [{
    rel: "stylesheet",
    href: guitarras_default
  }, {
    rel: "stylesheet",
    href: blog_default
  }, {
    rel: "stylesheet",
    href: curso_default
  }];
}
function Index() {
  _s();
  const {
    guitarras,
    posts,
    curso
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(listado_guitarras_default, { guitarras }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Curso, { curso: curso.attributes }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(listado_posts_default, { posts }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 77,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s(Index, "TOCJWDzAQ9kQwnSdL5BAoXAdeWg=", false, function() {
  return [useLoaderData];
});
_c2 = Index;
var index_default = Index;
var _c2;
$RefreshReg$(_c2, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  index_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/_index-Z4Z3WAE7.js.map
