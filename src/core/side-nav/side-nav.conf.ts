import { DtoSideNav, DtoSideNavItem } from './side-nav.dto';

import { routeConfigs } from '../route.config';

export const navs: DtoSideNav[] = routeConfigs.map(item => {
  const result: DtoSideNav = {
    id: item.path,
    name: item.name,
    isLink: !!item.component
  };

  if (item.children) {
    result.children = item.children.map(itemVal => {
      const subResult: DtoSideNavItem = {
        id: itemVal.path,
        name: itemVal.name,
        isLink: !! itemVal.component
      };

      return subResult;
    });
  }

  return result;
});
