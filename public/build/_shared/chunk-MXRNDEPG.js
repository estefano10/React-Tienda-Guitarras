import {
  createHotContext
} from "/build/_shared/chunk-BZJ5NWMX.js";

// app/utils/helpers.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\helpers.js"
  );
  import.meta.hot.lastModified = "1695662358351.8176";
}
var formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

export {
  formatearFecha
};
//# sourceMappingURL=/build/_shared/chunk-MXRNDEPG.js.map
