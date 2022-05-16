import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useEffect} from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer'



function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import ('../node_modules/bootstrap/dist/js/bootstrap.min.js')
  },[])
  return( 
    <>
      <Head>
        <title>Restaurant</title>
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  
  )
      
}

export default MyApp
