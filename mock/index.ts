import { baseURL, apiURL } from "../src/settings";

import Mock from "mockjs";

const articlesMock = Mock.mock({
  "array|3-10": [
    {
      id: "@increment",
      title: "@ctitle",
      content_short: "@cparagraph(2,15)",
      "status|1": ["原创", "转载"],
      display_time: "@datetime",
      pageviews: "@integer(300, 5000)",
      url: `${baseURL}/#/articles/` + "@integer(0)",
    },
  ],
});

export function mockXHR() {
  Mock.setup({
    timeout: 1000,
  });

  Mock.mock(`${apiURL}/articles`, "get", () => articlesMock.array);

  // mock的参数不支持正则和:id
  Mock.mock(new RegExp(`${apiURL}/articles/[0-9]+`), "get", {
    "array|3-10": [
      {
        id: "@increment",
        title: "@ctitle",
        content_short: "@cparagraph(2,15)",
        "status|1": ["原创", "转载"],
        display_time: "@datetime",
        pageviews: "@integer(300, 5000)",
        url: `${baseURL}/#/articles/` + "@integer(0)",
      },
    ],
  });
}
