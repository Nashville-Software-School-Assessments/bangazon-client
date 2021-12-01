import Layout from '../../components/layout'
import Navbar from '../../components/navbar'

export default function ProductDetail() {
  return (<h1>Product Detail Page</h1>)
}

ProductDetail.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
