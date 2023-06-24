import React from "react"
import ADATS from "../../tancuri-img/ADATS.jpg"
import CCVL from "../../tancuri-img/CCVL.jpg"
import HSTV_L from "../../tancuri-img/HSTV_L.jpg"
import IT_1 from "../../tancuri-img/IT_1.jpeg"
import Leopard_2A6 from "../../tancuri-img/Leopard_2A6.jpg"
import M1_Abrams from "../../tancuri-img/M1_Abrams.jpg"
import M103 from "../../tancuri-img/M103.jpeg"
import Ozelot from "../../tancuri-img/Ozelot.jpeg"
import PUMA from "../../tancuri-img/PUMA.jpg"
import SOMUA_SM from "../../tancuri-img/SOMUA_SM.jpg"
import T_80U from "../../tancuri-img/T_80U.jpeg"
import TAM_2C from "../../tancuri-img/TAM_2C.jpeg"
import Tiger_2 from "../../tancuri-img/Tiger_2.jpeg"
import Tiger_E from "../../tancuri-img/Tiger_E.jpeg"
import WIESEL_1A from "../../tancuri-img/WIESEL_1A.jpg"
import XM975 from "../../tancuri-img/XM975.png"

export const tankData = [
  {
    image: require("../../tancuri-img/ADATS.jpg"),
    name: "M103",
    text_description: "Tun principal de 120 mm, Proiectile de mare precizie, Blindajul rezistent, Motor puternic.",
    cannon_description:"Tun principal de 120 mm cu capacitate de tragere la distanțe mari și proiectile de mare precizie. Dispune și de două mitraliere de calibru 7,62 mm.",
    armor_description:"Blindaj greu de aproximativ 180 mm în partea frontală a corpului și de aproximativ 130 mm în partea laterală.",
    capacity_description:"Numarul total de membri in acest tanc este de 4 membri (comandant, încărcător, trăgător, șofer).",
    mobility_desciption:"Este echipat cu un motor Continental AV-1790-5B V12 care dezvoltă o putere de aproximativ 810 cai putere. Are o viteză maximă pe teren de aproximativ 34 km/h.",
    price: "12.500.300$",
  },
  {
    image: require("../../tancuri-img/Ozelot.jpeg"),
    name: "Ozelot",
    text_description: "Tun principal de 120 mm, Blindaj compozit avansat cu sisteme de protecție activă, Motor puternic și suspensie reglabilă ",
    cannon_description:"Tun principal de 120 mm cu capacitate de tragere precisă și rachete antitanc. Dispune și de o mitralieră coaxială de calibru 7,62 mm.",
    armor_description:"Blindaj compozit și reactiv, care oferă o protecție sporită împotriva proiectilelor inamice. Dispune și de sisteme de protecție activă.",
    capacity_description:"Numarul total de membri in acest tanc este de 4 membri (comandant, încărcător, trăgător, șofer).",
    mobility_desciption:"Este echipat cu un motor diesel MTU 883 de aproximativ 1.500 de cai putere, care îi conferă o viteză maximă pe teren de aproximativ 70 km/h.",
    price: "3.599.000$",
  },
  {
    image: require("../../tancuri-img/PUMA.jpg"),
    name: "PUMA",
    text_description: "Tun principal de 30 mm și rachete antitanc, Blindaj modular și compozit, Motor puternic și suspensie independentă",
    cannon_description:"Tun principal de 30 mm și rachete antitanc, împreună cu o mitralieră de calibru 5,56 mm și lansatoare de grenade fumigene.",
    armor_description:"Blindaj modular și compozit, care asigură o protecție eficientă împotriva proiectilelor și a dispozitivelor explozive.",
    capacity_description:"Numarul total de membri in acest tanc este de 3 membri (comandant, trăgător, șofer).",
    mobility_desciption:"Este echipat cu un motor diesel MTU 881 de aproximativ 800 de cai putere, permițându-i să atingă o viteză maximă pe teren de aproximativ 70 km/h.",
    price: "8.500.000$",
  },
  {
    image: require("../../tancuri-img/SOMUA_SM.jpg"),
    name: "SOMUA SM",
    text_description: "Tun principal de 105 mm,  Blindaj compozit și reactiv, Motor puternic și suspensie eficientă",
    cannon_description:"Tun principal de 105 mm cu capacitate de tragere rapidă și precisă. Dispune și de o mitralieră coaxială de calibru 7,62 mm și o mitralieră antiaeriană de calibru 12,7 mm.",
    armor_description:"Blindaj compozit și reactiv, care asigură o protecție ridicată împotriva proiectilelor inamice.",
    capacity_description:"Numarul total de membri in acest tanc este de 4 membri (comandant, încărcător, trăgător, șofer).",
    mobility_desciption:"Este echipat cu un motor diesel Poyaud V12 de aproximativ 720 de cai putere, permițându-i să atingă o viteză maximă pe teren de aproximativ 50 km/h.",
    price: "1.500.000$",
  },
  {
    image: require("../../tancuri-img/ADATS.jpg"),
    name: "ADATS",
    text_description: " Sistem de rachete și tun antiaerian, Blindaj compozit și sisteme de protecție activă,  Motor puternic",
    cannon_description:"Tunuri antiaeriene cu rază lungă de acțiune și capacitate de tragere la distanțe mari. Dispune și de rachete antiaeriene.",
    armor_description:"Blindaj compozit și sisteme avansate de protecție activă împotriva amenințărilor aeriene și terestre.",
    capacity_description:"Numarul total de membri in acest tanc este de 3 membri (comandant, operator radar, șofer).",
    mobility_desciption:"Este echipat cu un motor diesel de aproximativ 600 de cai putere, permițându-i să atingă o viteză maximă pe teren de aproximativ 65 km/h.",
    price: "8.500.000$",
  },
  {
    image: require("../../tancuri-img/CCVL.jpg"),
    name: "CCVL",
    text_description: "Tun principal de 105 mm și sistem de lansare de rachete antitanc, Blindaj modular și compozit, Motor puternic și suspensie independentă, 3 membri ",
    cannon_description:"Tun principal de 105 mm și capacitate de tragere rapidă și precisă. Dispune și de o mitralieră coaxială de calibru 7,62 mm.",
    armor_description:"Blindaj compozit și reactiv, care asigură o protecție eficientă împotriva proiectilelor inamice.",
    capacity_description:"Numarul total de membri in acest tanc este de 4 membri (comandant, încărcător, trăgător, șofer).",
    mobility_desciption:"Este echipat cu un motor diesel de aproximativ 600 de cai putere, permițându-i să atingă o viteză maximă pe teren de aproximativ 70 km/h.",
    price: "5.500.000$",
  },
  {
    image: require("../../tancuri-img/HSTV_L.jpg"),
    name: "HSTV L",
    text_description: "Tun principal de 105 mm, Blindaj compozit și sisteme de protecție activă, Motor puternic și suspensie ajustabilă, 4 membri",
    cannon_description:"Tun principal de calibru variabil, capabil să utilizeze atât proiectile explozive, cât și proiectile cu focos. Dispune și de mitraliere suplimentare.",
    armor_description:"Blindaj compozit și reactiv, oferind o protecție îmbunătățită împotriva amenințărilor.",
    capacity_description:"Este echipat cu un sistem de propulsie hibrid, combinând un motor diesel cu motoare electrice, asigurând o manevrabilitate și o eficiență sporită.",
    mobility_desciption:"Numarul total de membri in acest tanc este de 3 membri (comandant, trăgător, șofer).",
    price: "6.000.000$",
  },
  {
    image: require("../../tancuri-img/IT_1.jpeg"),
    name: "IT 1",
    text_description: "Tun principal de 125 mm și sistem de rachete antitanc, Blindaj compozit și sisteme de protecție activă, Motor puternic, 3 membri",
    cannon_description:"Tun principal de 100 mm cu capacitate de tragere de mare precizie și un sistem de rachete antitanc. Dispune și de mitraliere adiționale.",
    armor_description:"Blindaj compozit și reactiv, care oferă o protecție sporită împotriva proiectilelor inamice.",
    capacity_description:"Numarul total de membri in acest tanc este de 3 membri (comandant, încărcător, șofer).",
    mobility_desciption:"Este echipat cu un motor diesel puternic, permițându-i să atingă o viteză maximă de aproximativ 60 km/h.",
    price: "8.500.000$",
  },
  {
    image: require("../../tancuri-img/Leopard_2A6.jpg"),
    name: "Leopard 2A6",
    text_description: "Tun principal de 120 mm, Blindaj compozit și sisteme avansate de protecție activă, Motor puternic și suspensie ajustabilă,",
    cannon_description:"Tun principal de 120 mm cu capacitate de tragere la distanțe mari și proiectile de mare precizie. Dispune și de o mitralieră coaxială de calibru 7,62 mm și lansatoare de grenade fumigene.",
    armor_description:"Blindaj compozit și reactiv, asigurând o protecție ridicată împotriva proiectilelor și a dispozitivelor explozive. Dispune și de sisteme de protecție activă.",
    capacity_description:"Numarul total de membri in acest tanc este de 4 membri (comandant, încărcător, trăgător, șofer).",
    mobility_desciption:"Este echipat cu un motor diesel puternic și un sistem de suspensie avansat, asigurând o manevrabilitate excelentă pe teren variat.",
    price: "6.790.000$",
  },
  {
    image: require("../../tancuri-img/M1_Abrams.jpg"),
    name: "M1 Abrams",
    text_description: "Tun principal de 120 mm, Blindaj compozit și sisteme de protecție activă, Suspensie independentă",
    cannon_description:"Tun principal de 120 mm cu capacitate de tragere precisă și rapidă. Dispune și de o mitralieră coaxială de calibru 7,62 mm și o mitralieră antiaeriană de calibru 12,7 mm.",
    armor_description:"Blindaj compozit și reactiv, care oferă o protecție ridicată împotriva proiectilelor inamice. Dispune și de sisteme de protecție activă.",
    capacity_description:"Numarul total de membri in acest tanc este de 4 membri (comandant, încărcător, trăgător, șofer).",
    mobility_desciption:"Este echipat cu un motor puternic și un sistem de suspensie independent, permițându-i să atingă viteze mari pe teren accidentat.",
    price: "15.000.300$",
  },
  {
    image: require("../../tancuri-img/TAM_2C.jpeg"),
    name: "TAM 2C",
    text_description: "Tun principal de 105 mm, Blindaj compozit și sisteme de protecție activă, 4 membri",
    cannon_description:" Tun principal de 105 mm cu capacitate de tragere precisă și rapidă. Dispune și de o mitralieră coaxială de calibru 7,62 mm.",
    armor_description:" Blindaj compozit și reactiv, care asigură o protecție eficientă împotriva proiectilelor inamice.",
    capacity_description:"Numarul total de membri in acest tanc este de 4 membri (comandant, încărcător, trăgător, șofer).",
    mobility_desciption:"Este echipat cu un motor diesel de aproximativ 550 de cai putere, permițându-i să atingă o viteză maximă pe teren de aproximativ 70 km/h.",
    price: "18.500.000$",
  },
  {
    image: require("../../tancuri-img/Tiger_2.jpeg"),
    name: "Tiger II",
    text_description: "Tun principal de 88 mm, Blindaj greu și inclinat, Motor puternic ",
    cannon_description:"Tun principal de 88 mm cu capacitate de tragere la distanțe mari și o putere de penetrare excelentă. Dispune și de mitraliere adiționale.",
    armor_description:"Blindaj greu și inclinat, care oferă o protecție excelentă împotriva proiectilelor inamice.",
    capacity_description:"Numarul total de membri in acest tanc este de 5 membri (comandant, încărcător, trăgător, operator radio, șofer).",
    mobility_desciption:"Este echipat cu un motor puternic și un sistem de suspensie eficient, permițându-i să atingă o viteză maximă de aproximativ 38 km/h.",
    price: "14.500.000$",
  },
  {
    image: require("../../tancuri-img/WIESEL_1A.jpg"),
    name: "WIESEL 1A",
    text_description: "Tun principal de 20 mm, Blindaj ușor și compact,  Motor puternic și design compact",
    cannon_description:"Wiesel 1A este echipat cu un tun automat de calibru mic, cum ar fi un tun automat de 20 mm sau 30 mm, care oferă capacitate de tragere la distanțe medii și o putere de foc suficientă pentru a aborda ținte terestre și aeriene.",
    armor_description:"Dispune de un blindaj ușor și modular, care oferă protecție împotriva gloanțelor și a fragmentelor, dar nu oferă o protecție la fel de ridicată ca tancurile grele. Poate fi echipat cu blindaj suplimentar pentru a îmbunătăți protecția în funcție de nevoile specifice",
    capacity_description:"De obicei, Wiesel 1A poate transporta un echipaj redus, de obicei un comandant și un încărcător.",
    mobility_desciption:"Datorită dimensiunilor reduse și greutății reduse, Wiesel 1A este extrem de mobil, putând traversa teren dificil și îngust. Este echipat cu un motor puternic, permițându-i să atingă viteze ridicate pe teren.",
    price: "2.500.000$",
  },
  {
    image: require("../../tancuri-img/XM975.png"),
    name: "XM975",
    text_description: "Tun principal de 120 mm,  Blindaj compozit și sisteme de protecție activă, Motor puternic și suspensie reglabilă",
    cannon_description:"Tun principal de 155 mm cu capacitate de tragere la distanțe mari și o mare putere de impact. Dispune și de mitraliere adiționale.",
    armor_description:"Blindaj compozit și reactiv, oferind o protecție sporită împotriva proiectilelor inamice.",
    capacity_description:"Numarul total de membri in acest tanc este de 4 membri (comandant, încărcător, trăgător, șofer).",
    mobility_desciption:"Este echipat cu un motor puternic și un sistem de suspensie avansat, permițându-i să atingă o viteză maximă de aproximativ 60 km/h.",
    price: "7.000.000$",
  },
  {
    image: require("../../tancuri-img/Tiger_E.jpeg"),
    name: "Tiger E",
    text_description: "Tun principal de 88 mm, Blindaj greu și inclinat, Motor puternic și suspensie eficientă",
    cannon_description:"Tun principal de 88 mm cu capacitate de tragere la distanțe mari și o putere de penetrare excelentă. Dispune și de mitraliere adiționale.",
    armor_description:"Blindaj greu și inclinat, care oferă o protecție excelentă împotriva proiectilelor inamice.",
    capacity_description:"Numarul total de membri in acest tanc este de 5 membri (comandant, încărcător, trăgător, operator radio, șofer).",
    mobility_desciption:" Este echipat cu un motor puternic și un sistem de suspensie eficient, permițându-i să atingă o viteză maximă de aproximativ 45 km/h.",
    price: "2.300.000$",
  },
  {
    image: require("../../tancuri-img/T_80U.jpeg"),
    name: "T-80 U",
    text_description: "Tun principal de 125 mm, Blindaj compozit și sisteme de protecție activă,  Motor puternic și suspensie eficientă",
    cannon_description:"Tun principal de 125 mm cu capacitate de tragere la distanțe mari și un sistem avansat de control al focului. Dispune și de mitraliere adiționale.",
    armor_description:"Blindaj compozit și reactiv, oferind o protecție ridicată împotriva proiectilelor inamice. Dispune și de sisteme de protecție activă.",
    capacity_description:"Numarul total de membri in acest tanc este de 3 membri (comandant, încărcător, șofer).",
    mobility_desciption:" Este echipat cu un motor puternic și un sistem de propulsie cu turbină cu gaz, asigurând o viteză maximă pe teren de aproximativ 70 km/h.",
    price: "14.000.000$",
  },
];
