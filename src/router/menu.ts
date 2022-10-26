export const menuRouter =
  [
    {
      name: "冰眼冷链",
      component: "BasicLayout",
      id: 1,
      path: "/",
      key: "layout",
      redirect: "/workbench",
      children: [

        {
          id: 2,
          pid: 1,
          name: '工作台',
          path: '/workbench',
          component: '/workbench/index',
          icon: 'DesktopOutlined',
          key: 'workbench',
        },
        {
          id: 3,
          pid: 1,
          name: '监控管理',
          path: '/monitoring',
          redirect: '',
          component: 'RouteView',
          icon: 'DashboardOutlined',
          key: 'monitoring',
          children: [
            {
              id: 301,
              pid: 3,
              name: '实时监控',
              path: '/monitoring/realTime',
              redirect: '',
              component: '/monitoring/realTime',
              icon: '',
              key: 'realTime',
              keepAlive: true
            },
            {
              id: 302,
              pid: 3,
              name: '仓库监控',
              path: '/monitoring/storehouse',
              redirect: '',
              component: '/monitoring/storehouse',
              icon: '',
              key: 'storehouse',
            },
          ]
        },
        {
          id: 4,
          pid: 1,
          name: '报警管理',
          path: '/callPolice',
          redirect: '',
          component: 'RouteView',
          icon: 'AlertOutlined',
          key: 'callPolice',
          children: [
            {
              id: 401,
              pid: 4,
              name: '实时报警',
              path: '/callPolice/realTimeCallPolice',
              redirect: '',
              component: '/callPolice/realTimeCallPolice',
              icon: '',
              key: 'realTimeCallPolice',
              keepAlive: true
            },
            {
              id: 402,
              pid: 4,
              name: '报警记录',
              path: '/callPolice/callPoliceLog',
              redirect: '',
              component: '/callPolice/callPoliceLog',
              icon: '',
              key: 'callPoliceLog',
            },
          ]
        },
        {
          id: 5,
          pid: 1,
          name: '统计报表',
          path: '/Statistical',
          component: '/Statistical/Statements',
          icon: 'FilePdfOutlined',
          key: 'Statistical',
        },
        {
          id: 6,
          pid: 1,
          name: '系统管理',
          path: '/administration',
          redirect: '/administration',
          component: 'RouteView',
          icon: 'SettingOutlined',
          key: 'admin',
          children: [
            {
              id: 601,
              pid: 6,
              name: '企业管理',
              path: '/administration/company',
              redirect: '',
              component: '/administration/company',
              icon: '',
              key: 'company',
              keepAlive: true
            },
            {
              id: 602,
              pid: 6,
              name: '库房管理',
              path: '/administration/warehouse',
              redirect: '',
              component: '/administration/warehouse',
              icon: '',
              key: 'warehouse',
            },
            {
              id: 603,
              pid: 6,
              name: '主机管理',
              path: '/administration/host',
              redirect: '',
              component: '/administration/host',
              icon: '',
              key: 'host',
            },

            {
              id: 604,
              pid: 6,
              name: '仪表管理',
              path: '/administration/meter',
              redirect: '',
              component: '/administration/meter',
              icon: '',
              key: 'meter',
            },

            {
              id: 605,
              pid: 6,
              name: '定时任务',
              path: '/administration/job',
              redirect: '',
              component: '/administration/job',
              icon: '',
              key: 'job',
            },
          ]
        },
      ]
    }
  ]
