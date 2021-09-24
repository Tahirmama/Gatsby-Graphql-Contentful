
var path = require('path');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const result = await graphql(`
    {
        allContentfulMobile {
            nodes {
              slug
              title

            }
          }
        } 
    `)
    console.log(JSON.stringify(result));
    result.data.allContentfulMobile.nodes.forEach((obj) => {
        createPage({
            path: `/product/${obj.slug}`, 
            component: path.resolve('./src/templates/product.tsx'),
            context: {
                itemDetails: obj
            }
        })
    })
}