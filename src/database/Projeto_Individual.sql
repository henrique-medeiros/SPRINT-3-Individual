create database ProjetoIndividual;
use ProjetoIndividual;

create table clube
(idClube int primary key auto_increment,
nomeClube varchar(50));

insert into clube values (null, 'Santos'),
(null, 'São Paulo'),
(null, 'Corinthians'),
(null, 'Palmeiras'),
(null, 'Botafogo'),
(null, 'Flamengo');

select * from clube;

create table votacao 
(idVoto int primary key auto_increment,
fkClube int,
foreign key(fkClube) references Clube(idClube)); 

select * from votacao;

insert into votacao values (null, 1),
(null, 2),
(null, 3),
(null, 4),
(null, 6);

select count(fkClube) from votacao where fkClube=1;

create table usuario (
id int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50));

select * from usuario;