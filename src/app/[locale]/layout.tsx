import Header from '@/components/global/header'
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Footer from '../../components/global/footer'
import Script from 'next/script'

export const generateMetadata = async({ params }: Props): Promise<Metadata> => {
    const { locale } = await params
    const t = await getTranslations({ locale })
    return {
        title: t('metadata.title'),
        description: t('metadata.desc'),
        twitter: {
            card: 'summary',
            images: ['/sabine.png']
        },
        metadataBase: new URL('https://sabinebot.xyz/'),
        other: {
            'google-adsense-account': 'ca-pub-3346744916189692'
        }
    }
}

type Props = {
    children?: React.ReactNode,
    params: Promise<{
        locale: string
    }>
}

const inter = Inter({
    subsets: ['latin']
})

export default async function RootLayout({
    children,
    params
}: Props) {
    const messages = await getMessages()
    const { locale } = await params
    return (
        <html lang={locale}>
            <body className={`${inter.className} min-h-screen flex flex-col`}>
                <Header />
                <NextIntlClientProvider
                    messages={messages}
                    locale={locale}
                >
                    <main className='grow'>
                        <Script
                            async
                            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3346744916189692'
                            crossOrigin='anonymous'
                            strategy='afterInteractive'
                        />
                        {children}
                    </main>
                </NextIntlClientProvider>
                <Footer />
            </body>
        </html>
    )
}