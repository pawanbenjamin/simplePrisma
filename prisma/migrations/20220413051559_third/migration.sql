-- CreateTable
CREATE TABLE "owners" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "owners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "puppies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "isCute" BOOLEAN DEFAULT true,
    "age" INTEGER,
    "ownerId" INTEGER,

    CONSTRAINT "puppies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "puppies_tricks" (
    "id" SERIAL NOT NULL,
    "puppy_id" INTEGER,
    "trick_id" INTEGER,

    CONSTRAINT "puppies_tricks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tricks" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR,

    CONSTRAINT "tricks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "puppies_email_key" ON "puppies"("email");

-- CreateIndex
CREATE UNIQUE INDEX "puppies_tricks_puppy_id_trick_id_key" ON "puppies_tricks"("puppy_id", "trick_id");

-- AddForeignKey
ALTER TABLE "puppies" ADD CONSTRAINT "puppies_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "owners"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "puppies_tricks" ADD CONSTRAINT "puppies_tricks_puppy_id_fkey" FOREIGN KEY ("puppy_id") REFERENCES "puppies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "puppies_tricks" ADD CONSTRAINT "puppies_tricks_trick_id_fkey" FOREIGN KEY ("trick_id") REFERENCES "tricks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
