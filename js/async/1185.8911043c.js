"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[1185],{21185:function(e,t,o){o.r(t),o.d(t,{default:function(){return d}});var n=o(73114),c={class:"demo-wrapper"},i={class:"demos"},r=(0,n.createTextVNode)("Click"),l=(0,n.createTextVNode)("Click with debounce"),u=(0,n.createTextVNode)(" NOTE: See console panel ");var a={metaInfo:{titleTemplate:"%s - Debounce"},data:function(){var e=this;return{config:{callback:function(){e.onClick()}}}},methods:{onClick:function(){console.log("clicked")}},render:function(e,t,o,a,d,s){var f=(0,n.resolveComponent)("ui-button"),C=(0,n.resolveComponent)("ui-textfield-helper"),m=(0,n.resolveComponent)("ui-snippet"),h=(0,n.resolveComponent)("docs-page"),p=(0,n.resolveDirective)("debounce");return(0,n.openBlock)(),(0,n.createBlock)(h,{type:"directive",name:"debounce","demo-count":"1","without-css":""},{hero:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("h1",{class:(0,n.normalizeClass)(e.$tt("headline1"))},"Debounce",2)]})),default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("section",c,[(0,n.createElementVNode)("div",i,[(0,n.createVNode)(f,{outlined:"",onClick:s.onClick},{default:(0,n.withCtx)((function(){return[r]})),_:1},8,["onClick"]),(0,n.withDirectives)((0,n.createVNode)(f,{raised:""},{default:(0,n.withCtx)((function(){return[l]})),_:1},512),[[p,d.config]]),(0,n.createVNode)(C,{visible:""},{default:(0,n.withCtx)((function(){return[u]})),_:1})]),(0,n.createVNode)(m,{code:e.$store.demos[1]},null,8,["code"])])]})),_:1})}},d=a}}]);