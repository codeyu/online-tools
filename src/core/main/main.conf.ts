import { routeConfigs } from '../route.config';

import { DtoMainRoute } from './main.dto';

const routes: DtoMainRoute[] = [];

routeConfigs.forEach(route => {
  // firstly,push children route component
  route.children && route.children.forEach(subRouteItem => {
    routes.push({
      path: `/${route.path}/${subRouteItem.path}`,
      component: subRouteItem.component
    })
  })

  // secondly,unshift route component
  routes.unshift({
    path: `/${route.path}`,
    component: route.component
  });
})

export const Routes = routes;
