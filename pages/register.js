import Layout from '../components/layout'

export default function Register() {
  return (<h1>Register Page</h1>)
}

Register.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
