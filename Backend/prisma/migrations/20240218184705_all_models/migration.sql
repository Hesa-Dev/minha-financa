/*
  Warnings:

  - Added the required column `saldo` to the `movimentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movimentos" ADD COLUMN     "saldo" DOUBLE PRECISION NOT NULL;
