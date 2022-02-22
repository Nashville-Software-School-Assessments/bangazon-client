import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import { Detail } from '../../components/product/detail'
import { Ratings } from '../../components/rating/detail'
import { getProductById } from '../../data/products'

export default function NewProduct() {
  const 
  return ()
}

NewProduct.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
