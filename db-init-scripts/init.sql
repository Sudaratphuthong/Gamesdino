CREATE TABLE IF NOT EXISTS public.sp_score
(
    username text,
    point integer,
    "time" timestamp with time zone 
);

CREATE TABLE IF NOT EXISTS public.sp_users
(
    id serial PRIMARY KEY, 
    name text NULL,    
    email text UNIQUE NOT NULL, 
    password text NOT NULL  
);

