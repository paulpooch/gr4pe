package main

import (
	"database/sql"
	"log"
	"fmt"
	_ "github.com/lib/pq"
)

const DB_NAME = "gr4pe"
const DB_USERNAME = "gr4pe-user"
const SLL_MODE = "disable"

// http://go-database-sql.org/accessing.html
// http://astaxie.gitbooks.io/build-web-application-with-golang/content/en/05.4.html

func SetupDB() *sql.DB {
	config := fmt.Sprintf("dbname=%s user=%s sslmode=%s", DB_NAME, DB_USERNAME, SLL_MODE)

	// Lazy open - won't open until first query is made.
	db, err := sql.Open("postgres", config)
	if (err != nil) {
		log.Print("sql.Open failed.")
		panic(err)
	}

	// Try to hit db to make sure it's up.
	pingError := db.Ping()
	if (pingError != nil) {
		log.Print("Database test connection failed.")
		panic(pingError)
	}
	return db
}

/*
id SERIAL PRIMARY KEY NOT NULL,
username VARCHAR NOT NULL,
password_hash VARCHAR NOT NULL,
password_salt VARCHAR NOT NULL,
created_at TIMESTAMP DEFAULT now() NOT NULL,
is_logged_in BOOLEAN DEFAULT FALSE  NOT NULL,
email VARCHAR NOT NULL
*/
