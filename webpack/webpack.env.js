
const URL = {
  production: {
    siteUrl: ""
  },
  qa: {
    siteUrl: ""
  },
  test: {
    // http://segotn13423/dev/ispt/
  }
};

const credentials = {
  // Online
  production: {
    ClientId: "",
    ClientSecret: ""
  },
  qa: {
    ClientId: "",
    ClientSecret: ""
  },
  test: {
    ClientId: "",
    ClientSecret: ""
  }
};

const targetPath = "/SiteAssets/kats";

module.exports = {
  URL,
  credentials,
  targetPath
};
