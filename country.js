class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])

function SwitchCountry() {
    let input = document.getElementById("CountryList").value;;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    DisplayColors();
}

function DisplayColors()
{
    document.getElementById("CountryName").innertext = country.name;
    document.getElementbyId("OfficialLanguage").innertext = country.lang;
    document.getElementbyId("HelloWorld").innertext = country.greeting;
    
    document.getElementbyId("Color1").style.backgroundColor = colors[0];
    document.getElementbyId("Color2").style.backgroundColor = colors[1];
    document.getElementbyId("Color3").style.backgroundColor = colors[2];
}
