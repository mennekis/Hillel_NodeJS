const router = require("express").Router();

const yup = require("yup");

router.get("/", (req, resp) => {
   resp.send("#Post is posted");
});
router.get("/:postId", (req, resp) => {
   resp.send("#Post_ID is gotten");
});
router.get("/:postId/:commentsId", (req, resp) => {
   resp.send("#Post_ID is gotten with COMMENT");
});
//     "title": " My Title Post",
//     "description": " Some text",
//     "Img": " Image"
router.post("/", async (req, resp) => {
   const { body } = req;

   const metaDataPostSchema = yup.object({
      title: yup.string().required().min(1),
      description: yup.string().required().min(1),
      Img: yup.string().url(),
   });

   try {
      const data = await metaDataPostSchema.validate(body);
   } catch (error) {
      resp.send(400, error.message);
      return;
   }

   resp.send(400, "!!! alert ,add req body");
   console.log(req.body);
});
router.delete("/", (req, resp) => {
   resp.send(204, "deleted");
});

module.exports = {
   router,
};
