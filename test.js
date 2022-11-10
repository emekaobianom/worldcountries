const t = [
  {
    name: {
      common: "Mauritania",
      official: "Islamic Republic of Mauritania",
      nativeName: {
        ara: {
          official: "الجمهورية الإسلامية الموريتانية",
          common: "موريتانيا",
        },
      },
    },
    cca2: "MR",
    capital: ["Nouakchott"],
    altSpellings: [
      "MR",
      "Islamic Republic of Mauritania",
      "al-Jumhūriyyah al-ʾIslāmiyyah al-Mūrītāniyyah",
    ],
  },
  {
    name: {
      common: "Aruba",
      official: "Aruba",
      nativeName: {
        nld: { official: "Aruba", common: "Aruba" },
        pap: { official: "Aruba", common: "Aruba" },
      },
    },
    cca2: "AW",
    capital: ["Oranjestad"],
    altSpellings: ["AW"],
  },
  {
    name: {
      common: "Argentina",
      official: "Argentine Republic",
      nativeName: {
        grn: { official: "Argentine Republic", common: "Argentina" },
        spa: { official: "República Argentina", common: "Argentina" },
      },
    },
    cca2: "AR",
    capital: ["Buenos Aires"],
    altSpellings: ["AR", "Argentine Republic", "República Argentina"],
  },
  {
    name: {
      common: "Sweden",
      official: "Kingdom of Sweden",
      nativeName: {
        swe: { official: "Konungariket Sverige", common: "Sverige" },
      },
    },
    cca2: "SE",
    capital: ["Stockholm"],
    altSpellings: ["SE", "Kingdom of Sweden", "Konungariket Sverige"],
  },
  {
    name: {
      common: "Maldives",
      official: "Republic of the Maldives",
      nativeName: {
        div: {
          official: "ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާ",
          common: "ދިވެހިރާއްޖޭގެ",
        },
      },
    },
    cca2: "MV",
    capital: ["Malé"],
    altSpellings: [
      "MV",
      "Maldive Islands",
      "Republic of the Maldives",
      "Dhivehi Raajjeyge Jumhooriyya",
    ],
  },
  {
    name: {
      common: "Mexico",
      official: "United Mexican States",
      nativeName: {
        spa: { official: "Estados Unidos Mexicanos", common: "México" },
      },
    },
    cca2: "MX",
    capital: ["Mexico City"],
    altSpellings: [
      "MX",
      "Mexicanos",
      "United Mexican States",
      "Estados Unidos Mexicanos",
    ],
  },
  {
    name: {
      common: "New Zealand",
      official: "New Zealand",
      nativeName: {
        eng: { official: "New Zealand", common: "New Zealand" },
        mri: { official: "Aotearoa", common: "Aotearoa" },
        nzs: { official: "New Zealand", common: "New Zealand" },
      },
    },
    cca2: "NZ",
    capital: ["Wellington"],
    altSpellings: ["NZ", "Aotearoa"],
  },
  {
    name: {
      common: "Ecuador",
      official: "Republic of Ecuador",
      nativeName: {
        spa: { official: "República del Ecuador", common: "Ecuador" },
      },
    },
    cca2: "EC",
    capital: ["Quito"],
    altSpellings: ["EC", "Republic of Ecuador", "República del Ecuador"],
  },
  {
    name: {
      common: "Wallis and Futuna",
      official: "Territory of the Wallis and Futuna Islands",
      nativeName: {
        fra: {
          official: "Territoire des îles Wallis et Futuna",
          common: "Wallis et Futuna",
        },
      },
    },
    cca2: "WF",
    capital: ["Mata-Utu"],
    altSpellings: [
      "WF",
      "Territory of the Wallis and Futuna Islands",
      "Territoire des îles Wallis et Futuna",
    ],
  },
  {
    name: {
      common: "Åland Islands",
      official: "Åland Islands",
      nativeName: { swe: { official: "Landskapet Åland", common: "Åland" } },
    },
    cca2: "AX",
    capital: ["Mariehamn"],
    altSpellings: ["AX", "Aaland", "Aland", "Ahvenanmaa"],
  },
  {
    name: {
      common: "Montenegro",
      official: "Montenegro",
      nativeName: { cnr: { official: "Црна Гора", common: "Црна Гора" } },
    },
    cca2: "ME",
    capital: ["Podgorica"],
    altSpellings: ["ME", "Crna Gora"],
  },
  {
    name: {
      common: "Pakistan",
      official: "Islamic Republic of Pakistan",
      nativeName: {
        eng: { official: "Islamic Republic of Pakistan", common: "Pakistan" },
        urd: { official: "اسلامی جمہوریۂ پاكستان", common: "پاكستان" },
      },
    },
    cca2: "PK",
    capital: ["Islamabad"],
    altSpellings: [
      "PK",
      "Pākistān",
      "Islamic Republic of Pakistan",
      "Islāmī Jumhūriya'eh Pākistān",
    ],
  },
  {
    name: {
      common: "Pitcairn Islands",
      official: "Pitcairn Group of Islands",
      nativeName: {
        eng: {
          official: "Pitcairn Group of Islands",
          common: "Pitcairn Islands",
        },
      },
    },
    cca2: "PN",
    capital: ["Adamstown"],
    altSpellings: [
      "PN",
      "Pitcairn",
      "Pitcairn Henderson Ducie and Oeno Islands",
    ],
  },
  {
    name: {
      common: "Zambia",
      official: "Republic of Zambia",
      nativeName: { eng: { official: "Republic of Zambia", common: "Zambia" } },
    },
    cca2: "ZM",
    capital: ["Lusaka"],
    altSpellings: ["ZM", "Republic of Zambia"],
  },
  {
    name: {
      common: "Seychelles",
      official: "Republic of Seychelles",
      nativeName: {
        crs: { official: "Repiblik Sesel", common: "Sesel" },
        eng: { official: "Republic of Seychelles", common: "Seychelles" },
        fra: { official: "République des Seychelles", common: "Seychelles" },
      },
    },
    cca2: "SC",
    capital: ["Victoria"],
    altSpellings: [
      "SC",
      "Republic of Seychelles",
      "Repiblik Sesel",
      "République des Seychelles",
    ],
  },
  {
    name: {
      common: "Malaysia",
      official: "Malaysia",
      nativeName: {
        eng: { official: "Malaysia", common: "Malaysia" },
        msa: { official: "مليسيا", common: "مليسيا" },
      },
    },
    cca2: "MY",
    capital: ["Kuala Lumpur"],
    altSpellings: ["MY"],
  },
  {
    name: {
      common: "Norway",
      official: "Kingdom of Norway",
      nativeName: {
        nno: { official: "Kongeriket Noreg", common: "Noreg" },
        nob: { official: "Kongeriket Norge", common: "Norge" },
        smi: { official: "Norgga gonagasriika", common: "Norgga" },
      },
    },
    cca2: "NO",
    capital: ["Oslo"],
    altSpellings: [
      "NO",
      "Norge",
      "Noreg",
      "Kingdom of Norway",
      "Kongeriket Norge",
      "Kongeriket Noreg",
    ],
  },
  {
    name: {
      common: "Uzbekistan",
      official: "Republic of Uzbekistan",
      nativeName: {
        rus: { official: "Республика Узбекистан", common: "Узбекистан" },
        uzb: { official: "O'zbekiston Respublikasi", common: "O‘zbekiston" },
      },
    },
    cca2: "UZ",
    capital: ["Tashkent"],
    altSpellings: [
      "UZ",
      "Republic of Uzbekistan",
      "O‘zbekiston Respublikasi",
      "Ўзбекистон Республикаси",
    ],
  },
  {
    name: {
      common: "Vanuatu",
      official: "Republic of Vanuatu",
      nativeName: {
        bis: { official: "Ripablik blong Vanuatu", common: "Vanuatu" },
        eng: { official: "Republic of Vanuatu", common: "Vanuatu" },
        fra: { official: "République de Vanuatu", common: "Vanuatu" },
      },
    },
    cca2: "VU",
    capital: ["Port Vila"],
    altSpellings: [
      "VU",
      "Republic of Vanuatu",
      "Ripablik blong Vanuatu",
      "République de Vanuatu",
    ],
  },
  {
    name: {
      common: "French Southern and Antarctic Lands",
      official: "Territory of the French Southern and Antarctic Lands",
      nativeName: {
        fra: {
          official:
            "Territoire des Terres australes et antarctiques françaises",
          common: "Terres australes et antarctiques françaises",
        },
      },
    },
    cca2: "TF",
    capital: ["Port-aux-Français"],
    altSpellings: ["TF", "French Southern Territories"],
  },
  {
    name: {
      common: "Christmas Island",
      official: "Territory of Christmas Island",
      nativeName: {
        eng: {
          official: "Territory of Christmas Island",
          common: "Christmas Island",
        },
      },
    },
    cca2: "CX",
    capital: ["Flying Fish Cove"],
    altSpellings: ["CX", "Territory of Christmas Island"],
  },
  {
    name: {
      common: "Singapore",
      official: "Republic of Singapore",
      nativeName: {
        zho: { official: "新加坡共和国", common: "新加坡" },
        eng: { official: "Republic of Singapore", common: "Singapore" },
        msa: { official: "Republik Singapura", common: "Singapura" },
        tam: { official: "சிங்கப்பூர் குடியரசு", common: "சிங்கப்பூர்" },
      },
    },
    cca2: "SG",
    capital: ["Singapore"],
    altSpellings: ["SG", "Singapura", "Republik Singapura", "新加坡共和国"],
  },
  {
    name: {
      common: "Suriname",
      official: "Republic of Suriname",
      nativeName: {
        nld: { official: "Republiek Suriname", common: "Suriname" },
      },
    },
    cca2: "SR",
    capital: ["Paramaribo"],
    altSpellings: [
      "SR",
      "Sarnam",
      "Sranangron",
      "Republic of Suriname",
      "Republiek Suriname",
    ],
  },
  {
    name: {
      common: "Western Sahara",
      official: "Sahrawi Arab Democratic Republic",
      nativeName: {
        ber: {
          official: "Sahrawi Arab Democratic Republic",
          common: "Western Sahara",
        },
        mey: {
          official: "الجمهورية العربية الصحراوية الديمقراطية",
          common: "الصحراء الغربية",
        },
        spa: {
          official: "República Árabe Saharaui Democrática",
          common: "Sahara Occidental",
        },
      },
    },
    cca2: "EH",
    capital: ["El Aaiún"],
    altSpellings: ["EH", "Taneẓroft Tutrimt"],
  },
  {
    name: {
      common: "Saint Martin",
      official: "Saint Martin",
      nativeName: { fra: { official: "Saint-Martin", common: "Saint-Martin" } },
    },
    cca2: "MF",
    capital: ["Marigot"],
    altSpellings: [
      "MF",
      "Collectivity of Saint Martin",
      "Collectivité de Saint-Martin",
      "Saint Martin (French part)",
    ],
  },
  {
    name: {
      common: "Costa Rica",
      official: "Republic of Costa Rica",
      nativeName: {
        spa: { official: "República de Costa Rica", common: "Costa Rica" },
      },
    },
    cca2: "CR",
    capital: ["San José"],
    altSpellings: ["CR", "Republic of Costa Rica", "República de Costa Rica"],
  },
  {
    name: {
      common: "Heard Island and McDonald Islands",
      official: "Heard Island and McDonald Islands",
      nativeName: {
        eng: {
          official: "Heard Island and McDonald Islands",
          common: "Heard Island and McDonald Islands",
        },
      },
    },
    cca2: "HM",
    capital: [],
    altSpellings: ["HM", "Heard Island and McDonald Islands"],
  },
  {
    name: {
      common: "Ireland",
      official: "Republic of Ireland",
      nativeName: {
        eng: { official: "Republic of Ireland", common: "Ireland" },
        gle: { official: "Poblacht na hÉireann", common: "Éire" },
      },
    },
    cca2: "IE",
    capital: ["Dublin"],
    altSpellings: ["IE", "Éire", "Republic of Ireland", "Poblacht na hÉireann"],
  },
  {
    name: { common: "Antarctica", official: "Antarctica", nativeName: {} },
    cca2: "AQ",
    capital: [],
    altSpellings: ["AQ"],
  },
  {
    name: {
      common: "Australia",
      official: "Commonwealth of Australia",
      nativeName: {
        eng: { official: "Commonwealth of Australia", common: "Australia" },
      },
    },
    cca2: "AU",
    capital: ["Canberra"],
    altSpellings: ["AU"],
  },
  {
    name: {
      common: "Libya",
      official: "State of Libya",
      nativeName: { ara: { official: "الدولة ليبيا", common: "‏ليبيا" } },
    },
    cca2: "LY",
    capital: ["Tripoli"],
    altSpellings: ["LY", "State of Libya", "Dawlat Libya"],
  },
  {
    name: {
      common: "Qatar",
      official: "State of Qatar",
      nativeName: { ara: { official: "دولة قطر", common: "قطر" } },
    },
    cca2: "QA",
    capital: ["Doha"],
    altSpellings: ["QA", "State of Qatar", "Dawlat Qaṭar"],
  },
  {
    name: {
      common: "Greenland",
      official: "Greenland",
      nativeName: {
        kal: { official: "Kalaallit Nunaat", common: "Kalaallit Nunaat" },
      },
    },
    cca2: "GL",
    capital: ["Nuuk"],
    altSpellings: ["GL", "Grønland"],
  },
  {
    name: {
      common: "Mauritius",
      official: "Republic of Mauritius",
      nativeName: {
        eng: { official: "Republic of Mauritius", common: "Mauritius" },
        fra: { official: "République de Maurice", common: "Maurice" },
        mfe: { official: "Republik Moris", common: "Moris" },
      },
    },
    cca2: "MU",
    capital: ["Port Louis"],
    altSpellings: ["MU", "Republic of Mauritius", "République de Maurice"],
  },
  {
    name: {
      common: "Kazakhstan",
      official: "Republic of Kazakhstan",
      nativeName: {
        kaz: { official: "Қазақстан Республикасы", common: "Қазақстан" },
        rus: { official: "Республика Казахстан", common: "Казахстан" },
      },
    },
    cca2: "KZ",
    capital: ["Nur-Sultan"],
    altSpellings: [
      "KZ",
      "Qazaqstan",
      "Казахстан",
      "Republic of Kazakhstan",
      "Қазақстан Республикасы",
      "Qazaqstan Respublïkası",
      "Республика Казахстан",
      "Respublika Kazakhstan",
    ],
  },
  {
    name: {
      common: "British Indian Ocean Territory",
      official: "British Indian Ocean Territory",
      nativeName: {
        eng: {
          official: "British Indian Ocean Territory",
          common: "British Indian Ocean Territory",
        },
      },
    },
    cca2: "IO",
    capital: ["Diego Garcia"],
    altSpellings: ["IO"],
  },
  {
    name: {
      common: "Albania",
      official: "Republic of Albania",
      nativeName: {
        sqi: { official: "Republika e Shqipërisë", common: "Shqipëria" },
      },
    },
    cca2: "AL",
    capital: ["Tirana"],
    altSpellings: ["AL", "Shqipëri", "Shqipëria", "Shqipnia"],
  },
  {
    name: {
      common: "Bahrain",
      official: "Kingdom of Bahrain",
      nativeName: { ara: { official: "مملكة البحرين", common: "‏البحرين" } },
    },
    cca2: "BH",
    capital: ["Manama"],
    altSpellings: ["BH", "Kingdom of Bahrain", "Mamlakat al-Baḥrayn"],
  },
  {
    name: {
      common: "Papua New Guinea",
      official: "Independent State of Papua New Guinea",
      nativeName: {
        eng: {
          official: "Independent State of Papua New Guinea",
          common: "Papua New Guinea",
        },
        hmo: {
          official: "Independen Stet bilong Papua Niugini",
          common: "Papua Niu Gini",
        },
        tpi: {
          official: "Independen Stet bilong Papua Niugini",
          common: "Papua Niugini",
        },
      },
    },
    cca2: "PG",
    capital: ["Port Moresby"],
    altSpellings: [
      "PG",
      "Independent State of Papua New Guinea",
      "Independen Stet bilong Papua Niugini",
    ],
  },
  {
    name: {
      common: "Burundi",
      official: "Republic of Burundi",
      nativeName: {
        fra: { official: "République du Burundi", common: "Burundi" },
        run: { official: "Republika y'Uburundi ", common: "Uburundi" },
      },
    },
    cca2: "BI",
    capital: ["Gitega"],
    altSpellings: [
      "BI",
      "Republic of Burundi",
      "Republika y'Uburundi",
      "République du Burundi",
    ],
  },
  {
    name: {
      common: "India",
      official: "Republic of India",
      nativeName: {
        eng: { official: "Republic of India", common: "India" },
        hin: { official: "भारत गणराज्य", common: "भारत" },
        tam: { official: "இந்தியக் குடியரசு", common: "இந்தியா" },
      },
    },
    cca2: "IN",
    capital: ["New Delhi"],
    altSpellings: [
      "IN",
      "Bhārat",
      "Republic of India",
      "Bharat Ganrajya",
      "இந்தியா",
    ],
  },
  {
    name: {
      common: "Uruguay",
      official: "Oriental Republic of Uruguay",
      nativeName: {
        spa: { official: "República Oriental del Uruguay", common: "Uruguay" },
      },
    },
    cca2: "UY",
    capital: ["Montevideo"],
    altSpellings: [
      "UY",
      "Oriental Republic of Uruguay",
      "República Oriental del Uruguay",
    ],
  },
  {
    name: {
      common: "Saint Lucia",
      official: "Saint Lucia",
      nativeName: { eng: { official: "Saint Lucia", common: "Saint Lucia" } },
    },
    cca2: "LC",
    capital: ["Castries"],
    altSpellings: ["LC"],
  },
  {
    name: {
      common: "Barbados",
      official: "Barbados",
      nativeName: { eng: { official: "Barbados", common: "Barbados" } },
    },
    cca2: "BB",
    capital: ["Bridgetown"],
    altSpellings: ["BB"],
  },
  {
    name: {
      common: "New Caledonia",
      official: "New Caledonia",
      nativeName: {
        fra: { official: "Nouvelle-Calédonie", common: "Nouvelle-Calédonie" },
      },
    },
    cca2: "NC",
    capital: ["Nouméa"],
    altSpellings: ["NC"],
  },
  {
    name: {
      common: "Latvia",
      official: "Republic of Latvia",
      nativeName: {
        lav: { official: "Latvijas Republikas", common: "Latvija" },
      },
    },
    cca2: "LV",
    capital: ["Riga"],
    altSpellings: ["LV", "Republic of Latvia", "Latvijas Republika"],
  },
  {
    name: {
      common: "Estonia",
      official: "Republic of Estonia",
      nativeName: { est: { official: "Eesti Vabariik", common: "Eesti" } },
    },
    cca2: "EE",
    capital: ["Tallinn"],
    altSpellings: ["EE", "Eesti", "Republic of Estonia", "Eesti Vabariik"],
  },
  {
    name: {
      common: "Niue",
      official: "Niue",
      nativeName: {
        eng: { official: "Niue", common: "Niue" },
        niu: { official: "Niuē", common: "Niuē" },
      },
    },
    cca2: "NU",
    capital: ["Alofi"],
    altSpellings: ["NU"],
  },
  {
    name: {
      common: "Saint Barthélemy",
      official: "Collectivity of Saint Barthélemy",
      nativeName: {
        fra: {
          official: "Collectivité de Saint-Barthélemy",
          common: "Saint-Barthélemy",
        },
      },
    },
    cca2: "BL",
    capital: ["Gustavia"],
    altSpellings: [
      "BL",
      "St. Barthelemy",
      "Collectivity of Saint Barthélemy",
      "Collectivité de Saint-Barthélemy",
    ],
  },
  {
    name: {
      common: "Puerto Rico",
      official: "Commonwealth of Puerto Rico",
      nativeName: {
        eng: { official: "Commonwealth of Puerto Rico", common: "Puerto Rico" },
        spa: {
          official: "Estado Libre Asociado de Puerto Rico",
          common: "Puerto Rico",
        },
      },
    },
    cca2: "PR",
    capital: ["San Juan"],
    altSpellings: [
      "PR",
      "Commonwealth of Puerto Rico",
      "Estado Libre Asociado de Puerto Rico",
    ],
  },
  {
    name: {
      common: "Grenada",
      official: "Grenada",
      nativeName: { eng: { official: "Grenada", common: "Grenada" } },
    },
    cca2: "GD",
    capital: ["St. George's"],
    altSpellings: ["GD"],
  },
  {
    name: {
      common: "Macau",
      official:
        "Macao Special Administrative Region of the People's Republic of China",
      nativeName: {
        por: {
          official:
            "Região Administrativa Especial de Macau da República Popular da China",
          common: "Macau",
        },
        zho: { official: "中华人民共和国澳门特别行政区", common: "澳门" },
      },
    },
    cca2: "MO",
    capital: [],
    altSpellings: [
      "MO",
      "澳门",
      "Macao",
      "Macao Special Administrative Region of the People's Republic of China",
      "中華人民共和國澳門特別行政區",
      "Região Administrativa Especial de Macau da República Popular da China",
    ],
  },
  {
    name: {
      common: "Cyprus",
      official: "Republic of Cyprus",
      nativeName: {
        ell: { official: "Δημοκρατία της Κύπρος", common: "Κύπρος" },
        tur: { official: "Kıbrıs Cumhuriyeti", common: "Kıbrıs" },
      },
    },
    cca2: "CY",
    capital: ["Nicosia"],
    altSpellings: [
      "CY",
      "Kýpros",
      "Kıbrıs",
      "Republic of Cyprus",
      "Κυπριακή Δημοκρατία",
      "Kıbrıs Cumhuriyeti",
    ],
  },
  {
    name: {
      common: "Isle of Man",
      official: "Isle of Man",
      nativeName: {
        eng: { official: "Isle of Man", common: "Isle of Man" },
        glv: { official: "Ellan Vannin or Mannin", common: "Mannin" },
      },
    },
    cca2: "IM",
    capital: ["Douglas"],
    altSpellings: ["IM", "Ellan Vannin", "Mann", "Mannin"],
  },
  {
    name: {
      common: "Greece",
      official: "Hellenic Republic",
      nativeName: {
        ell: { official: "Ελληνική Δημοκρατία", common: "Ελλάδα" },
      },
    },
    cca2: "GR",
    capital: ["Athens"],
    altSpellings: ["GR", "Elláda", "Hellenic Republic", "Ελληνική Δημοκρατία"],
  },
  {
    name: {
      common: "Syria",
      official: "Syrian Arab Republic",
      nativeName: {
        ara: { official: "الجمهورية العربية السورية", common: "سوريا" },
      },
    },
    cca2: "SY",
    capital: ["Damascus"],
    altSpellings: [
      "SY",
      "Syrian Arab Republic",
      "Al-Jumhūrīyah Al-ʻArabīyah As-Sūrīyah",
    ],
  },
  {
    name: {
      common: "Lithuania",
      official: "Republic of Lithuania",
      nativeName: {
        lit: { official: "Lietuvos Respublikos", common: "Lietuva" },
      },
    },
    cca2: "LT",
    capital: ["Vilnius"],
    altSpellings: ["LT", "Republic of Lithuania", "Lietuvos Respublika"],
  },
  {
    name: {
      common: "Curaçao",
      official: "Country of Curaçao",
      nativeName: {
        eng: { official: "Country of Curaçao", common: "Curaçao" },
        nld: { official: "Land Curaçao", common: "Curaçao" },
        pap: { official: "Pais Kòrsou", common: "Pais Kòrsou" },
      },
    },
    cca2: "CW",
    capital: ["Willemstad"],
    altSpellings: [
      "CW",
      "Curacao",
      "Kòrsou",
      "Country of Curaçao",
      "Land Curaçao",
      "Pais Kòrsou",
    ],
  },
  {
    name: {
      common: "Dominica",
      official: "Commonwealth of Dominica",
      nativeName: {
        eng: { official: "Commonwealth of Dominica", common: "Dominica" },
      },
    },
    cca2: "DM",
    capital: ["Roseau"],
    altSpellings: [
      "DM",
      "Dominique",
      "Wai‘tu kubuli",
      "Commonwealth of Dominica",
    ],
  },
  {
    name: {
      common: "Niger",
      official: "Republic of Niger",
      nativeName: { fra: { official: "République du Niger", common: "Niger" } },
    },
    cca2: "NE",
    capital: ["Niamey"],
    altSpellings: ["NE", "Nijar"],
  },
  {
    name: {
      common: "Kyrgyzstan",
      official: "Kyrgyz Republic",
      nativeName: {
        kir: { official: "Кыргыз Республикасы", common: "Кыргызстан" },
        rus: { official: "Кыргызская Республика", common: "Киргизия" },
      },
    },
    cca2: "KG",
    capital: ["Bishkek"],
    altSpellings: [
      "KG",
      "Киргизия",
      "Kyrgyz Republic",
      "Кыргыз Республикасы",
      "Kyrgyz Respublikasy",
    ],
  },
  {
    name: {
      common: "Trinidad and Tobago",
      official: "Republic of Trinidad and Tobago",
      nativeName: {
        eng: {
          official: "Republic of Trinidad and Tobago",
          common: "Trinidad and Tobago",
        },
      },
    },
    cca2: "TT",
    capital: ["Port of Spain"],
    altSpellings: ["TT", "Republic of Trinidad and Tobago"],
  },
  {
    name: {
      common: "Togo",
      official: "Togolese Republic",
      nativeName: { fra: { official: "République togolaise", common: "Togo" } },
    },
    cca2: "TG",
    capital: ["Lomé"],
    altSpellings: [
      "TG",
      "Togolese",
      "Togolese Republic",
      "République Togolaise",
    ],
  },
  {
    name: {
      common: "Palestine",
      official: "State of Palestine",
      nativeName: { ara: { official: "دولة فلسطين", common: "فلسطين" } },
    },
    cca2: "PS",
    capital: ["Ramallah", "Jerusalem"],
    altSpellings: [
      "PS",
      "Palestine, State of",
      "State of Palestine",
      "Dawlat Filasṭin",
    ],
  },
  {
    name: {
      common: "Madagascar",
      official: "Republic of Madagascar",
      nativeName: {
        fra: { official: "République de Madagascar", common: "Madagascar" },
        mlg: { official: "Repoblikan'i Madagasikara", common: "Madagasikara" },
      },
    },
    cca2: "MG",
    capital: ["Antananarivo"],
    altSpellings: [
      "MG",
      "Republic of Madagascar",
      "Repoblikan'i Madagasikara",
      "République de Madagascar",
    ],
  },
  {
    name: {
      common: "Croatia",
      official: "Republic of Croatia",
      nativeName: {
        hrv: { official: "Republika Hrvatska", common: "Hrvatska" },
      },
    },
    cca2: "HR",
    capital: ["Zagreb"],
    altSpellings: [
      "HR",
      "Hrvatska",
      "Republic of Croatia",
      "Republika Hrvatska",
    ],
  },
  {
    name: {
      common: "Faroe Islands",
      official: "Faroe Islands",
      nativeName: {
        dan: { official: "Færøerne", common: "Færøerne" },
        fao: { official: "Føroyar", common: "Føroyar" },
      },
    },
    cca2: "FO",
    capital: ["Tórshavn"],
    altSpellings: ["FO", "Føroyar", "Færøerne"],
  },
  {
    name: {
      common: "Haiti",
      official: "Republic of Haiti",
      nativeName: {
        fra: { official: "République d'Haïti", common: "Haïti" },
        hat: { official: "Repiblik Ayiti", common: "Ayiti" },
      },
    },
    cca2: "HT",
    capital: ["Port-au-Prince"],
    altSpellings: [
      "HT",
      "Republic of Haiti",
      "République d'Haïti",
      "Repiblik Ayiti",
    ],
  },
  {
    name: {
      common: "Montserrat",
      official: "Montserrat",
      nativeName: { eng: { official: "Montserrat", common: "Montserrat" } },
    },
    cca2: "MS",
    capital: ["Plymouth"],
    altSpellings: ["MS"],
  },
  {
    name: {
      common: "Cook Islands",
      official: "Cook Islands",
      nativeName: {
        eng: { official: "Cook Islands", common: "Cook Islands" },
        rar: { official: "Kūki 'Āirani", common: "Kūki 'Āirani" },
      },
    },
    cca2: "CK",
    capital: ["Avarua"],
    altSpellings: ["CK", "Kūki 'Āirani"],
  },
  {
    name: {
      common: "Timor-Leste",
      official: "Democratic Republic of Timor-Leste",
      nativeName: {
        por: {
          official: "República Democrática de Timor-Leste",
          common: "Timor-Leste",
        },
        tet: {
          official: "Repúblika Demokrátika Timór-Leste",
          common: "Timór-Leste",
        },
      },
    },
    cca2: "TL",
    capital: ["Dili"],
    altSpellings: [
      "TL",
      "East Timor",
      "Democratic Republic of Timor-Leste",
      "República Democrática de Timor-Leste",
      "Repúblika Demokrátika Timór-Leste",
      "Timór Lorosa'e",
      "Timor Lorosae",
    ],
  },
  {
    name: {
      common: "Martinique",
      official: "Martinique",
      nativeName: { fra: { official: "Martinique", common: "Martinique" } },
    },
    cca2: "MQ",
    capital: ["Fort-de-France"],
    altSpellings: ["MQ"],
  },
  {
    name: {
      common: "Cuba",
      official: "Republic of Cuba",
      nativeName: { spa: { official: "República de Cuba", common: "Cuba" } },
    },
    cca2: "CU",
    capital: ["Havana"],
    altSpellings: ["CU", "Republic of Cuba", "República de Cuba"],
  },
  {
    name: {
      common: "Taiwan",
      official: "Republic of China (Taiwan)",
      nativeName: { zho: { official: "中華民國", common: "台灣" } },
    },
    cca2: "TW",
    capital: ["Taipei"],
    altSpellings: [
      "TW",
      "Táiwān",
      "Republic of China",
      "中華民國",
      "Zhōnghuá Mínguó",
      "Chinese Taipei",
    ],
  },
  {
    name: {
      common: "Eswatini",
      official: "Kingdom of Eswatini",
      nativeName: {
        eng: { official: "Kingdom of Eswatini", common: "Eswatini" },
        ssw: { official: "Umbuso weSwatini", common: "eSwatini" },
      },
    },
    cca2: "SZ",
    capital: ["Mbabane"],
    altSpellings: [
      "SZ",
      "Swaziland",
      "weSwatini",
      "Swatini",
      "Ngwane",
      "Kingdom of Eswatini",
      "Umbuso weSwatini",
    ],
  },
  {
    name: {
      common: "Ukraine",
      official: "Ukraine",
      nativeName: { ukr: { official: "Україна", common: "Україна" } },
    },
    cca2: "UA",
    capital: ["Kyiv"],
    altSpellings: ["UA", "Ukrayina"],
  },
  {
    name: {
      common: "Bermuda",
      official: "Bermuda",
      nativeName: { eng: { official: "Bermuda", common: "Bermuda" } },
    },
    cca2: "BM",
    capital: ["Hamilton"],
    altSpellings: [
      "BM",
      "The Islands of Bermuda",
      "The Bermudas",
      "Somers Isles",
    ],
  },
  {
    name: {
      common: "South Korea",
      official: "Republic of Korea",
      nativeName: { kor: { official: "대한민국", common: "한국" } },
    },
    cca2: "KR",
    capital: ["Seoul"],
    altSpellings: [
      "KR",
      "Korea, Republic of",
      "Republic of Korea",
      "남한",
      "남조선",
    ],
  },
  {
    name: {
      common: "Peru",
      official: "Republic of Peru",
      nativeName: {
        aym: { official: "Piruw Suyu", common: "Piruw" },
        que: { official: "Piruw Ripuwlika", common: "Piruw" },
        spa: { official: "República del Perú", common: "Perú" },
      },
    },
    cca2: "PE",
    capital: ["Lima"],
    altSpellings: ["PE", "Republic of Peru", "República del Perú"],
  },
  {
    name: {
      common: "Iraq",
      official: "Republic of Iraq",
      nativeName: {
        ara: { official: "جمهورية العراق", common: "العراق" },
        arc: { official: "ܩܘܼܛܢܵܐ ܐܝܼܪܲܩ", common: "ܩܘܼܛܢܵܐ" },
        ckb: { official: "کۆماری عێراق", common: "کۆماری" },
      },
    },
    cca2: "IQ",
    capital: ["Baghdad"],
    altSpellings: ["IQ", "Republic of Iraq", "Jumhūriyyat al-‘Irāq"],
  },
  {
    name: {
      common: "Moldova",
      official: "Republic of Moldova",
      nativeName: { ron: { official: "Republica Moldova", common: "Moldova" } },
    },
    cca2: "MD",
    capital: ["Chișinău"],
    altSpellings: [
      "MD",
      "Moldova, Republic of",
      "Republic of Moldova",
      "Republica Moldova",
    ],
  },
  {
    name: {
      common: "San Marino",
      official: "Republic of San Marino",
      nativeName: {
        ita: { official: "Repubblica di San Marino", common: "San Marino" },
      },
    },
    cca2: "SM",
    capital: ["City of San Marino"],
    altSpellings: ["SM", "Republic of San Marino", "Repubblica di San Marino"],
  },
  {
    name: {
      common: "Venezuela",
      official: "Bolivarian Republic of Venezuela",
      nativeName: {
        spa: {
          official: "República Bolivariana de Venezuela",
          common: "Venezuela",
        },
      },
    },
    cca2: "VE",
    capital: ["Caracas"],
    altSpellings: [
      "VE",
      "Bolivarian Republic of Venezuela",
      "Venezuela, Bolivarian Republic of",
      "República Bolivariana de Venezuela",
    ],
  },
  {
    name: {
      common: "Guyana",
      official: "Co-operative Republic of Guyana",
      nativeName: {
        eng: { official: "Co-operative Republic of Guyana", common: "Guyana" },
      },
    },
    cca2: "GY",
    capital: ["Georgetown"],
    altSpellings: ["GY", "Co-operative Republic of Guyana"],
  },
  {
    name: {
      common: "Cayman Islands",
      official: "Cayman Islands",
      nativeName: {
        eng: { official: "Cayman Islands", common: "Cayman Islands" },
      },
    },
    cca2: "KY",
    capital: ["George Town"],
    altSpellings: ["KY"],
  },
  {
    name: {
      common: "Cambodia",
      official: "Kingdom of Cambodia",
      nativeName: {
        khm: { official: "ព្រះរាជាណាចក្រកម្ពុជា", common: "Kâmpŭchéa" },
      },
    },
    cca2: "KH",
    capital: ["Phnom Penh"],
    altSpellings: ["KH", "Kingdom of Cambodia"],
  },
  {
    name: {
      common: "Cocos (Keeling) Islands",
      official: "Territory of the Cocos (Keeling) Islands",
      nativeName: {
        eng: {
          official: "Territory of the Cocos (Keeling) Islands",
          common: "Cocos (Keeling) Islands",
        },
      },
    },
    cca2: "CC",
    capital: ["West Island"],
    altSpellings: ["CC", "Keeling Islands", "Cocos Islands"],
  },
  {
    name: {
      common: "Malta",
      official: "Republic of Malta",
      nativeName: {
        eng: { official: "Republic of Malta", common: "Malta" },
        mlt: { official: "Repubblika ta ' Malta", common: "Malta" },
      },
    },
    cca2: "MT",
    capital: ["Valletta"],
    altSpellings: ["MT", "Republic of Malta", "Repubblika ta' Malta"],
  },
  {
    name: {
      common: "Sri Lanka",
      official: "Democratic Socialist Republic of Sri Lanka",
      nativeName: {
        sin: {
          official: "ශ්‍රී ලංකා ප්‍රජාතාන්ත්‍රික සමාජවාදී ජනරජය",
          common: "ශ්‍රී ලංකාව",
        },
        tam: { official: "இலங்கை சனநாயக சோசலிசக் குடியரசு", common: "இலங்கை" },
      },
    },
    cca2: "LK",
    capital: ["Sri Jayawardenepura Kotte"],
    altSpellings: [
      "LK",
      "ilaṅkai",
      "Democratic Socialist Republic of Sri Lanka",
    ],
  },
  {
    name: {
      common: "Israel",
      official: "State of Israel",
      nativeName: {
        ara: { official: "دولة إسرائيل", common: "إسرائيل" },
        heb: { official: "מדינת ישראל", common: "ישראל" },
      },
    },
    cca2: "IL",
    capital: ["Jerusalem"],
    altSpellings: ["IL", "State of Israel", "Medīnat Yisrā'el"],
  },
  {
    name: {
      common: "Sudan",
      official: "Republic of the Sudan",
      nativeName: {
        ara: { official: "جمهورية السودان", common: "السودان" },
        eng: { official: "Republic of the Sudan", common: "Sudan" },
      },
    },
    cca2: "SD",
    capital: ["Khartoum"],
    altSpellings: ["SD", "Republic of the Sudan", "Jumhūrīyat as-Sūdān"],
  },
  {
    name: {
      common: "United States Virgin Islands",
      official: "Virgin Islands of the United States",
      nativeName: {
        eng: {
          official: "Virgin Islands of the United States",
          common: "United States Virgin Islands",
        },
      },
    },
    cca2: "VI",
    capital: ["Charlotte Amalie"],
    altSpellings: ["VI", "Virgin Islands, U.S."],
  },
  {
    name: {
      common: "Eritrea",
      official: "State of Eritrea",
      nativeName: {
        ara: { official: "دولة إرتريا", common: "إرتريا‎" },
        eng: { official: "State of Eritrea", common: "Eritrea" },
        tir: { official: "ሃገረ ኤርትራ", common: "ኤርትራ" },
      },
    },
    cca2: "ER",
    capital: ["Asmara"],
    altSpellings: [
      "ER",
      "State of Eritrea",
      "ሃገረ ኤርትራ",
      "Dawlat Iritriyá",
      "ʾErtrā",
      "Iritriyā",
    ],
  },
  {
    name: {
      common: "Mali",
      official: "Republic of Mali",
      nativeName: { fra: { official: "République du Mali", common: "Mali" } },
    },
    cca2: "ML",
    capital: ["Bamako"],
    altSpellings: ["ML", "Republic of Mali", "République du Mali"],
  },
  {
    name: {
      common: "Somalia",
      official: "Federal Republic of Somalia",
      nativeName: {
        ara: { official: "جمهورية الصومال‎‎", common: "الصومال‎‎" },
        som: {
          official: "Jamhuuriyadda Federaalka Soomaaliya",
          common: "Soomaaliya",
        },
      },
    },
    cca2: "SO",
    capital: ["Mogadishu"],
    altSpellings: [
      "SO",
      "aṣ-Ṣūmāl",
      "Federal Republic of Somalia",
      "Jamhuuriyadda Federaalka Soomaaliya",
      "Jumhūriyyat aṣ-Ṣūmāl al-Fiderāliyya",
    ],
  },
  {
    name: {
      common: "Norfolk Island",
      official: "Territory of Norfolk Island",
      nativeName: {
        eng: {
          official: "Territory of Norfolk Island",
          common: "Norfolk Island",
        },
        pih: { official: "Teratri of Norf'k Ailen", common: "Norf'k Ailen" },
      },
    },
    cca2: "NF",
    capital: ["Kingston"],
    altSpellings: [
      "NF",
      "Territory of Norfolk Island",
      "Teratri of Norf'k Ailen",
    ],
  },
  {
    name: {
      common: "Comoros",
      official: "Union of the Comoros",
      nativeName: {
        ara: { official: "الاتحاد القمري", common: "القمر‎" },
        fra: { official: "Union des Comores", common: "Comores" },
        zdj: { official: "Udzima wa Komori", common: "Komori" },
      },
    },
    cca2: "KM",
    capital: ["Moroni"],
    altSpellings: [
      "KM",
      "Union of the Comoros",
      "Union des Comores",
      "Udzima wa Komori",
      "al-Ittiḥād al-Qumurī",
    ],
  },
  {
    name: {
      common: "Nicaragua",
      official: "Republic of Nicaragua",
      nativeName: {
        spa: { official: "República de Nicaragua", common: "Nicaragua" },
      },
    },
    cca2: "NI",
    capital: ["Managua"],
    altSpellings: ["NI", "Republic of Nicaragua", "República de Nicaragua"],
  },
  {
    name: {
      common: "Russia",
      official: "Russian Federation",
      nativeName: {
        rus: { official: "Российская Федерация", common: "Россия" },
      },
    },
    cca2: "RU",
    capital: ["Moscow"],
    altSpellings: ["RU", "Russian Federation", "Российская Федерация"],
  },
  {
    name: {
      common: "Uganda",
      official: "Republic of Uganda",
      nativeName: {
        eng: { official: "Republic of Uganda", common: "Uganda" },
        swa: { official: "Republic of Uganda", common: "Uganda" },
      },
    },
    cca2: "UG",
    capital: ["Kampala"],
    altSpellings: ["UG", "Republic of Uganda", "Jamhuri ya Uganda"],
  },
  {
    name: {
      common: "Nauru",
      official: "Republic of Nauru",
      nativeName: {
        eng: { official: "Republic of Nauru", common: "Nauru" },
        nau: { official: "Republic of Nauru", common: "Nauru" },
      },
    },
    cca2: "NR",
    capital: ["Yaren"],
    altSpellings: [
      "NR",
      "Naoero",
      "Pleasant Island",
      "Republic of Nauru",
      "Ripublik Naoero",
    ],
  },
  {
    name: {
      common: "Switzerland",
      official: "Swiss Confederation",
      nativeName: {
        fra: { official: "Confédération suisse", common: "Suisse" },
        gsw: {
          official: "Schweizerische Eidgenossenschaft",
          common: "Schweiz",
        },
        ita: { official: "Confederazione Svizzera", common: "Svizzera" },
        roh: { official: "Confederaziun svizra", common: "Svizra" },
      },
    },
    cca2: "CH",
    capital: ["Bern"],
    altSpellings: [
      "CH",
      "Swiss Confederation",
      "Schweiz",
      "Suisse",
      "Svizzera",
      "Svizra",
    ],
  },
  {
    name: {
      common: "Portugal",
      official: "Portuguese Republic",
      nativeName: {
        por: { official: "República português", common: "Portugal" },
      },
    },
    cca2: "PT",
    capital: ["Lisbon"],
    altSpellings: [
      "PT",
      "Portuguesa",
      "Portuguese Republic",
      "República Portuguesa",
    ],
  },
  {
    name: {
      common: "Tajikistan",
      official: "Republic of Tajikistan",
      nativeName: {
        rus: { official: "Республика Таджикистан", common: "Таджикистан" },
        tgk: { official: "Ҷумҳурии Тоҷикистон", common: "Тоҷикистон" },
      },
    },
    cca2: "TJ",
    capital: ["Dushanbe"],
    altSpellings: [
      "TJ",
      "Toçikiston",
      "Republic of Tajikistan",
      "Ҷумҳурии Тоҷикистон",
      "Çumhuriyi Toçikiston",
    ],
  },
  {
    name: {
      common: "South Sudan",
      official: "Republic of South Sudan",
      nativeName: {
        eng: { official: "Republic of South Sudan", common: "South Sudan" },
      },
    },
    cca2: "SS",
    capital: ["Juba"],
    altSpellings: ["SS"],
  },
  {
    name: {
      common: "Bouvet Island",
      official: "Bouvet Island",
      nativeName: { nor: { official: "Bouvetøya", common: "Bouvetøya" } },
    },
    cca2: "BV",
    capital: [],
    altSpellings: ["BV", "Bouvetøya", "Bouvet-øya"],
  },
  {
    name: {
      common: "Micronesia",
      official: "Federated States of Micronesia",
      nativeName: {
        eng: {
          official: "Federated States of Micronesia",
          common: "Micronesia",
        },
      },
    },
    cca2: "FM",
    capital: ["Palikir"],
    altSpellings: [
      "FM",
      "Federated States of Micronesia",
      "Micronesia, Federated States of",
    ],
  },
  {
    name: {
      common: "American Samoa",
      official: "American Samoa",
      nativeName: {
        eng: { official: "American Samoa", common: "American Samoa" },
        smo: { official: "Sāmoa Amelika", common: "Sāmoa Amelika" },
      },
    },
    cca2: "AS",
    capital: ["Pago Pago"],
    altSpellings: ["AS", "Amerika Sāmoa", "Amelika Sāmoa", "Sāmoa Amelika"],
  },
  {
    name: {
      common: "Czechia",
      official: "Czech Republic",
      nativeName: {
        ces: { official: "Česká republika", common: "Česko" },
        slk: { official: "Česká republika", common: "Česko" },
      },
    },
    cca2: "CZ",
    capital: ["Prague"],
    altSpellings: ["CZ", "Česká republika", "Česko"],
  },
  {
    name: {
      common: "Botswana",
      official: "Republic of Botswana",
      nativeName: {
        eng: { official: "Republic of Botswana", common: "Botswana" },
        tsn: { official: "Lefatshe la Botswana", common: "Botswana" },
      },
    },
    cca2: "BW",
    capital: ["Gaborone"],
    altSpellings: ["BW", "Republic of Botswana", "Lefatshe la Botswana"],
  },
  {
    name: {
      common: "Tunisia",
      official: "Tunisian Republic",
      nativeName: { ara: { official: "الجمهورية التونسية", common: "تونس" } },
    },
    cca2: "TN",
    capital: ["Tunis"],
    altSpellings: ["TN", "Republic of Tunisia", "al-Jumhūriyyah at-Tūnisiyyah"],
  },
  {
    name: {
      common: "Anguilla",
      official: "Anguilla",
      nativeName: { eng: { official: "Anguilla", common: "Anguilla" } },
    },
    cca2: "AI",
    capital: ["The Valley"],
    altSpellings: ["AI"],
  },
  {
    name: {
      common: "Guinea-Bissau",
      official: "Republic of Guinea-Bissau",
      nativeName: {
        por: { official: "República da Guiné-Bissau", common: "Guiné-Bissau" },
        pov: { official: "República da Guiné-Bissau", common: "Guiné-Bissau" },
      },
    },
    cca2: "GW",
    capital: ["Bissau"],
    altSpellings: [
      "GW",
      "Republic of Guinea-Bissau",
      "República da Guiné-Bissau",
    ],
  },
  {
    name: {
      common: "Slovakia",
      official: "Slovak Republic",
      nativeName: {
        slk: { official: "Slovenská republika", common: "Slovensko" },
      },
    },
    cca2: "SK",
    capital: ["Bratislava"],
    altSpellings: ["SK", "Slovak Republic", "Slovenská republika"],
  },
  {
    name: {
      common: "Marshall Islands",
      official: "Republic of the Marshall Islands",
      nativeName: {
        eng: {
          official: "Republic of the Marshall Islands",
          common: "Marshall Islands",
        },
        mah: { official: "Republic of the Marshall Islands", common: "M̧ajeļ" },
      },
    },
    cca2: "MH",
    capital: ["Majuro"],
    altSpellings: [
      "MH",
      "Republic of the Marshall Islands",
      "Aolepān Aorōkin M̧ajeļ",
    ],
  },
  {
    name: {
      common: "Algeria",
      official: "People's Democratic Republic of Algeria",
      nativeName: {
        ara: {
          official: "الجمهورية الديمقراطية الشعبية الجزائرية",
          common: "الجزائر",
        },
      },
    },
    cca2: "DZ",
    capital: ["Algiers"],
    altSpellings: ["DZ", "Dzayer", "Algérie"],
  },
  {
    name: {
      common: "Jamaica",
      official: "Jamaica",
      nativeName: {
        eng: { official: "Jamaica", common: "Jamaica" },
        jam: { official: "Jamaica", common: "Jamaica" },
      },
    },
    cca2: "JM",
    capital: ["Kingston"],
    altSpellings: ["JM"],
  },
  {
    name: {
      common: "Mozambique",
      official: "Republic of Mozambique",
      nativeName: {
        por: { official: "República de Moçambique", common: "Moçambique" },
      },
    },
    cca2: "MZ",
    capital: ["Maputo"],
    altSpellings: ["MZ", "Republic of Mozambique", "República de Moçambique"],
  },
  {
    name: {
      common: "Spain",
      official: "Kingdom of Spain",
      nativeName: { spa: { official: "Reino de España", common: "España" } },
    },
    cca2: "ES",
    capital: ["Madrid"],
    altSpellings: ["ES", "Kingdom of Spain", "Reino de España"],
  },
  {
    name: {
      common: "Honduras",
      official: "Republic of Honduras",
      nativeName: {
        spa: { official: "República de Honduras", common: "Honduras" },
      },
    },
    cca2: "HN",
    capital: ["Tegucigalpa"],
    altSpellings: ["HN", "Republic of Honduras", "República de Honduras"],
  },
  {
    name: {
      common: "Netherlands",
      official: "Kingdom of the Netherlands",
      nativeName: {
        nld: { official: "Koninkrijk der Nederlanden", common: "Nederland" },
      },
    },
    cca2: "NL",
    capital: ["Amsterdam"],
    altSpellings: ["NL", "Holland", "Nederland", "The Netherlands"],
  },
  {
    name: {
      common: "South Africa",
      official: "Republic of South Africa",
      nativeName: {
        afr: { official: "Republiek van Suid-Afrika", common: "South Africa" },
        eng: { official: "Republic of South Africa", common: "South Africa" },
        nbl: {
          official: "IRiphabliki yeSewula Afrika",
          common: "Sewula Afrika",
        },
        nso: {
          official: "Rephaboliki ya Afrika-Borwa ",
          common: "Afrika-Borwa",
        },
        sot: {
          official: "Rephaboliki ya Afrika Borwa",
          common: "Afrika Borwa",
        },
        ssw: {
          official: "IRiphabhulikhi yeNingizimu Afrika",
          common: "Ningizimu Afrika",
        },
        tsn: {
          official: "Rephaboliki ya Aforika Borwa",
          common: "Aforika Borwa",
        },
        tso: {
          official: "Riphabliki ra Afrika Dzonga",
          common: "Afrika Dzonga",
        },
        ven: {
          official: "Riphabuḽiki ya Afurika Tshipembe",
          common: "Afurika Tshipembe",
        },
        xho: {
          official: "IRiphabliki yaseMzantsi Afrika",
          common: "Mzantsi Afrika",
        },
        zul: {
          official: "IRiphabliki yaseNingizimu Afrika",
          common: "Ningizimu Afrika",
        },
      },
    },
    cca2: "ZA",
    capital: ["Pretoria", "Bloemfontein", "Cape Town"],
    altSpellings: ["ZA", "RSA", "Suid-Afrika", "Republic of South Africa"],
  },
  {
    name: {
      common: "Azerbaijan",
      official: "Republic of Azerbaijan",
      nativeName: {
        aze: { official: "Azərbaycan Respublikası", common: "Azərbaycan" },
        rus: { official: "Азербайджанская Республика", common: "Азербайджан" },
      },
    },
    cca2: "AZ",
    capital: ["Baku"],
    altSpellings: ["AZ", "Republic of Azerbaijan", "Azərbaycan Respublikası"],
  },
  {
    name: {
      common: "North Macedonia",
      official: "Republic of North Macedonia",
      nativeName: {
        mkd: { official: "Република Северна Македонија", common: "Македонија" },
      },
    },
    cca2: "MK",
    capital: ["Skopje"],
    altSpellings: [
      "MK",
      "The former Yugoslav Republic of Macedonia",
      "Republic of North Macedonia",
      "Macedonia, The Former Yugoslav Republic of",
      "Република Северна Македонија",
    ],
  },
  {
    name: {
      common: "Gambia",
      official: "Republic of the Gambia",
      nativeName: {
        eng: { official: "Republic of the Gambia", common: "Gambia" },
      },
    },
    cca2: "GM",
    capital: ["Banjul"],
    altSpellings: ["GM", "Republic of the Gambia"],
  },
  {
    name: {
      common: "Liberia",
      official: "Republic of Liberia",
      nativeName: {
        eng: { official: "Republic of Liberia", common: "Liberia" },
      },
    },
    cca2: "LR",
    capital: ["Monrovia"],
    altSpellings: ["LR", "Republic of Liberia"],
  },
  {
    name: {
      common: "Luxembourg",
      official: "Grand Duchy of Luxembourg",
      nativeName: {
        deu: { official: "Großherzogtum Luxemburg", common: "Luxemburg" },
        fra: { official: "Grand-Duché de Luxembourg", common: "Luxembourg" },
        ltz: { official: "Groussherzogtum Lëtzebuerg", common: "Lëtzebuerg" },
      },
    },
    cca2: "LU",
    capital: ["Luxembourg"],
    altSpellings: [
      "LU",
      "Grand Duchy of Luxembourg",
      "Grand-Duché de Luxembourg",
      "Großherzogtum Luxemburg",
      "Groussherzogtum Lëtzebuerg",
    ],
  },
  {
    name: {
      common: "Cape Verde",
      official: "Republic of Cabo Verde",
      nativeName: {
        por: { official: "República de Cabo Verde", common: "Cabo Verde" },
      },
    },
    cca2: "CV",
    capital: ["Praia"],
    altSpellings: ["CV", "Republic of Cabo Verde", "República de Cabo Verde"],
  },
  {
    name: {
      common: "Bahamas",
      official: "Commonwealth of the Bahamas",
      nativeName: {
        eng: { official: "Commonwealth of the Bahamas", common: "Bahamas" },
      },
    },
    cca2: "BS",
    capital: ["Nassau"],
    altSpellings: ["BS", "Commonwealth of the Bahamas"],
  },
  {
    name: {
      common: "Georgia",
      official: "Georgia",
      nativeName: { kat: { official: "საქართველო", common: "საქართველო" } },
    },
    cca2: "GE",
    capital: ["Tbilisi"],
    altSpellings: ["GE", "Sakartvelo"],
  },
  {
    name: {
      common: "Kiribati",
      official: "Independent and Sovereign Republic of Kiribati",
      nativeName: {
        eng: {
          official: "Independent and Sovereign Republic of Kiribati",
          common: "Kiribati",
        },
        gil: { official: "Ribaberiki Kiribati", common: "Kiribati" },
      },
    },
    cca2: "KI",
    capital: ["South Tarawa"],
    altSpellings: ["KI", "Republic of Kiribati", "Ribaberiki Kiribati"],
  },
  {
    name: {
      common: "Tanzania",
      official: "United Republic of Tanzania",
      nativeName: {
        eng: { official: "United Republic of Tanzania", common: "Tanzania" },
        swa: {
          official: "Jamhuri ya Muungano wa Tanzania",
          common: "Tanzania",
        },
      },
    },
    cca2: "TZ",
    capital: ["Dodoma"],
    altSpellings: [
      "TZ",
      "Tanzania, United Republic of",
      "United Republic of Tanzania",
      "Jamhuri ya Muungano wa Tanzania",
    ],
  },
  {
    name: {
      common: "China",
      official: "People's Republic of China",
      nativeName: { zho: { official: "中华人民共和国", common: "中国" } },
    },
    cca2: "CN",
    capital: ["Beijing"],
    altSpellings: [
      "CN",
      "Zhōngguó",
      "Zhongguo",
      "Zhonghua",
      "People's Republic of China",
      "中华人民共和国",
      "Zhōnghuá Rénmín Gònghéguó",
    ],
  },
  {
    name: {
      common: "Guatemala",
      official: "Republic of Guatemala",
      nativeName: {
        spa: { official: "República de Guatemala", common: "Guatemala" },
      },
    },
    cca2: "GT",
    capital: ["Guatemala City"],
    altSpellings: ["GT"],
  },
  {
    name: {
      common: "São Tomé and Príncipe",
      official: "Democratic Republic of São Tomé and Príncipe",
      nativeName: {
        por: {
          official: "República Democrática do São Tomé e Príncipe",
          common: "São Tomé e Príncipe",
        },
      },
    },
    cca2: "ST",
    capital: ["São Tomé"],
    altSpellings: [
      "ST",
      "Democratic Republic of São Tomé and Príncipe",
      "Sao Tome and Principe",
      "República Democrática de São Tomé e Príncipe",
    ],
  },
  {
    name: {
      common: "Germany",
      official: "Federal Republic of Germany",
      nativeName: {
        deu: { official: "Bundesrepublik Deutschland", common: "Deutschland" },
      },
    },
    cca2: "DE",
    capital: ["Berlin"],
    altSpellings: [
      "DE",
      "Federal Republic of Germany",
      "Bundesrepublik Deutschland",
    ],
  },
  {
    name: {
      common: "Sierra Leone",
      official: "Republic of Sierra Leone",
      nativeName: {
        eng: { official: "Republic of Sierra Leone", common: "Sierra Leone" },
      },
    },
    cca2: "SL",
    capital: ["Freetown"],
    altSpellings: ["SL", "Republic of Sierra Leone"],
  },
  {
    name: {
      common: "Chad",
      official: "Republic of Chad",
      nativeName: {
        ara: { official: "جمهورية تشاد", common: "تشاد‎" },
        fra: { official: "République du Tchad", common: "Tchad" },
      },
    },
    cca2: "TD",
    capital: ["N'Djamena"],
    altSpellings: ["TD", "Tchad", "Republic of Chad", "République du Tchad"],
  },
  {
    name: {
      common: "United Kingdom",
      official: "United Kingdom of Great Britain and Northern Ireland",
      nativeName: {
        eng: {
          official: "United Kingdom of Great Britain and Northern Ireland",
          common: "United Kingdom",
        },
      },
    },
    cca2: "GB",
    capital: ["London"],
    altSpellings: ["GB", "UK", "Great Britain"],
  },
  {
    name: {
      common: "Slovenia",
      official: "Republic of Slovenia",
      nativeName: {
        slv: { official: "Republika Slovenija", common: "Slovenija" },
      },
    },
    cca2: "SI",
    capital: ["Ljubljana"],
    altSpellings: ["SI", "Republic of Slovenia", "Republika Slovenija"],
  },
  {
    name: {
      common: "Thailand",
      official: "Kingdom of Thailand",
      nativeName: { tha: { official: "ราชอาณาจักรไทย", common: "ประเทศไทย" } },
    },
    cca2: "TH",
    capital: ["Bangkok"],
    altSpellings: [
      "TH",
      "Prathet",
      "Thai",
      "Kingdom of Thailand",
      "ราชอาณาจักรไทย",
      "Ratcha Anachak Thai",
    ],
  },
  {
    name: {
      common: "Indonesia",
      official: "Republic of Indonesia",
      nativeName: {
        ind: { official: "Republik Indonesia", common: "Indonesia" },
      },
    },
    cca2: "ID",
    capital: ["Jakarta"],
    altSpellings: ["ID", "Republic of Indonesia", "Republik Indonesia"],
  },
  {
    name: {
      common: "Northern Mariana Islands",
      official: "Commonwealth of the Northern Mariana Islands",
      nativeName: {
        cal: {
          official: "Commonwealth of the Northern Mariana Islands",
          common: "Northern Mariana Islands",
        },
        cha: {
          official: "Sankattan Siha Na Islas Mariånas",
          common: "Na Islas Mariånas",
        },
        eng: {
          official: "Commonwealth of the Northern Mariana Islands",
          common: "Northern Mariana Islands",
        },
      },
    },
    cca2: "MP",
    capital: ["Saipan"],
    altSpellings: [
      "MP",
      "Commonwealth of the Northern Mariana Islands",
      "Sankattan Siha Na Islas Mariånas",
    ],
  },
  {
    name: {
      common: "Guam",
      official: "Guam",
      nativeName: {
        cha: { official: "Guåhån", common: "Guåhån" },
        eng: { official: "Guam", common: "Guam" },
        spa: { official: "Guam", common: "Guam" },
      },
    },
    cca2: "GU",
    capital: ["Hagåtña"],
    altSpellings: ["GU", "Guåhån"],
  },
  {
    name: {
      common: "Finland",
      official: "Republic of Finland",
      nativeName: {
        fin: { official: "Suomen tasavalta", common: "Suomi" },
        swe: { official: "Republiken Finland", common: "Finland" },
      },
    },
    cca2: "FI",
    capital: ["Helsinki"],
    altSpellings: [
      "FI",
      "Suomi",
      "Republic of Finland",
      "Suomen tasavalta",
      "Republiken Finland",
    ],
  },
  {
    name: {
      common: "Mayotte",
      official: "Department of Mayotte",
      nativeName: {
        fra: { official: "Département de Mayotte", common: "Mayotte" },
      },
    },
    cca2: "YT",
    capital: ["Mamoudzou"],
    altSpellings: ["YT", "Department of Mayotte", "Département de Mayotte"],
  },
  {
    name: {
      common: "Gibraltar",
      official: "Gibraltar",
      nativeName: { eng: { official: "Gibraltar", common: "Gibraltar" } },
    },
    cca2: "GI",
    capital: ["Gibraltar"],
    altSpellings: ["GI"],
  },
  {
    name: {
      common: "Turkmenistan",
      official: "Turkmenistan",
      nativeName: {
        rus: { official: "Туркменистан", common: "Туркмения" },
        tuk: { official: "Türkmenistan", common: "Türkmenistan" },
      },
    },
    cca2: "TM",
    capital: ["Ashgabat"],
    altSpellings: ["TM"],
  },
  {
    name: {
      common: "Kosovo",
      official: "Republic of Kosovo",
      nativeName: {
        sqi: { official: "Republika e Kosovës", common: "Kosova" },
        srp: { official: "Република Косово", common: "Косово" },
      },
    },
    cca2: "XK",
    capital: ["Pristina"],
    altSpellings: ["XK", "Република Косово"],
  },
  {
    name: {
      common: "Ivory Coast",
      official: "Republic of Côte d'Ivoire",
      nativeName: {
        fra: {
          official: "République de Côte d'Ivoire",
          common: "Côte d'Ivoire",
        },
      },
    },
    cca2: "CI",
    capital: ["Yamoussoukro"],
    altSpellings: [
      "CI",
      "Côte d'Ivoire",
      "Ivory Coast",
      "Republic of Côte d'Ivoire",
      "République de Côte d'Ivoire",
    ],
  },
  {
    name: {
      common: "Morocco",
      official: "Kingdom of Morocco",
      nativeName: {
        ara: { official: "المملكة المغربية", common: "المغرب" },
        ber: { official: "ⵜⴰⴳⵍⴷⵉⵜ ⵏ ⵍⵎⵖⵔⵉⴱ", common: "ⵍⵎⴰⵖⵔⵉⴱ" },
      },
    },
    cca2: "MA",
    capital: ["Rabat"],
    altSpellings: ["MA", "Kingdom of Morocco", "Al-Mamlakah al-Maġribiyah"],
  },
  {
    name: {
      common: "Dominican Republic",
      official: "Dominican Republic",
      nativeName: {
        spa: {
          official: "República Dominicana",
          common: "República Dominicana",
        },
      },
    },
    cca2: "DO",
    capital: ["Santo Domingo"],
    altSpellings: ["DO"],
  },
  {
    name: {
      common: "Ghana",
      official: "Republic of Ghana",
      nativeName: { eng: { official: "Republic of Ghana", common: "Ghana" } },
    },
    cca2: "GH",
    capital: ["Accra"],
    altSpellings: ["GH"],
  },
  {
    name: {
      common: "Vatican City",
      official: "Vatican City State",
      nativeName: {
        ita: { official: "Stato della Città del Vaticano", common: "Vaticano" },
        lat: { official: "Status Civitatis Vaticanæ", common: "Vaticanæ" },
      },
    },
    cca2: "VA",
    capital: ["Vatican City"],
    altSpellings: [
      "VA",
      "Holy See (Vatican City State)",
      "Vatican City State",
      "Stato della Città del Vaticano",
    ],
  },
  {
    name: {
      common: "Jersey",
      official: "Bailiwick of Jersey",
      nativeName: {
        eng: { official: "Bailiwick of Jersey", common: "Jersey" },
        fra: { official: "Bailliage de Jersey", common: "Jersey" },
        nrf: { official: "Bailliage dé Jèrri", common: "Jèrri" },
      },
    },
    cca2: "JE",
    capital: ["Saint Helier"],
    altSpellings: [
      "JE",
      "Bailiwick of Jersey",
      "Bailliage de Jersey",
      "Bailliage dé Jèrri",
    ],
  },
  {
    name: {
      common: "Turkey",
      official: "Republic of Turkey",
      nativeName: {
        tur: { official: "Türkiye Cumhuriyeti", common: "Türkiye" },
      },
    },
    cca2: "TR",
    capital: ["Ankara"],
    altSpellings: [
      "TR",
      "Turkiye",
      "Republic of Turkey",
      "Türkiye Cumhuriyeti",
    ],
  },
  {
    name: {
      common: "Tuvalu",
      official: "Tuvalu",
      nativeName: {
        eng: { official: "Tuvalu", common: "Tuvalu" },
        tvl: { official: "Tuvalu", common: "Tuvalu" },
      },
    },
    cca2: "TV",
    capital: ["Funafuti"],
    altSpellings: ["TV"],
  },
  {
    name: {
      common: "Iran",
      official: "Islamic Republic of Iran",
      nativeName: { fas: { official: "جمهوری اسلامی ایران", common: "ایران" } },
    },
    cca2: "IR",
    capital: ["Tehran"],
    altSpellings: [
      "IR",
      "Islamic Republic of Iran",
      "Iran, Islamic Republic of",
      "Jomhuri-ye Eslāmi-ye Irān",
    ],
  },
  {
    name: {
      common: "Egypt",
      official: "Arab Republic of Egypt",
      nativeName: { ara: { official: "جمهورية مصر العربية", common: "مصر" } },
    },
    cca2: "EG",
    capital: ["Cairo"],
    altSpellings: ["EG", "Arab Republic of Egypt"],
  },
  {
    name: {
      common: "Denmark",
      official: "Kingdom of Denmark",
      nativeName: {
        dan: { official: "Kongeriget Danmark", common: "Danmark" },
      },
    },
    cca2: "DK",
    capital: ["Copenhagen"],
    altSpellings: ["DK", "Danmark", "Kingdom of Denmark", "Kongeriget Danmark"],
  },
  {
    name: {
      common: "Kenya",
      official: "Republic of Kenya",
      nativeName: {
        eng: { official: "Republic of Kenya", common: "Kenya" },
        swa: { official: "Republic of Kenya", common: "Kenya" },
      },
    },
    cca2: "KE",
    capital: ["Nairobi"],
    altSpellings: ["KE", "Republic of Kenya", "Jamhuri ya Kenya"],
  },
  {
    name: {
      common: "Bulgaria",
      official: "Republic of Bulgaria",
      nativeName: {
        bul: { official: "Република България", common: "България" },
      },
    },
    cca2: "BG",
    capital: ["Sofia"],
    altSpellings: ["BG", "Republic of Bulgaria", "Република България"],
  },
  {
    name: {
      common: "Zimbabwe",
      official: "Republic of Zimbabwe",
      nativeName: {
        bwg: { official: "Republic of Zimbabwe", common: "Zimbabwe" },
        eng: { official: "Republic of Zimbabwe", common: "Zimbabwe" },
        kck: { official: "Republic of Zimbabwe", common: "Zimbabwe" },
        khi: { official: "Republic of Zimbabwe", common: "Zimbabwe" },
        ndc: { official: "Republic of Zimbabwe", common: "Zimbabwe" },
        nde: { official: "Republic of Zimbabwe", common: "Zimbabwe" },
        nya: { official: "Republic of Zimbabwe", common: "Zimbabwe" },
        sna: { official: "Republic of Zimbabwe", common: "Zimbabwe" },
        sot: { official: "Republic of Zimbabwe", common: "Zimbabwe" },
        toi: { official: "Republic of Zimbabwe", common: "Zimbabwe" },
        tsn: { official: "Republic of Zimbabwe", common: "Zimbabwe" },
        tso: { official: "Republic of Zimbabwe", common: "Zimbabwe" },
        ven: { official: "Republic of Zimbabwe", common: "Zimbabwe" },
        xho: { official: "Republic of Zimbabwe", common: "Zimbabwe" },
        zib: { official: "Republic of Zimbabwe", common: "Zimbabwe" },
      },
    },
    cca2: "ZW",
    capital: ["Harare"],
    altSpellings: ["ZW", "Republic of Zimbabwe"],
  },
  {
    name: {
      common: "Angola",
      official: "Republic of Angola",
      nativeName: {
        por: { official: "República de Angola", common: "Angola" },
      },
    },
    cca2: "AO",
    capital: ["Luanda"],
    altSpellings: ["AO", "República de Angola", "ʁɛpublika de an'ɡɔla"],
  },
  {
    name: {
      common: "Nigeria",
      official: "Federal Republic of Nigeria",
      nativeName: {
        eng: { official: "Federal Republic of Nigeria", common: "Nigeria" },
      },
    },
    cca2: "NG",
    capital: ["Abuja"],
    altSpellings: ["NG", "Nijeriya", "Naíjíríà", "Federal Republic of Nigeria"],
  },
  {
    name: {
      common: "Poland",
      official: "Republic of Poland",
      nativeName: {
        pol: { official: "Rzeczpospolita Polska", common: "Polska" },
      },
    },
    cca2: "PL",
    capital: ["Warsaw"],
    altSpellings: ["PL", "Republic of Poland", "Rzeczpospolita Polska"],
  },
  {
    name: {
      common: "Senegal",
      official: "Republic of Senegal",
      nativeName: {
        fra: { official: "République du Sénégal", common: "Sénégal" },
      },
    },
    cca2: "SN",
    capital: ["Dakar"],
    altSpellings: ["SN", "Republic of Senegal", "République du Sénégal"],
  },
  {
    name: {
      common: "Saint Helena, Ascension and Tristan da Cunha",
      official: "Saint Helena, Ascension and Tristan da Cunha",
      nativeName: {
        eng: {
          official: "Saint Helena, Ascension and Tristan da Cunha",
          common: "Saint Helena, Ascension and Tristan da Cunha",
        },
      },
    },
    cca2: "SH",
    capital: ["Jamestown"],
    altSpellings: [
      "Saint Helena",
      "St. Helena, Ascension and Tristan da Cunha",
    ],
  },
  {
    name: {
      common: "Lebanon",
      official: "Lebanese Republic",
      nativeName: {
        ara: { official: "الجمهورية اللبنانية", common: "لبنان" },
        fra: { official: "République libanaise", common: "Liban" },
      },
    },
    cca2: "LB",
    capital: ["Beirut"],
    altSpellings: ["LB", "Lebanese Republic", "Al-Jumhūrīyah Al-Libnānīyah"],
  },
  {
    name: {
      common: "Samoa",
      official: "Independent State of Samoa",
      nativeName: {
        eng: { official: "Independent State of Samoa", common: "Samoa" },
        smo: { official: "Malo Saʻoloto Tutoʻatasi o Sāmoa", common: "Sāmoa" },
      },
    },
    cca2: "WS",
    capital: ["Apia"],
    altSpellings: [
      "WS",
      "Independent State of Samoa",
      "Malo Saʻoloto Tutoʻatasi o Sāmoa",
    ],
  },
  {
    name: {
      common: "Philippines",
      official: "Republic of the Philippines",
      nativeName: {
        eng: { official: "Republic of the Philippines", common: "Philippines" },
        fil: { official: "Republic of the Philippines", common: "Pilipinas" },
      },
    },
    cca2: "PH",
    capital: ["Manila"],
    altSpellings: [
      "PH",
      "Republic of the Philippines",
      "Repúblika ng Pilipinas",
    ],
  },
  {
    name: {
      common: "Guernsey",
      official: "Bailiwick of Guernsey",
      nativeName: {
        eng: { official: "Bailiwick of Guernsey", common: "Guernsey" },
        fra: { official: "Bailliage de Guernesey", common: "Guernesey" },
        nfr: { official: "Dgèrnésiais", common: "Dgèrnésiais" },
      },
    },
    cca2: "GG",
    capital: ["St. Peter Port"],
    altSpellings: ["GG", "Bailiwick of Guernsey", "Bailliage de Guernesey"],
  },
  {
    name: {
      common: "El Salvador",
      official: "Republic of El Salvador",
      nativeName: {
        spa: { official: "República de El Salvador", common: "El Salvador" },
      },
    },
    cca2: "SV",
    capital: ["San Salvador"],
    altSpellings: ["SV", "Republic of El Salvador", "República de El Salvador"],
  },
  {
    name: {
      common: "Kuwait",
      official: "State of Kuwait",
      nativeName: { ara: { official: "دولة الكويت", common: "الكويت" } },
    },
    cca2: "KW",
    capital: ["Kuwait City"],
    altSpellings: ["KW", "State of Kuwait", "Dawlat al-Kuwait"],
  },
  {
    name: {
      common: "Tonga",
      official: "Kingdom of Tonga",
      nativeName: {
        eng: { official: "Kingdom of Tonga", common: "Tonga" },
        ton: { official: "Kingdom of Tonga", common: "Tonga" },
      },
    },
    cca2: "TO",
    capital: ["Nuku'alofa"],
    altSpellings: ["TO"],
  },
  {
    name: {
      common: "Oman",
      official: "Sultanate of Oman",
      nativeName: { ara: { official: "سلطنة عمان", common: "عمان" } },
    },
    cca2: "OM",
    capital: ["Muscat"],
    altSpellings: ["OM", "Sultanate of Oman", "Salṭanat ʻUmān"],
  },
  {
    name: {
      common: "Afghanistan",
      official: "Islamic Republic of Afghanistan",
      nativeName: {
        prs: { official: "جمهوری اسلامی افغانستان", common: "افغانستان" },
        pus: { official: "د افغانستان اسلامي جمهوریت", common: "افغانستان" },
        tuk: {
          official: "Owganystan Yslam Respublikasy",
          common: "Owganystan",
        },
      },
    },
    cca2: "AF",
    capital: ["Kabul"],
    altSpellings: ["AF", "Afġānistān"],
  },
  {
    name: {
      common: "Saint Kitts and Nevis",
      official: "Federation of Saint Christopher and Nevis",
      nativeName: {
        eng: {
          official: "Federation of Saint Christopher and Nevis",
          common: "Saint Kitts and Nevis",
        },
      },
    },
    cca2: "KN",
    capital: ["Basseterre"],
    altSpellings: ["KN", "Federation of Saint Christopher and Nevis"],
  },
  {
    name: {
      common: "Central African Republic",
      official: "Central African Republic",
      nativeName: {
        fra: {
          official: "République centrafricaine",
          common: "République centrafricaine",
        },
        sag: { official: "Ködörösêse tî Bêafrîka", common: "Bêafrîka" },
      },
    },
    cca2: "CF",
    capital: ["Bangui"],
    altSpellings: [
      "CF",
      "Central African Republic",
      "République centrafricaine",
    ],
  },
  {
    name: {
      common: "Serbia",
      official: "Republic of Serbia",
      nativeName: { srp: { official: "Република Србија", common: "Србија" } },
    },
    cca2: "RS",
    capital: ["Belgrade"],
    altSpellings: [
      "RS",
      "Srbija",
      "Republic of Serbia",
      "Република Србија",
      "Republika Srbija",
    ],
  },
  {
    name: {
      common: "Armenia",
      official: "Republic of Armenia",
      nativeName: {
        hye: { official: "Հայաստանի Հանրապետություն", common: "Հայաստան" },
      },
    },
    cca2: "AM",
    capital: ["Yerevan"],
    altSpellings: [
      "AM",
      "Hayastan",
      "Republic of Armenia",
      "Հայաստանի Հանրապետություն",
    ],
  },
  {
    name: {
      common: "Bangladesh",
      official: "People's Republic of Bangladesh",
      nativeName: {
        ben: { official: "বাংলাদেশ গণপ্রজাতন্ত্রী", common: "বাংলাদেশ" },
      },
    },
    cca2: "BD",
    capital: ["Dhaka"],
    altSpellings: [
      "BD",
      "People's Republic of Bangladesh",
      "Gônôprôjatôntri Bangladesh",
    ],
  },
  {
    name: {
      common: "Laos",
      official: "Lao People's Democratic Republic",
      nativeName: {
        lao: { official: "ສາທາລະນະ ຊາທິປະໄຕ ຄົນລາວ ຂອງ", common: "ສປປລາວ" },
      },
    },
    cca2: "LA",
    capital: ["Vientiane"],
    altSpellings: [
      "LA",
      "Lao",
      "Lao People's Democratic Republic",
      "Sathalanalat Paxathipatai Paxaxon Lao",
    ],
  },
  {
    name: {
      common: "Chile",
      official: "Republic of Chile",
      nativeName: { spa: { official: "República de Chile", common: "Chile" } },
    },
    cca2: "CL",
    capital: ["Santiago"],
    altSpellings: ["CL", "Republic of Chile", "República de Chile"],
  },
  {
    name: {
      common: "French Polynesia",
      official: "French Polynesia",
      nativeName: {
        fra: { official: "Polynésie française", common: "Polynésie française" },
      },
    },
    cca2: "PF",
    capital: ["Papeetē"],
    altSpellings: [
      "PF",
      "Polynésie française",
      "French Polynesia",
      "Pōrīnetia Farāni",
    ],
  },
  {
    name: {
      common: "Panama",
      official: "Republic of Panama",
      nativeName: {
        spa: { official: "República de Panamá", common: "Panamá" },
      },
    },
    cca2: "PA",
    capital: ["Panama City"],
    altSpellings: ["PA", "Republic of Panama", "República de Panamá"],
  },
  {
    name: {
      common: "United States",
      official: "United States of America",
      nativeName: {
        eng: { official: "United States of America", common: "United States" },
      },
    },
    cca2: "US",
    capital: ["Washington, D.C."],
    altSpellings: ["US", "USA", "United States of America"],
  },
  {
    name: {
      common: "Nepal",
      official: "Federal Democratic Republic of Nepal",
      nativeName: {
        nep: { official: "नेपाल संघीय लोकतान्त्रिक गणतन्त्र", common: "नेपाल" },
      },
    },
    cca2: "NP",
    capital: ["Kathmandu"],
    altSpellings: [
      "NP",
      "Federal Democratic Republic of Nepal",
      "Loktāntrik Ganatantra Nepāl",
    ],
  },
  {
    name: {
      common: "Myanmar",
      official: "Republic of the Union of Myanmar",
      nativeName: {
        mya: {
          official: "ပြည်ထောင်စု သမ္မတ မြန်မာနိုင်ငံတော်",
          common: "မြန်မာ",
        },
      },
    },
    cca2: "MM",
    capital: ["Naypyidaw"],
    altSpellings: [
      "MM",
      "Burma",
      "Republic of the Union of Myanmar",
      "Pyidaunzu Thanmăda Myăma Nainngandaw",
    ],
  },
  {
    name: {
      common: "Falkland Islands",
      official: "Falkland Islands",
      nativeName: {
        eng: { official: "Falkland Islands", common: "Falkland Islands" },
      },
    },
    cca2: "FK",
    capital: ["Stanley"],
    altSpellings: ["FK", "Islas Malvinas", "Falkland Islands (Malvinas)"],
  },
  {
    name: {
      common: "Hungary",
      official: "Hungary",
      nativeName: { hun: { official: "Magyarország", common: "Magyarország" } },
    },
    cca2: "HU",
    capital: ["Budapest"],
    altSpellings: ["HU"],
  },
  {
    name: {
      common: "Palau",
      official: "Republic of Palau",
      nativeName: {
        eng: { official: "Republic of Palau", common: "Palau" },
        pau: { official: "Beluu er a Belau", common: "Belau" },
      },
    },
    cca2: "PW",
    capital: ["Ngerulmud"],
    altSpellings: ["PW", "Republic of Palau", "Beluu er a Belau"],
  },
  {
    name: {
      common: "Equatorial Guinea",
      official: "Republic of Equatorial Guinea",
      nativeName: {
        fra: {
          official: "République de la Guinée Équatoriale",
          common: "Guinée équatoriale",
        },
        por: {
          official: "República da Guiné Equatorial",
          common: "Guiné Equatorial",
        },
        spa: {
          official: "República de Guinea Ecuatorial",
          common: "Guinea Ecuatorial",
        },
      },
    },
    cca2: "GQ",
    capital: ["Malabo"],
    altSpellings: [
      "GQ",
      "Republic of Equatorial Guinea",
      "República de Guinea Ecuatorial",
      "République de Guinée équatoriale",
      "República da Guiné Equatorial",
    ],
  },
  {
    name: {
      common: "Guinea",
      official: "Republic of Guinea",
      nativeName: {
        fra: { official: "République de Guinée", common: "Guinée" },
      },
    },
    cca2: "GN",
    capital: ["Conakry"],
    altSpellings: ["GN", "Republic of Guinea", "République de Guinée"],
  },
  {
    name: {
      common: "United Arab Emirates",
      official: "United Arab Emirates",
      nativeName: {
        ara: {
          official: "الإمارات العربية المتحدة",
          common: "دولة الإمارات العربية المتحدة",
        },
      },
    },
    cca2: "AE",
    capital: ["Abu Dhabi"],
    altSpellings: ["AE", "UAE", "Emirates"],
  },
  {
    name: {
      common: "Turks and Caicos Islands",
      official: "Turks and Caicos Islands",
      nativeName: {
        eng: {
          official: "Turks and Caicos Islands",
          common: "Turks and Caicos Islands",
        },
      },
    },
    cca2: "TC",
    capital: ["Cockburn Town"],
    altSpellings: ["TC"],
  },
  {
    name: {
      common: "British Virgin Islands",
      official: "Virgin Islands",
      nativeName: {
        eng: { official: "Virgin Islands", common: "British Virgin Islands" },
      },
    },
    cca2: "VG",
    capital: ["Road Town"],
    altSpellings: ["VG", "Virgin Islands, British"],
  },
  {
    name: {
      common: "Liechtenstein",
      official: "Principality of Liechtenstein",
      nativeName: {
        deu: { official: "Fürstentum Liechtenstein", common: "Liechtenstein" },
      },
    },
    cca2: "LI",
    capital: ["Vaduz"],
    altSpellings: [
      "LI",
      "Principality of Liechtenstein",
      "Fürstentum Liechtenstein",
    ],
  },
  {
    name: {
      common: "Bosnia and Herzegovina",
      official: "Bosnia and Herzegovina",
      nativeName: {
        bos: { official: "Bosna i Hercegovina", common: "Bosna i Hercegovina" },
        hrv: { official: "Bosna i Hercegovina", common: "Bosna i Hercegovina" },
        srp: { official: "Боснa и Херцеговина", common: "Боснa и Херцеговина" },
      },
    },
    cca2: "BA",
    capital: ["Sarajevo"],
    altSpellings: ["BA", "Bosnia-Herzegovina", "Босна и Херцеговина"],
  },
  {
    name: {
      common: "Malawi",
      official: "Republic of Malawi",
      nativeName: {
        eng: { official: "Republic of Malawi", common: "Malawi" },
        nya: {
          official: "Chalo cha Malawi, Dziko la Malaŵi",
          common: "Malaŵi",
        },
      },
    },
    cca2: "MW",
    capital: ["Lilongwe"],
    altSpellings: ["MW", "Republic of Malawi"],
  },
  {
    name: {
      common: "Bhutan",
      official: "Kingdom of Bhutan",
      nativeName: { dzo: { official: "འབྲུག་རྒྱལ་ཁབ་", common: "འབྲུག་ཡུལ་" } },
    },
    cca2: "BT",
    capital: ["Thimphu"],
    altSpellings: ["BT", "Kingdom of Bhutan"],
  },
  {
    name: {
      common: "Cameroon",
      official: "Republic of Cameroon",
      nativeName: {
        eng: { official: "Republic of Cameroon", common: "Cameroon" },
        fra: { official: "République du Cameroun", common: "Cameroun" },
      },
    },
    cca2: "CM",
    capital: ["Yaoundé"],
    altSpellings: ["CM", "Republic of Cameroon", "République du Cameroun"],
  },
  {
    name: {
      common: "Andorra",
      official: "Principality of Andorra",
      nativeName: {
        cat: { official: "Principat d'Andorra", common: "Andorra" },
      },
    },
    cca2: "AD",
    capital: ["Andorra la Vella"],
    altSpellings: ["AD", "Principality of Andorra", "Principat d'Andorra"],
  },
  {
    name: {
      common: "Guadeloupe",
      official: "Guadeloupe",
      nativeName: { fra: { official: "Guadeloupe", common: "Guadeloupe" } },
    },
    cca2: "GP",
    capital: ["Basse-Terre"],
    altSpellings: ["GP", "Gwadloup"],
  },
  {
    name: {
      common: "Republic of the Congo",
      official: "Republic of the Congo",
      nativeName: {
        fra: { official: "République du Congo", common: "République du Congo" },
        kon: { official: "Repubilika ya Kongo", common: "Repubilika ya Kongo" },
        lin: { official: "Republíki ya Kongó", common: "Republíki ya Kongó" },
      },
    },
    cca2: "CG",
    capital: ["Brazzaville"],
    altSpellings: ["CG", "Congo", "Congo-Brazzaville"],
  },
  {
    name: {
      common: "Réunion",
      official: "Réunion Island",
      nativeName: {
        fra: { official: "Ile de la Réunion", common: "La Réunion" },
      },
    },
    cca2: "RE",
    capital: ["Saint-Denis"],
    altSpellings: ["RE", "Reunion"],
  },
  {
    name: {
      common: "Burkina Faso",
      official: "Burkina Faso",
      nativeName: {
        fra: { official: "République du Burkina", common: "Burkina Faso" },
      },
    },
    cca2: "BF",
    capital: ["Ouagadougou"],
    altSpellings: ["BF"],
  },
  {
    name: {
      common: "Jordan",
      official: "Hashemite Kingdom of Jordan",
      nativeName: {
        ara: { official: "المملكة الأردنية الهاشمية", common: "الأردن" },
      },
    },
    cca2: "JO",
    capital: ["Amman"],
    altSpellings: [
      "JO",
      "Hashemite Kingdom of Jordan",
      "al-Mamlakah al-Urdunīyah al-Hāshimīyah",
    ],
  },
  {
    name: {
      common: "DR Congo",
      official: "Democratic Republic of the Congo",
      nativeName: {
        fra: {
          official: "République démocratique du Congo",
          common: "RD Congo",
        },
        kon: {
          official: "Repubilika ya Kongo Demokratiki",
          common: "Repubilika ya Kongo Demokratiki",
        },
        lin: {
          official: "Republiki ya Kongó Demokratiki",
          common: "Republiki ya Kongó Demokratiki",
        },
        lua: {
          official: "Ditunga dia Kongu wa Mungalaata",
          common: "Ditunga dia Kongu wa Mungalaata",
        },
        swa: {
          official: "Jamhuri ya Kidemokrasia ya Kongo",
          common: "Jamhuri ya Kidemokrasia ya Kongo",
        },
      },
    },
    cca2: "CD",
    capital: ["Kinshasa"],
    altSpellings: [
      "CD",
      "DR Congo",
      "Congo-Kinshasa",
      "Congo, the Democratic Republic of the",
      "DRC",
    ],
  },
  {
    name: {
      common: "Tokelau",
      official: "Tokelau",
      nativeName: {
        eng: { official: "Tokelau", common: "Tokelau" },
        smo: { official: "Tokelau", common: "Tokelau" },
        tkl: { official: "Tokelau", common: "Tokelau" },
      },
    },
    cca2: "TK",
    capital: ["Fakaofo"],
    altSpellings: ["TK"],
  },
  {
    name: {
      common: "Vietnam",
      official: "Socialist Republic of Vietnam",
      nativeName: {
        vie: {
          official: "Cộng hòa xã hội chủ nghĩa Việt Nam",
          common: "Việt Nam",
        },
      },
    },
    cca2: "VN",
    capital: ["Hanoi"],
    altSpellings: [
      "VN",
      "Socialist Republic of Vietnam",
      "Cộng hòa Xã hội chủ nghĩa Việt Nam",
      "Viet Nam",
    ],
  },
  {
    name: {
      common: "Sint Maarten",
      official: "Sint Maarten",
      nativeName: {
        eng: { official: "Sint Maarten", common: "Sint Maarten" },
        fra: { official: "Saint-Martin", common: "Saint-Martin" },
        nld: { official: "Sint Maarten", common: "Sint Maarten" },
      },
    },
    cca2: "SX",
    capital: ["Philipsburg"],
    altSpellings: ["SX", "Sint Maarten (Dutch part)"],
  },
  {
    name: {
      common: "Belgium",
      official: "Kingdom of Belgium",
      nativeName: {
        deu: { official: "Königreich Belgien", common: "Belgien" },
        fra: { official: "Royaume de Belgique", common: "Belgique" },
        nld: { official: "Koninkrijk België", common: "België" },
      },
    },
    cca2: "BE",
    capital: ["Brussels"],
    altSpellings: [
      "BE",
      "België",
      "Belgie",
      "Belgien",
      "Belgique",
      "Kingdom of Belgium",
      "Koninkrijk België",
      "Royaume de Belgique",
      "Königreich Belgien",
    ],
  },
  {
    name: {
      common: "United States Minor Outlying Islands",
      official: "United States Minor Outlying Islands",
      nativeName: {
        eng: {
          official: "United States Minor Outlying Islands",
          common: "United States Minor Outlying Islands",
        },
      },
    },
    cca2: "UM",
    capital: ["Washington DC"],
    altSpellings: ["UM"],
  },
  {
    name: {
      common: "Brazil",
      official: "Federative Republic of Brazil",
      nativeName: {
        por: { official: "República Federativa do Brasil", common: "Brasil" },
      },
    },
    cca2: "BR",
    capital: ["Brasília"],
    altSpellings: [
      "BR",
      "Brasil",
      "Federative Republic of Brazil",
      "República Federativa do Brasil",
    ],
  },
  {
    name: {
      common: "Belize",
      official: "Belize",
      nativeName: {
        bjz: { official: "Belize", common: "Belize" },
        eng: { official: "Belize", common: "Belize" },
        spa: { official: "Belice", common: "Belice" },
      },
    },
    cca2: "BZ",
    capital: ["Belmopan"],
    altSpellings: ["BZ"],
  },
  {
    name: {
      common: "Antigua and Barbuda",
      official: "Antigua and Barbuda",
      nativeName: {
        eng: { official: "Antigua and Barbuda", common: "Antigua and Barbuda" },
      },
    },
    cca2: "AG",
    capital: ["Saint John's"],
    altSpellings: ["AG"],
  },
  {
    name: {
      common: "Paraguay",
      official: "Republic of Paraguay",
      nativeName: {
        grn: { official: "Tetã Paraguái", common: "Paraguái" },
        spa: { official: "República de Paraguay", common: "Paraguay" },
      },
    },
    cca2: "PY",
    capital: ["Asunción"],
    altSpellings: [
      "PY",
      "Republic of Paraguay",
      "República del Paraguay",
      "Tetã Paraguái",
    ],
  },
  {
    name: {
      common: "Benin",
      official: "Republic of Benin",
      nativeName: { fra: { official: "République du Bénin", common: "Bénin" } },
    },
    cca2: "BJ",
    capital: ["Porto-Novo"],
    altSpellings: ["BJ", "Republic of Benin", "République du Bénin"],
  },
  {
    name: {
      common: "Brunei",
      official: "Nation of Brunei, Abode of Peace",
      nativeName: {
        msa: {
          official: "Nation of Brunei, Abode Damai",
          common: "Negara Brunei Darussalam",
        },
      },
    },
    cca2: "BN",
    capital: ["Bandar Seri Begawan"],
    altSpellings: [
      "BN",
      "Brunei Darussalam",
      "Nation of Brunei",
      "the Abode of Peace",
    ],
  },
  {
    name: {
      common: "Bolivia",
      official: "Plurinational State of Bolivia",
      nativeName: {
        aym: { official: "Wuliwya Suyu", common: "Wuliwya" },
        grn: { official: "Tetã Volívia", common: "Volívia" },
        que: { official: "Buliwya Mamallaqta", common: "Buliwya" },
        spa: { official: "Estado Plurinacional de Bolivia", common: "Bolivia" },
      },
    },
    cca2: "BO",
    capital: ["Sucre"],
    altSpellings: [
      "BO",
      "Buliwya",
      "Wuliwya",
      "Bolivia, Plurinational State of",
      "Plurinational State of Bolivia",
      "Estado Plurinacional de Bolivia",
      "Buliwya Mamallaqta",
      "Wuliwya Suyu",
      "Tetã Volívia",
    ],
  },
  {
    name: {
      common: "Djibouti",
      official: "Republic of Djibouti",
      nativeName: {
        ara: { official: "جمهورية جيبوتي", common: "جيبوتي‎" },
        fra: { official: "République de Djibouti", common: "Djibouti" },
      },
    },
    cca2: "DJ",
    capital: ["Djibouti"],
    altSpellings: [
      "DJ",
      "Jabuuti",
      "Gabuuti",
      "Republic of Djibouti",
      "République de Djibouti",
      "Gabuutih Ummuuno",
      "Jamhuuriyadda Jabuuti",
    ],
  },
  {
    name: {
      common: "French Guiana",
      official: "Guiana",
      nativeName: { fra: { official: "Guyane", common: "Guyane française" } },
    },
    cca2: "GF",
    capital: ["Cayenne"],
    altSpellings: ["GF", "Guiana", "Guyane"],
  },
  {
    name: {
      common: "Canada",
      official: "Canada",
      nativeName: {
        eng: { official: "Canada", common: "Canada" },
        fra: { official: "Canada", common: "Canada" },
      },
    },
    cca2: "CA",
    capital: ["Ottawa"],
    altSpellings: ["CA"],
  },
  {
    name: {
      common: "Saint Pierre and Miquelon",
      official: "Saint Pierre and Miquelon",
      nativeName: {
        fra: {
          official: "Collectivité territoriale de Saint-Pierre-et-Miquelon",
          common: "Saint-Pierre-et-Miquelon",
        },
      },
    },
    cca2: "PM",
    capital: ["Saint-Pierre"],
    altSpellings: [
      "PM",
      "Collectivité territoriale de Saint-Pierre-et-Miquelon",
    ],
  },
  {
    name: {
      common: "Japan",
      official: "Japan",
      nativeName: { jpn: { official: "日本", common: "日本" } },
    },
    cca2: "JP",
    capital: ["Tokyo"],
    altSpellings: ["JP", "Nippon", "Nihon"],
  },
  {
    name: {
      common: "Rwanda",
      official: "Republic of Rwanda",
      nativeName: {
        eng: { official: "Republic of Rwanda", common: "Rwanda" },
        fra: { official: "République rwandaise", common: "Rwanda" },
        kin: { official: "Repubulika y'u Rwanda", common: "Rwanda" },
      },
    },
    cca2: "RW",
    capital: ["Kigali"],
    altSpellings: [
      "RW",
      "Republic of Rwanda",
      "Repubulika y'u Rwanda",
      "République du Rwanda",
    ],
  },
  {
    name: {
      common: "Saint Vincent and the Grenadines",
      official: "Saint Vincent and the Grenadines",
      nativeName: {
        eng: {
          official: "Saint Vincent and the Grenadines",
          common: "Saint Vincent and the Grenadines",
        },
      },
    },
    cca2: "VC",
    capital: ["Kingstown"],
    altSpellings: ["VC"],
  },
  {
    name: {
      common: "Iceland",
      official: "Iceland",
      nativeName: { isl: { official: "Ísland", common: "Ísland" } },
    },
    cca2: "IS",
    capital: ["Reykjavik"],
    altSpellings: ["IS", "Island", "Republic of Iceland", "Lýðveldið Ísland"],
  },
  {
    name: {
      common: "Belarus",
      official: "Republic of Belarus",
      nativeName: {
        bel: { official: "Рэспубліка Беларусь", common: "Белару́сь" },
        rus: { official: "Республика Беларусь", common: "Беларусь" },
      },
    },
    cca2: "BY",
    capital: ["Minsk"],
    altSpellings: [
      "BY",
      "Bielaruś",
      "Republic of Belarus",
      "Белоруссия",
      "Республика Белоруссия",
    ],
  },
  {
    name: {
      common: "Hong Kong",
      official:
        "Hong Kong Special Administrative Region of the People's Republic of China",
      nativeName: {
        eng: {
          official:
            "Hong Kong Special Administrative Region of the People's Republic of China",
          common: "Hong Kong",
        },
        zho: { official: "中华人民共和国香港特别行政区", common: "香港" },
      },
    },
    cca2: "HK",
    capital: ["City of Victoria"],
    altSpellings: ["HK"],
  },
  {
    name: {
      common: "Lesotho",
      official: "Kingdom of Lesotho",
      nativeName: {
        eng: { official: "Kingdom of Lesotho", common: "Lesotho" },
        sot: { official: "Kingdom of Lesotho", common: "Lesotho" },
      },
    },
    cca2: "LS",
    capital: ["Maseru"],
    altSpellings: ["LS", "Kingdom of Lesotho", "Muso oa Lesotho"],
  },
  {
    name: {
      common: "Fiji",
      official: "Republic of Fiji",
      nativeName: {
        eng: { official: "Republic of Fiji", common: "Fiji" },
        fij: { official: "Matanitu Tugalala o Viti", common: "Viti" },
        hif: { official: "रिपब्लिक ऑफ फीजी", common: "फिजी" },
      },
    },
    cca2: "FJ",
    capital: ["Suva"],
    altSpellings: [
      "FJ",
      "Viti",
      "Republic of Fiji",
      "Matanitu ko Viti",
      "Fijī Gaṇarājya",
    ],
  },
  {
    name: {
      common: "Austria",
      official: "Republic of Austria",
      nativeName: {
        bar: { official: "Republik Österreich", common: "Österreich" },
      },
    },
    cca2: "AT",
    capital: ["Vienna"],
    altSpellings: ["AT", "Osterreich", "Oesterreich"],
  },
  {
    name: {
      common: "Colombia",
      official: "Republic of Colombia",
      nativeName: {
        spa: { official: "República de Colombia", common: "Colombia" },
      },
    },
    cca2: "CO",
    capital: ["Bogotá"],
    altSpellings: ["CO", "Republic of Colombia", "República de Colombia"],
  },
  {
    name: {
      common: "Gabon",
      official: "Gabonese Republic",
      nativeName: {
        fra: { official: "République gabonaise", common: "Gabon" },
      },
    },
    cca2: "GA",
    capital: ["Libreville"],
    altSpellings: ["GA", "Gabonese Republic", "République Gabonaise"],
  },
  {
    name: {
      common: "Saudi Arabia",
      official: "Kingdom of Saudi Arabia",
      nativeName: {
        ara: {
          official: "المملكة العربية السعودية",
          common: "العربية السعودية",
        },
      },
    },
    cca2: "SA",
    capital: ["Riyadh"],
    altSpellings: [
      "Saudi",
      "SA",
      "Kingdom of Saudi Arabia",
      "Al-Mamlakah al-‘Arabiyyah as-Su‘ūdiyyah",
    ],
  },
  {
    name: {
      common: "South Georgia",
      official: "South Georgia and the South Sandwich Islands",
      nativeName: {
        eng: {
          official: "South Georgia and the South Sandwich Islands",
          common: "South Georgia",
        },
      },
    },
    cca2: "GS",
    capital: ["King Edward Point"],
    altSpellings: ["GS", "South Georgia and the South Sandwich Islands"],
  },
  {
    name: {
      common: "Ethiopia",
      official: "Federal Democratic Republic of Ethiopia",
      nativeName: {
        amh: { official: "የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ", common: "ኢትዮጵያ" },
      },
    },
    cca2: "ET",
    capital: ["Addis Ababa"],
    altSpellings: [
      "ET",
      "ʾĪtyōṗṗyā",
      "Federal Democratic Republic of Ethiopia",
      "የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ",
    ],
  },
  {
    name: {
      common: "Caribbean Netherlands",
      official: "Bonaire, Sint Eustatius and Saba",
      nativeName: {
        nld: {
          official: "Bonaire, Sint Eustatius en Saba",
          common: "Caribisch Nederland",
        },
        pap: {
          official: "Boneiru, Sint Eustatius y Saba",
          common: "Boneiru, Sint Eustatius y Saba",
        },
      },
    },
    cca2: "BQ",
    capital: ["Kralendijk"],
    altSpellings: ["BES islands"],
  },
  {
    name: {
      common: "Monaco",
      official: "Principality of Monaco",
      nativeName: {
        fra: { official: "Principauté de Monaco", common: "Monaco" },
      },
    },
    cca2: "MC",
    capital: ["Monaco"],
    altSpellings: ["MC", "Principality of Monaco", "Principauté de Monaco"],
  },
  {
    name: {
      common: "North Korea",
      official: "Democratic People's Republic of Korea",
      nativeName: {
        kor: { official: "조선민주주의인민공화국", common: "조선" },
      },
    },
    cca2: "KP",
    capital: ["Pyongyang"],
    altSpellings: [
      "KP",
      "Democratic People's Republic of Korea",
      "DPRK",
      "조선민주주의인민공화국",
      "Chosŏn Minjujuŭi Inmin Konghwaguk",
      "Korea, Democratic People's Republic of",
      "북한",
      "북조선",
    ],
  },
  {
    name: {
      common: "Italy",
      official: "Italian Republic",
      nativeName: {
        ita: { official: "Repubblica italiana", common: "Italia" },
      },
    },
    cca2: "IT",
    capital: ["Rome"],
    altSpellings: ["IT", "Italian Republic", "Repubblica italiana"],
  },
  {
    name: {
      common: "Namibia",
      official: "Republic of Namibia",
      nativeName: {
        afr: { official: "Republiek van Namibië", common: "Namibië" },
        deu: { official: "Republik Namibia", common: "Namibia" },
        eng: { official: "Republic of Namibia", common: "Namibia" },
        her: { official: "Republic of Namibia", common: "Namibia" },
        hgm: { official: "Republic of Namibia", common: "Namibia" },
        kwn: { official: "Republic of Namibia", common: "Namibia" },
        loz: { official: "Republic of Namibia", common: "Namibia" },
        ndo: { official: "Republic of Namibia", common: "Namibia" },
        tsn: { official: "Lefatshe la Namibia", common: "Namibia" },
      },
    },
    cca2: "NA",
    capital: ["Windhoek"],
    altSpellings: ["NA", "Namibië", "Republic of Namibia"],
  },
  {
    name: {
      common: "Mongolia",
      official: "Mongolia",
      nativeName: { mon: { official: "Монгол улс", common: "Монгол улс" } },
    },
    cca2: "MN",
    capital: ["Ulan Bator"],
    altSpellings: ["MN"],
  },
  {
    name: {
      common: "Solomon Islands",
      official: "Solomon Islands",
      nativeName: {
        eng: { official: "Solomon Islands", common: "Solomon Islands" },
      },
    },
    cca2: "SB",
    capital: ["Honiara"],
    altSpellings: ["SB"],
  },
  {
    name: {
      common: "Yemen",
      official: "Republic of Yemen",
      nativeName: { ara: { official: "الجمهورية اليمنية", common: "اليَمَن" } },
    },
    cca2: "YE",
    capital: ["Sana'a"],
    altSpellings: ["YE", "Yemeni Republic", "al-Jumhūriyyah al-Yamaniyyah"],
  },
  {
    name: {
      common: "Romania",
      official: "Romania",
      nativeName: { ron: { official: "România", common: "România" } },
    },
    cca2: "RO",
    capital: ["Bucharest"],
    altSpellings: ["RO", "Rumania", "Roumania", "România"],
  },
  {
    name: {
      common: "Svalbard and Jan Mayen",
      official: "Svalbard og Jan Mayen",
      nativeName: {
        nor: {
          official: "Svalbard og Jan Mayen",
          common: "Svalbard og Jan Mayen",
        },
      },
    },
    cca2: "SJ",
    capital: ["Longyearbyen"],
    altSpellings: ["SJ", "Svalbard and Jan Mayen Islands"],
  },
  {
    name: {
      common: "France",
      official: "French Republic",
      nativeName: {
        fra: { official: "République française", common: "France" },
      },
    },
    cca2: "FR",
    capital: ["Paris"],
    altSpellings: ["FR", "French Republic", "République française"],
  },
];
