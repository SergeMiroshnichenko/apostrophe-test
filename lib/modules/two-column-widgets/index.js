module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Two Column',
  contextualOnly: true,
  addFields: [
    {
      name: 'areaLeft',
      type: 'area',
      label: 'Left Area',
    },
    {
      name: 'areaRight',
      type: 'area',
      label: 'Right Area',
    }
  ],
  construct: function(self, options) {
    var SuperPushAssets = self.pushAssets;
    self.pushAssets = function() {
        SuperPushAssets();
        self.pushAsset('stylesheet', 'two-column');
    };
  },
};