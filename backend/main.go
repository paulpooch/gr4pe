package main

import (
	"flag"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
)

const DEV_PORT = ":8080"
const PROD_PORT = ":80"

var Production = flag.Bool("production", false, "Use the -production flag to run in production mode")

type RegisterLoginForm struct {
	Email			string	`form:"inputEmail" 		binding:"required"`
	Password	string 	`form:"inputPassword" binding:"required"`
}

func main() {

	flag.Parse()
	db := SetupDB()
	r := gin.Default()

	register := func(c *gin.Context) {
		var form RegisterLoginForm
		c.BindWith(&form, binding.MultipartForm)

		username := form.Email
		pwHash := "abc"
		pwSalt := "123"
		email := form.Email

		var lastInsertId int
		var err = db.QueryRow(`INSERT INTO accounts(
			username,
			password_hash,
			password_salt,
			email
		) VALUES($1, $2, $3, $4) returning id;`, username, pwHash, pwSalt, email).Scan(&lastInsertId)

		if err != nil {
			log.Fatal(err)
			panic(err)
		}

		fmt.Println("last inserted id =", lastInsertId)

		c.JSON(200, gin.H{"status": lastInsertId })
		//c.JSON(401, gin.H{"status": "unauthorized"})
	}

	login := func(c *gin.Context) {
		var form RegisterLoginForm
		c.BindWith(&form, binding.MultipartForm)
		c.JSON(200, gin.H{"status": `Hi ${ form.Email }`})
		//c.JSON(401, gin.H{"status": "unauthorized"})
	}

	api := r.Group("/api")
	{
		users := api.Group("/users")
		{
			users.POST("/register", register)
			users.POST("/login", 		login)
		}
	}

	// Listen and server on 0.0.0.0:8080
	port := DEV_PORT
	if *Production {
		port = PROD_PORT
	}
	r.Run(port)
}
