import Productscard from "@/components/client/Productscard"
import {fetchArticles} from "@/services/ArticleService"
import React from 'react'
const getarticles=async()=>{
    const data = await fetchArticles()
    console.log(data)
    return data
}
const ProductClientPage = async() => {
    const produits=await getarticles()
  return (
    <div>
      <Productscard produits={produits}/>
    </div>
  )
}

export default ProductClientPage