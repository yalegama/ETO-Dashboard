import React, { useEffect, useState } from 'react'
import "./FileUpload.css"
import * as XLSX from 'xlsx';
import data from 'layouts/dashboard/components/Projects/data';

function FileUpload() {

  const readExcel=(file)=>{

    const promise=new Promise((resolve,reject)=>{
      const file=new FileReader();
      FileReader.readAsArrayBuffer(file);
      FileReader.onload=(e)=>{
        const bufferArray=e.target.result;
        const wb=XLSX.read(bufferArray,{type:'buffer'});
        const wsname=wb.SheetNames[0];
        const ws=wb.Sheets[wsname];
        const data=XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };
      FileReader.onerror=(error)=>{
        reject(error);
      }
    });
    promise.then((d)=>{
      console.log(data)
    })

  }

  return (
    <div>
      <div>
        <form action="" type="Submit" >
          <label className='label' htmlFor="">FileUpload</label>
          <input className='file' type="file" onChange={(e)=>{
            const file=e.target.files[0];
            readExcel(file);
          }} />
          <button className='button'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default FileUpload