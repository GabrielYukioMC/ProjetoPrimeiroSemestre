create database projeto;

use projeto;

create table saga (
    idSaga int primary key auto_increment,
    nome varchar(45),
    descricaoSaga varchar(900),
    logoSaga varchar(45)
) auto_increment = 1000;

create table personagem (
    idPersonagem int auto_increment primary key,
    nome varchar(45),
    afiliacao varchar(45),
    cargo varchar(45),
    titulo varchar(45),
    recompensa varchar(20),
    imgPre varchar(45),
    imgPos varchar(45),
    historia varchar (900)
) auto_increment = 500;

create table usuario (
    idUsuario int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45),
    cargo varchar (45),
    meioVisualizacao varchar(45),
    dtcadastro datetime default current_timestamp,
    corPag varchar(45),
    fkPersonagemF int,
    fksagaF int,
    constraint fkP foreign key (fkPersonagemF) references personagem(idPersonagem),
    constraint fkS foreign key(fksagaF) references saga(idSaga),
    constraint cargos check(
        cargo = 'Padão'
        or cargo = 'Admin'
    )
);

insert into
    usuario
values
    (
        null,
        'Gabriel Yukio',
        'gabrielyukiomibecoca@gmail.com',
        'senha123',
        'Admin',
        'Ambos',
        default,
        'padão',
        503,
        1000
    );

insert into
    usuario
values
    (
        null,
        'mm',
        'mm@',
        'mm',
        'padão',
        'Ambos',
        default,
        'padão',
        506,
        1002
    );

create table comentario (
    idComentario int primary key auto_increment,
    tituloComentario varchar(20),
    conteudo varchar(1500),
    tipoComentario varchar(45),
    fkAutor int,
    dtPublicacao datetime default current_timestamp,
    constraint fkA foreign key (fkAutor) references usuario(idUsuario)
    ON DELETE CASCADE
);

create table aviso(
    idAviso int primary key auto_increment,
    fkComentario int ,
    dataAviso datetime default current_timestamp,
    constraint fkC foreign key (fkComentario) references comentario(idComentario)
);
insert  into aviso (fkComentario, dataAviso) values ( 2 ,default);




/* insert into usuario values (null, 'jose','jj','ska','ccc',default); */
select
    *
from
    saga;

insert into
    saga
