import * as React from 'react';

import { DtoRouteTitleContext } from './route-title.dto';

export const RouteTitleContext = React.createContext({
  routeTitle: '', // 默认空串
  switchRouteTitle: (name: string) => { } // 默认empty函数
} as DtoRouteTitleContext);
