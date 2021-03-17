import { MigratingData } from '../../src/index';

export interface BoardConfig extends MigratingData {
  version: string;
  type: 'personal' | 'organisational' | 'relationship';
  template: 'xyz' | 'abc' | 'def';
  design: 'xyz' | 'abc' | 'def';
}

export const BoardConfigVersion = '1';

const NewBoardConfig = {
  version: BoardConfigVersion,
  type: 'personal',
  design: 'abc',
  template: 'abc',
} as BoardConfig;

export const NewTest0BoardConfig = {
  ...NewBoardConfig,
  blocks: [
    {
      type: 'images',
      viewportTransform: [1, 0, 0, 1, 0, 0],
      zoom: 1,
      images: [],
      title: myVisualizationTitle,
    } as ImagesBlockConfig,
    {
      type: 'text',
      content: missionStatementContent,
      title: missionStatementTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'text',
      content: myValuesContent,
      title: myValuesTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'text',
      content: myYearGoalaContent,
      title: myYearGoalsTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'text',
      content: '',
      title: mydailyRoutineTitle,
      textType: 'progress',
      history: [],
      items: mydailyRoutineItems,
      removeDone: false,
    } as CheckboxBlockConfig,
    {
      type: 'text',
      content: '',
      title: todaysPrioritiesTitle,
      textType: 'progress',
      history: [],
      items: todaysPrioritiesItems,
      removeDone: true,
    } as CheckboxBlockConfig,
    {
      type: 'text',
      content: myRelationshipVisionContent,
      title: myRelationshipVisionTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'journal',
      template: dailyJournalContent,
      title: dailyJournalTitle,
      posts: [],
    } as JournalBlockConfig,
    {
      type: 'quotes',
      quotes: dailyQuotes,
      title: dailyJournalTitle,
    } as QuotesBlockConfig,
  ],
} as BoardConfig;

export const NewTest1BoardConfig = {
  ...NewBoardConfig,
  version: '2',
  blocks: [
    {
      type: 'images',
      viewportTransform: [1, 0, 0, 1, 0, 0],
      zoom: 1,
      images: [],
      title: myVisualizationTitle,
    } as ImagesBlockConfig,
    {
      type: 'text',
      content: missionStatementContent,
      title: missionStatementTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'text',
      content: myValuesContent,
      title: myValuesTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'text',
      content: myYearGoalaContent,
      title: myYearGoalsTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'text',
      content: '',
      title: mydailyRoutineTitle,
      textType: 'progress',
      history: [],
      items: mydailyRoutineItems,
      removeDone: false,
    } as CheckboxBlockConfig,
    {
      type: 'text',
      content: '',
      title: todaysPrioritiesTitle,
      textType: 'progress',
      history: [],
      items: todaysPrioritiesItems,
      removeDone: true,
    } as CheckboxBlockConfig,
    {
      type: 'text',
      content: '',
      title: myRelationshipVisionTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'journal',
      template: dailyJournalContent,
      title: dailyJournalTitle,
      posts: [],
    } as JournalBlockConfig,
    {
      type: 'quotes',
      quotes: dailyQuotes,
      title: dailyJournalTitle,
    } as QuotesBlockConfig,
  ],
} as BoardConfig;

export const NewTest2BoardConfig = {
  ...NewBoardConfig,
  version: '3',
  blocks: [
    {
      type: 'images',
      viewportTransform: [1, 0, 0, 1, 0, 0],
      zoom: 1,
      images: [],
      focus: true,
      title: myVisualizationTitle,
    } as ImagesBlockConfig,
    {
      type: 'text',
      content: missionStatementContent,
      title: missionStatementTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'text',
      blockId: uuid.v4(),
      content: myValuesContent,
      title: myValuesTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'text',
      blockId: uuid.v4(),
      content: myYearGoalaContent,
      title: myYearGoalsTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'text',
      blockId: uuid.v4(),
      content: '',
      title: mydailyRoutineTitle,
      textType: 'progress',
      history: [],
      items: mydailyRoutineItems,
      removeDone: false,
    } as CheckboxBlockConfig,
    {
      type: 'text',
      blockId: uuid.v4(),
      content: '',
      title: todaysPrioritiesTitle,
      textType: 'progress',
      history: [],
      items: todaysPrioritiesItems,
      removeDone: true,
    } as CheckboxBlockConfig,
    {
      type: 'text',
      blockId: uuid.v4(),
      content: myRelationshipVisionContent,
      title: myRelationshipVisionTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'journal',
      template: dailyJournalContent,
      title: dailyJournalTitle,
      blockId: uuid.v4(),
      posts: [],
    } as JournalBlockConfig,
    {
      type: 'quotes',
      blockId: uuid.v4(),
      quotes: dailyQuotes,
      title: dailyQuotesTitle,
    } as QuotesBlockConfig,
  ],
} as BoardConfig;

