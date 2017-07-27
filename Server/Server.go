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

	// catch all
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./dist/")))

	log.Fatal(http.ListenAndServe(":80", router))

}
