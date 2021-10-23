import Navigation from './Navigation'
import Meta from './Meta'
import FNav from './FNav'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
      <>
        <Meta />
        <div className='viewScreen bg-dark'>
            <main className={styles.main}>{children}</main>
        </div>
        <FNav />
      </>
    )
}

export default Layout
