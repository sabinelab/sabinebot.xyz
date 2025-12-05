import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import type { ProxyConfig } from 'next/server'

export default createMiddleware(routing)

export const config: ProxyConfig = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}