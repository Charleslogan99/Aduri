import React from 'react'
import Support from '../components/Support'
import Footer from '../components/Footer'
import GoogleTranslator from '../components/Translator'

export default function SupportPage() {
  return (
    <div>
      <GoogleTranslator />
      <Support />
      <Footer />
    </div>
  )
}
