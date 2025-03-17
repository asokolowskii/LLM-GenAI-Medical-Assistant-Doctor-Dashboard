
import Head from 'next/head'
import DoctorDashboard from '../components/DoctorDashboard'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Doctor Dashboard</title>
        <meta name="description" content="Doctor Dashboard powered by AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DoctorDashboard />
    </div>
  )
}
