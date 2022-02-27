import React, { useState } from 'react'
import "./FileUpload.css"
import * as XLSX from 'xlsx';

function FileUpload() {
  //onchange
  const [excelFile, setexcelFile] = useState(null);
  const [excelFileError, setexcelFileError] = useState(null);

  //excel data
  //it will be contain array of object
  const [excelData, setexcelData] = useState(null)
  
  const fileType=['application/vnd.ms-excel']
  const inputFile=(e)=>{
    let selectedFile=e.target.files[0];
    if(selectedFile){

      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader=new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setexcelFileError(null);
          setexcelFile(e.target.result);
        }
      }else{

        setexcelFileError("Please Select only Excel File Type");
        setexcelFile(null)
      }
    }else{
      console.log("Please Select Your File")
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook=XLSX.read(excelFile,{type:'buffer'});
      
      //etoSummary
      const etoSummary=workbook.SheetNames[0];
      const etoSummaryWorkSheet=workbook.Sheets[etoSummary];
      const etoSummaryData=XLSX.utils.sheet_to_json(etoSummaryWorkSheet);
    
      //absent Reasons
      const absentReasons=workbook.SheetNames[1];
      const absentReasonsWorkSheet=workbook.Sheets[absentReasons];
      const absentReasonData=XLSX.utils.sheet_to_json(absentReasonsWorkSheet);

      //Eto REASONS

      const etoReasons=workbook.SheetNames[3];
      const etoReasonsWorkSheet=workbook.Sheets[etoReasons];
      const etoReasonData=XLSX.utils.sheet_to_json(etoReasonsWorkSheet);


      //absent summary
      const absentSummary=workbook.SheetNames[4];
      const absentSummaryWorkSheet=workbook.Sheets[absentSummary];
      const absentSummaryData=XLSX.utils.sheet_to_json(absentSummaryWorkSheet);
      console.log(etoSummaryData)
      console.log(absentReasonData)
      console.log(etoReasonData);
      console.log(absentSummaryData)
    }else{
      setexcelData(null);
    }
  }
  
  return (
    <div>
      <div>
        <form action="" type="Submit" onSubmit={handleSubmit}>
          <label className='label' htmlFor="">FileUpload</label>
          <input className='file' type="file" onChange={inputFile} />
          <button className='button'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default FileUpload