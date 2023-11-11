/*
  Warnings:

  - The values [CPP] on the enum `Lang` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `referalCode` on the `Expriences` table. All the data in the column will be lost.
  - You are about to drop the `Refral` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Lang_new" AS ENUM ('PYTHON', 'JAVA', 'CS', 'CP', 'JAVASCRIPT');
ALTER TABLE "Expriences" ALTER COLUMN "Lang" DROP DEFAULT;
ALTER TABLE "Expriences" ALTER COLUMN "Lang" TYPE "Lang_new" USING ("Lang"::text::"Lang_new");
ALTER TYPE "Lang" RENAME TO "Lang_old";
ALTER TYPE "Lang_new" RENAME TO "Lang";
DROP TYPE "Lang_old";
ALTER TABLE "Expriences" ALTER COLUMN "Lang" SET DEFAULT 'PYTHON';
COMMIT;

-- DropForeignKey
ALTER TABLE "Refral" DROP CONSTRAINT "Refral_referId_fkey";

-- AlterTable
ALTER TABLE "Expriences" DROP COLUMN "referalCode";

-- DropTable
DROP TABLE "Refral";

-- CreateTable
CREATE TABLE "Referal" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiry" TIMESTAMP(3) NOT NULL,
    "referId" TEXT NOT NULL,

    CONSTRAINT "Referal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Referal_code_key" ON "Referal"("code");

-- AddForeignKey
ALTER TABLE "Referal" ADD CONSTRAINT "Referal_referId_fkey" FOREIGN KEY ("referId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
