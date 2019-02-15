insert into product
(name,price,img)
values ($1,$2,$3);

select *
from product
order by id asc;