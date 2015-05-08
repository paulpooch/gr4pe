package main

import (
	"github.com/gorilla/mux"
	"log"
)

func NewRouter() *mux.Router {

	router := mux.NewRouter().StrictSlash(true)
	for _, route := range routes {
		log.Printf("%s", route.Pattern)

		router.
		Methods(route.Method).
		Path(route.Pattern).
		Name(route.Name).
		Handler(route.HandlerFunc)
	}

	return router
}
