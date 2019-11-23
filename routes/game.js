const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const Game = require("../models/Game");

// @route   GET api/game
//desc      Get all games
//@access   public
router.get("/", async (req, res) => {
  try {
    const game = await Game.find()
      .populate("location")
      .populate({
        path: "homeTeam awayTeam",
        select: "-grade -__v",
        populate: { path: "club", select: "name -_id " }
      });
    res.json(game);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/game
//desc      Get games by season and grade
//@access   public
router.get("/:grade/:season", async (req, res) => {
  try {
    const game = await Game.find({
      grade: req.params.grade,
      season: req.params.season
    })
      .populate("location")
      .populate({
        path: "homeTeam awayTeam",
        select: "-grade -__v",
        populate: { path: "club", select: "name -_id " }
      });
    res.json(game);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/game
//desc      Add new game
//@access   private
router.post("/", auth, async (req, res) => {
  const {
    season,
    round,
    grade,
    date,
    location,
    homeTeam,
    awayTeam,
    homeTeamGoals,
    homeTeamBehinds,
    awayTeamGoals,
    awayTeamBehinds
  } = req.body;

  try {
    let game = await Game.findOne({ date, location });

    if (game) {
      return res.status(400).json({ msg: "Game already exists" });
    }

    game = new Game({
      season,
      round,
      grade,
      date,
      location,
      homeTeam,
      homeTeamGoals,
      homeTeamBehinds,
      awayTeam,
      awayTeamGoals,
      awayTeamBehinds
    });

    await game.save();
    res.send("game saved");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/game/:id
//desc      Update game
//@access   private
router.put("/:id", auth, async (req, res) => {
  const {
    season,
    round,
    grade,
    date,
    location,
    homeTeam,
    awayTeam,
    homeTeamGoals,
    homeTeamBehinds,
    awayTeamGoals,
    awayTeamBehinds
  } = req.body;
  const gameFields = {};
  if (season) gameFields.season = season;
  if (round) gameFields.round = round;
  if (location) gameFields.location = location;
  if (grade) gameFields.grade = grade;
  if (date) gameFields.date = date;
  if (homeTeam) gameFields.homeTeam = homeTeam;
  if (homeTeamGoals) gameFields.homeTeamGoals = homeTeamGoals;
  if (homeTeamBehinds) gameFields.homeTeamBehinds = homeTeamBehinds;
  if (awayTeam) gameFields.awayTeam = awayTeam;
  if (awayTeamGoals) gameFields.awayTeamGoals = awayTeamGoals;
  if (awayTeamBehinds) gameFields.awayTeamBehinds = awayTeamBehinds;

  try {
    let game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ msg: "Game not found" });

    game = await Game.findByIdAndUpdate(
      req.params.id,
      { $set: gameFields },
      { new: true }
    );
    res.json(game);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/game/:id
//desc      Delete game
//@access   private
router.delete("/:id", auth, async (req, res) => {
  try {
    let game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ msg: "Game not found" });

    await Game.findByIdAndRemove(req.params.id);
    res.json({ msg: "Game removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
