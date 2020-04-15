function saveName() {
    var userName = document.getElementById("textbox").value;
    localStorage.setItem('userName', userName)
}

function reset() {
    localStorage.clear();
}

function loadInfo(num) {
    if (num >= 2) {
        var userName = localStorage.getItem('userName');
        document.getElementById("welcome").innerHTML = "Welcome " + userName + "!";
        if (localStorage.getItem('eyeColor') === null && localStorage.getItem('skinColor') === null) {
            localStorage.setItem('skinColor', "SkinColor/Character2.png");
            localStorage.setItem('eyeColor', "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4b0/75e7/75bf251434096339c8232879c79226bc");
        }
    }
    if (num >= 3) {
        var userEyes = localStorage.getItem('eyeColor');
        document.getElementById("righteye").src = userEyes;
        document.getElementById("lefteye").src = userEyes;
        var userSkin = localStorage.getItem('skinColor');
        document.getElementById("body").src = userSkin;
        if (localStorage.getItem('hairStyleB') === null && localStorage.getItem('hairStyleT') === null) {
            localStorage.setItem('hairStyleB', "Hair/backBushy3hair.png");
            localStorage.setItem('hairStyleT', "");
            localStorage.setItem('hairClassB', "bigBushy3hairB scale vector");
            localStorage.setItem('hairClassT', "");
            localStorage.setItem('hairColor', "");
        }

    }
    if (num >= 4) {
        var userHairStyleB = localStorage.getItem('hairStyleB');
        var userHairStyleT = localStorage.getItem('hairStyleT');
        var userHairClassB = localStorage.getItem('hairClassB');
        var userHairClassT = localStorage.getItem('hairClassT');
        var userHairColor = localStorage.getItem('hairColor');
        if (userHairStyleB) document.getElementById("bighairB").src = userHairStyleB;
        if (userHairStyleT) document.getElementById("bighairF").src = userHairStyleT;
        if (userHairClassB) document.getElementById("bighairB").classList = userHairClassB;
        if (userHairClassT) document.getElementById("bighairF").classList = userHairClassT;
        if (userHairColor) {
            document.getElementById("bighairB").style = userHairColor;
            document.getElementById("bighairF").style = userHairColor;
        }

    }
    if (num >= 5) {
        document.getElementById("t5").innerHTML = "Good job " + userName + "! <br>You’re all done!";
    }

}

function changeSkin(value) {
    if (value === "0") {
        localStorage.setItem('skinColor', "SkinColor/Character1.png");
        document.getElementById("body").src = "SkinColor/Character1.png";
    }
    if (value === "10") {
        localStorage.setItem('skinColor', "SkinColor/Character2.png");
        document.getElementById("body").src = "SkinColor/Character2.png";
    }
    if (value === "20") {
        localStorage.setItem('skinColor', "SkinColor/Character3.png");
        document.getElementById("body").src = "SkinColor/Character3.png";
    }
    if (value === "30") {
        localStorage.setItem('skinColor', "SkinColor/Character4.png");
        document.getElementById("body").src = "SkinColor/Character4.png";
    }
    if (value === "40") {
        localStorage.setItem('skinColor', "SkinColor/Character5.png");
        document.getElementById("body").src = "SkinColor/Character5.png";
    }
    if (value === "50") {
        localStorage.setItem('skinColor', "SkinColor/Character6.png");
        document.getElementById("body").src = "SkinColor/Character6.png";
    }
    if (value === "60") {
        localStorage.setItem('skinColor', "SkinColor/Character7.png");
        document.getElementById("body").src = "SkinColor/Character7.png";
    }
    if (value === "70") {
        localStorage.setItem('skinColor', "SkinColor/Character8.png");
        document.getElementById("body").src = "SkinColor/Character8.png";
    }
    if (value === "80") {
        localStorage.setItem('skinColor', "SkinColor/Character9.png");
        document.getElementById("body").src = "SkinColor/Character9.png";
    }
    if (value === "90") {
        localStorage.setItem('skinColor', "SkinColor/Character10.png");
        document.getElementById("body").src = "SkinColor/Character10.png";
    }
}

