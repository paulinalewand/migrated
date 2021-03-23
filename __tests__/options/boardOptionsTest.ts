import { MigratingData } from '../../src/index';

test.skip('skip', () => {});

export interface BoardConfig extends MigratingData {
  version: string;
  name: string;
}

export interface BlockConfig {
  type: 'image' | 'text' | 'other';
  zoom?: number;
  images?: [];
  title?: string;
  others?: [];
}

const NewBoardConfig = {
  version: '1',
  name: 'TEST',
} as BoardConfig;

export const NewTest0BoardConfig = {
  ...NewBoardConfig,
  blocks: [
    {
      type: 'image',
      zoom: 1,
      images: [],
    } as BlockConfig,
    {
      type: 'text',
    } as BlockConfig,
    {
      type: 'other',
      title: 'test',
      others: [],
    } as BlockConfig,
  ],
} as BoardConfig;

export const NewTest1BoardConfig = {
  ...NewBoardConfig,
  version: '2',
  blocks: [
    {
      type: 'image',
      zoom: 1,
      images: [],
    } as BlockConfig,
    {
      type: 'text',
    } as BlockConfig,
    {
      type: 'other',
      title: 'test',
      others: [],
    } as BlockConfig,
  ],
} as BoardConfig;

export const NewTest2BoardConfig = {
  ...NewBoardConfig,
  version: '3',
  blocks: [
    {
      type: 'image',
      zoom: 1,
      images: [],
      focus: true,
    } as BlockConfig,
    {
      type: 'text',
    } as BlockConfig,
    {
      type: 'other',
      title: 'test',
      others: [],
    } as BlockConfig,
  ],
} as BoardConfig;

export const NewTest3BoardConfig = {
  ...NewBoardConfig,
  version: '4',
  blocks: [
    {
      type: 'image',
      zoom: 1,
      images: [],
      focus: false,
    } as BlockConfig,
    {
      type: 'text',
    } as BlockConfig,
    {
      type: 'other',
      title: 'test',
      others: [],
    } as BlockConfig,
  ],
} as BoardConfig;

export const NewTest4BoardConfig = {
  ...NewBoardConfig,
  version: '5',
  blocks: [
    {
      type: 'image',
      zoom: 1,
      images: [],
      focus: false,
    } as BlockConfig,
    {
      type: 'text',
      newKey: 1,
    } as BlockConfig,
    {
      type: 'other',
      title: 'test',
      newKey: 'two',
      others: [],
    } as BlockConfig,
  ],
} as BoardConfig;
