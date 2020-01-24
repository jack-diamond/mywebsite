const repoNameURIPrefix =
  process.env.NODE_ENV === 'production' ? '/mywebsite' : '';

module.exports = {
  assetPrefix: repoNameURIPrefix,
  env: {
    linkPrefix: repoNameURIPrefix,
  },
  generateBuildId: async () => 'current',
};
