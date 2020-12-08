export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5fcfd4bb7f47dc0e949dbea1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6w5xq93y',
                  apiId: '90d98868-a022-4291-ba18-52506614da59'
                },
                {
                  buildHookId: '5fcfd4bb13a322124d89a8f1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ducnn8jc',
                  apiId: '5d2c18a0-83da-4a52-b06b-73029553a389'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CDev94/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ducnn8jc.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
