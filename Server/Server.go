package main

import (
  // "log"
  "net/http"
)

func main() {
	// http.HandleFunc("/", someFunc)
  http.Handle("/", http.FileServer(http.Dir("./dist")))

	http.ListenAndServe(":8000", nil)
}

func someFunc(w http.ResponseWriter, req *http.Request) {
	w.Write([]byte("Hello universe"))
}
