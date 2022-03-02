// TODO: get react transform working
import React, { useEffect, useRef } from "react";
import * as headview3d from "headview3d";

// TODO: offscreen canvas support

interface Iheadview3d {
  className?: any; // TODO: type this
  width?: number;
  height?: number;
  skinUrl?: string;
  onReady?: Function;
}

const HeadView3d = ({
  className,
  width,
  height,
  skinUrl,
  onReady,
}: Iheadview3d) => {
  const canvasRef = useRef();
  const skinviewRef = useRef<any>();

  useEffect(() => {
    const viewer = new headview3d.SkinViewer({
      canvas: canvasRef.current,
      width: width,
      height: height,
      zoom: 3,
    });

    // handle cape/skin load intitially
    skinUrl && viewer.loadSkin(skinUrl);

    // @ts-ignore
    skinviewRef.current = viewer;

    // call onReady with the viewer instance
    if (onReady) {
      onReady(viewer);
    }
  }, []);

  // skin url changes
  useEffect(() => {
    skinUrl && skinviewRef.current.loadSkin(skinUrl);
  }, [skinUrl]);

  // size changes
  useEffect(() => {
    skinviewRef.current.setSize(width, height);
  }, [width, height]);

  return (
    <canvas
      className={className}
      ref={canvasRef}
      style={{ imageRendering: "pixelated" }} // TODO: should be configurable
    />
  );
};

export default HeadView3d;
