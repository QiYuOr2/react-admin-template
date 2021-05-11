import { observer, useLocalObservable } from 'mobx-react';
import React from 'react';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Nav, NavbarBrand, NavItem, NavLink, Collapse } from 'reactstrap';
import { RouterConfig } from '../../routers/router';
import useStore from '../../stores';
import { composeClassName } from '../../utils/composeClassName';
import styles from './index.module.css';

interface IProps {
  routes: RouterConfig[];
}

const SideMenu: React.FC<IProps> = ({ routes }) => {
  const l = useLocation();
  const { appStore } = useStore();
  const collapse = useLocalObservable(() => ({
    activeCollapse: '',
    changeActiveCollapse(collapseKey: string) {
      if (this.activeCollapse === collapseKey) {
        this.activeCollapse = '';
        return;
      }
      this.activeCollapse = collapseKey;
    },
  }));

  const renderLink = () =>
    routes.map((r, i) =>
      r.children ? (
        <>
          <NavLink
            className={styles.link}
            onClick={() => collapse.changeActiveCollapse(r.key.toString())}
          >
            {r.icon}
            <span className={styles.text}>{r.name}</span>
            {appStore.isSidebarOpen &&
              (collapse.activeCollapse === r.key ? (
                <ChevronUp className={styles['last-icon']} />
              ) : (
                <ChevronDown className={styles['last-icon']} />
              ))}
          </NavLink>
          <Collapse
            className={styles['sub-link']}
            isOpen={collapse.activeCollapse === r.key}
          >
            {r.children.map((subR, i) => (
              <NavItem key={i}>
                <Link
                  className={composeClassName([
                    styles.link,
                    l.pathname === subR.path ? styles.active : '',
                    'nav-link',
                  ])}
                  to={subR.path}
                >
                  {subR.icon}
                  <span className={styles.text}>{subR.name}</span>
                </Link>
              </NavItem>
            ))}
          </Collapse>
        </>
      ) : (
        <NavItem key={i}>
          <Link
            className={composeClassName([
              styles.link,
              l.pathname === r.path ? styles.active : '',
              'nav-link',
            ])}
            to={r.path}
          >
            {r.icon}
            <span className={styles.text}>{r.name}</span>
          </Link>
        </NavItem>
      )
    );
  return (
    <aside
      className={composeClassName([
        styles['left-side'],
        !appStore.isSidebarOpen ? styles.mini : '',
      ])}
    >
      <Nav vertical>
        <NavbarBrand className={styles.brand}>
          {appStore.isSidebarOpen && 'Admin'} Logo
        </NavbarBrand>
        {renderLink()}
      </Nav>
    </aside>
  );
};

export default observer(SideMenu);
