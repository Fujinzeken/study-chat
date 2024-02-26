import { z } from "zod";
import { procedure, router } from "./trpc";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";

// this is our api endpoints
export const appRouter = router({
  authCallback: procedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user: any = getUser();

    console.log("here");

    if (!user.id || !user.email) {
      // throw new TRPCError({ code: "UNAUTHORIZED" });
      throw new Error();
    }

    // check if the user is in the db

    const dbUser = await db.user.findFirst({
      where: {
        id: user.id,
      },
    });
    if (!dbUser) {
      //create user in db
      return await db.user.create({
        data: {
          id: user.id,
          email: user.email,
        },
      });
    }
    return dbUser;
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
