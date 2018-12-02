import { RouteComponentProps } from 'react-router-dom';

interface DtoSideNavCommon {
  id: string;
  name: string;
  isLink: boolean;
}

export interface DtoSideNavItem extends DtoSideNavCommon {
}

export interface DtoSideNav extends DtoSideNavCommon {
  children?: DtoSideNavItem[];
}


export interface SideNavProps extends RouteComponentProps {
}

export interface SideNavState {
  selectedId: string;
  routeId: string;
}
