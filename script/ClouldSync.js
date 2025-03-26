
document.getElementById("button2").addEventListener("click", 
    function(){
        alert("board updated successfully");
        document.getElementById("button2").disabled = true;

        const task = document.getElementById("tasknumber").innerText;
        const convertedTask = parseInt(task);

        document.getElementById("tasknumber").innerText = convertedTask-1;

        const ComTask = document.getElementById("CompletedTask").innerText;
        convertedComTask = parseInt(ComTask);

        document.getElementById("CompletedTask").innerText = convertedComTask+1;

        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12;  
  
        const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

        const history = document.getElementById("activity-history");
        const p = document.createElement("p");
        p.classList.add("bg-gray-100", "rounded-lg", "m-5", "px-5", "pb-5", "text-gray-600")
        p.innerText = `
        You have Completed The Task Add Dark Mode at ${timeString}
        `

        history.appendChild(p)

})

