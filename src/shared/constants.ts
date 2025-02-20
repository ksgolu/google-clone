export const SEARCH_TERM_QUERY_NAME = 'searchTerm';
export interface IpageProperties {
  name: string;
  path: string;
}
export interface IpageTabs {
  all: IpageProperties;
  image: IpageProperties;
}
export const PAGE_TABS: IpageTabs = {
  all: {
    name: 'All',
    path: '/search/web',
  },
  image: {
    name: 'Image',
    path: '/search/image',
  },
};
