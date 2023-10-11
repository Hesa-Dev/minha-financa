import Image from 'next/image'
import { Inter } from 'next/font/google'
import Menu from '@/components/includes/Menu'
import Content from '@/components/includes/Content'
import Footer from '@/components/includes/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div>
      <Menu />
      <div>
        <Content />
      </div>
      <Footer />
    </div>
  )
}
