import Url from 'url';
import getUrlWithParamsConfig from './getUriWIthParamsConfig';

async function req(endpoint: string, query: object) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));

  return fetch(uri).then((res) => res.json());
}

export default req;