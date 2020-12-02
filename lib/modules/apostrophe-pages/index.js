// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'home',
      label: 'Home'
    },
    {
      name: 'info-page',
      label: 'Info page'
    },
    {
      name: 'people-page',
      label: 'People'
    },
    {
      name: 'jobs-page',
      label: 'Jobs'
    }
  ],
  filters: {
    ancestors: {
      children: {
        depth: 2
      }
    },
    children: true
  }
};
