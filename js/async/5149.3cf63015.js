"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[5149],{25149:function(e,t,o){o.r(t),o.d(t,{default:function(){return r}});var n=o(73114),a={class:"page--bottom-navigation-container"},c=(0,n.createElementVNode)("span",{class:"catalog-title"},"Bottom Navigation",-1);var i={metaInfo:{titleTemplate:"%s - Bottom Navigation"},components:{TopAppToolbar:o(98269).Z},data:function(){return{items:[{text:"Favorites",icon:"favorite",url:"url 1"},{text:"Music",icon:"music_note",url:"url 2"},{text:"Places",icon:"place"},{text:"News",icon:"fiber_new"}],active:1}},methods:{onChange:function(e){console.log(e)}},render:function(e,t,o,i,r,l){var s=(0,n.resolveComponent)("ui-icon-button"),u=(0,n.resolveComponent)("top-app-toolbar"),m=(0,n.resolveComponent)("ui-top-app-bar"),d=(0,n.resolveComponent)("ui-snippet"),p=(0,n.resolveComponent)("docs-page"),v=(0,n.resolveComponent)("ui-tabs"),C=(0,n.resolveComponent)("ui-bottom-navigation");return(0,n.openBlock)(),(0,n.createElementBlock)("div",a,[(0,n.createVNode)(m,{"content-selector":".demo-content",fixed:""},{"nav-icon":(0,n.withCtx)((function(o){var a=o.navIconClass;return[(0,n.createVNode)(s,{icon:"arrow_back",class:(0,n.normalizeClass)(a),onClick:t[0]||(t[0]=function(t){return e.$router.back()})},null,8,["class"])]})),toolbar:(0,n.withCtx)((function(e){var t=e.toolbarItemClass;return[(0,n.createVNode)(u,{"item-class":t},null,8,["item-class"])]})),default:(0,n.withCtx)((function(){return[c]})),_:1}),(0,n.createVNode)(p,{class:"demo-content",name:"bottom-navigation","demo-count":"1"},{hero:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("h3",{class:(0,n.normalizeClass)(e.$tt("headline3"))},"Bottom Navigation",2)]})),default:(0,n.withCtx)((function(){return[(0,n.createVNode)(d,{code:e.$store.demos[1]},null,8,["code"])]})),_:1}),(0,n.createVNode)(C,{"content-selector":".demo-content",stacked:""},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(v,{modelValue:r.active,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.active=e}),type:"textWithIcon",items:r.items,stacked:"",onChange:l.onChange},null,8,["modelValue","items","onChange"])]})),_:1})])}},r=i}}]);