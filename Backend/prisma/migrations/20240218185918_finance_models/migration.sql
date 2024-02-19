/*
  Warnings:

  - You are about to drop the column `descricacao` on the `movimentos` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `movimentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movimentos" DROP COLUMN "descricacao",
ADD COLUMN     "descricao" VARCHAR(255) NOT NULL;
