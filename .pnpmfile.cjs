/* eslint-disable */
// Provides the centralized pnpm catalog that Volto core uses for its shared
// dependency versions (see Volto's upgrade guide, "Centralized pnpm catalog").
const fs = require('fs');
const path = require('path');

const catalogPath = path.resolve(__dirname, 'core/catalog.json');
let catalog = {};
if (fs.existsSync(catalogPath)) {
  const catalogData = fs.readFileSync(catalogPath, 'utf-8');
  catalog = JSON.parse(catalogData);
} else {
  console.error('Catalog file does not exist at:', catalogPath);
}

module.exports = {
  hooks: {
    updateConfig(config) {
      if (config.catalogs) {
        config.catalogs.default ??= catalog;
      }
      return config;
    },
  },
};
