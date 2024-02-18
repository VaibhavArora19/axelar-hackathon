import { createClient } from "redis";

const client = createClient({
  socket: {
    host: "localhost",
    port: 6379,
  },
});

client.on("error", (error) => console.log(error));

if (!client.isOpen) client.connect();

export { client };
