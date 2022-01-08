const jpo = require("../models/jpo");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newjpo = new jpo(req.body);

  try {
    const savedjpo = await newjpo.save();
    res.status(200).json(savedjpo);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedjpo = await jpo.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedjpo);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await jpo.findByIdAndDelete(req.params.id);
    res.status(200).json("jpo has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET jpo
router.get("/find/:id", async (req, res) => {
  try {
    const jpo = await jpo.findById(req.params.id);
    res.status(200).json(jpo);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL jpoS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let jpos;

    if (qNew) {
      jpos = await jpo.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      jpos = await jpo.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      jpos = await jpo.find();
    }

    res.status(200).json(jpos);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
