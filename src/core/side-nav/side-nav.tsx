import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

import {
  Button, Collapse, Divider,
  List, ListItem, ListItemText
} from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import './side-nav.css';


import { navs } from './side-nav.conf';

import { SideNavProps, SideNavState } from './side-nav.dto';

import { DtoRouteTitleContext, RouteTitleContext } from '../contexts';

class SideNav extends React.Component<SideNavProps, SideNavState> {
  public static contextType: React.Context<DtoRouteTitleContext>;
  public context: DtoRouteTitleContext;
  public state = {
    selectedId: '',
    routeId: ''
  };
  constructor(props: any) {
    super(props);

    this.pathnameSetRoute = this.pathnameSetRoute.bind(this);
  }

  public componentWillMount() {
    this.pathnameSetRoute(this.props.location.pathname);
    this.props.history.listen((param1, param2) => {
      this.pathnameSetRoute(param1.pathname);
    });
  }


  public switchNavSelected(id: string) {

    this.setState((oldState: SideNavState) => {
      return {
        selectedId: oldState.selectedId === id ? null : id
      }
    })
  }

  public render() {
    const version = process.env.REACT_APP_VERSION;
    const displayName = process.env.REACT_APP_DISPLAY_NAME;
    // window.console.log(process.env);
    window.console.log(this.props, '-------', this.context, this.state);
    return (
      <nav className="app-side-nav">
        <section className="nav-siteinfo">
          <h3 className="name">
            <Link to="/">{displayName}</Link>
          </h3>
          <div className="version">v{version}</div>
        </section>
        <Divider />
        {
          // 过滤有子级的配置路由
          navs.filter(item => item.children).map((item, ind) => {
            return (
              <div key={item.id}>
                <Button disableRipple={true} fullWidth={true} className="nav-title" onClick={() => this.switchNavSelected(item.id)}>
                  {item.name}
                  {item.id === this.state.selectedId ? <ExpandLess /> : <ExpandMore />}
                </Button>
                <Collapse in={item.id === this.state.selectedId} timeout="auto" unmountOnExit={true}>
                  <List
                    component="nav"
                  >
                    {
                      item.children.map((subItem, subInd) => {
                        const listItem = (
                          <ListItem
                            button={true}
                            className="nav-subitem"
                            selected={subItem.id === this.state.routeId}
                          >
                            <ListItemText className="nav-subtitle" primary={subItem.name} />
                          </ListItem>
                        );
                        return (
                          subItem.isLink ?
                            <Link to={`/${item.id}/${subItem.id}`} onClick={(e) => e.stopPropagation()} key={subItem.id}>
                              {listItem}
                            </Link> : <React.Fragment key={subItem.id}>{listItem}</React.Fragment>
                        );
                      })
                    }
                  </List>

                </Collapse>
                {ind !== navs.length - 1 && <Divider />}
              </div>
            );
          })
        }
      </nav>
    );
  }

  /**
   * @desc 根据path设置选中route
   * @param pathname
   */
  private pathnameSetRoute(pathname: string) {
    const pathLevels = pathname.split('/').filter(item => !!item);

    window.console.log(pathLevels, '---------');

    if (pathLevels && pathLevels.length) {
      this.setState({
        routeId: pathLevels.length > 1 && pathLevels[1] || '',
        selectedId: pathLevels[0]
      })

      const oneLevelMathed = navs.find((item) => item.id === pathLevels[0])
      const twoLevelMathed = pathLevels.length > 1 && oneLevelMathed && oneLevelMathed.children.find(subItem => subItem.id === pathLevels[1]) || null;

      if (twoLevelMathed) {
        this.context.switchRouteTitle(twoLevelMathed.name);
      } else if (oneLevelMathed) {
        this.context.switchRouteTitle(oneLevelMathed.name);
      }
    }
  }
};

export const AppSideNav = withRouter(SideNav);

SideNav.contextType = RouteTitleContext;
