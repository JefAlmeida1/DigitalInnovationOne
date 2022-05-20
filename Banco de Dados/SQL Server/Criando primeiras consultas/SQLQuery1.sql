select * from clientes

insert into clientes (Codigo, Nome, TipoPessoa) values (1, 'Junior', 'M');
insert clientes (Codigo, Nome, TipoPessoa) values (2, 'Amanda', 'F');
insert clientes values (3, 'Ale', 'F');
insert clientes values (4, 'Vini', 'M');
insert clientes values (5, 'Dayna', 'F');
insert clientes values (1, 'Roma', 'M');

update clientes
set Codigo = 7,
	Nome = 'Roma'
where Nome = 'Roma'