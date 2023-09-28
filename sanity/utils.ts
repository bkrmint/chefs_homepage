import qs from 'query-string'
import {StringifiableRecord} from 'query-string'

interface BuildQueryParams {
  type: string;
  query: string;
  category: string;
  page: number;
  perPage?: number;
}

export function buildQuery(params: BuildQueryParams) {
  const { type, query, category, page = 1, perPage = 20 } = params;

  const conditions = [`*[_type=="${type}"`];

  if (query) conditions.push(`title match "*${query}*"`);

  if (category && category !== "all") {
    conditions.push(`category == "${category}"`);
  }

  // Calculate pagination limits
  const offset = (page - 1) * perPage;
  const limit = perPage;

  return conditions.length > 1
    ? `${conditions[0]} && (${conditions
        .slice(1)
        .join(" && ")})][${offset}...${limit}]`
    : `${conditions[0]}][${offset}...${limit}]`;
}

// interface UrlQueryParams {
//   params: string;
//   key: string;
//   value: string | null;
// }

interface UrlQueryParams {
  params: string;
  key?: string;
  value?: string | null;
  keysToRemove?: string[];
}


export function formUrlQuery({ params, key, value, keysToRemove }: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  console.log("currentUrl", currentUrl);

  // currentUrl[key] = value;

  if (keysToRemove) {
    keysToRemove.forEach((key_ToRemove) => delete currentUrl[key_ToRemove]);
  } else if (key && value) {
    currentUrl[key] = value; //since key is optional, it can become undefined so we need to check before it reaches here
  }

  console.log("currentUrl", currentUrl);


  return qs.stringifyUrl (
    { url: window.location.pathname, query: currentUrl},
    { skipNull: true }
  )

}