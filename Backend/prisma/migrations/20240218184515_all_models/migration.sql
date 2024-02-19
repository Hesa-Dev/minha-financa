/*
  Warnings:

  - You are about to drop the `creditos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `debitos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userID` to the `movimentos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "creditos" DROP CONSTRAINT "creditos_userID_fkey";

-- DropForeignKey
ALTER TABLE "debitos" DROP CONSTRAINT "debitos_userID_fkey";

-- AlterTable
ALTER TABLE "movimentos" ADD COLUMN     "userID" TEXT NOT NULL;

-- DropTable
DROP TABLE "creditos";

-- DropTable
DROP TABLE "debitos";

-- AddForeignKey
ALTER TABLE "movimentos" ADD CONSTRAINT "movimentos_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
