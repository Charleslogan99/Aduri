import About from "../components/About";
import Footer from "../components/Footer";
import Team from "../components/Team";
import GoogleTranslator from "../components/Translator";

export default function AboutPage() {
  return (
    <div>
      <GoogleTranslator />
      <About />
      <Team />
      <Footer />
    </div>
  )
}
