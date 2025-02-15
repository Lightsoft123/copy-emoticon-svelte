CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table if not exists users(
    id int4 not null primary key,
    public_id uuid not null default uuid_generate_v4(),
    username varchar(100),
    name varchar(300),
    email varchar(50),
    password varchar(500)
);