function changeEyes(color) {
    if (color === "brown") {
        localStorage.setItem('eyeColor', "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4b0/75e7/75bf251434096339c8232879c79226bc");
        document.getElementById("righteye").src = "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4b0/75e7/75bf251434096339c8232879c79226bc";
        document.getElementById("lefteye").src = "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4b0/75e7/75bf251434096339c8232879c79226bc";
    }
    if (color === "hazel") {
        localStorage.setItem('eyeColor', "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3ca/bfe1/0d3ebe3fab4601b34b797cda25fdb0f4")
        document.getElementById("righteye").src = "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3ca/bfe1/0d3ebe3fab4601b34b797cda25fdb0f4";
        document.getElementById("lefteye").src = "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3ca/bfe1/0d3ebe3fab4601b34b797cda25fdb0f4";
    }
    if (color === "blue") {
        localStorage.setItem('eyeColor', "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/c3eb/4e2feb798bfc69ef2502d26cf003dbed")
        document.getElementById("righteye").src = "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/c3eb/4e2feb798bfc69ef2502d26cf003dbed";
        document.getElementById("lefteye").src = "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/c3eb/4e2feb798bfc69ef2502d26cf003dbed";
    }
    if (color === "green") {
        localStorage.setItem('eyeColor', "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b8f/e576/bd99f0097414e328cba057ed2465c5fe")
        document.getElementById("righteye").src = "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b8f/e576/bd99f0097414e328cba057ed2465c5fe";
        document.getElementById("lefteye").src = "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b8f/e576/bd99f0097414e328cba057ed2465c5fe";
    }

}

function changeHair(hairType) {

    var boxes = ["r5", "r6", "r7", "r8", "r9", "r10", "r11", "r12"];
    for (i = 0; i < boxes.length; i++) {
        document.getElementById(boxes[i]).style = "";
    }
    if (hairType === "r12") {
        document.getElementById("r12").style = "background-color: #C6E1AE";
        document.getElementById("bighairB").src = "Hair/backLonghair.png";
        document.getElementById("bighairF").src = "Hair/topLonghair.png";
        document.getElementById("bighairF").classList = "biglonghairT scale vector";
        document.getElementById("bighairB").classList = "biglonghairB scale vector";
        localStorage.setItem('hairStyleB', "Hair/backLonghair.png");
        localStorage.setItem('hairStyleT', "Hair/topLonghair.png");
        localStorage.setItem('hairClassB', "biglonghairB scale vector");
        localStorage.setItem('hairClassT', "biglonghairT scale vector");
    }
    if (hairType === "r5") {
        document.getElementById("r5").style = "background-color: #C6E1AE";
        document.getElementById("bighairB").src = "Hair/backBushy1hair.png";
        document.getElementById("bighairF").src = "";
        document.getElementById("bighairF").classList = "";
        document.getElementById("bighairB").classList = "bigBushy1hairB scale vector";
        localStorage.setItem('hairStyleB', "Hair/backBushy1hair.png");
        localStorage.setItem('hairStyleT', "");
        localStorage.setItem('hairClassB', "bigBushy1hairB scale vector");
        localStorage.setItem('hairClassT', "");
    }
    if (hairType === "r6") {
        document.getElementById("r6").style = "background-color: #C6E1AE";
        document.getElementById("bighairB").src = "Hair/backBushy2hair.png";
        document.getElementById("bighairF").src = "";
        document.getElementById("bighairF").classList = "";
        document.getElementById("bighairB").classList = "bigBushy2hairB scale vector";
        localStorage.setItem('hairStyleB', "Hair/backBushy2hair.png");
        localStorage.setItem('hairStyleT', "");
        localStorage.setItem('hairClassB', "bigBushy2hairB scale vector");
        localStorage.setItem('hairClassT', "");
    }
    if (hairType === "r7") {
        document.getElementById("r7").style = "background-color: #C6E1AE";
        document.getElementById("bighairB").src = "Hair/backBushy3hair.png";
        document.getElementById("bighairF").src = "";
        document.getElementById("bighairF").classList = "";
        document.getElementById("bighairB").classList = "bigBushy3hairB scale vector";
        localStorage.setItem('hairStyleB', "Hair/backBushy3hair.png");
        localStorage.setItem('hairStyleT', "");
        localStorage.setItem('hairClassB', "bigBushy3hairB scale vector");
        localStorage.setItem('hairClassT', "");

    }
    if (hairType === "r8") {
        document.getElementById("r8").style = "background-color: #C6E1AE";
        document.getElementById("bighairB").src = "Hair/backShortBushy1hair.png";
        document.getElementById("bighairF").src = "Hair/topShortBushy1hair.png";
        document.getElementById("bighairF").classList = "shortbushy1hairT scale vector";
        document.getElementById("bighairB").classList = "shortbushy1hairB scale vector";
        localStorage.setItem('hairStyleB', "Hair/backShortBushy1hair.png");
        localStorage.setItem('hairStyleT', "Hair/topShortBushy1hair.png");
        localStorage.setItem('hairClassB', "shortbushy1hairB scale vector");
        localStorage.setItem('hairClassT', "shortbushy1hairT scale vector");
    }
    if (hairType === "r11") {
        document.getElementById("r11").style = "background-color: #C6E1AE";
        document.getElementById("bighairB").src = "";
        document.getElementById("bighairF").src = "Hair/topWavehair.png";
        document.getElementById("bighairF").classList = "wavehairT scale vector";
        document.getElementById("bighairB").classList = "";
        localStorage.setItem('hairStyleB', "");
        localStorage.setItem('hairStyleT', "Hair/topWavehair.png");
        localStorage.setItem('hairClassB', "");
        localStorage.setItem('hairClassT', "wavehairT scale vector");
    }
    if (hairType === "r9") {
        document.getElementById("r9").style = "background-color: #C6E1AE";
        document.getElementById("bighairB").src = "Hair/backShortBushy2hair.png";
        document.getElementById("bighairF").src = "Hair/topShortBushy2hair.png";
        document.getElementById("bighairF").classList = "shortbushy2hairT scale vector";
        document.getElementById("bighairB").classList = "shortbushy2hairB scale vector";
        localStorage.setItem('hairStyleB', "Hair/backShortBushy2hair.png");
        localStorage.setItem('hairStyleT', "Hair/topShortBushy2hair.png");
        localStorage.setItem('hairClassB', "shortbushy2hairB scale vector");
        localStorage.setItem('hairClassT', "shortbushy2hairT scale vector");
    }
    if (hairType === "r10") {
        document.getElementById("r10").style = "background-color: #C6E1AE";
        document.getElementById("bighairB").src = "Hair/backLongWavehair.png";
        document.getElementById("bighairF").src = "Hair/topLongWavehair.png";
        document.getElementById("bighairF").classList = "longwavehairT scale vector";
        document.getElementById("bighairB").classList = "longwavehairB scale vector";
        localStorage.setItem('hairStyleB', "Hair/backLongWavehair.png");
        localStorage.setItem('hairStyleT', "Hair/topLongWavehair.png");
        localStorage.setItem('hairClassB', "longwavehairB scale vector");
        localStorage.setItem('hairClassT', "longwavehairT scale vector");
    }

}

