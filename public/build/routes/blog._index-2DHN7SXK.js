import {
  listado_posts_default
} from "/build/_shared/chunk-RFYMCKH6.js";
import "/build/_shared/chunk-MXRNDEPG.js";
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

// empty-module:~/models/posts.server
var require_posts = __commonJS({
  "empty-module:~/models/posts.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/blog._index.jsx
var import_posts = __toESM(require_posts());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\blog._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\blog._index.jsx"
  );
  import.meta.hot.lastModified = "1697070393081.2126";
}
function meta() {
  return [{
    title: "GuitarLA - Nuestro Blog",
    descripcion: "Guitarras, blog de musica y venta de guitarras"
  }];
}
function Blog() {
  _s();
  const posts = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(listado_posts_default, { posts }, void 0, false, {
    fileName: "app/routes/blog._index.jsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s(Blog, "rS0svS2rd/CL+3YJKDM/pDuPDGo=", false, function() {
  return [useLoaderData];
});
_c = Blog;
var blog_index_default = Blog;
var _c;
$RefreshReg$(_c, "Blog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  blog_index_default as default,
  meta
};
//# sourceMappingURL=/build/routes/blog._index-2DHN7SXK.js.map
