package main

import (
	"fmt"
	"net/http"

	"github.com/asarode/learn-buckets/configs"
	"github.com/asarode/learn-buckets/handlers"
	"github.com/julienschmidt/httprouter"
	"github.com/rs/cors"
	"gopkg.in/mgo.v2"
)

func main() {
	router := httprouter.New()

	bh := handlers.NewBucketHandler(getSession())

	router.GET("/", func(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
		fmt.Fprint(w, "Aw yiss, the Learn Buckets API!")
	})

	router.GET("/buckets", bh.GetBuckets)

	router.GET("/buckets/:id", bh.GetOneBucket)

	router.POST("/buckets", bh.CreateBucket)

	handler := cors.Default().Handler(router)
	// Start server
	http.ListenAndServe("localhost:3000", handler)
}

func getSession() *mgo.Session {
	var c configs.Info

	uri := c.GetMongoURI()
	sess, err := mgo.Dial(uri)

	if err != nil {
		panic(err)
	}
	return sess
}
