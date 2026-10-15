"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=o(function(y,q){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),a=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),v=require('@stdlib/ndarray-base-data-buffer/dist'),x=require('@stdlib/blas-ext-base-zwxmy/dist').ndarray;function f(e){var r=e[0],i=e[1],t=e[2];return x(d(r,0),v(r),a(r,0),u(r),v(i),a(i,0),u(i),v(t),a(t,0),u(t)),t}q.exports=f
});var c=require("path").join,g=require('@stdlib/utils-try-require/dist'),j=require('@stdlib/assert-is-error/dist'),p=s(),n,m=g(c(__dirname,"./native.js"));j(m)?n=p:n=m;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
