module.exports = {
    extend: 'apostrophe-pieces',
    name: 'person',
    label: 'Person',
    pluralLabel: 'People',
    contextual: true,
    addFields: [
        {
            name: 'title',
            label: 'Full Name',
            type: 'string',
            required: true,
            contextual: true
        },
        {
            name: 'firstName',
            label: 'First Name',
            type: 'string',
            required: true
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'string',
            required: true
        },
        {
            name: '_jobs',
            label: 'Jobs',
            type: 'joinByArray',
            withType: 'job'
        },
        {
            name: 'body',
            label: 'Biography',
            type: 'area',
            contextual: true,
            options: {
                widgets: {
                    'apostrophe-rich-text': {
                        toolbar: [ 'Bold', 'Italic', 'Link', 'Unlink' ]
                    },
                    'apostrophe-images': {}
                }
            }
        },
        {
            name: 'phone',
            label: 'Phone',
            type: 'string'
        },
        {
            name: 'thumbnail',
            label: 'Thumbnail',
            type: 'singleton',
            contextual: true,
            widgetType: 'apostrophe-images',
            options: {
                limit: 1,
                minSize: [ 200, 200 ],
                aspectRatio: [ 1, 1 ]
            }
        }
    ],
    arrangeFields: [
        {
            name: 'contact',
            label: 'Contact',
            fields: [ 'firstName', 'lastName', 'phone', '_jobs' ]
        },
        {
            name: 'admin',
            label: 'Administrative',
            fields: [ 'slug', 'published', 'tags' ]
        },
        {
            name: 'content',
            label: 'Biographical',
            fields: [ 'thumbnail', 'body' ]
        }
    ],
    construct: function(self, options) {
        self.beforeSave = function(req, piece, options, callback) {
            piece.title = piece.firstName + ' ' + piece.lastName;
            return callback();
        };
    }
}