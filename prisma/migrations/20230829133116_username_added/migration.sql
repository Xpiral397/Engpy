/*
  Warnings:

  - You are about to drop the `Experience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ExperienceToExpriences` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `referalCode` to the `Expriences` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Expriences` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_userId_fkey";

-- DropForeignKey
ALTER TABLE "_ExperienceToExpriences" DROP CONSTRAINT "_ExperienceToExpriences_A_fkey";

-- DropForeignKey
ALTER TABLE "_ExperienceToExpriences" DROP CONSTRAINT "_ExperienceToExpriences_B_fkey";

-- AlterTable
ALTER TABLE "Expriences" ADD COLUMN     "exprienceSetId" INTEGER,
ADD COLUMN     "referalCode" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "projects" SET NOT NULL,
ALTER COLUMN "projects" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "exprienceSetId" INTEGER,
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "User_id_seq";

-- DropTable
DROP TABLE "Experience";

-- DropTable
DROP TABLE "_ExperienceToExpriences";

-- CreateTable
CREATE TABLE "ExprienceSet" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "ExprienceSet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_exprienceSetId_fkey" FOREIGN KEY ("exprienceSetId") REFERENCES "ExprienceSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expriences" ADD CONSTRAINT "Expriences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expriences" ADD CONSTRAINT "Expriences_exprienceSetId_fkey" FOREIGN KEY ("exprienceSetId") REFERENCES "ExprienceSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
