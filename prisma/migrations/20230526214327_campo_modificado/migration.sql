/*
  Warnings:

  - You are about to drop the column `can_be_delete` on the `category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `category` DROP COLUMN `can_be_delete`,
    ADD COLUMN `can_be_deleted` BOOLEAN NOT NULL DEFAULT true;
