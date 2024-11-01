function updateLocation(){

    var button = document.querySelector("button");
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;

    button.addEventListener("click", updateLocation);

    let newAddress = "https://www.google.com/maps?q=+address+city+&output=embed";
    newAddress.replace("address", address);
    newAddress.replace("city", city);
    document.getElementById('mapFrame').src="https://www.google.com/maps?q="+address+city+"&output=embed";
}