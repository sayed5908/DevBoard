document.getElementById("colorbtn").addEventListener("click", function() {
    
    const randomColor = getRandomColor();
    
    document.getElementById("body").style.backgroundColor = randomColor;
    document.getElementById("colorsec").style.backgroundColor = randomColor;
  });
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  