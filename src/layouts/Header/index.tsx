import { observer } from 'mobx-react';
import React from 'react';
import { List } from 'react-bootstrap-icons';
import { Container, Navbar } from 'reactstrap';
import useStore from '../../stores';
import { composeClassName } from '../../utils/composeClassName';
import styles from './index.module.css';

const Header: React.FC<{ className: string | string[] }> = ({ className }) => {
  const { appStore } = useStore();
  return (
    <header
      className={composeClassName(
        Array.isArray(className) ? [...className] : [className]
      )}
    >
      <Navbar className={styles['header-bar']}>
        <Container className={styles['content']} fluid>
          <List
            className={styles['menu-btn']}
            size={28}
            onClick={() => {
              appStore.trigger();
            }}
          />
        </Container>
      </Navbar>
    </header>
  );
};
export default observer(Header);
