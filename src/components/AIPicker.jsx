import React from 'react'

import CustomButton from './CustomButton'

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea 
        placeholder='Ask AI...'
        roes={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
        <>
          <CustomButton 
            type="outline"
            title="AI Logo"
            handLeClick={() => handleSubmit('logo')}
            customStyles="text-xs"
          />

          <CustomButton 
            type="filled"
            title="AI Full"
            handLeClick={() => handleSubmit('full')}
            customStyles="text-xs"
          />
        </>
        )}

      </div>
      AIPicker
    </div>
  )
}

export default AIPicker