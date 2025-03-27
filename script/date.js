function showDate() {
    let today = new Date();
    let options = { weekday: 'short', day: '2-digit', month: 'long', year: 'numeric' };
    let formattedDate = today.toLocaleDateString('en-US', options);
    
    document.getElementById("datediv").textContent = formattedDate;
  }

  showDate(); 