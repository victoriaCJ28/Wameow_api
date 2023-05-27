const express = require("express");
//const { errorLogs, handlerError } = require("./middleware/error.handler");
const apiRouter = require("./server/index");
const app = express();
const port = 3000;


app.use(express.json());
app.get("/", (request, response) => {
  res.send("Hola soy el servidor desde la ruta raiz del navegador");
});

app.listen(port, (request, response) => {
  console.log(`El puerto del server esta escuchando en el ${port}`);
});

apiRouter(app);
//app.use(handlerError);
//app.use(errorLogs);
