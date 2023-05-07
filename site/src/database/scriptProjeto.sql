create database projeto;

use projeto;

create table saga (
    idSaga int primary key auto_increment,
    nomeSaga varchar(45),
    descricaoSaga varchar(900),
    logoSaga varchar(45)
) auto_increment = 1000;

create table arco (
    idArco int auto_increment primary key,
    nomeArco varchar(45),
    descArco varchar(900),
    logoArco varchar(45),
    qtdEps int,
    fkSaga int,
    constraint fksaga foreign key(fkSaga) references saga(idSaga)
) auto_increment = 100;

create table personagem (
    idPersonagem int auto_increment primary key,
    nome varchar(45),
    afiliacao varchar(45),
    cargo varchar(45),
    titulo varchar(45),
    recompensa int
) auto_increment = 500;

create table usuario (
    idUsuario int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45),
    cargo varchar (45),
    dtcadastro datetime default current_timestamp,
    corPag varchar(45),
    fkPersonagemF int,
    fkArcoF int,
    constraint fkP foreign key (fkPersonagemF) references personagem(idPersonagem),
    constraint fkS foreign key(fkArcoF) references arco(idArco),
    constraint cargos check(
        cargo = 'Padão'
        or cargo = 'Principal'
    )
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
select
    *
from
    usuario;

insert into saga values
    (
        null,
        'East Blue',
        'A saga começa com um flashback da execução de Gol D. Roger. Antes de morrer, ele diz as multidões para saírem e procurarem o seu tesouro. Isso provocou a Era de Ouro da Pirataria em que incontáveis piratas levantaram suas bandeiras e partiram para encontrar o One Piece.<br>Essa saga se concentra principalmente em Luffy sair para a Grand Line e recrutando tripulantes. Durante a saga, Luffy ganha quatro companheiros: Zoro, Nami, Usopp e Sanji e ganha uma recompensa de berries30,000,000 pela sua cabeça.',
        'East_Blue_Saga.webp'
    ),(
        null,
        'Alabasta',
        'Os Chapéus de Palha finalmente entram na Grand Line, eles conhecem Nefertari Vivi e decidem ajudar a salvar seu país, Alabasta.<br> Através da Grand Line, eles afastam as tentativas de assassinato da Baroque Works enquanto conhecem o irmão mais velho de Luffy, Portgas D. Ace, bem como dois gigantes chamados Dorry e Brogy, e ganham um novo membro na tripulação: Tony Tony Chopper.A saga atinge o clímax em um confronto total com os Chapéus de Palha que lutam contra a Baroque Works e seu líder, o Mr. 0, também conhecido como Crocodile, um Shichibukai. Depois que a organização é derrotada, o Governo Mundial aumenta a recompensa de Luffy para 100.000.000 berries  e Zoro ganha uma recompensa de 60.000.000 berries .',
        'alabasta.jpg'
    ),(
        null,
        'Skypiea',
        'Um navio de centenas de anos cai do céu, e a partir de objetos contidos no interior, a tripulação começa a se perguntar se uma ilha no céu pode realmente existir como as lendas dizem. Enquanto isso, o Governo Mundial reúne o restante dos Shichibukai com o objetivo de discutir um substituto para Crocodile. Ace encontra Buggy. Shanks encontra Barba Branca. Com a ajuda de Montblanc Cricket em Jaya, os Chapéus de Palha conseguem chegar a Skypiea. Lá eles enfrentam o falso deus que governa o céu, Enel, que mais tarde é derrotado por Luffy.',
        'skypiea.jfif'
    ),(
        null,
        'Water 7',
        'os Chapéus de Palha chegam a Water 7, onde Luffy está em busca de um carpinteiro paraconsertar o navio.
Porém eles logo caem em problemas, fazendo inimigos tanto com a Família Franky e com a Companhia Galley-La. Eles também descobrem que o Going Merry está morrendo e por isso, Luffy decide comprar um novo navio. Usopp não concorda com a decisão e deixa a tripulação. CP-9 captura Robin, os Chapéus de Palha vão atrás para tentarem salvá-la. Finalmente, eles conseguem obter um carpinteiro para a tripulação: Franky. No momento da partida do grupo, Usopp, que esteve disfarçado de Sogeking, pede desculpas e volta para a tripulação, e assim os Chapéus de Palha estão prontos para zarpar com um novo navio, o Thousand Sunny.',
        'Water7.webp'
    ),(
        null,
        'Thriller Bark',
        'Os Chapéus de Palha viajam para a ilha fantasma de Thriller Bark, onde eles encontram o Shichibukai Gecko Moria. Utilizando seus poderes de Akuma no Mi e as habilidades cirúrgicas de seu subordinado, Dr. Hogback, Moria usa a sombra de Luffy para reviver um lendário gigante, Oars. Com a ajuda de um esqueleto chamado Brook, os Chapéus de Palha lutam e derrotam Moria e Oars, Brook junta-se aos Chapéus de Palha como seu músico.',
        'ThrillerBark.webp'
    ),(
        null,
        'Marineford',
        'Ao saber da execução iminente de seu irmão, Luffy faz decide ir resgatá-lo. ele vai até Impel Down e apos chagar ele escapa da grande prisão com a ajuda de Emporio Ivankov com seu exército Okama e dois ex-Shichibukai, Crocodile e Jinbe. Eles escapam e chegam à batalha em Marineford, com Luffy aliando-se com os Piratas do Barba Branca. A guerra termina com a morte de Ace e Barba Branca, deixando Luffy feridode maneira fisica e  emocionalmente. Depois de ser resgatado ele é ajudado a sair de sua depressão por Jinbe. Luffy decide treinar e se tornar mais forte com a ajuda de Silvers Rayleigh.',
        'Marineford.webp'
    ),(
        null,
        'Ilha dos Homens Peixes',
        ' Ela começa com os chapéus de palha se reunindo no Arquipélago Sabaody e se preparando para zarpar para o Novo Mundo, mas para entrar lá, eles devem primeiro passar pela Ilha dos Homens-Peixe. Eles derrotam os Novos Piratas Homens-Peixe e os Piratas Voadores, que planejaram conquistar e destruir a ilha, e fazer uma declaração de guerra à Yonkou Big Mom.',
        'SagaHomensPeixes.jfif'
    ),(
        null,
        'Aliança Pirata',
        ' Os Chapéus de Palha finalmente entram no Novo Mundo, mas logo após receberem uma chamada de socorro de uma ilha chamada Punk Hazard, que abriga um antigo laboratório do Dr. Vegapunk, eles acabam se envolvendo nos experimentos ilegais de Caesar Clown. Em meio a isso, a tripulação forma uma aliança com Trafalgar Law, em preparação para destronar um dos Yonkou, Kaido. A fim de fazer isso, eles desafiam Donquixote Doflamingo e descobrem uma conspiração de uma década no reino de Dressrosa.',
        'AliancaPirataSaga.jpg'
    ),(
        null,
        'Yonkou',
        ' Os Chapéus de Palha finalmente entram no Novo Mundo, mas logo após receberem uma chamada de socorro de uma ilha chamada Punk Hazard, que abriga um antigo laboratório do Dr. Vegapunk, eles acabam se envolvendo nos experimentos ilegais de Caesar Clown. Em meio a isso, a tripulação forma uma aliança com Trafalgar Law, em preparação para destronar um dos Yonkou, Kaido.',
        'yonkou.webp'
    );
    
    
    desc usuario;

drop database projeto;