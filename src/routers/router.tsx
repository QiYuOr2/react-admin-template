import React, { lazy } from 'react';
import Basic from '../layouts/Basic';
import Blank from '../layouts/Blank';
import {
  ColumnsGap,
  ExclamationTriangle,
  PencilSquare,
  Table,
} from 'react-bootstrap-icons';

export type RouterComponentProps = { route: RouterConfig };

export interface RouterConfig {
  path: string;
  name?: string;
  key: string | number;
  component?: React.FC<RouterComponentProps>;
  children?: RouterConfig[];
  redirect?: string;
  exact?: boolean;
  strict?: boolean;
  icon?: JSX.Element;
}

const config: RouterConfig[] = [
  {
    path: '/',
    component: Blank,
    key: 'container',
    children: [
      {
        path: '/',
        component: Basic,
        key: 'content',
        children: [
          {
            path: '/',
            name: '主页',
            key: 'home',
            exact: true,
            icon: <ColumnsGap />,
            component: lazy(() => import('../pages/Home')),
          },
          {
            path: '/form',
            name: '表单页',
            key: 'form',
            icon: <PencilSquare />,
            children: [
              {
                path: '/form/basic',
                name: '基础表单',
                key: 'basicForm',
                component: lazy(() => import('../pages/Form/BasicForm')),
              },
            ],
          },
          {
            path: '/table',
            name: '表格页',
            key: 'table',
            icon: <Table />,
            children: [
              {
                path: '/table/simple',
                name: '简单表格',
                key: 'simpleTable',
                component: lazy(() => import('../pages/Table/SimpleTable')),
              },
            ],
          },
          {
            path: '/exception',
            name: '异常页',
            key: 'exception',
            icon: <ExclamationTriangle />,
            children: [
              {
                path: '/exception/404',
                name: '404',
                key: '404',
                component: lazy(() => import('../pages/Execption/404')),
              },
            ],
          },
        ],
      },
    ],
  },
];

export default config;
