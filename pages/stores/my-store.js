import Layout from '../../components/layout'
import Navbar from '../../components/navbar'

export default function MyStore() {
  return (<h1>My Store</h1>)
}

MyStore.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
