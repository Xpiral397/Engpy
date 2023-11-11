/*
  Warnings:

  - You are about to drop the column `continent` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `exprienceSetId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `mobile` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ExprienceSet` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[profileId]` on the table `Expriences` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Expriences" DROP CONSTRAINT "Expriences_exprienceSetId_fkey";

-- DropForeignKey
ALTER TABLE "Expriences" DROP CONSTRAINT "Expriences_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_exprienceSetId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_mobile_key";

-- DropIndex
DROP INDEX "User_password_key";

-- AlterTable
ALTER TABLE "Expriences" ADD COLUMN     "exprienceId" TEXT,
ADD COLUMN     "profileId" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "continent",
DROP COLUMN "email",
DROP COLUMN "exprienceSetId",
DROP COLUMN "firstName",
DROP COLUMN "gender",
DROP COLUMN "lastName",
DROP COLUMN "mobile",
DROP COLUMN "password",
DROP COLUMN "role",
DROP COLUMN "username",
ADD COLUMN     "DateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "ExprienceSet";

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT 'MALE',
    "role" "Role" NOT NULL DEFAULT 'SU',
    "password" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "continent" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "experienceId" TEXT,
    "exprienceId" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Refral" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiry" TIMESTAMP(3) NOT NULL,
    "referId" TEXT NOT NULL,

    CONSTRAINT "Refral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exprience" (
    "id" TEXT NOT NULL,
    "experienceId" TEXT,

    CONSTRAINT "Exprience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_password_key" ON "Profile"("password");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_mobile_key" ON "Profile"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Refral_code_key" ON "Refral"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Exprience_experienceId_key" ON "Exprience"("experienceId");

-- CreateIndex
CREATE UNIQUE INDEX "Expriences_profileId_key" ON "Expriences"("profileId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Refral" ADD CONSTRAINT "Refral_referId_fkey" FOREIGN KEY ("referId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expriences" ADD CONSTRAINT "Expriences_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expriences" ADD CONSTRAINT "Expriences_exprienceId_fkey" FOREIGN KEY ("exprienceId") REFERENCES "Exprience"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exprience" ADD CONSTRAINT "Exprience_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
