//import { useState } from 'react'
import './styles/App.css'
import GeneralInfo from './components/GeneralInfo'
import CvPreview from './components/CvPreview'

function App() {
  return (
    <div className="app-wrapper">
      {/* צד שמאל: הטפסים */}
      <div className="general-info-container">
        <GeneralInfo />
      </div>

      {/* צד ימין: התצוגה המקדימה */}
      <div className="cv-preview-container">
        <CvPreview />
      </div>
    </div>
  )
}

export default App
