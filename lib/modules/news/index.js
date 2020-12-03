module.exports = {
    extend: 'apostrophe-pieces',
    name: 'new',
    label: 'New',
    contextual: true,
    pluralLbael: 'News',
    addFields: [
        {
            name: 'title',
            label: 'Title',
            type: 'string',
            required: true
        },
        {
            name: 'description',
            label: 'Description',
            type: 'string',
            help: 'Small description of the article',
            required: true            
        },
        {
            name: 'image',
            label: 'Image',
            type: 'singleton',
            contextual: true,
            widgetType: 'apostrophe-images',
            options: {
                limit: 1,
                minSize: [ 200, 200 ],
                aspectRatio: [ 3, 2 ]
            }
        },
        {
            name: 'content',
            label: 'Content',
            type: 'singleton',
            contextual: true,
            widgetType: 'apostrophe-rich-text',
            options: {
                toolbar: [
                    'Styles',
                    'Bold',
                    'Italic',
                    'Link',
                    'Unlink',
                    'Anchor',
                    'Table',
                    'BulletedList',
                    'Blockquote',
                    'Strike',
                    'Subscript',
                    'Superscript',
                    'Split',
                ],
                styles: [
                    {
                        element: 'h2',
                        name: 'Heading'
                    },
                    {
                        element: 'h3',
                        name: 'Subheading'
                    },
                    {
                        element: 'p',
                        name: 'Paragraph'
                    },
                    {
                        element: 'p',
                        name: 'Featured-text',
                        attributes: { class: 'featured-text' }
                    },
                    {
                        element: 'p',
                        name: 'Note',
                        attributes: { class: 'note-text' }
                    }
                ]
            }
        }
    ],
    arrangeFields: [
        {
            name: 'meta',
            label: 'Metadata',
            fields: [ 'title', 'description', 'slug', 'published', 'tags' ]
        },
        {
            name: 'content',
            label: 'Content',
            fields: [ 'image', 'content' ]
        }
    ]
}