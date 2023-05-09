import React from 'react'
import Card from './Card'
import './MostPopular.css'

const MostPopular = () => {
/* hdi hya data, u normaly kncreyiw whd componentn nsmiwh mtln data tma fin kn7tuh tma  */

const mostPopularItems =[ /* tableaux qui va contenier tous les infos au lier de les ecrire chacune  */
/* premier element  */
{id:"most_popular_item_0" , title : "lubna", sandbox:"lil", rate:"4,2", download:"5.1M"}, /* hdi hya syntaxe dyl t3mar  */
{id:"most_popular_item_1" ,  title:"hola ", sandbox:"ljamal", rate:"5,8", download:"7 M"}, /* hdi hya syntaxe dyl t3mar  */
{id:"most_popular_item_2" , title:"ahlan", sandbox:"ay9ouna" ,rate:"2,5" ,download:"4M"}, /* hdi hya syntaxe dyl t3mar  */
/* map drri kt7taj lkey, dkchy 3klach kn7taju id  */
]
const cards =mostPopularItems.map(card=>{   /* appel de card */
  return <Card key={card.id} title={card.title} sandbox={card.sandbox} rate={card.rate} download={card.download}/>
})

  return (
    <>
      <div className="section-wrapper">
        <div className="section-header">
          {" "}
          {/* div li feha title  */}
          <h4>Most Popular</h4>
        </div>
        <div className="most-popular-items">
          {" "}
          {/* div li feha img  */}
          <Card title="Fortnite" sandbox="jihaz" rate="4,3" download="4.3M" />
          {/* AU LIEU MNB9AW NDERU HAKA , UN3WDU BZAF D MRT, RDI NST3MLU PRICIPE DYKL MAPS  */}
{cards} {/* han kn3ytu rer 3la cards li kkhdm map uchhal ma knu d 3anasir tma rdi ibanu  */}
        </div>
      </div>
    </>
  );
}

export default MostPopular;
