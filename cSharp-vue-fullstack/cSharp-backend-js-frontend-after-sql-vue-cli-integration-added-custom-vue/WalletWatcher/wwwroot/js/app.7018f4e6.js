(function(){"use strict";var t={9135:function(t,n,e){var o=e(9242),r=e(3396);const i={class:"app"},c=(0,r._)("div",{class:"content"},null,-1);function a(t,n,e,o,a,u){const s=(0,r.up)("left-grid");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(s),c])}const u={class:"left-grid"};function s(t,n,e,o,i,c){const a=(0,r.up)("GridButtons");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(a,{onClick:c.testDatabaseConnection,text:"Test Sql Connection"},null,8,["onClick"]),(0,r.Wm)(a,{text:"Button 2"})])}var l=e(4161),f=e(7139);const v={class:"button"};function d(t,n,e,o,i,c){return(0,r.wg)(),(0,r.iD)("button",v,(0,f.zw)(e.text),1)}var p={props:["text"]},b=e(89);const h=(0,b.Z)(p,[["render",d],["__scopeId","data-v-f980ac72"]]);var g=h,m={data(){return{isSqlAvailable:!1,isFireBaseAvailable:!1}},components:{GridButtons:g},methods:{async testDatabaseConnection(){try{const t=await l.Z.get("https://localhost:7248/people");console.log("Connection test succeeded:",t.data),this.isSqlAvailable=!0}catch(t){console.error("Connection test failed:",t),this.isSqlAvailable=!1}}}};const w=(0,b.Z)(m,[["render",s],["__scopeId","data-v-0b03b196"]]);var O=w,_={components:{LeftGrid:O}};const y=(0,b.Z)(_,[["render",a]]);var x=y;const C=(0,o.ri)(x);C.mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,i){if(!o){var c=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],i=t[l][2];for(var a=!0,u=0;u<o.length;u++)(!1&i||c>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[u])}))?o.splice(u--,1):(a=!1,i<c&&(c=i));if(a){t.splice(l--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,i,c=o[0],a=o[1],u=o[2],s=0;if(c.some((function(n){return 0!==t[n]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(u)var l=u(e)}for(n&&n(o);s<c.length;s++)i=c[s],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(l)},o=self["webpackChunkvue_gamecollection_mpa"]=self["webpackChunkvue_gamecollection_mpa"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(9135)}));o=e.O(o)})();
//# sourceMappingURL=app.7018f4e6.js.map