values
    (
        null,
        'East Blue',
        'A saga começa com um flashback da execução de Gol D. Roger. Antes de morrer, ele diz as multidões para saírem e procurarem o seu tesouro. Isso provocou a Era de Ouro da Pirataria em que incontáveis piratas levantaram suas bandeiras e partiram para encontrar o One Piece.<br>Essa saga se concentra principalmente em Luffy sair para a Grand Line e recrutando tripulantes. Durante a saga, Luffy ganha quatro companheiros: Zoro, Nami, Usopp e Sanji e ganha uma recompensa de berries30,000,000 pela sua cabeça.',
        'East_Blue_Saga.webp'
    ),
    (
        null,
        'Alabasta',
        'Os Chapéus de Palha finalmente entram na Grand Line, eles conhecem Nefertari Vivi e decidem ajudar a salvar seu país, Alabasta.<br> Através da Grand Line, eles afastam as tentativas de assassinato da Baroque Works enquanto conhecem o irmão mais velho de Luffy, Portgas D. Ace, bem como dois gigantes chamados Dorry e Brogy, e ganham um novo membro na tripulação: Tony Tony Chopper.A saga atinge o clímax em um confronto total com os Chapéus de Palha que lutam contra a Baroque Works e seu líder, o Mr. 0, também conhecido como Crocodile, um Shichibukai. Depois que a organização é derrotada, o Governo Mundial aumenta a recompensa de Luffy para 100.000.000 berries  e Zoro ganha uma recompensa de 60.000.000 berries .',
        'alabasta.jpg'
    ),
    (
        null,
        'Skypiea',
        'Um navio de centenas de anos cai do céu, e a partir de objetos contidos no interior, a tripulação começa a se perguntar se uma ilha no céu pode realmente existir como as lendas dizem. Enquanto isso, o Governo Mundial reúne o restante dos Shichibukai com o objetivo de discutir um substituto para Crocodile. Ace encontra Buggy. Shanks encontra Barba Branca. Com a ajuda de Montblanc Cricket em Jaya, os Chapéus de Palha conseguem chegar a Skypiea. Lá eles enfrentam o falso deus que governa o céu, Enel, que mais tarde é derrotado por Luffy.',
        'skypiea.jfif'
    ),
    (
        null,
        'Water 7',
        'os Chapéus de Palha chegam a Water 7, onde Luffy está em busca de um carpinteiro paraconsertar o navio.
Porém eles logo caem em problemas, fazendo inimigos tanto com a Família Franky e com a Companhia Galley-La. Eles também descobrem que o Going Merry está morrendo e por isso, Luffy decide comprar um novo navio. Usopp não concorda com a decisão e deixa a tripulação. CP-9 captura Robin, os Chapéus de Palha vão atrás para tentarem salvá-la. Finalmente, eles conseguem obter um carpinteiro para a tripulação: Franky. No momento da partida do grupo, Usopp, que esteve disfarçado de Sogeking, pede desculpas e volta para a tripulação, e assim os Chapéus de Palha estão prontos para zarpar com um novo navio, o Thousand Sunny.',
        'Water7.webp'
    ),
    (
        null,
        'Thriller Bark',
        'Os Chapéus de Palha viajam para a ilha fantasma de Thriller Bark, onde eles encontram o Shichibukai Gecko Moria. Utilizando seus poderes de Akuma no Mi e as habilidades cirúrgicas de seu subordinado, Dr. Hogback, Moria usa a sombra de Luffy para reviver um lendário gigante, Oars. Com a ajuda de um esqueleto chamado Brook, os Chapéus de Palha lutam e derrotam Moria e Oars, Brook junta-se aos Chapéus de Palha como seu músico.',
        'ThrillerBark.webp'
    ),
    (
        null,
        'Marineford',
        'Ao saber da execução iminente de seu irmão, Luffy faz decide ir resgatá-lo. ele vai até Impel Down e apos chagar ele escapa da grande prisão com a ajuda de Emporio Ivankov com seu exército Okama e dois ex-Shichibukai, Crocodile e Jinbe. Eles escapam e chegam à batalha em Marineford, com Luffy aliando-se com os Piratas do Barba Branca. A guerra termina com a morte de Ace e Barba Branca, deixando Luffy feridode maneira fisica e  emocionalmente. Depois de ser resgatado ele é ajudado a sair de sua depressão por Jinbe. Luffy decide treinar e se tornar mais forte com a ajuda de Silvers Rayleigh.',
        'Marineford.webp'
    ),
    (
        null,
        'Ilha dos Homens Peixes',
        ' Ela começa com os chapéus de palha se reunindo no Arquipélago Sabaody e se preparando para zarpar para o Novo Mundo, mas para entrar lá, eles devem primeiro passar pela Ilha dos Homens-Peixe. Eles derrotam os Novos Piratas Homens-Peixe e os Piratas Voadores, que planejaram conquistar e destruir a ilha, e fazer uma declaração de guerra à Yonkou Big Mom.',
        'SagaHomensPeixes.jfif'
    ),
    (
        null,
        'Aliança Pirata',
        ' Os Chapéus de Palha finalmente entram no Novo Mundo, mas logo após receberem uma chamada de socorro de uma ilha chamada Punk Hazard, que abriga um antigo laboratório do Dr. Vegapunk, eles acabam se envolvendo nos experimentos ilegais de Caesar Clown. Em meio a isso, a tripulação forma uma aliança com Trafalgar Law, em preparação para destronar um dos Yonkou, Kaido. A fim de fazer isso, eles desafiam Donquixote Doflamingo e descobrem uma conspiração de uma década no reino de Dressrosa.',
        'AliancaPirataSaga.jpg'
    ),
    (
        null,
        'Yonkou',
        ' Os Chapéus de Palha finalmente entram no Novo Mundo, mas logo após receberem uma chamada de socorro de uma ilha chamada Punk Hazard, que abriga um antigo laboratório do Dr. Vegapunk, eles acabam se envolvendo nos experimentos ilegais de Caesar Clown. Em meio a isso, a tripulação forma uma aliança com Trafalgar Law, em preparação para destronar um dos Yonkou, Kaido.',
        'yonkou.webp'
    );

insert into
    personagem
