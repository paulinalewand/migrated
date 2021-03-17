type Json = null | boolean | number | string | Json[] | { [prop: string]: Json };

type JsonCompatible<T> = {
  [P in keyof T]: T[P] extends Json
    ? T[P]
    : Pick<T, P> extends Required<Pick<T, P>>
    ? never
    : T[P] extends (() => any) | undefined
    ? never
    : JsonCompatible<T[P]>;
};

export type MigratingData = JsonCompatible<any>;

export const mergeData = (model: MigratingData, modelNew: MigratingData): void => {
  Object.keys(model).forEach(function (key) {
    if (typeof model[key] === 'object') {
      if (!(model[key] instanceof Array)) model[key] = { ...modelNew[key], ...model[key] };
      if (modelNew[key]) return mergeData(model[key], modelNew[key]);
    }
  });
};

export const hydrateData = (model: MigratingData, newValue: any, ...keys: string[]): void => {
  for (let i = 0; i < keys.length - 1; i += 1) {
    model = model[keys[i]];
  }
  if (model) model[keys[keys.length - 1]] = newValue;
};

export const runMigrationFncs = (
  model: MigratingData,
  versionFncs: { [key: string]: (model: MigratingData) => void },
): void => {
  for (const key in versionFncs) {
    versionFncs[key](model);
  }
};

export const migrated = (
  boardConfigOld: MigratingData,
  migrationFncs: { [key: string]: (model: MigratingData) => void },
  boardConfigNew?: MigratingData, // OPTIONLAL new config version model, with default values set
): MigratingData => {
  const updatedConfig = { ...(boardConfigNew || {}), ...boardConfigOld };
  if (boardConfigNew) mergeData(updatedConfig, boardConfigNew);
  runMigrationFncs(updatedConfig, migrationFncs);
  return updatedConfig;
};
