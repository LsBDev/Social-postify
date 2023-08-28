/*
  Warnings:

  - You are about to drop the column `usename` on the `Media` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Media` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Media` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Media_usename_key";

-- AlterTable
ALTER TABLE "Media" DROP COLUMN "usename",
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Media_username_key" ON "Media"("username");
