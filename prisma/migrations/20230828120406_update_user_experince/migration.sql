/*
  Warnings:

  - You are about to drop the column `experienceId` on the `Experience` table. All the data in the column will be lost.
  - Made the column `userId` on table `Experience` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_experienceId_fkey";

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_userId_fkey";

-- AlterTable
CREATE SEQUENCE experience_userid_seq;
ALTER TABLE "Experience" DROP COLUMN "experienceId",
ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "userId" SET DEFAULT nextval('experience_userid_seq');
ALTER SEQUENCE experience_userid_seq OWNED BY "Experience"."userId";

-- CreateTable
CREATE TABLE "_ExperienceToExpriences" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ExperienceToExpriences_AB_unique" ON "_ExperienceToExpriences"("A", "B");

-- CreateIndex
CREATE INDEX "_ExperienceToExpriences_B_index" ON "_ExperienceToExpriences"("B");

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExperienceToExpriences" ADD CONSTRAINT "_ExperienceToExpriences_A_fkey" FOREIGN KEY ("A") REFERENCES "Experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExperienceToExpriences" ADD CONSTRAINT "_ExperienceToExpriences_B_fkey" FOREIGN KEY ("B") REFERENCES "Expriences"("id") ON DELETE CASCADE ON UPDATE CASCADE;
