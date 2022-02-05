export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61fefdf3e12ddee0b9326cd7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nvxc723n',
                  apiId: '10e1e0cb-145b-4015-8e79-bac44aeb4a9b'
                },
                {
                  buildHookId: '61fefdf343cac7ebb576dd85',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7ttjfs42',
                  apiId: 'd0fa9925-77fe-4d01-b01c-8fa6f6dc791c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/scottmas/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7ttjfs42.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
