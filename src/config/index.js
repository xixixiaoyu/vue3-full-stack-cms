const env = import.meta.env.VITE_USER_NODE_ENV || "prod";

const EnvConfig = {
  dev: {
    baseApi: "/api",
    mockApi: "https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api",
  },
  test: {
    baseApi: "/",
    mockApi: "https://www.fastmock.site/mock/13089f924ad68903046c5a61371475c4/api",
  },
  prod: {
    baseApi: "/",
    mockApi: "https://www.fastmock.site/mock/13089f924ad68903046c5a61371475c4/api",
  },
};

export default {
  namespace: "manager",
  env,
  mock: true,
  ...EnvConfig[env],
};
