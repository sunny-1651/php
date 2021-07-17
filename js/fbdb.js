var firebaseConfig = {
    apiKey: "AIzaSyB2nLNKgM9OrwejDUqbv66_7t3npnrYujw",
    authDomain : "hackx-testing.firebaseapp.com" ,
    projectId : "hackx-testing" ,
    storageBucket : "hackx-testing.appspot.com" ,
    messagingSenderId : "762744533798" ,
    appId : "1: 762744533798: web : 86118d1f1fc7b47c11c7e7 " ,
    measurementId : " G-J33N8F7XEW "
    // authDomain: "hackx-testing.firebaseapp.com",
    // projectId: "hackx-testing",
    // storageBucket: "hackx-testing.appspot.com",
    // messagingSenderId: "762744533798",
    // appId: "1:762744533798:web:86118d1f1fc7b47c11c7e7",
    // measurementId: "G-J33N8F7XEW"
}

firebase.initializeApp(firebaseConfig);
firebase.analytics();
// const firebase = require("firebase");
// require("firebase/firestore");
var firestore = firebase.firestore();

const firstnname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const lemail = document.querySelector("#email");
const country= document.querySelector("#country");
const state = document.querySelector("#state");
const city = document.querySelector("#city");
const laddress = document.querySelector("#address");
const pin = document.querySelector("#pin");
const phone = document.querySelector("#phone");
const whatsapp = document.querySelector("#whatsapp");
const college= document.querySelector("#college");
const year= document.querySelector("#year");
const stream= document.querySelector("#stream");
const shirt= document.querySelector("#shirt");
const teamname = document.querySelector("#teamname");
const teamnum = document.querySelector("#teamnum");
const tmn1 = document.querySelector("#teammemname1");
const tme1 = document.querySelector("#teammememail1");
const tmn2 = document.querySelector("#teammemname2");
const tme2 = document.querySelector("#teammememail2");
const tmn3 = document.querySelector("#teammemname3");
const tme3 = document.querySelector("#teammememail3");
const tmn4 = document.querySelector("#teammemname4");
const tme4 = document.querySelector("#teammememail4");
const send = document.querySelector("#bttn");

send.addEventListener("click", (subm) => {
    subm.preventDefault();
    const fn = firstnname.value;
    const ln = lastname.value;
    const eml = lemail.value;
    const cntry = country.value;
    const st = state.value;
    const cty = city.value;
    const add = laddress.value;
    const pn = pin.value;
    const phon = phone.value;
    const wapp = whatsapp.value;
    const clg = college.value;
    const yr = year.value;
    const strm = stream.value;
    const shrt = shirt.value;
    const tname = teamname.value;
    const tnum = teamnum.value;
    const tn1 = tmn1.value;
    const te1 = tme1.value;
    const tn2 = tmn2.value;
    const te2 = tme2.value;
    const tn3 = tmn3.value;
    const te3 = tme3.value;
    const tn4 = tmn4.value;
    const te4 = tme4.value;
    const refid = "registrations/"+tname;

    firestore.addCollection(refid).set({
        leader_name: fn+" "+ln,
        email: eml,
        address: add+", "+cty+", "+st+", "+cntry,
        pin_code: Number(pn),
        phone_number: Number(phon),
        whatsapp_number: Number(wapp),
        college_name: clg,
        year_current: Number(yr),
        branch: strm,
        tshirt_size: shrt,
        number_of_members: tnum,
        member1: {name: tn1, email: te1},
        member2: {name: tn2, email: te2},
        member3: {name: tn3, email: te3},
        member4: {name: tn4, email: te4}
    }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });
})