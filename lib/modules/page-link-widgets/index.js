module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Link to a Page',
    addFields: [
        {
            name: '_page',
            type: 'joinByOne',
            withType: 'apostrophe-page',
            label: 'Page',
            required: true,
            idField: 'pageId',
            filters: {
                projection: {
                    title: 1,
                    _url: 1
                }
            }
        },
        {
            name: 'title',
            label: 'Title',
            type: 'string'
        },
        {
            name: 'style',
            label: 'Style',
            type: 'select',
            help: 'Choose a style for this link',
            choices: [
                {
                    value: 'default',
                    label: 'Default'
                },
                {
                    value: 'primary',
                    label: 'Primary'
                },
                {
                    value: 'danger',
                    label: 'Danger'
                },
                {
                    value: 'dense',
                    label: 'Dense'
                },
                {
                    value: 'white',
                    label: 'White'
                }
            ]
        }
    ],
    construct: function(self, options) {
        var SuperPushAssets = self.pushAssets;
        self.pushAssets = function() {
            SuperPushAssets();
            self.pushAsset('stylesheet', 'page-link');
        };
    },
  };