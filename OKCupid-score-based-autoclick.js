    setInterval(()=> {
      asfd = parseInt(document.querySelector(".match-percentage").innerText)
      if(asfd < 92) { 
        document.querySelector(".pass").click()
      } else {
        document.querySelector(".like").click()
      }
    }, 1000)