values
    (
        null,
        'Monkey D. Luffy',
        'Bando do Chapéu de Palha',
        'Capitão',
        'Imperador do mar/Yonkou',
        '3.000.000.000',
        'luffyPreTimeSkip.webp',
        'luffyPosTimeSkip.png',
        'Monkey D. Luffy é o capitão dos Piratas do Chapéu de Palha. Quando criança, ele comeu uma Gomu Gomu no Mi, uma fruta que lhe deu o poder do homem-borracha em troca de sua habilidade de nadar. Filho de Monkey D. Dragon, o jovem sonha em se tornar o Rei dos Piratas, título que ninguém ocupa desde a execução de Gol D. Roger, aquele que conquistou riqueza, poder, fama e liberdade. Para isso, ele precisa encontrar o One Piece, tesouro lendário deixado por Roger.'
    ),
    (
        null,
        'Roronoa Zoro',
        'Bando do Chapéu de Palha',
        'possivel imediato',
        'caçador de piratas',
        ' 1.111.000.000',
        'zoroPreTimeSkip.webp',
        'zoroPosTimeSkip.png',
        'Roronoa Zoro, que um dia já foi caçador de piratas, é um espadachim que almeja ser o mais forte de todos. Foi o primeiro a entrar no bando piratas do Chapéu de Palha, liderado por Luffy, quando foi resgatado pelo sorridente garoto de borracha em Shells Town, no arco Romance Dawn. O carisma e o senso de justiça de Luffy convenceram Zoro de que era possível confiar em alguém, mesmo que esse alguém fosse um pirata.'
    ),
    (
        null,
        'Nami',
        'Bando do Chapéu de Palha',
        'Navegadora',
        'Gatuna',
        ' 366.000.000',
        'namiPreTimeSkip.webp',
        'namiPosTimeSkip.webp',
        'Nami, a ladra que controla o clima, e também nossa grande navegadora, entra oficialmente para o bando no arco de Arlong Park, quando seu passado triste é exposto e finalmente alguém pode livrá-la da vida de servidão ao bando vilanesco de homens peixe liderado por Arlong. Nami, que antes não era capaz de confiar em ninguém além de si mesma, finalmente encontra um lugar onde pode se sentir segura com os novos companheiros.'
    ),
    (
        null,
        'Usopp',
        'Bando do Chapéu de Palha',
        'Atirador',
        'God Usopp',
        '500.000.000',
        'usoppPreTimeSkip.webp',
        'usoppPosTimeSkip.webp',
        'O maior mentiroso do mundo, Usopp, também é um grande atirador e sempre sonhou em se tornar um “lobo do mar”. Usopp abandonou sua terra natal para transformar suas mentiras em realidade, acompanhando Luffy, Zoro e Nami, depois de aprender com eles o que é preciso para proteger aqueles que amamos. Filho do habilidoso pirata Yasopp, o jovem entra para o bando do Chapéu de Palha no arco da Vila Syrup.'
    ),
    (
        null,
        'Vinsmoke Sanji',
        'Bando do Chapéu de Palha',
        'Cozinheiro',
        'Black Lag',
        '1.032.000.000',
        'sanjiPreTimeSkip.webp',
        'sanjiPosTimeSkip.webp',
        'Com ele não pode sobrar comida no prato e ninguém passa fome. Sanji é o cozinheiro do bando, que cresceu inspirado por seu pai adotivo e chefe de cozinha, Zeff. Quando o bando de Luffy visita o barco-restaurante em que trabalha, Baratiê, em busca de um cozinheiro, Sanji é incentivado por seu pai a buscar seu próprio caminho e seu sonho de conhecer o ALL BLUE, um mar no qual todas as criaturas marinhas do mundo se encontram, mas que, até agora, ainda é lenda.'
    ),
    (
        null,
        'Tony Tony Chopper',
        'Bando do Chapéu de Palha',
        'Medico',
        'Mascote',
        '1.000',
        'chopperPreTimeSkip.png',
        'chopperPosTimeSkip.webp',
        'Tony Tony Chopper é um médico de enorme coração e um combatente de muito valor. Depois de comer a Hito Hito no Mi, o fruto que o tornou parcialmente humano, foi acolhido pelo doutor Hiluluk, que o ensinou o ofício para exercer medicina. Ingênuo e medroso. Chopper busca seu lugar no mundo cercado de companheiros que o amam e respeitam.'
    ),
    (
        null,
        'Nico Robin',
        'Bando do Chapéu de Palha',
        'Historiadora',
        'Filha do Demônio',
        '930.000.000',
        'robinPreTimeSkip.webp',
        'robinPosTimeSkip.webp',
        'A única historiadora sobrevivente de um genocídio que visava controle de informação e conhecimento, Nico Robin se apresenta primeiro como uma vilã, mas seu coração perdido é acolhido pelos novos companheiros no arco de Ennies Lobbie. Essa grande pesquisadora, que quando criança consumiu o fruto hana hana no mi, tem o poder de replicar seus braços quase que infinitamente em qualquer superfície e hoje carrega o legado de conhecimento seu povo.'
    ),
    (
        null,
        'Cutty Flam / Franky',
        'Bando do Chapéu de Palha',
        'Carpinteiro',
        'Franky',
        '394.000.000',
        'frankyPreTimeSkip.webp',
        'frankyPosTimeSkip.webp',
        ' Franky, o carpinteiro viciado em refrigerantes é o grande responsável pela construção do barco THOUSAND SUNNY, que levará o bando do chapéu de palha a conquistar todos os mares. Com um talento inegável, mas sem disciplina, ele cometeu erros no passado que custaram caro, mas com sua dedicação, os aprendizados da vida e os novos companheiros, ele reconquista a confiança e entra para o bando no arco de Ennies Lobby.SUPEEEEEEEEER!!!'
    ),
    (
        null,
        'Brook',
        'Bando do Chapéu de Palha',
        'Musico',
        'Soul King',
        '383.000.000',
        'brookPreTimeSkip.webp',
        'brookPosTimeSkip.webp',
        ' O Brook é o único membro do bando que com certeza ninguém será capaz de matar… PORQUE ELE JÁ ESTÁ MORTO YOHOHOHOHOHOHO! O pirata espadachim amaldiçoado a navegar sozinho pela eternidade após comer a fruta Yomi Yomi no Mi, que lhe concedeu uma segunda vida. Brook entra no bando no arco de Thriller Bark.'
    ),
    (
        null,
        'Jinbe',
        'Bando do Chapéu de Palha',
        'Timoneiro',
        'Cavaleiiro do mar',
        ' 1.100.000.000',
        'jinbePosTimeSkip.webp',
        'jinbePosTimeSkip.webp',
        'Jinbe é um homem peixe que carrega consigo o fardo de sonhar por um mundo mais igual, sem preconceitos, usando o karatê dos homens peixe. Jinbei, que um dia já foi como Arlong, vilão da primeira saga, muda quando se inspira nos ideais de Fisher Tiger e vê a igualdade almejada no bando dos chapéus de palha, seguindo com eles na função de timoneiro para guiar os sonhos da tribulação em busca de seus ideais depois do arco da ilha dos homens-peixe.'
    );

