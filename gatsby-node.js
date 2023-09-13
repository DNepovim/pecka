exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/prihlasovani`,
    toPath: `https://akce.e-cirkev.cz/register/51`,
  });
};
