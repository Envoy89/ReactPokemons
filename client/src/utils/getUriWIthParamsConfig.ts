import config from '../config';

function getUrlWithParamsConfig(endpoint: string) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpoint].uri,
  };
  return url;
}

export default getUrlWithParamsConfig;
