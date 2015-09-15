# Garbage - this project is abandoned.

# gr4pe
A fullstack framework for web &amp; mobile apps.  Go, REST, React, React-Native, Realm, &amp; PostgreSQL.

# Autobuilding Server

Install rerun from https://github.com/skelterjohn/rerun

`rerun --build github.com/paulpooch/gr4pe/backend`

# PostgreSQL
http://www.russbrooks.com/2010/11/25/install-postgresql-9-on-os-x
http://stackoverflow.com/questions/14510237/postgressql-with-homebrew-on-mac

## Starting db
`pg_ctl -D /usr/local/var/postgres/data -l logfile start`

## Stopping db
`pg_ctl -D /usr/local/var/postgres/data -l logfile start`

## Creating db
`createdb gr4pe`

## Adding db users
`createuser -D -R -S gr4pe-user`

## PG console
`psql -d gr4pe`

## Tables
```sql

CREATE TABLE public.accounts
(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR NOT NULL,
    password_hash VARCHAR NOT NULL,
    password_salt VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    is_logged_in BOOLEAN DEFAULT FALSE  NOT NULL,
    email VARCHAR NOT NULL
);
ALTER TABLE public.accounts
 ADD CONSTRAINT unique_username UNIQUE (username);

```
