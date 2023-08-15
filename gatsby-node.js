<<<<<<< HEAD
const axios = require("axios");

exports.createPages = async ({ actions: { createPage } }) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = res.data;

  posts.forEach((post) => {
    createPage({
      path: `/posts/${post.id}`,
      component: require.resolve("./src/templates/post.js"),
      context: { post },
    });
  });

  createPage({
    path: "/posts",
    component: require.resolve("./src/templates/posts.js"),
    context: { posts },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
type PostJson {
  id: ID!
title: String
body: String
}

input TitleFilter {
  eq: String
  in: String
}
`;
  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Query: {
      allPosts: {
        args: {
          filter: `input PostFilterInput {title: TitleFilter}`,
          limit: "Int",
        },
        type: ["PostJson"],
        async resolve(source, { filter }, context, info) {
          const { title } = filter || {};
          const { eq } = title || {};
          console.log("Hello from allPosts resolver");

          const res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );
          const posts = res.data;
          console.log("POSTS", posts);

          if (filter) {
            return posts.filter((post) => post.title === eq);
          }
          return posts;
        },
      },
    },
  };

  createResolvers(resolvers);
};
=======

const searchIndex = require("./data/searchIndex.json")

exports.onCreatePage = ({page, actions}) => {
  const { createPage, deletePage } = actions
  if (page.path === "/") {
    deletePage(page)
    createPage({
      ...page,
      context: {
        ...page.context,
        searchIndex
      }
    })
  }
}


exports.createPages = async ({graphql, actions: {createPage}}) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  const { nodes } = result.data.allMarkdownRemark
  const itemsPerPage = 3
  const numOfPages = Math.ceil(nodes.length / itemsPerPage)

  Array.from({length: numOfPages}).forEach((_, i) => {
    const page = i + 1

    createPage({
      path: page === 1 ? `/blogs` : `/blogs/${page}`,
      component: require.resolve("./src/templates/blogsPaginated"),
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        currentPage: page,
        numOfPages
      }
    })
  })

  nodes.forEach(node => {
    createPage({
      path: `/blogs/${node.frontmatter.slug}`,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        slug: node.frontmatter.slug
      }
    })
  })
}



>>>>>>> 119c30a496581c760b5bd80dc46b24b9cd5dc582
