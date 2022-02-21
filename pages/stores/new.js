import { useRouter } from 'next/router'
import { useRef } from 'react'
import { Input } from '../../components/form-elements/input'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import CardLayout from '../../components/card-layout'
import { addStore } from '../../data/stores'
import { useAppContext } from '../../context/state'

export default function NewStore() {
  const {setProfile, profile} = useAppContext()

  const nameEl = useRef()
  const descriptionEl = useRef()
  const router = useRouter()

  return (
    <>
      <CardLayout title="Create Your Store">
        <>
          <p>Give your new store a name and description. Then add products on the next page</p>
          <Input
            id="name"
            refEl={nameEl}
            type="text"
            placeholder="Store Name"
          />
          <textarea placeholder="Add a Description..." className="textarea" ref={descriptionEl}></textarea>
        </>
        <>
          <a className="card-footer-item" onClick={(e) => {
            addStore({
              name: nameEl.current.value,
              description: descriptionEl.current.value
            }).then((res) => {
              setProfile({
                ...profile,
                store: res
              })
              router.push(`/stores/${res.id}`)
            })
          }}>Create Store</a>
          <a className="card-footer-item">Cancel</a>
        </>
      </CardLayout>
    </>
  )
}

NewStore.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
