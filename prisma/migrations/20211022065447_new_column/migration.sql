/*
  Warnings:

  - Added the required column `meSeguindo` to the `Seguidores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Seguidores` ADD COLUMN `meSeguindo` VARCHAR(191) NOT NULL;
