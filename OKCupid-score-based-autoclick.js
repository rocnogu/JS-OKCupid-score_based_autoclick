    setInterval(()=> {
      pc = parseInt(document.querySelector(".cardsummary-match-pct").innerText)
      if(pc < 91) { 
        document.querySelector(".pass-pill-button").click()
        console.log("passed", pc)
      } else {
        document.querySelector(".likes-pill-button").click()
        console.log("liked", pc)
      }
    }, 1000)