import { EntityEllipse } from "../types/World";
import { state } from "../state";

export const addEntityEllipse = (
  entityID: string,
  entityEllipse: EntityEllipse,
): void => {
  if (state.values.world === null) {
    throw new Error(
      `An attempt was made to add entity "${entityID}" ellipse before world was loaded.`,
    );
  }
  for (const level of state.values.world.levels.values()) {
    for (const layer of level.layers) {
      for (const [layerEntityID, entity] of layer.entities) {
        if (layerEntityID === entityID) {
          entity.ellipses.push(entityEllipse);
        }
      }
    }
  }
};
