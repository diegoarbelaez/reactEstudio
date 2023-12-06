Casas por barrio
SELECT casa.barrio, count(*) as cantidades FROM `ciudadano` INNER join casa on ciudadano.fk_id_casa = casa.id_casa GROUP by casa.barrio ORDER by cantidades desc;

casas por barrio ordenadas segun cantidad de habitantes
select id_casa, count(*) as totales from ciudadano INNER join casa on ciudadano.fk_id_casa = casa.id_casa where casa.barrio = 'fundadores' GROUP by id_casa order by totales desc;
personas por casa
SELECT * FROM `ciudadano` INNER JOIN casa on ciudadano.fk_id_casa = casa.id_casa where casa.id_casa = 3352;

