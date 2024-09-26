import {
  require_posts
} from "/build/_shared/chunk-6YW4PO6Z.js";
import {
  blog_default
} from "/build/_shared/chunk-Q26XKGSQ.js";
import {
  formatearFecha
} from "/build/_shared/chunk-MXRNDEPG.js";
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

// app/routes/posts.$postUrl.jsx
var import_posts = __toESM(require_posts());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\posts.$postUrl.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\posts.$postUrl.jsx"
  );
}
function meta({
  data
}) {
  if (!data) {
    return [{
      title: "GuitarLA - Entrada No Encontrada",
      descripcion: `Guitarras, venta de guitarras, entrada no encontrada`
    }];
  }
  return [{
    title: `GuitarLA - ${data.data[0].attributes.titulo}`
  }, {
    descripcion: `Guitarras, venta de guitarras, entrada ${data.data[0].attributes.titulo}`
  }];
}
function links() {
  return [{
    rel: "stylesheet",
    href: blog_default
  }];
}
function Post() {
  _s();
  const post = useLoaderData();
  const {
    titulo,
    contenido,
    imagen,
    publishedAt
  } = post.data[0].attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "contenedor post mt-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "imagen", src: imagen.data.attributes.url, alt: `Imagen blog ${titulo}` }, void 0, false, {
      fileName: "app/routes/posts.$postUrl.jsx",
      lineNumber: 71,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: titulo }, void 0, false, {
        fileName: "app/routes/posts.$postUrl.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, false, {
        fileName: "app/routes/posts.$postUrl.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "texto", children: contenido }, void 0, false, {
        fileName: "app/routes/posts.$postUrl.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/posts.$postUrl.jsx",
      lineNumber: 72,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts.$postUrl.jsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}
_s(Post, "fZHiJAe/O1AbG9n0uZeka359gO0=", false, function() {
  return [useLoaderData];
});
_c = Post;
var _c;
$RefreshReg$(_c, "Post");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Post as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/posts.$postUrl-PFTFENI7.js.map
