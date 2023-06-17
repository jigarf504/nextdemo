import Image from 'next/image'
import styles from './page.module.css'
//import WEBApiTable from "./WEBApiTable"
import dynamic from 'next/dynamic'
const WEBApiTable = dynamic(() => import("./WEBApiTable"), {
  ssr: false,
})
export default function Home() {
  return (
    <main className={styles.main}>
       <WEBApiTable />
    </main>
  )
}
