!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var r,o=new(function(){function e(){}return e.prototype.JSXrender=function(e,n){for(var t,r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];if("string"!=typeof e){if("e"===e.name||"n"===e.name){console.log(e,n,r);var i=new e(n).render();return this.JSXProcessChildren(i,r).forEach(function(e){i.appendChild(e)}),i}return e()}return t=document.createElement(e),this.JSXProcessChildren(t,r).forEach(function(e){try{t.appendChild(e)}catch(n){console.log("Error inserting",e," : ",n)}}),n&&Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])}),t},e.prototype.JSXProcessChildren=function(e,n){var t=this,r=[];return n.forEach(function(n){var o;if("string"==typeof n)o=document.createTextNode(n);else{if(n instanceof Array){var i=t.JSXProcessChildren(e,n);return void(r=r.concat(i))}o=n}r.push(o)}),r},e.prototype.JSXLog=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];console.log(e),t.forEach(function(e){console.log("|-",e,typeof e)})},e}()),i=(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)});!function(){function e(e){return this.ContentTemplate=o.JSXrender("h1",null,"FooBar"),e.length>0&&(this.ContentTemplate=o.JSXrender("h1",null,e)),this}e.prototype.render=function(){return this.ContentTemplate}}();!function(){function e(e){console.log("props",e),this.props=e}e.prototype.render=function(){return o.JSXrender("div",null,o.JSXrender("h4",null,this.props.test))}}();var u=function(e){function n(n){return e.call(this,n)||this}return i(n,e),n.prototype.render=function(){return o.JSXrender("h2",null,this.Props.test)},n}(function(){function e(e){this.Props=e}return e.prototype.render=function(){},e}()),c=[{title:"one",link:"#"},{title:"two",link:"#"}].map(function(e){return o.JSXrender("li",null,o.JSXrender("a",{href:e.link},e.title))});console.log("MENU",c),document.body.appendChild(o.JSXrender("div",null,o.JSXrender("h1",{id:"title"},"Hello"),o.JSXrender("nav",null,o.JSXrender("ul",null,c)),o.JSXrender("section",null,o.JSXrender("h2",{test:"123"},"Section"),o.JSXrender(u,{test:"ree"}))))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTWEVuZ2luZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIkpTWEVuZ2luZSIsIkUiLCJKU1hyZW5kZXIiLCJ0YWciLCJhdHRycyIsImUiLCJjaGlsZHJlbiIsIl9pIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInJfMSIsInJlbmRlciIsInRoaXMiLCJKU1hQcm9jZXNzQ2hpbGRyZW4iLCJmb3JFYWNoIiwiTkNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJlcnIiLCJrZXlzIiwic2V0QXR0cmlidXRlIiwiX3RoaXMiLCJwcm9jZXNzZWRDaGlsZHJlbiIsImNoaWxkIiwiY05vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIkFycmF5IiwicHJvY2Vzc2VkQXJyYXkiLCJjb25jYXQiLCJwdXNoIiwiSlNYTG9nIiwiVGVtcGxhdGUiLCJDb250ZW50VGVtcGxhdGUiLCJPdGhlckNvbXBvbmVudCIsInByb3BzIiwidGVzdCIsInNyY19UZXN0Q29tcCIsIl9zdXBlciIsIlRlc3RDb21wIiwiX19leHRlbmRzIiwiUHJvcHMiLCJDb21wb25lbnRUZW1wbGF0ZSIsIm1lbnUiLCJ0aXRsZSIsImxpbmsiLCJtYXAiLCJpdGVtIiwiaHJlZiIsImJvZHkiLCJpZCJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBQUEsRUFBQSxHQUdBLFNBQUFDLEVBQUFDLEdBR0EsR0FBQUYsRUFBQUUsR0FDQSxPQUFBRixFQUFBRSxHQUFBQyxRQUdBLElBQUFDLEVBQUFKLEVBQUFFLEdBQUEsQ0FDQUcsRUFBQUgsRUFDQUksR0FBQSxFQUNBSCxRQUFBLElBVUEsT0FOQUksRUFBQUwsR0FBQU0sS0FBQUosRUFBQUQsUUFBQUMsSUFBQUQsUUFBQUYsR0FHQUcsRUFBQUUsR0FBQSxFQUdBRixFQUFBRCxRQUtBRixFQUFBUSxFQUFBRixFQUdBTixFQUFBUyxFQUFBVixFQUdBQyxFQUFBVSxFQUFBLFNBQUFSLEVBQUFTLEVBQUFDLEdBQ0FaLEVBQUFhLEVBQUFYLEVBQUFTLElBQ0FHLE9BQUFDLGVBQUFiLEVBQUFTLEVBQUEsQ0FBMENLLFlBQUEsRUFBQUMsSUFBQUwsS0FLMUNaLEVBQUFrQixFQUFBLFNBQUFoQixHQUNBLG9CQUFBaUIsZUFBQUMsYUFDQU4sT0FBQUMsZUFBQWIsRUFBQWlCLE9BQUFDLFlBQUEsQ0FBd0RDLE1BQUEsV0FFeERQLE9BQUFDLGVBQUFiLEVBQUEsY0FBaURtQixPQUFBLEtBUWpEckIsRUFBQXNCLEVBQUEsU0FBQUQsRUFBQUUsR0FFQSxHQURBLEVBQUFBLElBQUFGLEVBQUFyQixFQUFBcUIsSUFDQSxFQUFBRSxFQUFBLE9BQUFGLEVBQ0EsS0FBQUUsR0FBQSxpQkFBQUYsUUFBQUcsV0FBQSxPQUFBSCxFQUNBLElBQUFJLEVBQUFYLE9BQUFZLE9BQUEsTUFHQSxHQUZBMUIsRUFBQWtCLEVBQUFPLEdBQ0FYLE9BQUFDLGVBQUFVLEVBQUEsV0FBeUNULFlBQUEsRUFBQUssVUFDekMsRUFBQUUsR0FBQSxpQkFBQUYsRUFBQSxRQUFBTSxLQUFBTixFQUFBckIsRUFBQVUsRUFBQWUsRUFBQUUsRUFBQSxTQUFBQSxHQUFnSCxPQUFBTixF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dUIsSUFBTXZCLEtBS3BCLE9BUnVCNEIsRUFBQUQsRUFBQUQsR0FLbkJDLEVBQUE3QyxVQUFBaUIsT0FBQSxXQUNJLE9BQU9iLEVBQUFFLFVBQUEsVUFBS1ksS0FBSzZCLE1BQU1MLE9BRS9CRyxFQVJBLENBVkEsV0FFSSxTQUFBRyxFQUFZUCxHQUNSdkIsS0FBSzZCLE1BQVFOLEVBS3JCLE9BSElPLEVBQUFoRCxVQUFBaUIsT0FBQSxhQUdKK0IsRUFSQSxJQXNCSUMsRUFEWSxDQUFDLENBQUNDLE1BQU0sTUFBTUMsS0FBSyxLQUFLLENBQUNELE1BQU0sTUFBTUMsS0FBSyxNQUNyQ0MsSUFBSSxTQUFBQyxHQUFVLE9BQVNqRCxFQUFBRSxVQUFBLFVBQUlGLEVBQUFFLFVBQUEsS0FBR2dELEtBQU1ELEVBQUtGLE1BQU9FLEVBQUtILFVBQzFFcEMsUUFBUUMsSUFBSSxPQUFPa0MsR0FDbkIxQixTQUFTZ0MsS0FBS2pDLFlBQ2RsQixFQUFBRSxVQUFBLFdBQ0lGLEVBQUFFLFVBQUEsTUFBSWtELEdBQUcsU0FBTyxTQUNkcEQsRUFBQUUsVUFBQSxXQUNJRixFQUFBRSxVQUFBLFVBQ0syQyxJQUdUN0MsRUFBQUUsVUFBQSxlQUNJRixFQUFBRSxVQUFBLE1BQUlvQyxLQUFLLE9BQUssV0FDZHRDLEVBQUFFLFVBQUNxQyxFQUFRLENBQUNELEtBQUsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY2xhc3MgRSB7XG5cbiAgICAvLyBUT0RPOiBTcGxpdCBvdXQgZnVuY3Rpb25zIGZvciByZW5kZXJpbmcgY3VzdG9tIGNvbXBvbmVudHNcbiAgICAvLyB+VE9ET346IEhhbmRsaW5nIEF0dHJpYnV0ZXMgXG4gICAgSlNYcmVuZGVyKHRhZzphbnksYXR0cnM6YW55LCAuLi5jaGlsZHJlbjphbnkpIHsgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRhZylcblxuICAgICAgICB2YXIgZTogSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmKHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoIHRhZy5uYW1lID09PSAnZScgfHwgdGFnLm5hbWUgPT09ICduJykge1xuICAgICAgICAgICAgICAgIC8vVE9ETzogUGFzcyBpbiBpbm5lciB0ZXh0IG9yIG90aGVyIG9mIHRlbXBsYXRlc1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhZyxhdHRycyxjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgbGV0IHIgPSAobmV3IHRhZyhhdHRycykpLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuSlNYUHJvY2Vzc0NoaWxkcmVuKHIsY2hpbGRyZW4pLmZvckVhY2goTkNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgci5hcHBlbmRDaGlsZChOQ2hpbGQpO1xuICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhZygpO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIHZhciBQQ2hpbGRyZW4gPSB0aGlzLkpTWFByb2Nlc3NDaGlsZHJlbihlLGNoaWxkcmVuKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEJyZWFrIHRoaXMgb3V0IHQgZnVuY3R1b25cbiAgICAgICAgUENoaWxkcmVuLmZvckVhY2goIGMgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYylcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZS5hcHBlbmRDaGlsZChjKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbnNlcnRpbmdcIixjLFwiIDogXCIsZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICAvLyBjaGlsZHJlbi5mb3JFYWNoKCBjaGlsZCA9PiB7ICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICBsZXQgY05vZGU6IGFueTtcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwifC1cIixjaGlsZCx0eXBlb2YgY2hpbGQpO1xuICAgICAgICAvLyAgICAgaWYodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyAgICAgICAgIGNOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpO1xuICAgICAgICAvLyAgICAgfSBlbHNlIGlmKGNOb2RlIGluc3RhbmNlb2YgQXJyYXkpIHtcblxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBjTm9kZSA9IGNoaWxkO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJUWVBFT0YgQ1wiLCBjTm9kZSBpbnN0YW5jZW9mIEFycmF5KVxuICAgICAgICAvLyAgICAgZS5hcHBlbmRDaGlsZChjTm9kZSlcbiAgICAgICAgLy8gfSlcbiAgICAgICAgaWYoYXR0cnMpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLkpTWExvZyh0YWcsYXR0cnMsLi4uY2hpbGRyZW4pXG5cbiAgICAgICAgLy8gVE9ETzogQ3JlYXRlIGEgdkRPTSBzeXN0ZW0gZm9yIHRoaXMgaXNoLlxuICAgICAgICByZXR1cm4oZSk7XG4gICAgfSAgICBcbiAgICBKU1hQcm9jZXNzQ2hpbGRyZW4oZTogSFRNTEVsZW1lbnQsY2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIHByb2Nlc3NlZENoaWxkcmVuID0gW11cbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCggY2hpbGQgPT4geyAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGNOb2RlOiBhbnk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInwtXCIsY2hpbGQsdHlwZW9mIGNoaWxkKTtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihjaGlsZCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2Nlc3NlZEFycmF5ID0gdGhpcy5KU1hQcm9jZXNzQ2hpbGRyZW4oZSxjaGlsZCk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkQ2hpbGRyZW49cHJvY2Vzc2VkQ2hpbGRyZW4uY29uY2F0KHByb2Nlc3NlZEFycmF5KTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjTm9kZSA9IGNoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJQUk9DRVNTRUQgS0lEU1wiLHByb2Nlc3NlZENoaWxkcmVuKVxuICAgICAgICAgICAgLy8gcmV0dXJuKGNOb2RlKVxuICAgICAgICAgICAgcHJvY2Vzc2VkQ2hpbGRyZW4ucHVzaChjTm9kZSlcbiAgICAgICAgICAgIC8vIHJldHVybihlKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkQ2hpbGRyZW47XG4gICAgfVxuICAgIEpTWExvZyh0YWcsIGF0dHJzLCAuLi5jaGlsZHJlbikge1xuICAgICAgICBjb25zb2xlLmxvZyh0YWcpO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwifC1cIixjaGlsZCx0eXBlb2YgY2hpbGQpO1xuICAgICAgICB9KVxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IEU7IiwiLy8gYWxlcnQoXCJIZWxsbyFcIik7XG5cbmltcG9ydCBGaW4gZnJvbSAnLi90JztcbmltcG9ydCBFIGZyb20gJy4vSlNYRW5naW5lJztcbmRlY2xhcmUgbW9kdWxlIEpTWCB7XG4gICAgaW50ZXJmYWNlIEVsZW1lbnRDbGFzcyB7XG4gICAgICAgIHJlbmRlcjogYW55OyAgICAgIFxuICAgICAgICBwcm9wczogYW55OyAgXG4gICAgfVxuICAgIGludGVyZmFjZSBFbGVsZW50c0F0dHJpYnV0ZXNQcm9wZXJ0eSB7XG4gICAgICAgIHByb3BzO1xuICAgIH1cbiAgICBpbnRlcmZhY2UgSW50cmluc2ljRWxlbWVudHMge1xuXG4gICAgfVxuICAgIFxufVxuLy8gZGVjbGFyZSBmdW5jdGlvbiBPdGhlckNvbXBvbmVudChwcm9wOiB7bmFtZTogc3RyaW5nfSk7XG5cbi8vIGNvbnN0IEUgPSBuZXcgRW5naW5lKCk7XG5cbmludGVyZmFjZSBJVGVtcGxhdGUge1xuICAgIG5ldyAoKTogVGVtcGxhdGU7XG4gICAgcmVuZGVyKCk6IGFueTtcbn1cbmNsYXNzIFRlbXBsYXRlIHtcbiAgICBDb250ZW50VGVtcGxhdGU6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihlPzpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5Db250ZW50VGVtcGxhdGUgPSA8aDE+Rm9vQmFyPC9oMT5cbiAgICAgICAgaWYoZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLkNvbnRlbnRUZW1wbGF0ZSA9IDxoMT57ZX08L2gxPlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybih0aGlzLkNvbnRlbnRUZW1wbGF0ZSlcbiAgICB9XG59XG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFxuXG5mdW5jdGlvbiBNeUNvbXBvbmVudCAoKTogYW55IHtcbiAgICByZXR1cm4gPGgzPlRlc3QhPC9oMz5cbn1cbi8vIFRPRE86IEV4dGVuc2lvbiBDb21wb25lbnQgYmFzZSB0aGF0IGhhcyBhIGhhbmRsZSBvbiBjb25zdHJ1Y3Rpbmcgd2l0aCBjaGlsZCBpbm5lciBodG1sIGZvciBhIGN1c3RvbSBjb21wb25lbnRcbmNsYXNzIE90aGVyQ29tcG9uZW50IGltcGxlbWVudHMgSlNYLkVsZW1lbnRDbGFzc3tcbiAgICBwcm9wcztcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAvLyBzdXBlcihwcm9wcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJvcHNcIixwcm9wcyk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybig8ZGl2PjxoND57dGhpcy5wcm9wcy50ZXN0fTwvaDQ+PC9kaXY+KVxuICAgIH1cbn1cbi8vIGxldCBGaW5hbENvbXAgPSBuZXcgT3RoZXJDb21wb25lbnRcblxuXG5cblxuXG5cbmludGVyZmFjZSBJQ29tcG9uZW50VGVtcGxhdGUge1xuICAgIFByb3BzO1xuICAgIC8vIG9uSW5pdCgpO1xuICAgIHJlbmRlcigpO1xuICAgIC8vIG9uS2lsbCgpO1xufVxuXG5jbGFzcyBDb21wb25lbnRUZW1wbGF0ZSB7XG4gICAgUHJvcHM7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5Qcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG5cbiAgICB9XG59XG5cbmNsYXNzIFRlc3RDb21wIGV4dGVuZHMgQ29tcG9uZW50VGVtcGxhdGUge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTsgICAgICAgIFxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybig8aDI+e3RoaXMuUHJvcHMudGVzdH08L2gyPilcbiAgICB9XG59XG5cblxubGV0IG1lbnVJdGVtcyA9IFt7dGl0bGU6XCJvbmVcIixsaW5rOlwiI1wifSx7dGl0bGU6XCJ0d29cIixsaW5rOlwiI1wifV07XG5sZXQgbWVudSA9IG1lbnVJdGVtcy5tYXAoaXRlbSA9PiB7IHJldHVybiAoIDxsaT48YSBocmVmPXtpdGVtLmxpbmt9PntpdGVtLnRpdGxlfTwvYT48L2xpPiApfSlcbmNvbnNvbGUubG9nKFwiTUVOVVwiLG1lbnUpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChcbjxkaXY+XG4gICAgPGgxIGlkPVwidGl0bGVcIj5IZWxsbzwvaDE+XG4gICAgPG5hdj4gIFxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7bWVudX1cbiAgICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgyIHRlc3Q9XCIxMjNcIj5TZWN0aW9uPC9oMj4gICAgICAgIFxuICAgICAgICA8VGVzdENvbXAgdGVzdD1cInJlZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIDwvc2VjdGlvbj5cbjwvZGl2PilcblxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCg8RmluLz4pIl0sInNvdXJjZVJvb3QiOiIifQ==