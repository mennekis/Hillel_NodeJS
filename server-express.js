const express = require("express");

const morgan = require("morgan");

const { router: postsRouter } = require("./routes/posts");

const srv = express();

const jsonBodyParser = express.json();
srv.use(jsonBodyParser);
srv.use(morgan("dev"));

srv.use((req, resp, next) => {
   console.info(`${req.method} ${req.url}`);
   next();
});

srv.listen(3000, () => console.log("#_Express server on port [3000]"));

srv.use("/posts", postsRouter);
