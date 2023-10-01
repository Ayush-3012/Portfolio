import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("public", __dirname + "/public");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.render("index");
});

app.get("/about", async (req, res) => {
  res.render("index");
});

app.get("/portfolio", async (req, res) => {
  res.render("index");
});

app.get("/trainings", async (req, res) => {
  res.render("index");
});

app.get("/contact", async (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
