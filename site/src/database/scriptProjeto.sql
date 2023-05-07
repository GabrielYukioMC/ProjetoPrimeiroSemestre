create database projeto;

use projeto;


create table saga (
idSaga int primary key auto_increment,
nomeSaga varchar(45),
descricaoSaga varchar(300),
logoSaga varchar(45)

)auto_increment=1000;

create table arco (
idArco int auto_increment primary key,
nomeArco varchar(45),
descArco varchar(300),
logoArco varchar(45),
qtdEps int,
fkSaga int,
constraint fksaga foreign key(fkSaga) references saga(idSaga)
)auto_increment =100;

create table personagem (
idPersonagem int auto_increment primary key,
nome varchar(45),
afiliacao varchar(45),
cargo varchar(45),
titulo varchar(45),
recompensa int
)auto_increment =500;


create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
cargo varchar (45),
dtcadastro datetime default current_timestamp,
fkPersonagemF int,
fkArcoF int,
constraint fkP foreign key (fkPersonagemF) references personagem(idPersonagem),
constraint fkS foreign key(fkArcoF) references arco(idArco),
constraint cargos check(cargo = 'Padão' or cargo = 'Principal')
);

create table comentario (
idComentario int primary key auto_increment,
tituloComentario varchar(45),
conteudo varchar(300),
fkAutor int,
dtPublicacao datetime default current_timestamp,
constraint fkA foreign key (fkAutor) references usuario(idUsuario)

);

/* insert into usuario values (null, 'jose','jj','ska','ccc',default); */

select * from usuario;

desc usuario;

drop database projeto; 