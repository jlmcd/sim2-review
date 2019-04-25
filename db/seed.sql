drop table if exists house;

create table house(
    id serial PRIMARY KEY,
    house_name text,
    img text,
    color_1 varchar(7),
    color_2 varchar(7),
    color_3 varchar(7),
    description text,
    patron_animal text
);

create table student (
    student text, 
    id serial primary key,
    house_id int REFERENCES house(id)
);



insert into house(house_name, img, color_1, color_2, color_3, description, patron_animal)
values
    ('Hufflepuff', 'https://i.ytimg.com/vi/y0Z5_wipT2o/maxresdefault.jpg', '#ecb939', '#f0c75e', '#726255', 'am hufflepuff', 'Badger?'),
    ('Gryffindor', 'https://vignette.wikia.nocookie.net/harrypotter/images/9/96/Gryffindor_crest_by_tuliipiie-d491bqc.jpg/revision/latest?cb=20130508231701', '#740001', '#ae0001', '#eeba30', 'Basic', 'Lion'),
    ('Slytherin', 'https://vignette.wikia.nocookie.net/pottermore/images/4/45/Slytherin_Crest.png/revision/latest?cb=20111112232353', '#1a472a', '#2a623d', '#5d5d5d', 'Ew', 'Ssssssnaaake'),
    ('Ravenclaw', 'https://vignette.wikia.nocookie.net/pottermore/images/4/40/Ravenclaw_Crest_1.png/revision/latest?cb=20140604194505', '#0e1a40', '#222f5b', '#946b2d', 'Objectively the best house', 'Eagle');