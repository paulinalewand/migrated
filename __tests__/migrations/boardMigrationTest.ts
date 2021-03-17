import { hydrateData, mergeData } from '../../src';
import { BoardConfig } from '../options/boardOptionsTest';

const migrations1: { [key: string]: (model: BoardConfig) => void } = {
  '1': () => {
    // do nothing
  },
  '2': (model: BoardConfig) => {
    hydrateData(model, '2', 'version');
  },
};

const migrations2: { [key: string]: (model: BoardConfig) => void } = {
  '1': () => {
    // do nothing
  },
  '2': (model: BoardConfig) => {
    hydrateData(model, '2', 'version');
  },
  '3': (model: BoardConfig) => {
    hydrateData(model, '3', 'version');
  },
};

const migrations3: { [key: string]: (model: BoardConfig) => void } = {
  '1': () => {
    // do nothing
  },
  '2': (model: BoardConfig) => {
    hydrateData(model, '2', 'version');
  },
  '3': (model: BoardConfig) => {
    hydrateData(model, '3', 'version');
  },
  '4': (model: BoardConfig) => {
    hydrateData(model, '4', 'version');
    hydrateData(model, false, 'blocks', '0', 'focus');
  },
};

const migrations4: { [key: string]: (model: BoardConfig) => void } = {
  '1': () => {
    // do nothing
  },
  '2': (model: BoardConfig) => {
    hydrateData(model, '2', 'version');
  },
  '3': (model: BoardConfig) => {
    hydrateData(model, '3', 'version');
  },
  '4': (model: BoardConfig) => {
    hydrateData(model, '4', 'version');
    hydrateData(model, false, 'blocks', '0', 'focus');
  },
  '5': (model: BoardConfig) => {
    hydrateData(model, '5', 'version');
    model.blocks
      .find((x) => x.type === 'quotes')
      .quotes.forEach(function (quote) {
        quote['seen'] = false;
      });
  },
};

const testBoardConfigMigrationTest = () => {
  return { migrations1, migrations2, migrations3, migrations4 };
};
export default testBoardConfigMigrationTest();
