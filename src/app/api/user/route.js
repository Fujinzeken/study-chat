import { NextApiRequest, NextApiResponse } from "next";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "@/db";
import { NextResponse } from "next/server";
export const GET = async (req, res) => {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user.id || !user.email) {
      // throw new TRPCError({ code: "UNAUTHORIZED" });
      throw new Error("Failed to fetch user");
    }
    const dbUser = await db.user.findFirst({
      where: {
        id: user.id,
      },
    });
    if (!dbUser) {
      //create user in db
      const dbUser = await db.user.create({
        data: {
          id: user.id,
          email: user.email,
        },
      });
      return NextResponse.json(dbUser);
    }
    return NextResponse.json(dbUser);
  } catch (err) {
    console.log(err.message);
    throw new Error("Somegthing went wrong!");
  }
};
