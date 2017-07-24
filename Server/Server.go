package main

import (
	"log"
	// "fmt"
	"net/http"
	"github.com/gorilla/mux"
)


func main() {

	// Uses Gorilla mux router
	router := mux.NewRouter()

	// router.HandleFunc("/api/gallery", handler).Methods("GET")

	// catch all
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./dist/")))

	log.Fatal(http.ListenAndServe(":8080", router))

}
