package main

import (
	"log"
	"fmt"
	"net/http"
	"github.com/gorilla/mux"
	"github.com/jmoiron/sqlx"
	_ "database/sql"
	_  "github.com/lib/pq"
)

var schema = `
CREATE TABLE project (
	name text,
	link text,
	githublink text,
	description text,
	rolename text,
	primarylang text
);
`
type Project struct {
    Name string `db:"name"`
   	link string `db:"link"`
    Githublink string `db:"githublink"`
		Description string `db:"description"`
		Rolename string `db:"rolename"`
		Primarylang string `db:"primarylang"`
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("test")

    return
}

func main() {
	_, err := sqlx.Connect("postgres", "user=postgres dbname=bar sslmode=disable")
  if err != nil {
      log.Fatalln(err)
  }
	// Uses Gorilla mux router
	router := mux.NewRouter()

	router.HandleFunc("/api/gallery", handler).Methods("GET")

	// catch all
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./dist/")))

	log.Fatal(http.ListenAndServe(":8080", router))

}
