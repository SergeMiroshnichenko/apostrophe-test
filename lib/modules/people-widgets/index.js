module.exports = {
    extend: 'apostrophe-pieces-widgets',
    filters: {
        projection: {
            title: 1,
            phone: 1,
            thumbnail: 1,
            _url: 1,
            _jobs: 1
        }
    },
    construct: function(self, options) {
        var SuperPushAssets = self.pushAssets;
        self.pushAssets = function() {
            SuperPushAssets();
            self.pushAsset('stylesheet', 'people');
        };
    },
}
