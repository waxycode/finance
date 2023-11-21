import express from "express";
const app = express();
app.use(express.json());

app.get("/health", (_, res) => {
  return res.send("Server is running");
});

app.listen(8080, ()=>{
    console.log('server started on port 8080');
})
