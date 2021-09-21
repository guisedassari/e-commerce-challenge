import { NextApiRequest, NextApiResponse } from "next";

export default function RecoverUser(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;
  if (token) {
    return res.status(200).json({
      user: {
        nome: "Guilherme Sedassari",
        email: "guisedassari@gmail.com",
      },
    });
  }
  return res.status(200).send("token not found");
}
