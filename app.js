const dbName = "Name";

const uri = "mongodb+srv://admin:evolvo@cluster0.kzsnt.mongodb.net/carData?retryWrites=true&w=majority";

MongoClient.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log(err);
      throw err;
    }

    console.log("Connected successfully to Mongodb");

    const db = client.db(dbName);

    app.locals.db = db;

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  }
);

app.get("/test", async (req, res) => {
  const db = req.app.locals.db;

  const users = await db
    .collection("DASH")
    .find({})
    .toArray();

  res.send(users);
});
