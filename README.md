# gr4pe
A fullstack framework for web &amp; mobile apps.  Go, REST, React, React-Native, Realm, &amp; PostgreSQL.

# Autobuilding Server

Install rerun from https://github.com/skelterjohn/rerun
`rerun --build github.com/paulpooch/gr4pe/backend`

# PostgreSQL

http://www.russbrooks.com/2010/11/25/install-postgresql-9-on-os-x
http://stackoverflow.com/questions/14510237/postgressql-with-homebrew-on-mac

## Starting db
pg_ctl -D /usr/local/var/postgres/data -l logfile start

## Stopping db
pg_ctl -D /usr/local/var/postgres/data -l logfile start

## Creating db
createdb juicy

## Adding db users
createuser -D -R -S juicy