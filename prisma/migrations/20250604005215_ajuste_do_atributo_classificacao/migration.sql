/*
  Warnings:

  - You are about to drop the column `classificao` on the `Receita` table. All the data in the column will be lost.
  - Added the required column `classificacao` to the `Receita` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Receita" DROP COLUMN "classificao",
ADD COLUMN     "classificacao" TEXT NOT NULL;
