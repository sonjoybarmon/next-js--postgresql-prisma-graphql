/*
  Warnings:

  - The primary key for the `Link` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `_LinkToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_LinkToUser" DROP CONSTRAINT "_LinkToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_LinkToUser" DROP CONSTRAINT "_LinkToUser_B_fkey";

-- AlterTable
ALTER TABLE "Link" DROP CONSTRAINT "Link_pkey",
ADD COLUMN     "userId" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Link_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Link_id_seq";

-- DropTable
DROP TABLE "_LinkToUser";

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
