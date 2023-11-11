/*
  Warnings:

  - The values [CP] on the enum `Lang` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Lang_new" AS ENUM ('PYTHON', 'JAVA', 'CS', 'CPp', 'JAVASCRIPT');
ALTER TABLE "Expriences" ALTER COLUMN "Lang" DROP DEFAULT;
ALTER TABLE "Expriences" ALTER COLUMN "Lang" TYPE "Lang_new" USING ("Lang"::text::"Lang_new");
ALTER TYPE "Lang" RENAME TO "Lang_old";
ALTER TYPE "Lang_new" RENAME TO "Lang";
DROP TYPE "Lang_old";
ALTER TABLE "Expriences" ALTER COLUMN "Lang" SET DEFAULT 'PYTHON';
COMMIT;
