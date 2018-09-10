let express = require("express");
let app = express();
app.use('/static/images', express.static('/home/rafael/Desktop/social-mind/src/images'));
app.listen(4550, ()=>{
    console.log("running");
})