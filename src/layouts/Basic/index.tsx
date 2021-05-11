import React from 'react';
import { Container } from 'reactstrap';
import SideMenu from '../SideMenu';
import { RouterComponentProps } from '../../routers/router';
import Header from '../Header';
import styles from './index.module.css';
import useStore from '../../stores';
import { composeClassName } from '../../utils/composeClassName';
import { observer } from 'mobx-react';
import Footer from '../Footer';

const Basic: React.FC<RouterComponentProps> = ({ route, children }) => {
  const { appStore } = useStore();
  return (
    <Container className={styles.basic} fluid>
      <SideMenu routes={route.children || []} />
      <Header
        className={[
          styles.header,
          'shadow-sm',
          !appStore.isSidebarOpen ? styles.lg : '',
        ]}
      />
      <main
        className={composeClassName([
          styles.content,
          !appStore.isSidebarOpen ? styles.lg : '',
        ])}
      >
        {children}
      </main>
      <Footer
        className={composeClassName([
          styles.footer,
          !appStore.isSidebarOpen ? styles.lg : '',
        ])}
      >
        2021 © xmy6364
      </Footer>
    </Container>
  );
};

export default observer(Basic);
