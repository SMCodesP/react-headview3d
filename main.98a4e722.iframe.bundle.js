(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},docs:{theme:__webpack_require__("./node_modules/@storybook/theming/dist/esm/create.js").a.dark},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/headview3d.stories.tsx":"./src/stories/headview3d.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/stories/headview3d.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"basic",(function(){return headview3d_stories_basic})),__webpack_require__.d(__webpack_exports__,"basicWithKnobs",(function(){return headview3d_stories_basicWithKnobs})),__webpack_require__.d(__webpack_exports__,"multiple",(function(){return headview3d_stories_multiple})),__webpack_require__.d(__webpack_exports__,"withAnimation",(function(){return headview3d_stories_withAnimation})),__webpack_require__.d(__webpack_exports__,"withControls",(function(){return headview3d_stories_withControls}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),headview3d=__webpack_require__("./node_modules/headview3d/libs/headview3d.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src_HeadView3d=function HeadView3d(_ref){var className=_ref.className,width=_ref.width,height=_ref.height,skinUrl=_ref.skinUrl,onReady=_ref.onReady,canvasRef=Object(react.useRef)(),skinviewRef=Object(react.useRef)();return Object(react.useEffect)((function(){var viewer=new headview3d.b({canvas:canvasRef.current,width:width,height:height,zoom:3});skinUrl&&viewer.loadSkin(skinUrl),skinviewRef.current=viewer,onReady&&onReady(viewer)}),[]),Object(react.useEffect)((function(){skinUrl&&skinviewRef.current.loadSkin(skinUrl)}),[skinUrl]),Object(react.useEffect)((function(){skinviewRef.current.setSize(width,height)}),[width,height]),Object(jsx_runtime.jsx)("canvas",{className:className,ref:canvasRef,style:{imageRendering:"pixelated"}})};src_HeadView3d.displayName="HeadView3d";var src_0=src_HeadView3d;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},skinUrl:{defaultValue:null,description:"",name:"skinUrl",required:!1,type:{name:"string"}},onReady:{defaultValue:null,description:"",name:"onReady",required:!1,type:{name:"Function"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),headview3d_stories_basic=(__webpack_exports__.default={title:"All stories",decorators:[dist.withKnobs]},function basic(){return Object(jsx_runtime.jsx)(src_0,{skinUrl:"textures/shiro.png",height:128,width:128,onReady:function onReady(instance){console.log(instance)}})});headview3d_stories_basic.displayName="basic";var headview3d_stories_basicWithKnobs=function basicWithKnobs(){var value=Object(dist.radios)("Skin URL",["textures/shiro.png","textures/horikita.png","textures/rikka.png","textures/zero_two.png"],"textures/shiro.png"),numberOptions={range:!0,min:128,max:1024,step:1},width=Object(dist.number)("Width",128,numberOptions),height=Object(dist.number)("Height",128,numberOptions);return Object(jsx_runtime.jsx)(src_0,{className:"viewer",skinUrl:value,height:height,width:width})};headview3d_stories_basicWithKnobs.displayName="basicWithKnobs";var headview3d_stories_multiple=function multiple(){return Object(jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(jsx_runtime.jsx)(src_0,{className:"viewer",skinUrl:"textures/shiro.png",height:128,width:128,onReady:function onReady(skinViewer){var control=headview3d.c(skinViewer);control.enableRotate=!0,control.enableZoom=!0,control.enablePan=!1}}),Object(jsx_runtime.jsx)(src_0,{className:"viewer",skinUrl:"textures/horikita.png",height:128,width:128,onReady:function onReady(skinViewer){var control=headview3d.c(skinViewer);control.enableRotate=!0,control.enableZoom=!0,control.enablePan=!1}}),Object(jsx_runtime.jsx)(src_0,{skinUrl:"textures/rikka.png",height:128,width:128,onReady:function onReady(skinViewer){var control=headview3d.c(skinViewer);control.enableRotate=!0,control.enableZoom=!0,control.enablePan=!1}}),Object(jsx_runtime.jsx)(src_0,{skinUrl:"textures/zero_two.png",height:128,width:128,onReady:function onReady(skinViewer){var control=headview3d.c(skinViewer);control.enableRotate=!0,control.enableZoom=!0,control.enablePan=!1}})]})};headview3d_stories_multiple.displayName="multiple";var headview3d_stories_withAnimation=function withAnimation(){return Object(jsx_runtime.jsx)(src_0,{className:"viewer",skinUrl:"textures/shiro.png",height:128,width:128,onReady:function onReady(skinViewer){skinViewer.animations.add(headview3d.a)}})};headview3d_stories_withAnimation.displayName="withAnimation";var headview3d_stories_withControls=function withControls(){return Object(jsx_runtime.jsx)(src_0,{className:"viewer",skinUrl:"textures/shiro.png",height:128,width:128,onReady:function onReady(skinViewer){var control=headview3d.c(skinViewer);control.enableRotate=!0,control.enableZoom=!0,control.enablePan=!1}})};headview3d_stories_withControls.displayName="withControls",headview3d_stories_basic.parameters=Object.assign({storySource:{source:'() => (\n  <HeadView3d\n    skinUrl="textures/shiro.png"\n    height={128}\n    width={128}\n    onReady={(instance: headview3d.SkinViewer) => {\n      console.log(instance);\n    }}\n  />\n)'}},headview3d_stories_basic.parameters),headview3d_stories_basicWithKnobs.parameters=Object.assign({storySource:{source:'() => {\n  const options: any = [\n    "textures/shiro.png",\n    "textures/horikita.png",\n    "textures/rikka.png",\n    "textures/zero_two.png",\n  ];\n\n  const value = radios("Skin URL", options, "textures/shiro.png");\n\n  const numberOptions = {\n    range: true,\n    min: 128,\n    max: 1024,\n    step: 1,\n  };\n\n  const width = number("Width", 128, numberOptions);\n  const height = number("Height", 128, numberOptions);\n\n  return (\n    <HeadView3d\n      className="viewer"\n      skinUrl={value}\n      height={height}\n      width={width}\n    />\n  );\n}'}},headview3d_stories_basicWithKnobs.parameters),headview3d_stories_multiple.parameters=Object.assign({storySource:{source:'() => (\n  <div style={{ display: "flex", flexDirection: "row" }}>\n    <HeadView3d\n      className="viewer"\n      skinUrl="textures/shiro.png"\n      height={128}\n      width={128}\n      onReady={(skinViewer: headview3d.SkinViewer) => {\n        // Control objects with your mouse!\n        let control = headview3d.createOrbitControls(skinViewer);\n        control.enableRotate = true;\n        control.enableZoom = true;\n        control.enablePan = false;\n      }}\n    />\n    <HeadView3d\n      className="viewer"\n      skinUrl="textures/horikita.png"\n      height={128}\n      width={128}\n      onReady={(skinViewer: headview3d.SkinViewer) => {\n        // Control objects with your mouse!\n        let control = headview3d.createOrbitControls(skinViewer);\n        control.enableRotate = true;\n        control.enableZoom = true;\n        control.enablePan = false;\n      }}\n    />\n    <HeadView3d\n      skinUrl="textures/rikka.png"\n      height={128}\n      width={128}\n      onReady={(skinViewer: headview3d.SkinViewer) => {\n        // Control objects with your mouse!\n        let control = headview3d.createOrbitControls(skinViewer);\n        control.enableRotate = true;\n        control.enableZoom = true;\n        control.enablePan = false;\n      }}\n    />\n    <HeadView3d\n      skinUrl="textures/zero_two.png"\n      height={128}\n      width={128}\n      onReady={(skinViewer: headview3d.SkinViewer) => {\n        // Control objects with your mouse!\n        let control = headview3d.createOrbitControls(skinViewer);\n        control.enableRotate = true;\n        control.enableZoom = true;\n        control.enablePan = false;\n      }}\n    />\n  </div>\n)'}},headview3d_stories_multiple.parameters),headview3d_stories_withAnimation.parameters=Object.assign({storySource:{source:'() => {\n  return (\n    <HeadView3d\n      className="viewer"\n      skinUrl="textures/shiro.png"\n      height={128}\n      width={128}\n      onReady={(skinViewer: headview3d.SkinViewer) => {\n        // Add another animation\n        skinViewer.animations.add(headview3d.RotatingAnimation);\n      }}\n    />\n  );\n}'}},headview3d_stories_withAnimation.parameters),headview3d_stories_withControls.parameters=Object.assign({storySource:{source:'() => {\n  return (\n    <HeadView3d\n      className="viewer"\n      skinUrl="textures/shiro.png"\n      height={128}\n      width={128}\n      onReady={(skinViewer: headview3d.SkinViewer) => {\n        // Control objects with your mouse!\n        let control = headview3d.createOrbitControls(skinViewer);\n        control.enableRotate = true;\n        control.enableZoom = true;\n        control.enablePan = false;\n      }}\n    />\n  );\n}'}},headview3d_stories_withControls.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-knobs/dist/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);