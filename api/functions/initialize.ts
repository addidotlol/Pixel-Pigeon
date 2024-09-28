import { handleUncaughtError } from "./handleUncaughtError";
import { performInitialization } from "./performInitialization";

/**
 * Initializes Pigeon-Mode-Game-Framework, only call this once or it will throw an error.
 *
 */
export const initialize = (): void => {
  performInitialization().catch((error: unknown): void => {
    handleUncaughtError(error);
  });
};
