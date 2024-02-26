import React from 'react'
import ProjectPage from '../components/Project'
import GoogleTranslator from '../components/Translator'
import Footer from '../components/Footer';
export default function ProjectsPage() {
  return (
    <div>
      <GoogleTranslator />
      <ProjectPage />
      <Footer />
    </div>
  );
}
