import React from 'react';
import { EmojiFrown } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';
import { Button, Card, Container } from 'reactstrap';
import { composeClassName } from '../../utils/composeClassName';
import styles from './execption.module.css';

const NotFound: React.FC = () => {
  const h = useHistory();

  return (
    <Container className={styles['execption-container']}>
      <Card className={composeClassName([styles['execption-card'], 'shadow'])}>
        <EmojiFrown size={48} style={{ marginBottom: '1rem' }} />
        <h4>404 Not Found</h4>
        <p>抱歉，您访问的页面可能不存在</p>
        <Button
          color="primary"
          style={{ marginTop: '1rem' }}
          onClick={() => {
            h.replace('/');
          }}
        >
          返回首页
        </Button>
      </Card>
    </Container>
  );
};

export default NotFound;
