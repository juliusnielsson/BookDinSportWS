function tilmeld() {
    window.location = "tilmeldingsSide.html"
}

    function validateContactInformation() {

        // Punkt 1: Sæt JS variable, til de værdier der er indtastet i HTML formen (DONE)
        var contactDay = document.getElementById('contact_day').value;
        var contactMonth = document.getElementById('contact_month').value;
        var contactTime = document.getElementById('contact_time').value;
        var message = " Klokken: " + contactTime + " Dag: " + contactDay + " Maaned: " + contactMonth


        var name = document.getElementById('user_name').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var comment = document.getElementById('additional_info').value;

        /*
        var contactDay = document.getElementById('contact_day').value;
        var contactMonth = document.getElementById('contact_month').value;
        var contactYear = document.getElementById('contact_year').value;
        */


        // radiobuttons
        var ratingButtons = document.getElementsByClassName('user_rating');
        var len = ratingButtons.length;
        var userRating = "";

        var i = 0;
        for (i = 0; i < len; i++) {
            if (ratingButtons[i].checked) {
                userRating = ratingButtons[i].value;
            }
        }
        //Punkt 2: Valider formen
        //Punkt 3: Valider rating
        //Punkt 4: Valider username
        //Punkt 5: Valider Telefonnummer
        // (Hint: Brug NaN)

        //Punkt 7: Valider E-mail

        // Hint vi undnytter her .indexOf() og .lastIndexOf()-metoderne på vores email variabel  (se evt på w3 school eller spørg os hvis du stadig er i tvivl om hvordan metoden virker)

        //Punkt 8: Alert, hvis form_valid variablien indeholder booleanen true. Her indsætter vi blot alerten fra sidste gang. Lav en if else statement, hvor en anden alert bliver udstedt, hvis form_valid = false;

        // Punkt 9 (done) - Vi sluttede funktionen af med at lave en alert besked for at se om alle de varible er blevet hentet ordenligt fra html dokumentet
        alert("Hej " + name + " du er nu tilmeldt"
            + "\nNiveau: " + userRating
            + "\nTlf:: " + phone
            + "\nEmail: " + email
            + "\nKommentar: " + comment
            + "\nDato: " + message)
    }
