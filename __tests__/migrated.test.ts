import { migrated, MigratingFnsc } from '../src/index';
import testBoardConfigMigration from './migrations/boardMigrationTest';
import {
  BlockConfig,
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
    data = migrated(data, testBoardConfigMigration.migrations1 as MigratingFnsc, NewTest1BoardConfig) as BoardConfig;

    // expect(data.version).toMatchObject(NewTest1BoardConfig);
    expect(data.version).toBe(NewTest1BoardConfig.version);
  });
});

describe('Testing board migration 2', () => {
  it('correctly updates config for specific board version', () => {
    let data = { ...NewTest0BoardConfig };
    data = migrated(data, testBoardConfigMigration.migrations2 as MigratingFnsc, NewTest2BoardConfig) as BoardConfig;

    expect(data.blocks[0]).toHaveProperty('focus');
  });
});

describe('Testing board migration 3', () => {
  it('correctly updates config for specific board version', () => {
    let data = { ...NewTest0BoardConfig };
    data = migrated(data, testBoardConfigMigration.migrations3 as MigratingFnsc, NewTest3BoardConfig) as BoardConfig;

    expect(data.blocks[0].focus).toBe(false);
  });
});

describe('Testing board migration 3', () => {
  it('correctly updates config for specific board version', () => {
    let data = { ...NewTest2BoardConfig };
    data = migrated(data, testBoardConfigMigration.migrations3 as MigratingFnsc, NewTest3BoardConfig) as BoardConfig;

    expect(data.blocks[0].focus).toBe(false);
  });
});

describe('Testing board migration 4', () => {
  it('correctly updates config for specific board version', () => {
    let data = { ...NewTest3BoardConfig };
    data = migrated(data, testBoardConfigMigration.migrations4 as MigratingFnsc, NewTest4BoardConfig) as BoardConfig;

    expect(data.blocks[1].newKey).toBe(1);
    expect(data.blocks[2].newKey).toBe('two');
    expect(data.blocks.find((x: BlockConfig) => x.type === 'other').others[0].seen).toBe(false);
  });
});
