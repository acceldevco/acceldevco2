/*
  Warnings:

  - Added the required column `file` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` ADD COLUMN `file` JSON NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `file` JSON NOT NULL;
