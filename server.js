const express = require("express");
const app = express();
const signatureRoutes = require("./routes/signatureRoutes");

app.use(express.json());
app.use("/api/signature", signatureRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
