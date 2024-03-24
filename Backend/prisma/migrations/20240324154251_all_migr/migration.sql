/*
  Warnings:

  - Made the column `data` on table `movimentos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "movimentos" ALTER COLUMN "data" SET NOT NULL,
ALTER COLUMN "data" DROP DEFAULT,
ALTER COLUMN "data" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "created_at" DROP DEFAULT,
ALTER COLUMN "created_at" SET DATA TYPE VARCHAR(255);
