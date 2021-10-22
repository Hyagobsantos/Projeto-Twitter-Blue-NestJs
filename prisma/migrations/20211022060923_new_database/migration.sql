/*
  Warnings:

  - Added the required column `quemSegue` to the `Seguindo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Seguindo` ADD COLUMN `quemSegue` VARCHAR(191) NOT NULL;
