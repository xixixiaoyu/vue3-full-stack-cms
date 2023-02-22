const env = import.meta.env.VITE_USER_NODE_ENV || "prod";

const EnvConfig = {
  dev: {
    baseApi: "/",
    mockApi: "https://www.fastmock.site/mock/13089f924ad68903046c5a61371475c4/api",
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
