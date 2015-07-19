package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/asarode/learn-buckets/models"
	"github.com/julienschmidt/httprouter"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type (
	BucketHandler struct {
		session *mgo.Session
	}
)

func NewBucketHandler(sess *mgo.Session) *BucketHandler {
	return &BucketHandler{sess}
}

// Retrieve all the buckets
func (bh BucketHandler) GetBuckets(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	var results []models.Bucket
	c := bh.session.DB("learn-buckets").C("buckets")

	if err := c.Find(nil).Sort("-_id").All(&results); err != nil {
		panic(err)
		return
	}
	fmt.Println(results)
	resultsJson, _ := json.Marshal(results)

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3333")
	w.WriteHeader(200)
	fmt.Fprintf(w, "%s", resultsJson)
}

// Retrieve one bucket
func (bh BucketHandler) GetOneBucket(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	id := p.ByName("id")
	var result models.Bucket
	c := bh.session.DB("learn-buckets").C("buckets")

	objectId := bson.ObjectIdHex(id)
	if err := c.FindId(objectId).One(&result); err != nil {
		w.WriteHeader(404)
		return
	}

	resultJson, _ := json.Marshal(result)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(200)
	fmt.Fprintf(w, "%s", resultJson)
}

// Create new bucket
func (bh BucketHandler) CreateBucket(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	Bucket := models.Bucket{}

	json.NewDecoder(r.Body).Decode(&Bucket)

	c := bh.session.DB("learn-buckets").C("buckets")
	if err := c.Insert(Bucket); err != nil {
		fmt.Println(Bucket)
		panic(err)
	}

	BucketJson, _ := json.Marshal(Bucket)

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.WriteHeader(200)
	fmt.Fprintf(w, "%s", BucketJson)
}
