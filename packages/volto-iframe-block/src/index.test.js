import applyConfig from './index';
import { IframeBlockSchema } from './components/schema';

describe('iframe block configuration', () => {
  it('registers the block with a blockSchema the endpoint can call with intl', () => {
    const config = applyConfig({ blocks: { blocksConfig: {} } });
    const block = config.blocks.blocksConfig.iframe;

    expect(block.id).toBe('iframe');
    expect(block.blockSchema).toBe(IframeBlockSchema);
  });
});
