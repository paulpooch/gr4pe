# gr4pe
A fullstack framework for web &amp; mobile apps.  Go, REST, React, React-Native, Realm, &amp; PostgreSQL.

# Running PostgreSQL

http://www.russbrooks.com/2010/11/25/install-postgresql-9-on-os-x
http://stackoverflow.com/questions/14510237/postgressql-with-homebrew-on-mac

pg_ctl -D /usr/local/var/postgres/data -l logfile start

createdb juicy
createuser -D -R -S juicy