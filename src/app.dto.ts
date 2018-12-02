import { DtoRouteTitleContext } from './core';

export interface DtoAppProps {
  classes: {
    drawer: string;
    appBar: string;
    menuButton: string;
    toolbar: string;
    drawerPaper: string;
    content: string;
  };
  theme: any;
  container: any;
}

export interface DtoAppState extends DtoRouteTitleContext{
  mobileOpen: boolean;
}
