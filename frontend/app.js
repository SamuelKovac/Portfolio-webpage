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

    document.getElementById("kontaktnyFormular").addEventListener("submit", function(event){
        event.preventDefault();
        
    const meno = document.getElementById("first_name").value;
    console.log(meno);
    const text = document.getElementById("formText").value;
    console.log(text);
});