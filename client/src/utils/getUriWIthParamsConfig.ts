import config from '../config';

function getUrlWithParamsConfig(endpoint: string, query: any) {
  const newQuery = {
    ...query,
  };

  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpoint].uri,
    query: {},
  };

  const pathname = Object.keys(newQuery).reduce((acc, val) => {
    const elemString = `{${val}}`;
    if (acc.indexOf(elemString) !== -1) {
      const result = acc.replace(elemString, query[val]);
      delete newQuery[val];
      return result;
    }
    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = newQuery;

  return url;
}

export default getUrlWithParamsConfig;
