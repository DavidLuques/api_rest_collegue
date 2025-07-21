const express = require('express');
const app = express(); //se instancia 
const estudiantesRoutes=require('./routes/estudiantesRouters.js')
const profesoresRoutes=require('./routes/proferoresRouters.js')


app.get('/',(req,res)=>{
    res.send(`henlo world`)
});
app.use("/estudiantes",estudiantesRoutes);
app.use("/profesores",profesoresRoutes)

app.listen(6500,()=>{console.log('Se activo el servidor! ')});

