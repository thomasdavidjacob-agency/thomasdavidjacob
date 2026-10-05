import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// The Success Kit pages ship without site chrome; every other page renders
// Navbar and Footer itself, so wrap this section once here.
export default function SuccessKitLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
