import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import img from '../public/Home1.jpg'
import{useRouter} from 'next/router'



export default function Home() {
  const router = useRouter()
    const handleClick=()=>{
        router.push('/order')
    }
  return (
    <>
      <div className={styles.content}>
        <Image src='/Home1.jpg' width="100%" height="30%" layout="responsive"  alt=''/>
        {/* <img src='https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' width="100%" height="30%" layout="responsive"  alt=''/> */}
        <h2 className={styles.margin}>Top Dishes</h2>
        <div className={styles.margin}>
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-md mb-4">
        <div className="card" >
        {/* <div className="card" style={{width: "18rem"}}> */}
        <Image className="card-img-top" src="/Pasta.jpg" alt="Card image cap" width="100%" height="75%" layout="responsive"/>
        <div className="card-body">
        <h5 className="card-title">White Sauce Pasta</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
        <a href="#" className="btn btn-primary" onClick={handleClick}>Order Now</a>
      </div>
</div>
        </div>
        <div className="col-md mb-4">
        <div className="card" >
        <Image className="card-img-top" src="/Chicken.jpg" alt="Card image cap" width="100%" height="75%" layout="responsive"/>
        <div className="card-body">
        <h5 className="card-title">Grilled Chicken</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
        <a href="#" className="btn btn-primary" onClick={handleClick}>Order Now</a>
      </div>
</div>
        </div>
        <div className="col-md mb-4">
        <div className="card" >
        <Image className="card-img-top" src="/RedSaucePasta.jpg" width="100%" height="75%" layout="responsive" alt="Card image cap"/>
        <div className="card-body">
        <h5 className="card-title">Red Sauce Pasta</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
        <a href="#" className="btn btn-primary"onClick={handleClick}>Order Now</a>
      </div>
</div>
        </div>
      </div>
</div>
        </div>
        </div>
    </>
  )
}
