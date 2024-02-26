import { initTRPC } from "@trpc/server";

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create();

// Base router and procedure helpers
//procedure allows us to create routes that anyone can use, even if they are not authenticated
export const router = t.router;
export const procedure = t.procedure;
