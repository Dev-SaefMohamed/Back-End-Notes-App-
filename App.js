import express from "express"; 
import { dbConnection } from "./DB/dbConnection.js";
import router from "./src/modules/user/user.router.js";
import  noteRouter  from "./src/modules/note/note.router.js";

const app = express()
const port = 3000
dbConnection();

app.use(express.json())
app.use("/user",router)
app.use("/note",noteRouter)



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))