export const NewTest3BoardConfig = {
  ...NewBoardConfig,
  version: '4',
  blocks: [
    {
      type: 'images',
      viewportTransform: [1, 0, 0, 1, 0, 0],
      zoom: 1,
      blockId: uuid.v4(),
      images: [],
      focus: false,
      title: myVisualizationTitle,
    } as ImagesBlockConfig,
    {
      type: 'text',
      blockId: uuid.v4(),
      content: missionStatementContent,
      title: missionStatementTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'text',
      blockId: uuid.v4(),
      content: myValuesContent,
      title: myValuesTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'text',
      blockId: uuid.v4(),
      content: myYearGoalaContent,
      title: myYearGoalsTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'text',
      blockId: uuid.v4(),
      content: '',
      title: mydailyRoutineTitle,
      textType: 'progress',
      history: [],
      items: mydailyRoutineItems,
      removeDone: false,
    } as CheckboxBlockConfig,
    {
      type: 'text',
      blockId: uuid.v4(),
      content: '',
      title: todaysPrioritiesTitle,
      textType: 'progress',
      history: [],
      items: todaysPrioritiesItems,
      removeDone: true,
    } as CheckboxBlockConfig,
    {
      type: 'text',
      blockId: uuid.v4(),
      content: myRelationshipVisionContent,
      title: myRelationshipVisionTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'journal',
      template: dailyJournalContent,
      title: dailyJournalTitle,
      blockId: uuid.v4(),
      posts: [],
    } as JournalBlockConfig,
    {
      type: 'quotes',
      blockId: uuid.v4(),
      quotes: dailyQuotes,
      title: dailyQuotesTitle,
    } as QuotesBlockConfig,
  ],
} as BoardConfig;

export const NewTest4BoardConfig = {
  ...NewBoardConfig,
  version: '5',
  blocks: [
    {
      type: 'images',
      viewportTransform: [1, 0, 0, 1, 0, 0],
      zoom: 1,
      blockId: uuid.v4(),
      images: [],
      focus: false,
      title: myVisualizationTitle,
    } as ImagesBlockConfig,
    {
      type: 'text',
      blockId: uuid.v4(),
      content: missionStatementContent,
      title: missionStatementTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'text',
      blockId: uuid.v4(),
      content: myValuesContent,
      title: myValuesTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'text',
      content: myYearGoalaContent,
      title: myYearGoalsTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'text',
      content: '',
      title: mydailyRoutineTitle,
      textType: 'progress',
      history: [],
      items: mydailyRoutineItems,
      removeDone: false,
      newKey: 1,
    } as CheckboxBlockConfig,
    {
      type: 'text',
      content: '',
      title: todaysPrioritiesTitle,
      textType: 'progress',
      history: [],
      items: todaysPrioritiesItems,
      removeDone: true,
      newKey: 2,
    } as CheckboxBlockConfig,
    {
      type: 'text',
      content: myRelationshipVisionContent,
      title: mydailyRoutineTitle,
      textType: 'normal',
    } as TextBlockConfig,
    {
      type: 'journal',
      template: dailyJournalContent,
      title: dailyJournalTitle,
      posts: [],
    } as JournalBlockConfig,
    {
      type: 'quotes',
      quotes: dailyQuotes,
      title: dailyQuotesTitle,
    } as QuotesBlockConfig,
  ],
} as BoardConfig;
