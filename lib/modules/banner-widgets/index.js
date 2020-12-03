module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Banner',
    addFields: [
        {
            name: 'title',
            label: 'Banner title',
            type: 'string',
        },
        {
            name: 'titleStyle',
            label: 'Title style',
            type: 'select',
            help: 'Choose a style for banner title',
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
        },
        {
            name: 'image',
            label: 'Banner image',
            type: 'singleton',
            required: true,
            widgetType: 'apostrophe-images',
            options: {
                limit: 1,
                minSize: [1150, 720],
                aspectRatio: [3,2]
            }
        },
    ],
    construct: function(self, options) {
        var SuperPushAssets = self.pushAssets;
        self.pushAssets = function() {
            SuperPushAssets();
            self.pushAsset('stylesheet', 'banner');
        };
    },
  };