import { Application, BaseTexture, SCALE_MODES, settings } from "pixi.js";
import config from "../config";
import sizeScreen from "pigeon-mode-game-library/api/functions/sizeScreen";

const init = (): void => {
  console.log("PMGL game initialized.");
  settings.ROUND_PIXELS = true;
  BaseTexture.defaultOptions.scaleMode = SCALE_MODES.NEAREST;
  if (settings.RENDER_OPTIONS) {
    settings.RENDER_OPTIONS.hello = false;
  }
  const app = new Application({
    height: config.height,
    width: config.width,
  });
  app.renderer.view.addEventListener?.("contextmenu", (e: Event): void => {
    e.preventDefault();
  });
  const screen = document.getElementById("screen");
  screen?.appendChild(app.view as HTMLCanvasElement);
  sizeScreen();
  addEventListener("resize", sizeScreen);
};

export default init;
