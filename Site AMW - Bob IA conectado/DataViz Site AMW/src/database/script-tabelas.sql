create database SPrint2;
use SPrint2;

    create table usuario(
	idUsuario int primary key auto_increment,
	nomeUsuario varchar(120) not null,
	email varchar(120) not null,
	cpf char(12) not null,
	senha varchar(8) not null,
    fkCadastroMuseu int not null,
    constraint fkCadastroMuseuCadastroUsuario foreign key (fkCadastroMuseu)
   references CadastroUsuario(idUsuario)
	);
    
    create table museu(
    idMuseu int primary key auto_increment,
    nomeMuseu varchar(120) not null,
    cep char(8) not null,
    numero int,
    complemento varchar(50),
    cnpj char(14),
    qtdSecao varchar(50)
    );
    

	create table secao(
	idSecao int primary key auto_increment,
	nomeSecao varchar(120),
	categoria varchar(120) not null,
	qtdobras varchar(50),
    fkCadastroMuseu int, 
    constraint fkCadastroMuseuSecao foreign key (fkCadastroMuseu)
   references Secao(idsecao)
	);
    
    create table sensor(
    idSensor int primary key auto_increment,
    fkSecao int,
    foreign key (fkSecao) references secao(idSecao)
    );
    