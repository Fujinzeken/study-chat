import { NextApiRequest, NextApiResponse } from "next";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "@/db";
import { NextResponse } from "next/server";
import Error from "next/error";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log(user?.id);

    if (!user) {
      return NextResponse.json({
        status: 401,
        error: "User is not Authenticated, login to continue",
      });
    }
    const result = await db.file.findMany({
      where: {
        userId: user.id,
      },
    });
    return NextResponse.json({
      status: 200,
      data: result,
    });
  } catch (err: any) {
    console.error("An error occurred:", err);
    return NextResponse.json({ status: 500, error: err?.message });
  }
};
