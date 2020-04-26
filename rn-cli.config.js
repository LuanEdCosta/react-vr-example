const path = require('path')
const blacklist = require('./node_modules/metro-bundler/src/blacklist')

const config = {
  getProjectRoots() {
    // eslint-disable-next-line no-use-before-define
    return getRoots()
  },

  getBlacklistRE() {
    return blacklist([])
  },

  getAssetExts() {
    return ['obj', 'mtl']
  },

  getPlatforms() {
    return ['vr']
  },

  getProvidesModuleNodeModules() {
    return ['react-native', 'react-vr']
  },
}

function getRoots() {
  const root = process.env.REACT_NATIVE_APP_ROOT
  if (root) return [path.resolve(root)]
  return [path.resolve(__dirname)]
}

module.exports = config
