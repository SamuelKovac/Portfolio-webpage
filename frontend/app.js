async function nacitajData() {
    try {
    const odpoved = await fetch("http://localhost:5000/api/about");
    const data = await odpoved.json();
    const profilDiv = document.getElementById("profil");
    profilDiv.innerHTML = `<h2>Meno: ${data.name}</h2> <p>Pozícia: ${data.role}</p>`;
    console.log("Dáta z backendu dorazili úspešne:", data);
    } catch (chyba) {
    console.log("Nepodarilo sa spojiť s backendom:", chyba);
    document.getElementById("profil").innerHTML = `<p style="color: red;">Chyba pri načítaní dát.</p>`;
    }
}
nacitajData();

    document.getElementById("kontaktnyFormular").addEventListener("submit", async function(event){
        event.preventDefault();
    
    const meno = document.getElementById("first_name").value;
    console.log(meno);
    const text = document.getElementById("formText").value;
    console.log(text);
     
    try {
    const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name: meno, message: text })
    })
    const errorData = await response.json();
    if (!response.ok) {
        console.log("Chyba pri odosielaní správy:", errorData.error);
        document.getElementById("spravaOdpoved").innerHTML = `<p style="color: red;">${errorData.error}</p>`;
        return;
    }
    else {
    console.log("Správa bola úspešne prijatá");
    document.getElementById("spravaOdpoved").innerHTML = `<p style="color: green;">Tvoja správa bola úspešne odoslaná!</p>`;
    document.getElementById("first_name").value = "";
    document.getElementById("formText").value = "";
    }
    } catch (error) {
        console.log("Správu sa nedodarilo prijať", error);
    }
});