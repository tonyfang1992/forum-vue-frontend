(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c14f9"],{4601:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h1",[t._v(t._s(t.restaurant.name))]),a("p",[t._v("["+t._s(t.restaurant.Category.name)+"]")])]),a("hr"),a("div",{staticClass:"col-md-4"},[a("br"),a("div",{staticClass:"well"},[a("ul",{staticClass:"list-unstyled"},[a("li",[a("strong",[t._v("評論數: "+t._s(t.restaurant.Comments.length))])]),a("li",[a("strong",[t._v("瀏覽次數: "+t._s(t.restaurant.viewCounts))])]),t._m(0)])])]),a("div",{staticClass:"col-md-8"}),a("a",{attrs:{href:"#"},on:{click:function(e){return t.$router.back()}}},[t._v("回上一頁")])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("strong",[t._v("收藏數:")])])}],n=(a("96cf"),a("1da1")),c=a("c4c3"),i=a("2fa3"),o={data:function(){return{restaurant:[]}},created:function(){var t=this.$route.params.id;this.fetchdashboard(t)},methods:{fetchdashboard:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c["a"].getRestaurant({restaurantId:t});case 3:r=a.sent,s=r.data,n=r.statusText,console.log(s),console.log(n),e.restaurant=s.restaurant,a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),i["a"].fire({icon:"error",title:"現在無法取得詳細資料，請稍後再試"});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))()}}},u=o,l=a("2877"),d=Object(l["a"])(u,r,s,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0c14f9.e2e14faf.js.map