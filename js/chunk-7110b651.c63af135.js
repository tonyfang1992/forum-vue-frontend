(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7110b651"],{6356:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.userprofile.name,expression:"userprofile.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:t.userprofile.name},on:{input:function(e){e.target.composing||t.$set(t.userprofile,"name",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[t._v("Image")]),t.userprofile.image?r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:t.userprofile.image,width:"200",height:"200"}}):t._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:t.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])},a=[];r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d");function n(t){if(Array.isArray(t))return t}r("e260"),r("25f0");function o(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],i=!0,a=!1,n=void 0;try{for(var o,l=t[Symbol.iterator]();!(i=(o=l.next()).done);i=!0)if(r.push(o.value),e&&r.length===e)break}catch(s){a=!0,n=s}finally{try{i||null==l["return"]||l["return"]()}finally{if(a)throw n}}return r}}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){return n(t)||o(t,e)||l()}var u=r("5530"),c={profile:{id:1,name:"root",email:"root@example.com",password:"$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",isAdmin:!0,image:"https://i.imgur.com/58ImzMM.png",createdAt:"2019-07-30T16:24:54.983Z",updatedAt:"2019-08-01T10:33:51.095Z"}},f={data:function(){return{userprofile:{name:"",image:""}}},created:function(){var t=this.$route.params.id;this.fetchProfile(t)},methods:{fetchProfile:function(t){console.log("fetchProfile id:",t);var e=c.profile;this.userprofile=Object(u["a"])({},this.userprofile,{id:e.id,image:e.image})},handleFileChange:function(t){var e=t.target.files;if(e.length){var r=window.URL.createObjectURL(e[0]);this.userprofile.image=r}},handleSubmit:function(t){var e=t.target,r=new FormData(e),i=!0,a=!1,n=void 0;try{for(var o,l=r.entries()[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var u=s(o.value,2),c=u[0],f=u[1];console.log(c+": "+f)}}catch(m){a=!0,n=m}finally{try{i||null==l.return||l.return()}finally{if(a)throw n}}}}},m=f,d=r("2877"),p=Object(d["a"])(m,i,a,!1,null,null,null);e["default"]=p.exports},d28b:function(t,e,r){var i=r("746f");i("iterator")},e01a:function(t,e,r){"use strict";var i=r("23e7"),a=r("83ab"),n=r("da84"),o=r("5135"),l=r("861d"),s=r("9bf2").f,u=r("e893"),c=n.Symbol;if(a&&"function"==typeof c&&(!("description"in c.prototype)||void 0!==c().description)){var f={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new c(t):void 0===t?c():c(t);return""===t&&(f[e]=!0),e};u(m,c);var d=m.prototype=c.prototype;d.constructor=m;var p=d.toString,v="Symbol(test)"==String(c("test")),g=/^Symbol\((.*)\)[^)]+$/;s(d,"description",{configurable:!0,get:function(){var t=l(this)?this.valueOf():this,e=p.call(t);if(o(f,t))return"";var r=v?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),i({global:!0,forced:!0},{Symbol:m})}}}]);
//# sourceMappingURL=chunk-7110b651.c63af135.js.map