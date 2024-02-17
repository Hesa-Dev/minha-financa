-- CreateTable
CREATE TABLE "movimentos" (
    "id" SERIAL NOT NULL,
    "tipo" VARCHAR(255) NOT NULL,
    "descricacao" VARCHAR(255) NOT NULL,
    "montante" DOUBLE PRECISION NOT NULL,
    "data" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "movimentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "debitos" (
    "id" SERIAL NOT NULL,
    "userID" TEXT NOT NULL,
    "descricacao" VARCHAR(255) NOT NULL,
    "montante" DOUBLE PRECISION NOT NULL,
    "data" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "debitos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "creditos" (
    "id" SERIAL NOT NULL,
    "userID" TEXT NOT NULL,
    "descricacao" VARCHAR(255) NOT NULL,
    "montante" DOUBLE PRECISION NOT NULL,
    "data" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "creditos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "debitos" ADD CONSTRAINT "debitos_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "creditos" ADD CONSTRAINT "creditos_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
