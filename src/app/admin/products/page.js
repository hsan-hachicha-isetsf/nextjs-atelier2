import Listproducts from "@/components/admin/listproducts"
import {fetchArticles} from "@/services/ArticleService"
import React from 'react'
const getarticles=async()=>{
    const data = await fetchArticles()
    console.log(data)
    return data
}
const ProductPage = async() => {
    const produits=await getarticles()
  return (
    <div>
      <Listproducts produits={produits}/>
    </div>
  )
}

export default ProductPage