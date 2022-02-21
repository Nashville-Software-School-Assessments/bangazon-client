import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../../components/layout'
import Navbar from '../../../components/navbar'
import { ProductCard } from '../../../components/product/card'
import Detail from '../../../components/store/detail'
import { useAppContext } from '../../../context/state'
import { getStoreById } from '../../../data/stores'

export default function StoreDetail() {
  const { profile } = useAppContext()
  const router = useRouter()
  const { id } = router.query
  const [store, setStore] = useState({})
  const [isOwner, setIsOwner] = useState(false)



  useEffect(() => {
    if (id) {
      getStoreById(id).then(storeData => setStore(storeData))
    }
    if (parseInt(id) === profile.store?.id) {
      setIsOwner(true)
    }
  }, [id, profile])


  return (
    <>
      <Detail store={store} isOwner={isOwner}/>
      <div className="columns is-multiline">
        {
          store.products?.map(product => <ProductCard product={product} key={product.id} isOwner={isOwner}/>)
        }
        {
          store.products?.length === 0 ?
          <p>There's no products yet</p>
          :
          <></>
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
