package models

import "gopkg.in/mgo.v2/bson"

type (
	Link struct {
		Id    bson.ObjectId `json:"id" bson:"_id,omitempty"`
		Title string        `json:"title" bson:"title"`
		Url   string        `json:"url" bson:"url"`
		Type  string        `json:"type" bson:"type"`
	}
)
