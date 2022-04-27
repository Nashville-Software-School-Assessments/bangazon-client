import { useEffect, useState } from 'react'
import CardLayout from '../components/card-layout'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { ProductCard } from '../components/product/card'
import { StoreCard } from '../components/store/card'
import Table from '../components/table'
import { useAppContext } from '../context/state'

export default function Profile() {
  const { profile } = useAppContext()

  useEffect(() => {
    console.log(profile)
  }, [])

  return (
    <>
      <CardLayout title="Favorite Stores" width="is-full">
        <div className="columns is-multiline">
          {
            profile.favorites?.map(favorite => (
              <StoreCard store={favorite} key={favorite.id} width="is-full" />
            ))
          }
        </div>
        <></>
      </CardLayout>
      <CardLayout title="Products you've recommended" width="is-full">
        <div className="columns is-multiline">
          {
            profile.recommended_by?.map(recommendation => (
              <ProductCard product={recommendation.product} key={recommendation.product.id} width="is-one-third" />
            ))
          }
        </div>
        <></>
      </CardLayout>
      <CardLayout title="Products recommended to you" width="is-full">
        <div className="columns is-multiline">
          {
            profile.recommendation?.map(recommendation => (
              <ProductCard product={recommendation.product} key={recommendation.product.id} width="is-one-third" />
            ))
          }
        </div>
        <></>
      </CardLayout>

      <CardLayout title="Products you've liked" width="is-full">
        <div className="columns is-multiline">
          {
            profile.likes?.map(product => (
              <ProductCard product={product} key={product.id} width="is-one-third" />
            ))
          }
        </div>
        <></>
      </CardLayout>
    </>
  )
}

Profile.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      <section className="container">{page}</section>
    </Layout>
  )
}