desc usuario;

select
    *
from
    saga;

select
    *
from
    personagem;

select
    *
from
    usuario;

select
    personagem.nome,
    saga.nome
from
    personagem,
    saga
where
    personagem.idPersonagem = 500
    and saga.idSaga = 1005;

select
    personagem.nome,
    saga.nome,
    usuario.idUsuario
from
    personagem
    join usuario on fkPersonagemF = idPersonagem
    join saga on idSaga = fksagaF
where
    idUsuario = 2;

/* insert comentario */
insert into
    comentario (
        tituloComentario,
        conteudo,
        tipoComentario,
        fkAutor,
        dtPublicacao
    )
values
    (
        'Lili?',
        'imu-sama pode ser a rainha lili  de alabasta ou outra pessoa do seculo perdido.',
        'teoria',
        (
            select
                idUsuario
            from
                usuario
            where
                email = 'gabielyukiomibecoca@gmail.com'
        ),
        default
    )  ,  (
        'Lili?',
        'imu-sama pode ser a rainha lili  de alabasta ou outra pessoa do seculo perdido.',
        'teoria',
        (
            select
                idUsuario
            from
                usuario
            where
                email = 'gabielyukiomibecoca@gmail.com'
        ),
        default
    );

select
    comentario.idComentario,
    comentario.tituloComentario,
    comentario.conteudo,
    comentario.tipoComentario,
    usuario.nome,
    usuario.meioVisualizacao
from
    comentario
    join usuario on idUsuario = fkAutor
order by
    idComentario desc;

select
    *
from
    usuario;

select
    count(meioVisualizacao) as manga,
    count(meioVisualizacao) as anime,
    count(meioVisualizacao) as ambos
from
    usuario
where
    meioVisualizacao = 'manga';

select
    (
        select
            count(meioVisualizacao)
        from
            usuario
        where
            meioVisualizacao = 'anime'
    ) as anime,
    (
        select
            count(meioVisualizacao)
        from
            usuario
        where
            meioVisualizacao = 'manga'
    ) as manga,
    (
        select
            count(meioVisualizacao)
        from
            usuario
        where
            meioVisualizacao = 'ambos'
    ) as ambos,
    (
        select
            count(meioVisualizacao)
        from
            usuario
    ) as total;

select
    *
from
    usuario;

use projeto;

select
    usuario.idUsuario as idUsuario,
    usuario.nome as nome,
    personagem.nome as personagem,
    saga.nome as saga
from
    personagem
    join usuario on idPersonagem = fkPersonagemF
    join saga on idSaga = fksagaF;

select
    count(fkPersonagemF),
    personagem.nome
from
    usuario
    join personagem on fkPersonagemF = idPersonagem
group by
    fkPersonagemF;

DELETE FROM
    usuario
WHERE
    idUsuario = 4;
    
    
use projeto;
    
    
select * from aviso ;

select tituloComentario from aviso join comentario on fkComentario = idComentario where fkAutor = 2;



