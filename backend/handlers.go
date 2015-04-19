package main

import (
	"log"
	"net/http"
	"time"
)

func Index(w http.ResponseWriter, r *http.Request) {
	log.Printf(
		"%s\t%s\t%s\t%s",
		r.Method,
		r.RequestURI,
		time.Since(time.Now()),
	)
	w.Write([]byte("Hello, World!"))
}
