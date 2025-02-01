const express =require("express");
const route =express.Router();
const controller =require("../Controller/Controller")

route.get("/dummy",controller.DummyPage)

module.exports=route;