function changeHairColor(color) {
    if (color === "black") {
        document.getElementById("bighairB").style = "filter:brightness(0)";
        document.getElementById("bighairF").style = "filter:brightness(0)";
        localStorage.setItem('hairColor', "filter:brightness(0)");
    }
    if (color === "red") {
        document.getElementById("bighairB").style = "";
        document.getElementById("bighairF").style = "";
        localStorage.setItem('hairColor', "");
    }
    if (color === "blonde") {
        document.getElementById("bighairB").style = "filter: hue-rotate(30deg) brightness(2) saturate(.6) contrast(1)";
        document.getElementById("bighairF").style = "filter: hue-rotate(30deg) brightness(2) saturate(.6) contrast(1)";
        localStorage.setItem('hairColor', "filter: hue-rotate(30deg) brightness(2) saturate(.6) contrast(1)");
    }
    if (color === "brown") {
        document.getElementById("bighairB").style = "filter: hue-rotate(20deg) brightness(.8) contrast(1.2)";
        document.getElementById("bighairF").style = "filter: hue-rotate(20deg) brightness(.8) contrast(1.2)";
        localStorage.setItem('hairColor', "filter: hue-rotate(20deg) brightness(.8) contrast(1.2)");
    }
}

function animateImage(ido, idp) {
    document.getElementById(ido).style = "";
    document.getElementById(idp).style = "visibility:hidden";
    window.setTimeout(nextButton, 3000);

}

function nextButton() {
    document.getElementById("next").style = "";

}
