/* Language files are published with a .wasm suffix (the host serves only web file types); point tesseract's fetches at them. */
var _qcFetch = self.fetch.bind(self);
self.fetch = function(u, o){ if (typeof u === "string" && /\.traineddata\.gz$/.test(u)) u += ".wasm"; return _qcFetch(u, o); };
importScripts("worker.min.js");
