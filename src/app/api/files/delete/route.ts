import { NextApiRequest, NextApiResponse } from "next";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "@/db";
import { NextResponse } from "next/server";

export const DELETE = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const { fileId } = req.body;
    if (!user) {
      return NextResponse.json({
        status: 401,
        error: "User is not Authenticated, login to continue",
      });
    }

    const file = await db.file.findFirst({
      where: {
        id: fileId,
      },
    });

    if (!file) {
      return NextResponse.json({
        error: "Cannot find file with given file id",
      });
    }
    if (user.id !== file?.userId) {
      return NextResponse.json({
        error:
          "User is not Authorized, cannot delete file belonging to someone else!",
      });
    }
    await db.file.delete({
      where: {
        id: fileId,
      },
    });
    return NextResponse.json(file);
  } catch (err: any) {
    console.error("An error occurred:", err);
    return NextResponse.json({ status: 500, error: err?.message });
  }
};
