
var stikord = document.getElementById("user_search");

let fodbold = ["HIK fodbold","Islev fodbold","Jægersborg fodbold"]
let handbold = ["Lyngby håndbold", "Frederiksberg håndbold"]
let badminton = ["Hillerød badminton klub,", "Køge badminton", "Rødovre badminton"]
let svomning = ["Frederiksberg svømning", "Brøndby svømmeklub"]
let fagtning = ["Gentofte fægteklub", "Farum fagtning"]
let basketball = ["SISU basketball", "Østerbro basketball"]
let esport = ["E-sport København"]
let volleyball = ["Amager volleyball"]
let atletik = ["Sparta atletik"]




function submitSport() {


    if (stikord.value == "fodbold") {
        alert("Disse klubber tilbyder fodbold:" +
            "\n" + fodbold[0] + "," + " " + fodbold[1] + "," + " " + fodbold[2])
    }
    if (stikord.value == "håndbold") {
        alert("Disse klubber tilbyder håndbold:" +
            "\n" + handbold[0] + "," + " " + handbold[1])
    }
    if (stikord.value == "badminton") {
        alert("Disse klubber tilbyder badminton:" +
            "\n" + badminton[0] + "," + " " + badminton[1] + "," + " " + badminton[2])
    }
    if (stikord.value == "svømning") {
        alert("Disse klubber tilbyder svømning:" +
            "\n" + svomning[0] + "," + " " + svomning[1])
    }
    if (stikord.value == "fægtning") {
        alert("Disse klubber tilbyder fægtning:" +
            "\n" + fagtning[0] + "," + " " + fagtning[1])
    }
    if (stikord.value == "basketball") {
        alert("Disse klubber tilbyder basketball:" +
            "\n" + basketball[0] + "," + " " + basketball[1])
    }
    if (stikord.value == "esport") {
        alert("Denne klubber tilbyder esport:" +
            "\n" + esport[0])
    }
    if (stikord.value == "volleyball") {
        alert("Denne klubber tilbyder volleyball:" +
            "\n" + volleyball[0])
    }
    if (stikord.value == "atletik") {
        alert("Denne klubber tilbyder atletik:" +
            "\n" + atletik[0])
    }
}

