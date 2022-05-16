import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
function Menu({ starters, chicken, meat, desserts }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.margin}>Appetizers </h1>
        <div className="container ">
          <div className="row justify-content-center">
            {/* <div className={styles.margin}> */}
            {starters.map((item) => {
              return (
                <div className="col-md-4  mb-4" key={item.Price}>
                  {/* <div className="col-md-12 parent"> */}
                  {/* <div className="w-100"> */}
                  <div className="card ">
                    {/* <div className="card" style={{width: "18rem"}}> */}
                    <Image
                      className="card-img-top"
                      src="/Pasta.jpg"
                      alt="Card image cap"
                      width="100%"
                      height="75%"
                      layout="responsive"
                    />
                    <div className="card-body justify-content-center">
                      <h5 className="card-title ">{item.Item}</h5>
                      <p className="card-text">{item.Price} </p>
                      <a href="#" className="btn btn-primary">
                        Order Now
                      </a>
                    </div>
                    {/* </div> */}
                  </div>
                  {/* </div> */}
                  {/* </div> */}
                </div>
              );
            })}
          </div>
        </div>
        {/* </div> */}

        <hr />
        <h1>Chicken </h1>
        <div className="container ">
          <div className="row justify-content-center">
            {chicken.map((item) => {
              return (
                <div className="col-md-4  mb-4" key={item.Price}>
                  <div className="card ">
                    <Image
                      className="card-img-top"
                      src="/Pasta.jpg"
                      alt="Card image cap"
                      width="100%"
                      height="75%"
                      layout="responsive"
                    />
                    <div className="card-body justify-content-center">
                      <h5 className="card-title ">{item.Item}</h5>
                      <p className="card-text">{item.Price} </p>
                      <a href="#" className="btn btn-primary">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* {
      chicken.map((item) => {
        return (
          <div key={item.Price}>
            <h1>{item.Price}</h1>
            <h1>{item.Item}</h1>
          </div>
        );
      })} */}

        <hr />
        <h1>Meat </h1>
        <div className="container ">
          <div className="row justify-content-center">
            {meat.map((item) => {
              return (
                <div className="col-md-4  mb-4" key={item.Price}>
                  <div className="card ">
                    <Image
                      className="card-img-top"
                      src="/Pasta.jpg"
                      alt="Card image cap"
                      width="100%"
                      height="75%"
                      layout="responsive"
                    />
                    <div className="card-body justify-content-center">
                      <h5 className="card-title ">{item.Item}</h5>
                      <p className="card-text">{item.Price} </p>
                      <a href="#" className="btn btn-primary">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* {
      meat.map((item) => {
        return (
          <div key={item.Price}>
            <h1>{item.Price}</h1>
            <h1>{item.Item}</h1>
          </div>
        );
      })} */}

        <hr />
        <h1>Desserts </h1>
        <div className="container ">
          <div className="row justify-content-center">
            {desserts.map((item) => {
              return (
                <div className="col-md-4  mb-4" key={item.Price}>
                  <div className="card ">
                    <Image
                      className="card-img-top"
                      src="/Pasta.jpg"
                      alt="Card image cap"
                      width="100%"
                      height="75%"
                      layout="responsive"
                    />
                    <div className="card-body justify-content-center">
                      <h5 className="card-title ">{item.Item}</h5>
                      <p className="card-text">{item.Price} </p>
                      <a href="#" className="btn btn-primary">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* {
      desserts.map((item) => {
        return (
          <div key={item.Price}>
            <h1>{item.Price}</h1>
            <h1>{item.Item}</h1>
          </div>
        );
      })} */}
      </div>
    </>
  );
}
export default Menu;
export async function getStaticProps() {
  const startersRes = await fetch(" http://localhost:5000/Starters");
  const chickenRes = await fetch(" http://localhost:5000/Chicken");
  const meatsRes = await fetch(" http://localhost:5000/Meat");
  const dessertssRes = await fetch(" http://localhost:5000/Desserts");

  const starters = await startersRes.json();
  const chicken = await chickenRes.json();
  const meat = await meatsRes.json();
  const desserts = await dessertssRes.json();

  return {
    props: {
      starters: starters,
      chicken: chicken,
      meat: meat,
      desserts: desserts,
    },
  };
}
