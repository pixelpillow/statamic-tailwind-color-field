function v(e,s,r,n,l,a,c,f){var t=typeof e=="function"?e.options:e;s&&(t.render=s,t.staticRenderFns=r,t._compiled=!0),n&&(t.functional=!0),a&&(t._scopeId="data-v-"+a);var i;if(c?(i=function(o){o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!o&&typeof __VUE_SSR_CONTEXT__<"u"&&(o=__VUE_SSR_CONTEXT__),l&&l.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(c)},t._ssrRegister=i):l&&(i=f?function(){l.call(this,(t.functional?this.parent:this).$root.$options.shadowRoot)}:l),i)if(t.functional){t._injectStyles=i;var h=t.render;t.render=function(_,d){return i.call(d),h(_,d)}}else{var u=t.beforeCreate;t.beforeCreate=u?[].concat(u,i):[i]}return{exports:e,options:t}}const p={mixins:[Fieldtype],data(){return{swatches:this.getSwatchesAsArray()}},watch:{value(e){this.customColor=e}},computed:{replicatorPreview(){const e=this.getHexColor(this.value);return this.value?`<span class="little-dot" style="background-color:${e}"></span>`:null}},methods:{customColorSelected(e){this.customColor=e.target.value},commitCustomColor(){this.update(this.customColor)},getHexColor(e){return console.log("🚀 ~ getHexColor ~ color:",e),this.config.swatches[e]},getSwatchesAsArray(){return this.config.swatches?Object.keys(this.config.swatches).map(e=>({key:e,hex:this.config.swatches[e]})):null}}};var C=function(){var s=this,r=s._self._c;return r("div",{},[r("div",{},[s.swatches?r("div",{staticClass:"flex gap-3"},s._l(s.swatches,function(n){return r("div",{staticClass:"flex inline-block w-10 h-10 border border-gray-400 rounded cursor-pointer",class:{"opacity-50 hover:opacity-100 scale-2 scale-125":n.key!==s.value},style:{"background-color":n.hex},on:{click:()=>{s.update(n.key)}}},[n.key===s.value?r("div",{staticClass:"flex items-center justify-center w-full h-full"},[r("div",{staticClass:"flex items-center justify-center w-5 h-5 rounded-full bg-black/10"},[r("svg",{staticClass:"text-white fill-current",attrs:{version:"1.1",role:"presentation",width:"12",height:"12",viewBox:"0 0 1792 1792"}},[r("path",{attrs:{d:"M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"}})])])]):s._e()])}),0):s._e()])])},m=[],g=v(p,C,m,!1,null,null,null,null);const w=g.exports;Statamic.$components.register("tailwind_color-fieldtype",w);
