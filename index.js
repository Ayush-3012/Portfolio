import express from "express";
import sendMessage from "./mail.js";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("public", __dirname + "/public");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  fs.readFile(
    __dirname + "/public/structures/home.html",
    "utf8",
    (err, data) => {
      if (err) {
        console.error("Error reading home.html:", err);
        return res.status(500).send("Error reading home.html");
      }

      res.render("index", {
        sectionTitle: "Home",
        dataContent: data,
      });
    }
  );
});

app.get("/about", async (req, res) => {
  fs.readFile(
    __dirname + "/public/structures/about.html",
    "utf8",
    (err, data) => {
      if (err) {
        console.error("Error reading about.html:", err);
        return res.status(500).send("Error reading about.html");
      }
      res.render("index", { sectionTitle: "About Me", dataContent: data });
    }
  );
});

app.get("/portfolio", async (req, res) => {
  fs.readFile(
    __dirname + "/public/structures/portfolio.html",
    "utf8",
    (err, data) => {
      if (err) {
        console.error("Error reading portfolio.html:", err);
        return res.status(500).send("Error reading portfolio.html");
      }
      res.render("index", { sectionTitle: "My Portfolio", dataContent: data });
    }
  );
});

app.get("/trainings", async (req, res) => {
  fs.readFile(
    __dirname + "/public/structures/certificates.html",
    "utf8",
    (err, data) => {
      if (err) {
        console.error("Error reading certificates.html:", err);
        return res.status(500).send("Error reading certificates.html");
      }
      res.render("index", {
        sectionTitle: "My Certifications",
        dataContent: data,
      });
    }
  );
});

app.get("/contact", async (req, res) => {
  fs.readFile(
    __dirname + "/public/structures/contact.html",
    "utf8",
    (err, data) => {
      if (err) {
        console.error("Error reading contact.html:", err);
        return res.status(500).send("Error reading contact.html");
      }
      res.render("index", {
        sectionTitle: "Connect",
        dataContent: data,
      });
    }
  );
});

app.post("/submit", (req, res) => {
  const email = req.body.Mail;
  const name = req.body.Name;
  const subject = req.body.Subject;
  const text = req.body.Message;

  sendMessage(email, name, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Message Sent !!!" });
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
