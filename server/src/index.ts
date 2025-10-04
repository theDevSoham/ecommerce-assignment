import { createApp } from "./app";
import { config } from "dotenv";

config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

const app = createApp();

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
