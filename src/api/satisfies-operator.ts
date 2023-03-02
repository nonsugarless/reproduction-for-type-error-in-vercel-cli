import { VercelApiHandler } from "@vercel/node";

type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];
const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<Colors, string | RGB>;

const handler: VercelApiHandler = async (_req, res) => {
  res.status(200).json({
    color: palette.blue,
  });
};

export default handler;
