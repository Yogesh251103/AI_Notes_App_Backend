const express = require("express");
const cors = require("cors");
const sbClient = require("./supabaseClient");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/notes", async (req, res) => {
  try {
    const response = await sbClient.from("notes").select();
    console.log(response.data);
    return res.status(200).send(response.data);
  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
});

app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  try {
    const response = await sbClient
      .from("notes")
      .insert({ title: title, content: content });
    return res.status(201).send(response);
  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
});

app.listen(PORT, () => console.log(`Listening port:${PORT}`));
