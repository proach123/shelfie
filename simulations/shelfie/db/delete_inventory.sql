delete from product
where id = $1;

select * from product
order by id asc;