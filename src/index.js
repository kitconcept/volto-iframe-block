import BlockSettingsSchema from '@plone/volto/components/manage/Blocks/Block/Schema';
import audioSVG from '@plone/volto/icons/audio.svg';
import IframeView from './components/Blocks/Iframe/View';
import IframeEdit from './components/Blocks/Iframe/Edit';

const applyConfig = (config) => {
  config.blocks.blocksConfig.iframe = {
    id: 'iframe',
    title: 'Iframe',
    icon: audioSVG,
    group: 'common',
    view: IframeView,
    edit: IframeEdit,
    schema: BlockSettingsSchema,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };
  return config;
};

export default applyConfig;
