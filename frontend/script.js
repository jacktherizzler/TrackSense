document.getElementById("dataForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const year = document.getElementById("year").value;
    const gp = document.getElementById("gp").value;
    const session = document.getElementById("session").value;

    const response = await fetch(`http://127.0.0.1:8000/f1/session/${year}/${gp}/${session}`);
    const data = await response.json();

    document.getElementById("output").innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
});
