import Auth from '@/components/Auth/Auth'

export const AuthRoutes = {
  path: '/auth',
  name: 'auth',
  redirect: { name: 'spotify.login' },
  component: Auth
}
