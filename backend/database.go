package main

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"log"
)

const DB_NAME = "gr4pe"
const DB_USERNAME = "gr4pe-user"
const SLL_MODE = "disable"

// http://blog.golang.org/defer-panic-and-recover
// http://go-database-sql.org/accessing.html
// http://astaxie.gitbooks.io/build-web-application-with-golang/content/en/05.4.html

func SetupDB() *sql.DB {
	config := fmt.Sprintf("dbname=%s user=%s sslmode=%s", DB_NAME, DB_USERNAME, SLL_MODE)

	// lazy open - won't open until first query is made
	db, err := sql.Open("postgres", config)

	if err != nil {
		log.Fatal(err)
		panic(err)
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
func AccountRegister(db *sql.DB) {

	username := "paul"
	pwHash := "a"
	pwSalt := "b"
	email := "paul@paul.com"

	var lastInsertId int
	var err = db.QueryRow(`INSERT INTO accounts(
		username,
		password_hash,
		password_salt,
		email
	) VALUES($1, $2, $3, $4) returning id;`, username, pwHash, pwSalt, email).Scan(&lastInsertId)

	if err != nil {
		log.Fatal(err)
		panic(err)
	}

	fmt.Println("last inserted id =", lastInsertId)

}
