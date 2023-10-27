import { PrismaClient } from "@prisma/client";
import {
  taintObjectReference,
  taintUniqueValue,
} from "next/dist/server/app-render/rsc/taint";

const prisma = new PrismaClient();

const getUser = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
};

export const getUserWithTaintObjectReference = async (userId: number) => {
  const user = await getUser(userId);
  if (!user) {
    return null;
  }

  // user を client component からアクセスできないようにする
  taintObjectReference("Do not pass user data to the client", user);
  return user;
};

export const getUserWithTaintUniqueValue = async (userId: number) => {
  const user = await getUser(userId);
  if (!user) {
    return null;
  }

  // user.password のみを client component からアクセスできないようにする
  taintUniqueValue("Do not pass password to the client", user, user.password);
  return user;
};
