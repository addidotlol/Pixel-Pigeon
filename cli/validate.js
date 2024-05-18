const { existsSync, readFileSync, writeFileSync } = require("fs");
const { join } = require("path");
const { generate } = require("ts-to-zod");

// Validate source code

if (!existsSync(join("src"))) {
  throw new Error("You must create an src folder for use with Pixel Pigeon.");
}

if (!existsSync(join("src", "index.ts"))) {
  throw new Error("You must create an index.ts file in src for use with Pixel Pigeon.");
}

// Validate ldtk

if (existsSync(join("project.ldtk"))) {
  const ldtkString = readFileSync(join("project.ldtk")).toString();
  let ldtkJSON;
  try {
    ldtkJSON = JSON.parse(ldtkString);
  }
  catch (error) {
    throw new Error("Your project.ldtk file is not valid JSON.");
  }
  const configSchemaText = generate({ sourceText: readFileSync(join(__dirname, "..", "api", "types", "LDTK.ts")).toString() }).getZodSchemasFile();
  writeFileSync(join(__dirname, "ldtkSchema.js"), configSchemaText.replace("export const ", "").replace("export const ", "").replace("export const ", "").replace("export const ", "").replace("import { z } from \"zod\";", "const { z } = require(\"zod\");") + "\n" + "module.exports = { ldtkSchema };");
  const { ldtkSchema } = require("./ldtkSchema");
  try {
    ldtkSchema.parse(JSON.parse(ldtkString));
  }
  catch (error) {
    console.error("Your project.ldtk file does not match the schema.");
    throw error;
  }
  for (const ldtkDefTileset of ldtkJSON.defs.tilesets) {
    if (ldtkDefTileset.relPath.substring(0, 7) !== "images/") {
      throw new Error(`LDTK tileset "${ldtkDefTileset.identifier}" has an image outside of the images folder.`);
    }
  }
}