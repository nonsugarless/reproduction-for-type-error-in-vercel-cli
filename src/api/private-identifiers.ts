import { VercelApiHandler } from "@vercel/node";

class Messenger {
  #_message() {
    return "Hello World!";
  }

  message() {
    return this.#_message();
  }
}

const handler: VercelApiHandler = async (_req, res) => {
  const messenger = new Messenger();

  res.status(200).json({
    text: messenger.message(),
  });
};

export default handler;
