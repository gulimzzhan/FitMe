const express = require("express");

const {
  getAllRestaurants,
  getRestaurantById,
  deleteRestaurantById,
  createNewRestaurant,
  updateRestaurantById,
  searchRestaurant,
  deleteAllRestaurants,
  addImageToRestaurant,
} = require("../controllers/restaurantController");
const { protect } = require("../middleware/authMiddleware");

const upload = require("../multer");

const router = express.Router();

router.get("/restaurants", getAllRestaurants);
router.get("/restaurant/:id", getRestaurantById);
router.get("/restaurants/search", searchRestaurant);
router.post("/restaurants", upload.array("image", 5), createNewRestaurant);
router.put("/restaurant/:id", upload.array("image", 5), updateRestaurantById);
router.put(
  "/restaurant/:id/add-image",
  upload.single("image"),
  addImageToRestaurant
);
router.delete("/restaurant/:id", deleteRestaurantById);
router.delete("/restaurants/clear", protect, deleteAllRestaurants);

module.exports = router;
