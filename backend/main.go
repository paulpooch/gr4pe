package main

import (
	"flag"
	"log"
	"net/http"
)

var Production = flag.Bool("production", false, "Use the -production flag to run in production mode")

func main() {
	flag.Parse()

	mode := "Development"
	port := "8080"

	if *Production {
		mode = "Production"
		port = "8080"
	}

	log.Printf("Server running in %s mode on port %s", mode, port)

	router := NewRouter()

	//Database = SetupDB()

	http.Handle("/", router)

	log.Fatal(http.ListenAndServe(":" + port, nil))
}
