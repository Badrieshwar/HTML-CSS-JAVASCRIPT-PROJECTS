const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

const countries=document.querySelectorAll(".country select");
const countryImg=document.querySelectorAll(".country img");
const inputAmount=document.querySelector(".amount input");
const btn=document.querySelector(".btn");
const p=document.querySelector(".msg");
const baseURL="https://v6.exchangerate-api.com/v6/6705cc4caf6c424df9ee8fd5/latest/USD";


const from=document.querySelector("#from");
const to=document.querySelector("#to");


function changeFlag(e,i){
    countryImg[i].src=`https://flagsapi.com/${countryList[e.value]}/shiny/64.png`;
}

for(code in countryList){
    let option1=document.createElement("option");
    option1.innerText=code;
    option1.value=code;
    countries[0].append(option1);
    if(option1.value==="USD"){
        option1.selected="selected";
    }
    countries[0].addEventListener("change", (e)=>{
        changeFlag(e.target,0);
    });

    let option2=document.createElement("option");
    option2.innerText=code;
    option2.value=code;
    countries[1].append(option2);
    if(option2.value==="INR"){
        option2.selected="selected";
    }
    countries[1].addEventListener("change", (e)=>{
        changeFlag(e.target,1);
    });
}

async function getExchangeRate(amount){
    let response=await fetch(`https://v6.exchangerate-api.com/v6/6705cc4caf6c424df9ee8fd5/latest/${from.value}`)
    let data=await response.json();
    console.log(data.conversion_rates[to.value]);
    let totalAmount=(amount*data.conversion_rates[to.value]).toFixed(2);
    console.log(totalAmount);
    let text=`${amount} ${from.value} = ${totalAmount} ${to.value}`;
    console.log(text);
    p.innerText=text;
    p.style.display="block";
}

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let amount=parseInt(inputAmount.value);
    if(amount==="" || amount<1){
        alert("Amount should be Greater then 0!");
    }
    else{
        console.log(from.value,to.value);
        getExchangeRate(amount);
    }
})


