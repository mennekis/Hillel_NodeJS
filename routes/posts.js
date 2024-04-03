const router = require("express").Router();

router.get("/", (req, resp) => {
   resp.send("#Post is posted");
});
router.get("/:postId", (req, resp) => {
   resp.send("#Post_ID is gotten");
});
router.get("/:postId/:commentsId", (req, resp) => {
   resp.send("#Post_ID is gotten with COMMENT");
});

router.post("/", (req, resp) => {
   resp.send(400, "!!! alert ,add req body");
   console.log(req.body);
});
router.delete("/", (req, resp) => {
   resp.send(204, "deleted");
});

module.exports = {
   router,
};
