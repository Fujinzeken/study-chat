import { NextApiRequest, NextApiResponse } from "next";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "@/db";
import { NextResponse } from "next/server";

export const Get = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const { key } = req.body;
    if (!user) {
      return NextResponse.json({
        status: 401,
        error: "User is not Authenticated, login to continue",
      });
    }

    const file = await db.file.findFirst({
      where: {
        key,
        userId: user.id,
      },
    });

    if (!file) {
      return NextResponse.json({
        status: 404,
        error: "Cannot find file with given key",
      });
    }

    return NextResponse.json(file);
  } catch (err: any) {
    console.error("An error occurred:", err);
    return NextResponse.json({ status: 500, error: err?.message });
  }
};
