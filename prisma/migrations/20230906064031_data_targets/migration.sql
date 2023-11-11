-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "trendId" INTEGER;

-- CreateTable
CREATE TABLE "DataTargets" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "Target" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DataTargets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trend" (
    "id" SERIAL NOT NULL,
    "trend" TEXT[],
    "topicId" INTEGER,

    CONSTRAINT "Trend_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trend" ADD CONSTRAINT "Trend_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_trendId_fkey" FOREIGN KEY ("trendId") REFERENCES "Trend"("id") ON DELETE SET NULL ON UPDATE CASCADE;
