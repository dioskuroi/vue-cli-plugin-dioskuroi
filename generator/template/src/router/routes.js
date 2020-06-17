const routes = [
  {
    path: '/index',
    redirect: '/'
  },
  {
    path: '/',
    name: 'index',
    component: 'index-page'
  },
  {
    path: '/login',
    name: 'login',
    component: 'login-page'
  },
  {
    path: '/error',
    name: 'error',
    component: 'error-page'
  },
  {
    path: '*',
    name: 'notFound',
    component: 'not-found'
  }
]

const mapResolveComponents = (routes) => {
  return routes.map(route => {
    if (route.component) {
      return {
        ...route,
        component: () => import('@/views/' + route.component + '.vue')
      }
    } else {
      return route
    }
  })
}

export default mapResolveComponents(routes)