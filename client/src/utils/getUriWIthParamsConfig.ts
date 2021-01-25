import config from '../config';

function getUrlWithParamsConfig(endpoint: string, query: object) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpoint].uri,
    query: {
      ...query,
    },
  };
  return url;
}

export default getUrlWithParamsConfig;
