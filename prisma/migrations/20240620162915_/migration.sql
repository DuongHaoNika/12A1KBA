/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Userinfo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Userinfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Userinfo" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Userinfo_email_key" ON "Userinfo"("email");
