create database if exists moviehub;

use moviehub;

create table if not exists filmes (
    id int auto_increment primary key,
    nome varchar(150) not null,
    nota decimal(3,1) not null,
    descricao text,
    data_lancamento date
);