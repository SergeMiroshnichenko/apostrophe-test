module.exports = {
    extend: 'apostrophe-pieces-pages',
    piecesFilters: [
        {
            name: 'jobs'
        }
    ],
    construct: function(self, options) {
        var SuperPushAssets = self.pushAssets;
        self.pushAssets = function() {
            SuperPushAssets();
            self.pushAsset('stylesheet', 'people-pages');
        };
    },
}