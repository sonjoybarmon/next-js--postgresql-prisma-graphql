import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma";

export type Context = {
  prisma: PrismaClient;
};

export const createContext = async (): Promise<Context> => {
  return {
    prisma,
  };
};
