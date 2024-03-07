import { Graphics } from "pixi.js";
import { state } from "../../state";

export const drawQuadrilateral = (
  color: string,
  opacity: number,
  x: number,
  y: number,
  width: number,
  height: number,
  zIndex: number,
): void => {
  if (state.values.app === null) {
    throw new Error(
      "An attempt was made to draw a rectangle before app was created.",
    );
  }
  const rectangle: Graphics = new Graphics();
  rectangle.beginFill(Number(`0x${color.substring(1)}`));
  rectangle.lineStyle(0, Number(`0x${color.substring(1)}`));
  rectangle.drawRect(x, y, width, height);
  rectangle.alpha = opacity;
  rectangle.zIndex = zIndex;
  rectangle.endFill();
  state.values.app.stage.addChild(rectangle);
  state.setValues({
    renderChildrenToDestroy: [
      ...state.values.renderChildrenToDestroy,
      rectangle,
    ],
  });
};
