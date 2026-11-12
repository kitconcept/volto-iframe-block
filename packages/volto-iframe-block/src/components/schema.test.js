import { createIntl } from 'react-intl';

import { IframeBlockSchema } from './schema';

const intl = createIntl({ locale: 'en', messages: {} });

describe('IframeBlockSchema', () => {
  it('builds the schema from intl alone, as the @blocks-schema endpoint calls it', () => {
    const schema = IframeBlockSchema({ intl });

    expect(schema.title).toBe('Iframe');
    expect(schema.properties.src.widget).toBe('url');
    expect(schema.fieldsets[0].fields).toContain('title');
  });

  it('describes the title with a plain string, which survives JSON serialization', () => {
    const schema = IframeBlockSchema({ intl });
    const { description } = schema.properties.title;

    expect(typeof description).toBe('string');
    expect(description).toContain('WCAG 2.1');

    const serialized = JSON.parse(JSON.stringify(schema));
    expect(serialized.properties.title.description).toBe(description);
  });
});
