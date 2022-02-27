const express=require("express");
const app=express();
const PORT=process.env.PORT || 3001;
const mysql=require('mysql');
const cors=require('cors');

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    user:"root",
    host:'localhost',
    password:'',
    database:'erdashboard'
})

app.post("/etoSummary",(req,res)=>{
    const date=req.body.date;
    const area=req.body.area;
    const intenalCarder=req.body.intenalCarder;
    const actualcarder=req.body.actualcarder;
    const vop=req.body.vop;
    const resign=req.body.resign;
    const total=req.body.total;
    const voppercentage=req.body.voppercentage;
    const eto=req.body.eto;
    const areaLeader=req.body.areaLeader;
    const shift=req.body.shift;
    const vsl=req.body.vsl;
    const er=req.body.er;
    const gl=req.body.gl;
    const godFather=req.body.godFather;
    const lokuAkka=req.body.lokuAkka;

    db.query(
        "INSERT INTO etosummary (date,area,intenalCarder,actualcarder,vop,resign,total,voppercentage,eto,areaLeader,shift,vsl,er,gl,godFather,lokuAkka) VALUES ('?','?','?','?','?','?','?','?','?','?','?','?','?','?','?','?')",
        [date,area,intenalCarder,actualcarder,vop,resign,total,voppercentage,eto,areaLeader,shift,vsl,er,gl,godFather,lokuAkka],
        (err,result)=>{
            if(err){
                console.log(err)
            }else{
                res.send("Values Inserted")
            }
        }
    )

})

app.listen(PORT,()=>{
    console.log(`Server is started on ${PORT} port`);
})