import React from "react";
import HeadView3d from "..";
import { withKnobs, radios, number } from "@storybook/addon-knobs";
import * as headview3d from "headview3d";

export default {
  title: "All stories",
  decorators: [withKnobs],
};

export const basic = () => (
  <HeadView3d
    skinUrl="textures/shiro.png"
    height={128}
    width={128}
    onReady={(instance: headview3d.SkinViewer) => {
      console.log(instance);
    }}
  />
);

export const basicWithKnobs = () => {
  const options: any = [
    "textures/shiro.png",
    "textures/horikita.png",
    "textures/rikka.png",
    "textures/zero_two.png",
  ];

  const value = radios("Skin URL", options, "textures/shiro.png");

  const numberOptions = {
    range: true,
    min: 128,
    max: 1024,
    step: 1,
  };

  const width = number("Width", 128, numberOptions);
  const height = number("Height", 128, numberOptions);

  return (
    <HeadView3d
      className="viewer"
      skinUrl={value}
      height={height}
      width={width}
    />
  );
};

export const multiple = () => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <HeadView3d
      className="viewer"
      skinUrl="textures/shiro.png"
      height={128}
      width={128}
      onReady={(skinViewer: headview3d.SkinViewer) => {
        // Control objects with your mouse!
        let control = headview3d.createOrbitControls(skinViewer);
        control.enableRotate = true;
        control.enableZoom = true;
        control.enablePan = false;
      }}
    />
    <HeadView3d
      className="viewer"
      skinUrl="textures/horikita.png"
      height={128}
      width={128}
      onReady={(skinViewer: headview3d.SkinViewer) => {
        // Control objects with your mouse!
        let control = headview3d.createOrbitControls(skinViewer);
        control.enableRotate = true;
        control.enableZoom = true;
        control.enablePan = false;
      }}
    />
    <HeadView3d
      skinUrl="textures/rikka.png"
      height={128}
      width={128}
      onReady={(skinViewer: headview3d.SkinViewer) => {
        // Control objects with your mouse!
        let control = headview3d.createOrbitControls(skinViewer);
        control.enableRotate = true;
        control.enableZoom = true;
        control.enablePan = false;
      }}
    />
    <HeadView3d
      skinUrl="textures/zero_two.png"
      height={128}
      width={128}
      onReady={(skinViewer: headview3d.SkinViewer) => {
        // Control objects with your mouse!
        let control = headview3d.createOrbitControls(skinViewer);
        control.enableRotate = true;
        control.enableZoom = true;
        control.enablePan = false;
      }}
    />
  </div>
);

export const withAnimation = () => {
  return (
    <HeadView3d
      className="viewer"
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

export const withControls = () => {
  return (
    <HeadView3d
      className="viewer"
      skinUrl="textures/shiro.png"
      height={128}
      width={128}
      onReady={(skinViewer: headview3d.SkinViewer) => {
        // Control objects with your mouse!
        let control = headview3d.createOrbitControls(skinViewer);
        control.enableRotate = true;
        control.enableZoom = true;
        control.enablePan = false;
      }}
    />
  );
};
