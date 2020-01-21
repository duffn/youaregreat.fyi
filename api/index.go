package handler

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"net/http"
	"time"
)

var compliments = []string{
	"You are great. 🌟",
	"You are loved. ❤️",
	"You look really nice today.",
	"Thank you for being who you are. 🤗",
	"You are appreciated.",
	"You are strong.",
	"You light up the room. 💡",
	"You are a gift to those around you. 🎁",
	"You should be proud of yourself.",
	"You are making a difference.",
	"You bring out the best in other people.",
	"You are a wonderful person.",
	"You are really something special.",
	"You are so thoughtful.",
	"You are kind.",
	"You are more helpful than you realize.",
	"You are a gem. 💎",
}

var greetings = []string{
	"Hello",
	"Hi",
	"Good day",
	"Greetings",
}

// Response is an API response.
type Response struct {
	Message string `json:"message"`
}

// Handler handles a serverless invocation.
func Handler(w http.ResponseWriter, r *http.Request) {
	rand.Seed(time.Now().Unix())
	message := compliments[rand.Intn(len(compliments))]

	keys := r.URL.Query()
	name := keys.Get("name")
	if name != "" {
		greeting := greetings[rand.Intn(len(greetings))]
		message = fmt.Sprintf("%s %s. %s", greeting, name, message)
	}

	w.Header().Set("Content-Type", "application/json;charset=utf-8")
	w.Header().Set("X-You-Are-Great", "Don't you forget it.")

	response := Response{Message: message}
	json.NewEncoder(w).Encode(response)
}
