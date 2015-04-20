package main

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
)

const DB_NAME = "juicy"
const DB_USERNAME = "juicy"
const SLL_MODE = "disable"

func SetupDB() *sql.DB {
	config := fmt.Sprintf("user=%s dbname=%s sslmode=%s", DB_NAME, DB_USERNAME, SLL_MODE)

	// lazy open - won't open until first query is made
	db, err := sql.Open("postgres", config)

	if err != nil {
		panic(err)
	}

	return db
}
