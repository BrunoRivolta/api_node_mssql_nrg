CREATE DATABASE equatorial;
CREATE TABLE posts(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE O_MATERIAL(
	item_id int not null auto_increment PRIMARY KEY,
    material varchar(200) not null,
    descricao varchar(255) not null,
    unidade varchar(11) not null,
    empresa varchar(200) not null,
    centro varchar(200) not null,
    deposito varchar(200) not null,
    lote varchar(200) not null,
    saldo varchar(200) not null,
    saldo_projeto varchar(200) not null,
    projeto varchar(200) not null,
    precomm varchar(200) not null,
    precolastpo varchar(200) not null,
    setor_atividade varchar(200) not null,
    decriacao_sa varchar(200) not null,
    grupo_merc varchar(200) not null,
    descricao_gm varchar(200) not null,
    tuc varchar(200) not null,
    descricao_tuc varchar(200) not null,
    a1 varchar(200) not null,
    descricao_a1 varchar(200) not null,
    a2 varchar(200) not null,
    descricao_a2 varchar(200) not null,
    a3 varchar(200) not null,
    descricao_a3 varchar(200) not null,
    a4 varchar(200) not null,
    descricao_a4 varchar(200) not null,
    a5 varchar(200) not null,
    descricao_a5 varchar(200) not null,
    a6 varchar(200) not null,
    descricao_a6 varchar(200) not null
);
