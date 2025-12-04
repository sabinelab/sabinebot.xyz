import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import br from '@/messages/br.json'
import us from '@/messages/us.json'

const locales = {
    br,
    us
} as const

export default getRequestConfig(async({ requestLocale }) => {
    const requested = await requestLocale
    const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale
  
    return {
        messages: locales[locale],
        locale
    }
})