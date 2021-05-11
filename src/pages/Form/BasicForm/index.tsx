import React from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
} from 'reactstrap';
import styles from './index.module.css';

const BasicForm: React.FC = () => {
  return (
    <Card className={styles['basic-form']}>
      <Container>
        <Form>
          <Row className={styles.row}>
            <Col>
              <Label className={styles.title} for="title">
                标题
              </Label>
              <Input id="title" name="title" placeholder="请输入标题" />
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col>
              <Label className={styles.title} for="startTime">
                开始时间
              </Label>
              <Input type="datetime-local" id="startTime" name="startTime" />
            </Col>
            <Col>
              <Label className={styles.title} for="title">
                结束时间
              </Label>
              <Input type="datetime-local" id="endTime" name="endTime" />
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col>
              <Label className={styles.title} for="desc">
                描述
              </Label>
              <Input
                type="textarea"
                id="desc"
                name="desc"
                placeholder="请输入具体描述"
                rows={3}
              />
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col>
              <Label className={styles.title} for="select">
                选择一个人
              </Label>
              <select
                className="form-select"
                name="select"
                id="select"
                defaultValue="3"
                onChange={() => {}}
              >
                <option value="1">小明</option>
                <option value="2">小红</option>
                <option value="3">小刚</option>
              </select>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col md={4}>
              <Label className={styles.title} for="number">
                输入一个数字
              </Label>
              <Input type="number" id="number" name="number" />
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col>
              <Input
                type="checkbox"
                name="checkbox"
                style={{ marginRight: '1rem' }}
              />
              <Label className={styles.title} for="checkbox">
                您已阅读并同意
              </Label>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col>
              <Button color="primary" style={{ marginRight: '1rem' }}>
                提交
              </Button>
              <Button>保存</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Card>
  );
};

export default BasicForm;
