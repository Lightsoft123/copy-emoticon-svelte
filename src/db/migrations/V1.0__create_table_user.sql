create table if not exists users(
    id serial4 not null primary key,
    public_id uuid NOT NULL DEFAULT gen_random_uuid(),
    username varchar(100),
    name varchar(300),
    email varchar(50),
    password varchar(500)
);