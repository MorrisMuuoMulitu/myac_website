import React, { useState } from 'react'

    export default function AccessibilityTools() {
      const [fontSize, setFontSize] = useState(16)
      const [highContrast, setHighContrast] = useState(false)

      const increaseFontSize = () => {
        setFontSize((prevSize) => prevSize + 2)
      }

      const decreaseFontSize = () => {
        setFontSize((prevSize) => prevSize - 2)
      }

      const toggleHighContrast = () => {
        setHighContrast((prevMode) => !prevMode)
      }

      return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
          <button
            onClick={increaseFontSize}
            className="bg-primary text-white px-4 py-2 rounded-lg"
            aria-label="Increase font size"
          >
            A+
          </button>
          <button
            onClick={decreaseFontSize}
            className="bg-primary text-white px-4 py-2 rounded-lg"
            aria-label="Decrease font size"
          >
            A-
          </button>
          <button
            onClick={toggleHighContrast}
            className="bg-primary text-white px-4 py-2 rounded-lg"
            aria-label="Toggle high contrast mode"
          >
            {highContrast ? 'Disable High Contrast' : 'Enable High Contrast'}
          </button>
          <style jsx global>{`
            body {
              font-size: ${fontSize}px;
              ${highContrast ? 'background-color: black; color: white;' : ''}
            }
          `}</style>
        </div>
      )
    }
