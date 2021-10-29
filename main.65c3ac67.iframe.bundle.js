(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1158:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(437).configure)([__webpack_require__(1159),__webpack_require__(1160)],module,!1)}).call(this,__webpack_require__(154)(module))},1159:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1159},1160:function(module,exports,__webpack_require__){var map={"./stories/skinview3d.stories.tsx":1165};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1160},1164:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(12),__webpack_require__(2),__webpack_require__(48),__webpack_require__(31),__webpack_require__(129),__webpack_require__(36),__webpack_require__(1157),__webpack_require__(102),__webpack_require__(194);var client_api=__webpack_require__(23),esm=__webpack_require__(15),parameters={actions:{argTypesRegex:"^on[A-Z].*"},docs:{theme:__webpack_require__(168).b.dark},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},1165:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"basic",(function(){return skinview3d_stories_basic})),__webpack_require__.d(__webpack_exports__,"basicWithKnobs",(function(){return skinview3d_stories_basicWithKnobs})),__webpack_require__.d(__webpack_exports__,"multiple",(function(){return skinview3d_stories_multiple})),__webpack_require__.d(__webpack_exports__,"withAnimation",(function(){return skinview3d_stories_withAnimation})),__webpack_require__.d(__webpack_exports__,"withCape",(function(){return skinview3d_stories_withCape})),__webpack_require__.d(__webpack_exports__,"withControls",(function(){return skinview3d_stories_withControls}));__webpack_require__(9);var react=__webpack_require__(0),skinview3d=__webpack_require__(172),jsx_runtime=__webpack_require__(80),src_Skinview3d=function Skinview3d(_ref){var className=_ref.className,width=_ref.width,height=_ref.height,skinUrl=_ref.skinUrl,capeUrl=_ref.capeUrl,onReady=_ref.onReady,canvasRef=Object(react.useRef)(),skinviewRef=Object(react.useRef)();return Object(react.useEffect)((function(){var viewer=new skinview3d.b({canvas:canvasRef.current,width:width,height:height});skinUrl&&viewer.loadSkin(skinUrl),capeUrl&&viewer.loadCape(capeUrl),skinviewRef.current=viewer,onReady&&onReady(viewer)}),[]),Object(react.useEffect)((function(){skinUrl&&skinviewRef.current.loadSkin(skinUrl)}),[skinUrl]),Object(react.useEffect)((function(){capeUrl&&skinviewRef.current.loadCape(capeUrl)}),[capeUrl]),Object(react.useEffect)((function(){skinviewRef.current.setSize(width,height)}),[width,height]),Object(jsx_runtime.jsx)("canvas",{className:className,ref:canvasRef,style:{imageRendering:"pixelated"}})};src_Skinview3d.displayName="Skinview3d";var src_0=src_Skinview3d;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},skinUrl:{defaultValue:null,description:"",name:"skinUrl",required:!1,type:{name:"string"}},capeUrl:{defaultValue:null,description:"",name:"capeUrl",required:!1,type:{name:"string"}},onReady:{defaultValue:null,description:"",name:"onReady",required:!1,type:{name:"Function"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__(171),skinview3d_stories_basic=(__webpack_exports__.default={title:"All stories",decorators:[dist.withKnobs]},function basic(){return Object(jsx_runtime.jsx)(src_0,{skinUrl:"textures/skin-legacyhat-default-no_hd.png",height:300,width:150,onReady:function onReady(instance){console.log(instance)}})});skinview3d_stories_basic.displayName="basic";var skinview3d_stories_basicWithKnobs=function basicWithKnobs(){var value=Object(dist.radios)("Skin URL",["textures/skin-legacyhat-default-no_hd.png","textures/skin-1.8-default-no_hd.png","textures/skin-1.8-slim-no_hd.png","textures/skin-old-default-no_hd.png"],"textures/skin-legacyhat-default-no_hd.png"),numberOptions={range:!0,min:128,max:1024,step:1},width=Object(dist.number)("Width",150,numberOptions),height=Object(dist.number)("Height",300,numberOptions);return Object(jsx_runtime.jsx)(src_0,{className:"viewer",skinUrl:value,height:height,width:width})};skinview3d_stories_basicWithKnobs.displayName="basicWithKnobs";var skinview3d_stories_multiple=function multiple(){return Object(jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(jsx_runtime.jsx)(src_0,{className:"viewer",skinUrl:"textures/skin-legacyhat-default-no_hd.png",height:300,width:120}),Object(jsx_runtime.jsx)(src_0,{className:"viewer",skinUrl:"textures/skin-1.8-default-no_hd.png",height:300,width:120}),Object(jsx_runtime.jsx)(src_0,{skinUrl:"textures/skin-1.8-slim-no_hd.png",height:300,width:120})]})};skinview3d_stories_multiple.displayName="multiple";var skinview3d_stories_withAnimation=function withAnimation(){return Object(jsx_runtime.jsx)(src_0,{className:"viewer",skinUrl:"textures/skin-legacyhat-default-no_hd.png",height:300,width:150,onReady:function onReady(skinViewer){skinViewer.animations.add(skinview3d.c),skinViewer.animations.add(skinview3d.a)}})};skinview3d_stories_withAnimation.displayName="withAnimation";var skinview3d_stories_withCape=function withCape(){return Object(jsx_runtime.jsx)(src_0,{className:"viewer",skinUrl:"textures/skin-legacyhat-default-no_hd.png",capeUrl:"textures/mojang-classic-cape.png",height:300,width:150})};skinview3d_stories_withCape.displayName="withCape";var skinview3d_stories_withControls=function withControls(){return Object(jsx_runtime.jsx)(src_0,{className:"viewer",skinUrl:"textures/skin-legacyhat-default-no_hd.png",height:300,width:150,onReady:function onReady(skinViewer){var control=skinview3d.d(skinViewer);control.enableRotate=!0,control.enableZoom=!0,control.enablePan=!1}})};skinview3d_stories_withControls.displayName="withControls",skinview3d_stories_basic.parameters=Object.assign({storySource:{source:'() => (\n  <Skinview3d\n    skinUrl="textures/skin-legacyhat-default-no_hd.png"\n    height={300}\n    width={150}\n    onReady={(instance: skinview3d.SkinViewer) => {\n      console.log(instance);\n    }}\n  />\n)'}},skinview3d_stories_basic.parameters),skinview3d_stories_basicWithKnobs.parameters=Object.assign({storySource:{source:"() => {\n\n  const options: any = [\n    'textures/skin-legacyhat-default-no_hd.png',\n    'textures/skin-1.8-default-no_hd.png',\n    'textures/skin-1.8-slim-no_hd.png',\n    'textures/skin-old-default-no_hd.png',\n  ]\n\n  const value = radios('Skin URL', options, 'textures/skin-legacyhat-default-no_hd.png');\n\n  const numberOptions = {\n    range: true,\n    min: 128,\n    max: 1024,\n    step: 1,\n  };\n\n  const width = number('Width', 150, numberOptions);\n  const height = number('Height', 300, numberOptions);\n\n  return <Skinview3d\n    className='viewer'\n    skinUrl={value}\n    height={height}\n    width={width}\n  />\n}"}},skinview3d_stories_basicWithKnobs.parameters),skinview3d_stories_multiple.parameters=Object.assign({storySource:{source:"() => (\n  <div style={{ display: 'flex', flexDirection: 'row', }}>\n    <Skinview3d\n      className='viewer'\n      skinUrl=\"textures/skin-legacyhat-default-no_hd.png\"\n      height={300}\n      width={120}\n    />\n    <Skinview3d\n      className='viewer'\n      skinUrl=\"textures/skin-1.8-default-no_hd.png\"\n      height={300}\n      width={120}\n    />\n    <Skinview3d\n      skinUrl=\"textures/skin-1.8-slim-no_hd.png\"\n      height={300}\n      width={120}\n    />\n  </div>\n)"}},skinview3d_stories_multiple.parameters),skinview3d_stories_withAnimation.parameters=Object.assign({storySource:{source:"() => {\n  return <Skinview3d\n    className='viewer'\n    skinUrl=\"textures/skin-legacyhat-default-no_hd.png\"\n    height={300}\n    width={150}\n    onReady={(skinViewer: skinview3d.SkinViewer) => {\n      // Add an animation\n      skinViewer.animations.add(skinview3d.WalkingAnimation);\n      // Add another animation\n      skinViewer.animations.add(skinview3d.RotatingAnimation);\n    }}\n  />\n}"}},skinview3d_stories_withAnimation.parameters),skinview3d_stories_withCape.parameters=Object.assign({storySource:{source:'() => {\n  return <Skinview3d\n    className=\'viewer\'\n    skinUrl="textures/skin-legacyhat-default-no_hd.png"\n    capeUrl="textures/mojang-classic-cape.png"\n    height={300}\n    width={150}\n  />\n}'}},skinview3d_stories_withCape.parameters),skinview3d_stories_withControls.parameters=Object.assign({storySource:{source:"() => {\n  return <Skinview3d\n    className='viewer'\n    skinUrl=\"textures/skin-legacyhat-default-no_hd.png\"\n    height={300}\n    width={150}\n    onReady={(skinViewer: skinview3d.SkinViewer) => {\n      // Control objects with your mouse!\n      let control = skinview3d.createOrbitControls(skinViewer);\n      control.enableRotate = true;\n      control.enableZoom = true;\n      control.enablePan = false;\n\n    }}\n  />\n}"}},skinview3d_stories_withControls.parameters)},626:function(module,exports,__webpack_require__){__webpack_require__(627),__webpack_require__(782),__webpack_require__(783),__webpack_require__(911),__webpack_require__(1092),__webpack_require__(1163),__webpack_require__(1134),__webpack_require__(1145),__webpack_require__(1146),__webpack_require__(1150),__webpack_require__(1151),__webpack_require__(1164),module.exports=__webpack_require__(1158)},693:function(module,exports){},783:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(437)}},[[626,2,3]]]);