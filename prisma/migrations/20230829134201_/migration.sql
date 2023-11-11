/*
  Warnings:

  - The primary key for the `ExprienceSet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Expriences` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Expriences" DROP CONSTRAINT "Expriences_exprienceSetId_fkey";

-- DropForeignKey
ALTER TABLE "Expriences" DROP CONSTRAINT "Expriences_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_exprienceSetId_fkey";

-- AlterTable
ALTER TABLE "ExprienceSet" DROP CONSTRAINT "ExprienceSet_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ExprienceSet_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ExprienceSet_id_seq";

-- AlterTable
ALTER TABLE "Expriences" DROP CONSTRAINT "Expriences_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "exprienceSetId" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Expriences_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Expriences_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "exprienceSetId" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_exprienceSetId_fkey" FOREIGN KEY ("exprienceSetId") REFERENCES "ExprienceSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expriences" ADD CONSTRAINT "Expriences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expriences" ADD CONSTRAINT "Expriences_exprienceSetId_fkey" FOREIGN KEY ("exprienceSetId") REFERENCES "ExprienceSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
