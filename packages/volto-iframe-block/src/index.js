import BlockSettingsSchema from '@plone/volto/components/manage/Blocks/Block/Schema';
import applicationSVG from '@plone/volto/icons/application.svg';
import IframeView from './components/View';
import IframeEdit from './components/Edit';

import './theme/_main.scss';

const applyConfig = (config) => {
  config.blocks.blocksConfig.iframe = {
    id: 'iframe',
    title: 'Iframe',
    icon: applicationSVG,
    group: 'common',
    view: IframeView,
    edit: IframeEdit,
    schema: BlockSettingsSchema,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    validUrls: [],
  };
  return config;
};

export default applyConfig;
