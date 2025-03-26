async function fetchData() {
    const response = await fetch("http://127.0.0.1:8000/f1/session/data/2024/Bahrain/R");
    const data = await response.json();
    
    console.log(data);  // Debugging
    
    document.getElementById("output").innerHTML = JSON.stringify(data, null, 2);
}

document.getElementById("fetchBtn").addEventListener("click", fetchData);
