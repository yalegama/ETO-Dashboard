import React from 'react'
import "./FileUpload.css"



function FileUpload() {
  return (
    <div className='box'>
        <label className='label' htmlFor="">Uplaod ecxel file</label>
        <input className='file' type="file" />
        <input className='date' type="date"  />
        <button className='button'>Upload</button>
    </div>
  )
}

export default FileUpload