import * as React from 'react';

export const RouteTitleContext = React.createContext({
  routeTitle: '', // 默认空串
  switchRouteTitle: (name: string) => { } // 默认empty函数
});
