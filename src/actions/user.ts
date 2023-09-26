import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import { getServerSession } from "next-auth";

export const getSession = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return null;
  }

  return session;
};

export const getCurrentUser = async () => {
  const session = await getSession();

  const user = await db.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });

  if (!user) {
    return null;
  }

  return user;
};
