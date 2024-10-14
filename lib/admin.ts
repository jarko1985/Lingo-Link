import { auth } from "@clerk/nextjs/server";

const allowedAdmins = ["user_2mu3k4YUAu5iJQXmRdZUNNwTOiN"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  return allowedAdmins.indexOf(userId) !== -1;
};
