-- CreateTable
CREATE TABLE "Receita" (
    "id" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,
    "modoPreparo" TEXT NOT NULL,
    "tempoPreparo" INTEGER NOT NULL,
    "classificao" TEXT NOT NULL,
    "dataPublicacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Receita_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "dataCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Receita" ADD CONSTRAINT "Receita_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
