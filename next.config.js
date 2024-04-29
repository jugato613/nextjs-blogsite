const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Gabo_user",
        mongodb_password: "test123",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-blogsite-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "Gabo_user",
      mongodb_password: "test123",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-blogsite",
    },
  };
};
