type LayerType = "Entities" | "Tiles";
interface LDTK {
  readonly __header__: {
    readonly app: "LDtk";
    readonly appAuthor: "Sebastien 'deepnight' Benard";
    readonly appVersion: "1.3.3";
    readonly doc: "https://ldtk.io/json";
    readonly fileType: "LDtk Project JSON";
    readonly schema: "https://ldtk.io/files/JSON_SCHEMA.json";
    readonly url: "https://ldtk.io";
  };
  readonly appBuildId: number;
  readonly backupLimit: number;
  readonly backupOnSave: boolean;
  readonly backupRelPath: string | null;
  readonly bgColor: string;
  readonly customCommands: [];
  readonly defaultGridSize: number;
  readonly defaultLevelBgColor: string;
  readonly defaultLevelHeight: number;
  readonly defaultLevelWidth: number;
  readonly defaultPivotX: 0;
  readonly defaultPivotY: 0;
  readonly defs: {
    readonly entities: {
      readonly color: string;
      readonly doc: null;
      readonly exportToToc: false;
      readonly fieldDefs: [];
      readonly fillOpacity: number;
      readonly height: number;
      readonly hollow: false;
      readonly identifier: string;
      readonly keepAspectRatio: false;
      readonly limitBehavior: string;
      readonly limitScope: string;
      readonly lineOpacity: number;
      readonly maxCount: number;
      readonly maxHeight: null;
      readonly maxWidth: null;
      readonly minHeight: null;
      readonly minWidth: null;
      readonly nineSliceBorders: [];
      readonly pivotX: 0;
      readonly pivotY: 0;
      readonly renderMode: "Rectangle";
      readonly resizableX: false;
      readonly resizableY: false;
      readonly showName: true;
      readonly tags: [];
      readonly tileOpacity: number;
      readonly tileRect: null;
      readonly tileRenderMode: string;
      readonly tilesetId: null;
      readonly uid: number;
      readonly width: number;
    }[];
    readonly enums: [];
    readonly externalEnums: [];
    readonly layers: {
      readonly __type: LayerType;
      readonly autoRuleGroups: [];
      readonly autoSourceLayerDefUid: null;
      readonly canSelectWhenInactive: boolean;
      readonly displayOpacity: number;
      readonly doc: null;
      readonly excludedTags: [];
      readonly gridSize: number;
      readonly guideGridHei: 0;
      readonly guideGridWid: 0;
      readonly identifier: string;
      readonly intGridValues: [];
      readonly hideFieldsWhenInactive: boolean;
      readonly hideInList: boolean;
      readonly inactiveOpacity: number;
      readonly pxOffsetX: 0;
      readonly pxOffsetY: 0;
      readonly parallaxFactorX: 0;
      readonly parallaxFactorY: 0;
      readonly parallaxScaling: true;
      readonly renderInWorldView: true;
      readonly requiredTags: [];
      readonly tilePivotX: 0;
      readonly tilePivotY: 0;
      readonly tilesetDefUid: number | null;
      readonly type: LayerType;
      readonly uiColor: null;
      readonly uid: number;
    }[];
    readonly levelFields: [];
    readonly tilesets: {
      readonly __cHei: number;
      readonly __cWid: number;
      readonly cachedPixelData: {
        readonly opaqueTiles: string;
        readonly averageColors: string;
      };
      readonly customData: {
        readonly tileId: number;
        readonly data: string;
      }[];
      readonly embedAtlas: null;
      readonly enumTags: [];
      readonly identifier: string;
      readonly padding: 0;
      readonly pxHei: number;
      readonly pxWid: number;
      readonly relPath: string;
      readonly savedSelections: [];
      readonly spacing: 0;
      readonly tags: [];
      readonly tagsSourceEnumUid: null;
      readonly tileGridSize: number;
      readonly uid: number;
    }[];
  };
  readonly dummyWorldIid: string;
  readonly exportLevelBg: true;
  readonly exportTiled: false;
  readonly externalLevels: false;
  readonly flags: [];
  readonly identifierStyle: "Lowercase";
  readonly iid: string;
  readonly imageExportMode: "None";
  readonly jsonVersion: "1.3.3";
  readonly levelNamePattern: "Level_%idx";
  readonly levels: {
    readonly __bgColor: string;
    readonly __bgPos: null;
    readonly __neighbours: [];
    readonly __smartColor: string;
    readonly bgColor: null;
    readonly bgPivotX: number;
    readonly bgPivotY: number;
    readonly bgPos: null;
    readonly bgRelPath: null;
    readonly externalRelPath: null;
    readonly fieldInstances: [];
    readonly identifier: string;
    readonly iid: string;
    readonly layerInstances: {
      readonly __cHei: number;
      readonly __cWid: number;
      readonly __gridSize: number;
      readonly __identifier: string;
      readonly __opacity: number;
      readonly __pxTotalOffsetX: 0;
      readonly __pxTotalOffsetY: 0;
      readonly __tilesetDefUid: number | null;
      readonly __tilesetRelPath: string | null;
      readonly __type: LayerType;
      readonly autoLayerTiles: [];
      readonly entityInstances: {
        readonly __grid: [number, number];
        readonly __identifier: string;
        readonly __pivot: [0, 0];
        readonly __smartColor: string;
        readonly __tags: [];
        readonly __tile: null;
        readonly defUid: number;
        readonly fieldInstances: [];
        readonly height: number;
        readonly iid: string;
        readonly px: [number, number];
        readonly width: number;
      }[];
      readonly gridTiles: {
        readonly a: number;
        readonly d: [number];
        readonly f: number;
        readonly px: [number, number];
        readonly src: [number, number];
        readonly t: number;
      }[];
      readonly iid: string;
      readonly intGridCsv: [];
      readonly layerDefUid: number;
      readonly levelId: number;
      readonly optionalRules: [];
      readonly overrideTilesetUid: null;
      readonly pxOffsetX: 0;
      readonly pxOffsetY: 0;
      readonly seed: number;
      readonly visible: boolean;
    }[];
    readonly pxHei: number;
    readonly pxWid: number;
    readonly uid: number;
    readonly useAutoIdentifier: false;
    readonly worldDepth: 0;
    readonly worldX: number;
    readonly worldY: number;
  }[];
  readonly minifyJson: false;
  readonly nextUid: number;
  readonly pngFilePattern: null;
  readonly simplifiedExport: false;
  readonly toc: [];
  readonly tutorialDesc: null;
  readonly worldGridHeight: number;
  readonly worldGridWidth: number;
  readonly worldLayout: "Free";
  readonly worlds: [];
}

export default LDTK;
export { LayerType };
