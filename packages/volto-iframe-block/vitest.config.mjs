import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const voltoDir = path.resolve(__dirname, '../../core/packages/volto');

// Stylesheets and icons are imported by the block configuration; the unit
// tests only need their paths, so they are replaced with empty modules.
const assetStub = {
  name: 'asset-stub',
  enforce: 'pre',
  transform(code, id) {
    if (/\.(svg|scss|css)$/.test(id)) {
      return { code: 'export default "";', map: null };
    }
    return null;
  },
};

// Volto's webpack also looks up bare imports (react-intl, react-redux, ...) in
// Volto's own node_modules. pnpm does not expose them to this package, so fall
// back to resolving them from Volto, as webpack does.
const resolveFromVolto = {
  name: 'resolve-from-volto',
  enforce: 'pre',
  async resolveId(source, importer, options) {
    if (
      !importer ||
      source.startsWith('.') ||
      source.startsWith('\0') ||
      path.isAbsolute(source) ||
      importer.startsWith(voltoDir)
    ) {
      return null;
    }
    const resolved = await this.resolve(source, importer, {
      ...options,
      skipSelf: true,
    });
    if (resolved) {
      return resolved;
    }
    return this.resolve(source, path.join(voltoDir, 'package.json'), {
      ...options,
      skipSelf: true,
    });
  },
};

export default ({
  plugins: [assetStub, resolveFromVolto],
  esbuild: {
    jsx: 'automatic',
  },
  resolve: {
    alias: {
      '@plone/volto': path.join(voltoDir, 'src'),
      '@kitconcept/volto-iframe-block': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
  },
});
