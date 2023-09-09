const { writeFileSync } = require('fs');
const { join, resolve } = require("path");

writeFileSync(join(__dirname, "..", "game-tsconfig.json"), JSON.stringify({
  compilerOptions: {
    incremental: false,
    target: "ES2015",
    module: "commonjs",
    outDir: "lib",
    strict: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    moduleResolution: "node",
    esModuleInterop: true,
    skipLibCheck: true,
    forceConsistentCasingInFileNames: true,
    resolveJsonModule: true
  },
  include: [
    join(resolve())
  ]
}))

