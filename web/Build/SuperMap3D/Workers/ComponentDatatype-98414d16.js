define(["exports","./when-92c6cf3c","./Check-52a7d806","./WebGLConstants-42651efd"],(function(e,r,t,n){"use strict";var a={BYTE:n.d.BYTE,UNSIGNED_BYTE:n.d.UNSIGNED_BYTE,SHORT:n.d.SHORT,UNSIGNED_SHORT:n.d.UNSIGNED_SHORT,INT:n.d.INT,UNSIGNED_INT:n.d.UNSIGNED_INT,FLOAT:n.d.FLOAT,DOUBLE:n.d.DOUBLE,getSizeInBytes:function(e){if(!r.e(e))throw new t.t("value is required.");switch(e){case a.BYTE:return Int8Array.BYTES_PER_ELEMENT;case a.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case a.SHORT:return Int16Array.BYTES_PER_ELEMENT;case a.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case a.INT:return Int32Array.BYTES_PER_ELEMENT;case a.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT;case a.FLOAT:return Float32Array.BYTES_PER_ELEMENT;case a.DOUBLE:return Float64Array.BYTES_PER_ELEMENT;default:throw new t.t("componentDatatype is not a valid value.")}},fromTypedArray:function(e){return e instanceof Int8Array?a.BYTE:e instanceof Uint8Array?a.UNSIGNED_BYTE:e instanceof Int16Array?a.SHORT:e instanceof Uint16Array?a.UNSIGNED_SHORT:e instanceof Int32Array?a.INT:e instanceof Uint32Array?a.UNSIGNED_INT:e instanceof Float32Array?a.FLOAT:e instanceof Float64Array?a.DOUBLE:void 0},validate:function(e){return r.e(e)&&(e===a.BYTE||e===a.UNSIGNED_BYTE||e===a.SHORT||e===a.UNSIGNED_SHORT||e===a.INT||e===a.UNSIGNED_INT||e===a.FLOAT||e===a.DOUBLE)},createTypedArray:function(e,n){if(!r.e(e))throw new t.t("componentDatatype is required.");if(!r.e(n))throw new t.t("valuesOrLength is required.");switch(e){case a.BYTE:return new Int8Array(n);case a.UNSIGNED_BYTE:return new Uint8Array(n);case a.SHORT:return new Int16Array(n);case a.UNSIGNED_SHORT:return new Uint16Array(n);case a.INT:return new Int32Array(n);case a.UNSIGNED_INT:return new Uint32Array(n);case a.FLOAT:return new Float32Array(n);case a.DOUBLE:return new Float64Array(n);default:throw new t.t("componentDatatype is not a valid value.")}},createArrayBufferView:function(e,n,E,N){if(!r.e(e))throw new t.t("componentDatatype is required.");if(!r.e(n))throw new t.t("buffer is required.");switch(E=r.u(E,0),N=r.u(N,(n.byteLength-E)/a.getSizeInBytes(e)),e){case a.BYTE:return new Int8Array(n,E,N);case a.UNSIGNED_BYTE:return new Uint8Array(n,E,N);case a.SHORT:return new Int16Array(n,E,N);case a.UNSIGNED_SHORT:return new Uint16Array(n,E,N);case a.INT:return new Int32Array(n,E,N);case a.UNSIGNED_INT:return new Uint32Array(n,E,N);case a.FLOAT:return new Float32Array(n,E,N);case a.DOUBLE:return new Float64Array(n,E,N);default:throw new t.t("componentDatatype is not a valid value.")}},fromName:function(e){switch(e){case"BYTE":return a.BYTE;case"UNSIGNED_BYTE":return a.UNSIGNED_BYTE;case"SHORT":return a.SHORT;case"UNSIGNED_SHORT":return a.UNSIGNED_SHORT;case"INT":return a.INT;case"UNSIGNED_INT":return a.UNSIGNED_INT;case"FLOAT":return a.FLOAT;case"DOUBLE":return a.DOUBLE;default:throw new t.t("name is not a valid value.")}}},E=Object.freeze(a);e.ComponentDatatype=E}));