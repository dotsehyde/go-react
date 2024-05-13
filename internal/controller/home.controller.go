package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Home(c *gin.Context) {
	// render html
	c.HTML(http.StatusOK, "index.html", nil)
}
