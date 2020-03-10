export default {
  widgets: [
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
                  buildHookId: '5e67cd14f8f51c11d8f5fff6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ouez698o',
                  apiId: '73669745-fea0-4e2c-9565-394f3026fbed'
                },
                {
                  buildHookId: '5e67cd15b79cbe4c45b38d69',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ex96n5po',
                  apiId: '89003428-e384-43df-ace1-c570e9058acc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kaspars-ozols/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ex96n5po.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
