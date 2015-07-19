package models

import "gopkg.in/mgo.v2/bson"

type (
	Bucket struct {
		Id          bson.ObjectId   `json:"id" bson:"_id,omitempty"`
		Title       string          `json:"title" bson:"title"`
		Description string          `json:"description" bson:"description"`
		Links       []Link          `json:"links" bson:"links"`
		Stargazers  []bson.ObjectId `json:"stargazers" bson:"stargazers"`
	}
)
