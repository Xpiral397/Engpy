-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SU', 'TP', 'ADMIN');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Lang" AS ENUM ('PYTHON', 'JAVA', 'CS', 'CPP', 'JAVASCRIPT');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "mobile" INTEGER NOT NULL,
    "continent" TEXT NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT 'MALE',
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'SU',
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expriences" (
    "id" SERIAL NOT NULL,
    "Lang" "Lang" NOT NULL DEFAULT 'PYTHON',
    "Year" INTEGER NOT NULL DEFAULT 2,
    "projects" TEXT[],

    CONSTRAINT "Expriences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "experienceId" INTEGER NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");

-- CreateIndex
CREATE UNIQUE INDEX "User_mobile_key" ON "User"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Expriences"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
