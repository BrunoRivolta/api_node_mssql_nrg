use equatorial

CREATE TABLE O_MATERIAL (
  item_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  material VARCHAR(200) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  unidade VARCHAR(11) NOT NULL,
  empresa VARCHAR(200) NOT NULL,
  centro VARCHAR(200) NOT NULL,
  deposito VARCHAR(200) NOT NULL,
  lote VARCHAR(200) NOT NULL,
  saldo VARCHAR(200) NOT NULL,
  saldo_projeto VARCHAR(200) NOT NULL,
  projeto VARCHAR(200) NOT NULL,
  precomm VARCHAR(200) NOT NULL,
  precolastpo VARCHAR(200) NOT NULL,
  setor_atividade VARCHAR(200) NOT NULL,
  decriacao_sa VARCHAR(200) NOT NULL,
  grupo_merc VARCHAR(200) NOT NULL,
  descricao_gm VARCHAR(200) NOT NULL,
  tuc VARCHAR(200) NOT NULL,
  descricao_tuc VARCHAR(200) NOT NULL,
  a1 VARCHAR(200) NOT NULL,
  descricao_a1 VARCHAR(200) NOT NULL,
  a2 VARCHAR(200) NOT NULL,
  descricao_a2 VARCHAR(200) NOT NULL,
  a3 VARCHAR(200) NOT NULL,
  descricao_a3 VARCHAR(200) NOT NULL,
  a4 VARCHAR(200) NOT NULL,
  descricao_a4 VARCHAR(200) NOT NULL,
  a5 VARCHAR(200) NOT NULL,
  descricao_a5 VARCHAR(200) NOT NULL,
  a6 VARCHAR(200) NOT NULL,
  descricao_a6 VARCHAR(200) NOT NULL
);