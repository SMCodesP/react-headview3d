# react-headview3d (Forked from [react-skinview3d](https://github.com/Hacksore/react-skinview3d))

Three.js powered Minecraft skin viewer component for react - see upstream project for more info [headview3d](https://github.com/SMCodesP/headview3d)

[![NPM](https://img.shields.io/npm/v/react-headview3d.svg)](https://www.npmjs.com/package/react-headview3d)

## Install

```bash
npm install --save react-headview3d
```

## Usage

```jsx
import React from "react";
import Skinview3d from "react-headview3d";

const App = () => {
  return <HeadView3d skinUrl="textures/shiro.png" height={128} width={128} />;
};
```

## Apply animations and customization

```jsx
import React from "react";
import Skinview3d from "react-headview3d";

const App = () => {
  return (
    <HeadView3d
      skinUrl="textures/shiro.png"
      height={128}
      width={128}
      onReady={(skinViewer: headview3d.SkinViewer) => {
        // Add another animation
        skinViewer.animations.add(headview3d.RotatingAnimation);
      }}
    />
  );
};
```

## License

MIT © [SMCodesP](https://github.com/SMCodesP)
