import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import { ProductCard } from '../../components/product/card'
import Detail from '../../components/store/detail'
import { getStoreById } from '../../data/stores'

export default function StoreDetail() {
  const router = useRouter()
  const { id } = router.query
  const [store, setStore] = useState({})



  useEffect(() => {
    if (id) {
      getStoreById(id).then(storeData => setStore(storeData))
    }
  }, [id])

  return (
    <>
      <Detail store={store} />
      <div className="columns is-multiline">
        {
          store.products?.map(product => <ProductCard product={product} key={product.id} />)
        }
      </div>
    </>
  )
}

StoreDetail.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
