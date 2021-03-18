export default [
  {
    path: 'recommend',
    name: 'Recommend',
    component: () => import('@/views/Home/Recommend')
  },
  {
    path: 'grocery',
    name: 'Grocery',
    component: () => import('@/views/Home/Grocery')
  },
  {
    path: '/',
    redirect: 'recommend'
  },
]