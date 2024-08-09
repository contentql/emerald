import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import Footer from '@/components/marketing/Footer'
import Header from '@/components/marketing/Header'
import { getCurrentUser } from '@/lib/authjs-payload-adapter/payload'

export const revalidate = 60000

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const payload = await getPayloadHMR({ config: configPromise })
  const initData = await payload.findGlobal({
    slug: 'site-settings',
    draft: false,
  })
  const user = await getCurrentUser()

  return (
    <div className='flex min-h-screen flex-col'>
      {/* Navbar */}
      <Header />
      <div className='flex-grow'>{children}</div>
      <Footer />
      {/* Footer */}
    </div>
  )
}
