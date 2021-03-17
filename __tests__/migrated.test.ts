import { migrated, MigratingData } from '../src/index';
import testBoardConfigMigration from './migrations/boardMigrationTest';
import {
  BoardConfig,
  NewTest0BoardConfig,
  NewTest1BoardConfig,
  NewTest2BoardConfig,
  NewTest3BoardConfig,
  NewTest4BoardConfig,
} from './options/boardOptionsTest';

describe('Testing board migration 1', () => {
  it('correctly updates config for specific board version', () => {
    let data = { ...NewTest0BoardConfig };
    data = migrated(
      data,
      testBoardConfigMigration.migrations1 as {
        [key: string]: (model: MigratingData) => void;
      },
      NewTest1BoardConfig,
    ) as BoardConfig;

    // expect(data.version).toMatchObject(NewTest1BoardConfig);
    expect(data.version).toBe(NewTest1BoardConfig.version);
  });
});

describe('Testing board migration 2', () => {
  it('correctly updates config for specific board version', () => {
    let data = { ...NewTest0BoardConfig };
    data = migrated(
      data,
      testBoardConfigMigration.migrations2 as {
        [key: string]: (model: MigratingData) => void;
      },
      NewTest2BoardConfig,
    ) as BoardConfig;

    expect(data.blocks[0]).toHaveProperty('focus');
  });
});

describe('Testing board migration 3', () => {
  it('correctly updates config for specific board version', () => {
    let data = { ...NewTest0BoardConfig };
    data = migrated(
      data,
      testBoardConfigMigration.migrations3 as {
        [key: string]: (model: MigratingData) => void;
      },
      NewTest3BoardConfig,
    ) as BoardConfig;

    expect(data.blocks[0].focus).toBe(false);
  });
});

describe('Testing board migration 3', () => {
  it('correctly updates config for specific board version', () => {
    let data = { ...NewTest2BoardConfig };
    data = migrated(
      data,
      testBoardConfigMigration.migrations3 as {
        [key: string]: (model: MigratingData) => void;
      },
      NewTest3BoardConfig,
    ) as BoardConfig;

    expect(data.blocks[0].focus).toBe(false);
  });
});

describe('Testing board migration 4', () => {
  it('correctly updates config for specific board version', () => {
    let data = { ...NewTest3BoardConfig };
    data = migrated(
      data,
      testBoardConfigMigration.migrations4 as {
        [key: string]: (model: MigratingData) => void;
      },
      NewTest4BoardConfig,
    ) as BoardConfig;

    expect(data.blocks[4].newKey).toBe(1);
    expect(data.blocks[5].newKey).toBe(2);
    expect(data.blocks.find((x) => x.type === 'quotes').quotes[0].seen).toBe(false);
  });
});
