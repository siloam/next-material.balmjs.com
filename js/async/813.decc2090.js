"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[813],{10813:function(e,t,n){n.r(t),n.d(t,{default:function(){return we}});var o=n(73114),c={class:"hero-demos"},a=(0,o.createTextVNode)("add"),r=(0,o.createTextVNode)("description"),i=(0,o.createTextVNode)("edit"),l=(0,o.createTextVNode)("delete"),s={class:"hero-options"},d=(0,o.createTextVNode)(" Icon themes "),u={class:"demo-wrapper"},p={class:"demo sizing-example"},m={class:"icons-preview-code"},f=(0,o.createTextVNode)("face"),V={class:"icon-caption"},v={class:"demo-wrapper"},h={class:"demo coloring-example"},N={class:"icons-preview-code"},y={class:"icons-preview"},w=(0,o.createTextVNode)("face"),x=(0,o.createElementVNode)("div",{class:"icon-caption"},"Normal",-1),g={class:"icons-preview"},k=(0,o.createTextVNode)("face"),C=(0,o.createElementVNode)("div",{class:"icon-caption"},"Disabled",-1),E={class:"icons-preview icons-dark-bg"},b=(0,o.createTextVNode)("face"),T=(0,o.createElementVNode)("div",{class:"icon-caption"},"Normal",-1),_={class:"icons-preview icons-dark-bg"},B=(0,o.createTextVNode)("face"),O=(0,o.createElementVNode)("div",{class:"icon-caption"},"Disabled",-1),S={class:"icons-preview"},D=(0,o.createTextVNode)("face"),I=(0,o.createElementVNode)("div",{class:"icon-caption"},"orange600",-1),z={class:"search-area"},F={class:"search-area-inner"},$=(0,o.createTextVNode)(" Theme "),j=(0,o.createElementVNode)("p",{class:"search-helper"},[(0,o.createTextVNode)(" TIPS: Click an icon to copy icon name, then you can use ` "),(0,o.createElementVNode)("b",null,"<ui-icon>${icon_name}</ui-icon>"),(0,o.createTextVNode)("`. ")],-1),U={key:0,class:"new-badge"};var L=n(14310),P=n.n(L),R=n(34074),Z=n.n(R),M=n(39649),q=n.n(M),A=n(44845),G=n(33938),H=n(63109),J=n.n(H),K=n(94473),Q=n.n(K),W=n(20116),X=n.n(W),Y=n(78580),ee=n.n(Y),te=n(51942),ne=n.n(te),oe=n(25843),ce=n.n(oe),ae=n(2991),re=n.n(ae),ie=n(86902),le=n.n(ie),se=n(65597),de=n(42152),ue=n.n(de),pe=n(73673),me=n(14727);function fe(e,t){var n=le()(e);if(P()){var o=P()(e);t&&(o=X()(o).call(o,(function(t){return Z()(e,t).enumerable}))),n.push.apply(n,o)}return n}var Ve=[{label:"Filled",value:0},{label:"Outlined",value:1},{label:"Round",value:2},{label:"Two-Tone",value:3},{label:"Sharp",value:4}],ve=(0,o.reactive)({typeOption:0,categories:[],icons:{},tags:[],currentIcons:{},keywords:""});function he(){ve.keywords?function(){var e,t=Q()(e=ve.tags).call(e,(function(e){return e===ve.keywords}));for(var n in ve.icons){var o;ve.currentIcons[n]=X()(o=ve.icons[n]).call(o,(function(e){var n,o=e.name.indexOf(ve.keywords)>-1,c=ee()(n=e.tags).call(n,t);return o||c}))}}():ve.currentIcons=ne()({},ve.icons)}function Ne(){return(Ne=(0,G.Z)(J().mark((function e(){var t,n,o,c,a,r,i,l;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,me.ZR)(),o=n.domain,c=(0,pe.i)(),a="".concat(o,"/data/icons.json"),e.next=5,c.get(a);case 5:r=e.sent,i=r.icons,l=r.tags,re()(t=le()(i)).call(t,(function(e){ve.categories.push({name:e,count:i[e].length})})),ve.icons=i,ve.tags=l,ve.currentIcons=ne()({},ve.icons);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ye={metaInfo:{titleTemplate:"%s - Icons"},setup:function(){var e=(0,se.pm)();return function(){Ne.apply(this,arguments)}(),(0,o.onMounted)((function(){new(ue())(".btn-copy").on("success",(function(t){e("'".concat(t.text,"' copied!")),t.clearSelection()}))})),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){(0,A.Z)(e,t,n[t])})):q()?Object.defineProperties(e,q()(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Z()(n,t))}))}return e}({TypeOptions:Ve},(0,o.toRefs)(ve))},methods:{onSearch:function(e){ve.keywords=ce()(e).call(e),he()},onSelected:function(e){ve.keywords=e.value,he()}},render:function(e,t,n,L,P,R){var Z=(0,o.resolveComponent)("ui-icon"),M=(0,o.resolveComponent)("ui-select"),q=(0,o.resolveComponent)("ui-snippet"),A=(0,o.resolveComponent)("ui-autocomplete"),G=(0,o.resolveComponent)("ui-list-group-subheader"),H=(0,o.resolveComponent)("ui-image-text"),J=(0,o.resolveComponent)("ui-image-item"),K=(0,o.resolveComponent)("ui-image-list"),Q=(0,o.resolveComponent)("ui-list-divider"),W=(0,o.resolveComponent)("ui-list-group"),X=(0,o.resolveComponent)("docs-page"),Y=(0,o.resolveDirective)("shadow"),ee=(0,o.resolveDirective)("anchor");return(0,o.openBlock)(),(0,o.createBlock)(X,{name:"icon","demo-count":"2"},{hero:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",c,[(0,o.createVNode)(Z,{type:e.typeOption},{default:(0,o.withCtx)((function(){return[a]})),_:1},8,["type"]),(0,o.createVNode)(Z,{type:e.typeOption},{default:(0,o.withCtx)((function(){return[r]})),_:1},8,["type"]),(0,o.createVNode)(Z,{type:e.typeOption},{default:(0,o.withCtx)((function(){return[i]})),_:1},8,["type"]),(0,o.createVNode)(Z,{type:e.typeOption},{default:(0,o.withCtx)((function(){return[l]})),_:1},8,["type"])]),(0,o.createElementVNode)("div",s,[(0,o.createVNode)(M,{modelValue:e.typeOption,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.typeOption=t}),class:"hero-option",options:L.TypeOptions},{default:(0,o.withCtx)((function(){return[d]})),_:1},8,["modelValue","options"])])]})),after:(0,o.withCtx)((function(){return[(0,o.withDirectives)((0,o.createElementVNode)("div",z,[(0,o.createElementVNode)("div",F,[(0,o.createVNode)(A,{modelValue:e.keywords,"onUpdate:modelValue":[t[1]||(t[1]=function(t){return e.keywords=t}),R.onSearch],"input-id":"search","input-type":"search",icon:"search",placeholder:"Icon name keywords",fullwidth:"",source:e.tags,highlight:"",onSelected:R.onSelected},null,8,["modelValue","source","onUpdate:modelValue","onSelected"]),(0,o.createVNode)(M,{id:"icon-type",modelValue:e.typeOption,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.typeOption=t}),options:L.TypeOptions},{default:(0,o.withCtx)((function(){return[$]})),_:1},8,["modelValue","options"])]),j],512),[[Y,1]]),e.categories.length?((0,o.openBlock)(),(0,o.createBlock)(W,{key:0},{default:(0,o.withCtx)((function(){return[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.categories,(function(t,n){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:"category".concat(n)},[e.currentIcons[t.name].length?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:0},[(0,o.withDirectives)((0,o.createVNode)(G,{class:(0,o.normalizeClass)(e.$tt("headline6"))},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.name),1)]})),_:2},1032,["class"]),[[ee,t.name,"id"]]),(0,o.createVNode)(K,null,{default:(0,o.withCtx)((function(){return[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.currentIcons[t.name],(function(t){return(0,o.openBlock)(),(0,o.createBlock)(J,{key:t.id,title:t.name,class:"btn-copy","data-clipboard-text":t.name},{image:(0,o.withCtx)((function(){return[(0,o.createVNode)(Z,{type:e.typeOption,size:"36"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.name),1)]})),_:2},1032,["type"]),t.isNew?((0,o.openBlock)(),(0,o.createElementBlock)("div",U,"New")):(0,o.createCommentVNode)("",!0)]})),default:(0,o.withCtx)((function(){return[(0,o.createVNode)(H,null,{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.name),1)]})),_:2},1024)]})),_:2},1032,["title","data-clipboard-text"])})),128))]})),_:2},1024),n<t.count-1?((0,o.openBlock)(),(0,o.createBlock)(Q,{key:"divider".concat(n)})):(0,o.createCommentVNode)("",!0)],64)):(0,o.createCommentVNode)("",!0)],64)})),128))]})),_:1})):(0,o.createCommentVNode)("",!0)]})),default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("section",u,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.1 Sizing",2),(0,o.createElementVNode)("div",p,[(0,o.createElementVNode)("div",m,[((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)([18,24,36,48],(function(e){return(0,o.createElementVNode)("div",{key:e,class:"icons-preview"},[(0,o.createVNode)(Z,{size:e},{default:(0,o.withCtx)((function(){return[f]})),_:2},1032,["size"]),(0,o.createElementVNode)("div",V,(0,o.toDisplayString)(e)+"px "+(0,o.toDisplayString)(24===e?"(default)":""),1)])})),64))])]),(0,o.createVNode)(q,{code:e.$store.demos[1]},null,8,["code"])]),(0,o.createElementVNode)("section",v,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.2 Coloring",2),(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("div",N,[(0,o.createElementVNode)("div",y,[(0,o.createVNode)(Z,{dark:""},{default:(0,o.withCtx)((function(){return[w]})),_:1}),x]),(0,o.createElementVNode)("div",g,[(0,o.createVNode)(Z,{dark:"",inactive:""},{default:(0,o.withCtx)((function(){return[k]})),_:1}),C]),(0,o.createElementVNode)("div",E,[(0,o.createVNode)(Z,{light:""},{default:(0,o.withCtx)((function(){return[b]})),_:1}),T]),(0,o.createElementVNode)("div",_,[(0,o.createVNode)(Z,{light:"",inactive:""},{default:(0,o.withCtx)((function(){return[B]})),_:1}),O]),(0,o.createElementVNode)("div",S,[(0,o.createVNode)(Z,{class:"orange600"},{default:(0,o.withCtx)((function(){return[D]})),_:1}),I])])]),(0,o.createVNode)(q,{code:e.$store.demos[2]},null,8,["code"])])]})),_:1})}},we=ye}}]);