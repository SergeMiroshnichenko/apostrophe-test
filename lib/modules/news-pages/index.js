module.exports = {
    extend: 'apostrophe-pieces-pages',
    piecesFilters: [
        {
            name: 'tags'
        }
    ],
    construct: function(self, options) {
        var SuperPushAssets = self.pushAssets;
        self.pushAssets = function() {
            SuperPushAssets();
            self.pushAsset('stylesheet', 'news');
        };
    },
}