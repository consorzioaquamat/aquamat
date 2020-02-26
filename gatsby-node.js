const path = require('path')

module.exports.createPages = async ({ reporter, graphql, actions }) => {
    const { createPage } = actions
    const newsTemplate = path.resolve('./src/templates/news.js')
    const consorziateTemplate = path.resolve('./src/templates/consorziate.js')
    const result = await graphql(`
        query {
            allPrismicNews {
                edges {
                    node {
                        data{
                            slug{
                                text
                            }
                        }
                       
                    }
                }
            }
            allPrismicConsorziate {
                edges {
                    node {
                        data{
                            slug{
                                text
                            }
                        }
                       
                    }
                }
            }
        }
    `);
    if (result.errors) {
        reporter.panic(result.errors);
      }

    result.data.allPrismicNews.edges.forEach((edge) => {
        createPage({
            component: newsTemplate,
            path: `/news/${edge.node.data.slug.text}`,
            context: {
                slug: edge.node.data.slug.text,
            }
        })
    });

    result.data.allPrismicConsorziate.edges.forEach((edge) => {
        createPage({
            component: consorziateTemplate,
            path: `/consorziate/${edge.node.data.slug.text}`,
            context: {
                slug: edge.node.data.slug.text,
            }
        })
    })
    
}
