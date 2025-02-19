import BlockSettingsSchema from '@plone/volto/components/manage/Blocks/Block/Schema';
import applicationSVG from '@plone/volto/icons/application.svg';

import IframeEdit from '@kitconcept/volto-iframe-block/components/Edit';
import IframeView from '@kitconcept/volto-iframe-block/components/View';
import '@kitconcept/volto-iframe-block/theme/main.scss';

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
