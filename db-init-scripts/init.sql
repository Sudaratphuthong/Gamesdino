CREATE TABLE IF NOT EXISTS public.score
(
    username text,
    point integer,
    "time" timestamp with time zone 
);

CREATE TABLE IF NOT EXISTS public.Users
(
    id serial PRIMARY KEY, 
    name text NULL,    
    email text UNIQUE NOT NULL, 
    password text NOT NULL  
);

