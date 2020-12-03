module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Text Note',
  contextualOnly: true,
  addFields: [
    {
      name: 'noteArea',
      type: 'area',
      label: 'Note Area',
    }
  ],
  construct: function(self, options) {
    var SuperPushAssets = self.pushAssets;
    self.pushAssets = function() {
        SuperPushAssets();
        self.pushAsset('stylesheet', 'note');
    };
  },
};