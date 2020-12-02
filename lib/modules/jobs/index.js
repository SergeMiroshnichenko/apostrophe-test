module.exports = {
    extend: 'apostrophe-pieces',
    name: 'job',
    addFields: [
      {
        name: 'description',
        type: 'singleton',
        widgetType: 'apostrophe-rich-text',
        options: {
          toolbar: [ 'Bold', 'Italic', 'Link' ]
        }
      }
    ],
    arrangeFields: [
      {
        name: 'info',
        label: 'Info',
        fields: [ 'description' ]
    },
    ]
  };