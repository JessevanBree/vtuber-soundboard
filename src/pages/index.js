import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Head from 'next/head'
import Body from '../components/body'
import Footer from '../components/footer'
import Header from '../components/header'

function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <Header t={t} />
      <Body t={t} />
      <Footer t={t} />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'sounds']),
  }
})

export default Home
