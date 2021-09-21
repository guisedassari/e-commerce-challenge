import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuid } from "uuid";

type User = {
  nome: string;
  email: string;
};

type SignInResponseData = {
  token: string;
  user: User;
};

export default function SignIn(
  req: NextApiRequest,
  res: NextApiResponse<SignInResponseData>
) {
  res.status(200).json({
    token: uuid(),
    user: {
      nome: "Guilherme Sedassari",
      email: "guisedassari@gmail.com",
    },
  });
}
