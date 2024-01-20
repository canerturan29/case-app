import { Button } from 'antd'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (<>
    <main className={styles.main}>
      <div className={styles.homeContainer}>
        <h1>Welcome to Pokemon Shop</h1>
      </div>
      <Link className={styles.linkText} href="/pokemon/list"><Button title='Go to Pokemon List' className={styles.btnText} type='primary' size='large'>Go to Pokemon List</Button></Link>
    </main>
  </>
  )
}
