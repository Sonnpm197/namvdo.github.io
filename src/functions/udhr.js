const LANGUAGE_URLS = {
    // Major UN Languages
    'ara': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/arz.pdf', // Arabic
    'eng': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/eng.pdf', // English
    'fra': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/frn.pdf', // French
    'rus': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/rus.pdf', // Russian
    'spa': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/spn.pdf', // Spanish
    'cmn': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/chn.pdf', // Chinese (Mandarin)

    // Other Major Languages
    'hin': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/hin.pdf', // Hindi
    'ben': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/bng.pdf', // Bengali
    'por': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/por.pdf', // Portuguese
    'jpn': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/jpn.pdf', // Japanese
    'deu': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/ger.pdf', // German
    'jav': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/jav.pdf', // Javanese
    'kor': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/kor.pdf', // Korean
    'vie': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/vie.pdf', // Vietnamese
    'tel': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/tel.pdf', // Telugu
    'mar': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/mar.pdf', // Marathi
    'tam': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/tam.pdf', // Tamil
    'tur': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/trk.pdf', // Turkish
    'ita': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/itn.pdf', // Italian
    'tha': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/thj.pdf', // Thai
    
    // European Languages
    'bul': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/blg.pdf', // Bulgarian
    'ces': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/czc.pdf', // Czech
    'dan': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/dns.pdf', // Danish
    'nld': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/dut.pdf', // Dutch
    'est': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/est.pdf', // Estonian
    'fin': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/fin.pdf', // Finnish
    'ell': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/grk.pdf', // Greek
    'hun': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/hng.pdf', // Hungarian
    'isl': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/ice.pdf', // Icelandic
    'gle': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/gai.pdf', // Irish
    'lav': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/lat.pdf', // Latvian
    'lit': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/lit.pdf', // Lithuanian
    'nor': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/nrr.pdf', // Norwegian
    'pol': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/pql.pdf', // Polish
    'ron': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/rum.pdf', // Romanian
    'slk': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/slo.pdf', // Slovak
    'slv': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/slv.pdf', // Slovenian
    'swe': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/swd.pdf', // Swedish
    
    // Asian Languages
    'aze': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/azb.pdf', // Azerbaijani
    'hye': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/arm.pdf', // Armenian
    'kat': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/geo.pdf', // Georgian
    'kaz': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/kaz.pdf', // Kazakh
    'kir': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/kdo.pdf', // Kyrgyz
    'mon': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/mng.pdf', // Mongolian
    'tgk': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/tgk.pdf', // Tajik
    'tuk': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/tck.pdf', // Turkmen
    'uzb': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/uzb.pdf', // Uzbek
    
    // African Languages
    'amh': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/amh.pdf', // Amharic
    'hau': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/hau.pdf', // Hausa
    'ibo': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/ibo.pdf', // Igbo
    'yor': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/yor.pdf', // Yoruba
    'zul': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/zuu.pdf', // Zulu
    'swa': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/swa.pdf', // Swahili
    
    // Middle Eastern Languages
    'fas': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/prs.pdf', // Persian
    'heb': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/hbr.pdf', // Hebrew
    'kur': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/kdb.pdf', // Kurdish
    'urd': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/urd.pdf', // Urdu
    
    // Southeast Asian Languages
    'khm': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/khm.pdf', // Khmer
    'lao': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/lao.pdf', // Lao
    'mya': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/bms.pdf', // Burmese
    'ind': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/inz.pdf', // Indonesian
    'msa': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/mly.pdf', // Malay
    'fil': 'https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/tgl.pdf', // Filipino
};

// Language names mapping for display
const LANGUAGE_NAMES = {
    'ara': 'Arabic',
    'eng': 'English',
    'fra': 'French',
    'rus': 'Russian',
    'spa': 'Spanish',
    'cmn': 'Chinese (Mandarin)',
    'hin': 'Hindi',
    'ben': 'Bengali',
    'por': 'Portuguese',
    'jpn': 'Japanese',
    'deu': 'German',
    'jav': 'Javanese',
    'kor': 'Korean',
    'vie': 'Vietnamese',
    'tel': 'Telugu',
    'mar': 'Marathi',
    'tam': 'Tamil',
    'tur': 'Turkish',
    'ita': 'Italian',
    'tha': 'Thai',
    'bul': 'Bulgarian',
    'ces': 'Czech',
    'dan': 'Danish',
    'nld': 'Dutch',
    'est': 'Estonian',
    'fin': 'Finnish',
    'ell': 'Greek',
    'hun': 'Hungarian',
    'isl': 'Icelandic',
    'gle': 'Irish',
    'lav': 'Latvian',
    'lit': 'Lithuanian',
    'nor': 'Norwegian',
    'pol': 'Polish',
    'ron': 'Romanian',
    'slk': 'Slovak',
    'slv': 'Slovenian',
    'swe': 'Swedish',
    'aze': 'Azerbaijani',
    'hye': 'Armenian',
    'kat': 'Georgian',
    'kaz': 'Kazakh',
    'kir': 'Kyrgyz',
    'mon': 'Mongolian',
    'tgk': 'Tajik',
    'tuk': 'Turkmen',
    'uzb': 'Uzbek',
    'amh': 'Amharic',
    'hau': 'Hausa',
    'ibo': 'Igbo',
    'yor': 'Yoruba',
    'zul': 'Zulu',
    'swa': 'Swahili',
    'fas': 'Persian',
    'heb': 'Hebrew',
    'kur': 'Kurdish',
    'urd': 'Urdu',
    'khm': 'Khmer',
    'lao': 'Lao',
    'mya': 'Burmese',
    'ind': 'Indonesian',
    'msa': 'Malay',
    'fil': 'Filipino'
};

export { LANGUAGE_URLS, LANGUAGE_NAMES };