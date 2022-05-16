// function Menu({menu}){
//     return(
//         <>
//         <h1>menu Page</h1>
//         {
//             menu.map((item)=>{
//                 return(
//                  <div key={item.Item}>
//                         <h1>{item.Price}</h1>
//                  </div>
//                 )
//             })
//         }
//         </>
//     )
// }
// export default Menu
// export async function getStaticProps(){
//     const res = await fetch(' http://localhost:5000/Starters')
//     const data = await res.json()
//     return{
//         props:{
//             menu:data
//         }
//     }
// }