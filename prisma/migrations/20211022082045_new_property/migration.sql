/*
  Warnings:

  - A unique constraint covering the columns `[idSeguindo]` on the table `Seguindo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Seguindo_idSeguindo_key` ON `Seguindo`(`idSeguindo`);
