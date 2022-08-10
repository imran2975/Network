//getting our element in the DOM
let nameEl = document.getElementById("name")
let phoneNumber = document.querySelector("#phone")
let displayMssg = document.getElementById("mssg")


const mtnPrefix = ["0906", "0703", "0706", "0803", "0806", "0810", "0813", "0814", "0816", "0903", "0913"]
const airtelPrefix = ["0802", "0904", "0808", "0701", "0708", "0812", "0902", "0907", "0901", "0912"]
const nineMobilePrefix = ["0809", "0817", "0818", "0908", "0909"]
const gloPrefix = ["0705", "0805", "0807", "0811", "0815", "0905"]

const mtn = () => {
    for (code of mtnPrefix) {
        if (phoneNumber.value.slice(0,4) == code) {
            displayMssg.innerHTML = `<p id="status"><span>Search Successful!!</span> <br> Dear ${nameEl.value} Your Network Provider is</p><br>
                    <img src="mtn.png" alt="">
                    `
        }
    }
}

const airtel = () => {
    for (code of airtelPrefix) {
        if (phoneNumber.value.slice(0,4) == code) {
            displayMssg.innerHTML = `<p id="status"><span>Search Successful!!</span> <br> Dear ${nameEl.value} Your Network Provider is</p><br>
                    <img src="airtel.png" alt="">
                    `
        }
    }
}

const nineMobile = () => {
    for (code of nineMobilePrefix) {
        if (phoneNumber.value.slice(0,4) == code) {
            displayMssg.innerHTML = `<p id="status"><span>Search Successful!!</span> <br> Dear ${nameEl.value} Your Network Provider is</p><br>
                    <img src="9mobile.jpeg" alt="">
                    `
        }
    }
}

const glo = () => {
    for (code of gloPrefix) {
        if (phoneNumber.value.slice(0,4) == code) {
            displayMssg.innerHTML = `<p id="status"><span>Search Successful!!</span> <br> Dear ${nameEl.value} Your Network Provider is</p><br>
                    <img src="glo.jpeg" alt="">
                    `
        }
    }
}

