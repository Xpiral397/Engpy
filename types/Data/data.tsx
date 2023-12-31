const Countries: {[key: string]: string[]} = {
    "A": ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan'],
    "B": ['Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi'],
    "C": ['Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic of the', 'Congo, Republic of the', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic'],
    "D": ['Denmark', 'Djibouti', 'Dominica', 'Dominican Republic'],
    "E": ['Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia'],
    "F": ['Fiji', 'Finland', 'France'],
    "G": ['Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana'],
    "H": ['Haiti', 'Honduras', 'Hungary'],
    "I": ['Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy'],
    "J": ['Jamaica', 'Japan', 'Jordan'],
    "K": ['Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo', 'Kuwait', 'Kyrgyzstan'],
    "L": ['Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg'],
    "M": ['Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar'],
    "N": ['Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway'],
    "O": ['Oman'],
    "P": ['Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal'],
    'Q': ['Qatar'],
    'R': ['Romania', 'Russia', 'Rwanda'],
    'S': ['Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria'],
    'T': ['Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu'],
    'U': ['Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan'],
    'V': ['Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam'],
    'Y': ['Yemen'],
    'Z': ['Zambia', 'Zimbabwe']
};

const African: {[key: string]: string} = {
    'Algeria': '+213',
    'Angola': '+244',
    'Benin': '+229',
    'Botswana': '+267',
    'Burkina Faso': '+226',
    'Burundi': '+257',
    'Cabo Verde': '+238',
    'Cameroon': '+237',
    'Central African Republic': '+236',
    'Chad': '+235',
    'Comoros': '+269',
    'Congo, Democratic Republic of the': '+243',
    'Congo, Republic of the': '+242',
    'Cote d\'Ivoire': '+225',
    'Djibouti': '+253',
    'Egypt': '+20',
    'Equatorial Guinea': '+240',
    'Eritrea': '+291',
    'Eswatini': '+268',
    'Ethiopia': '+251',
    'Gabon': '+241',
    'Gambia': '+220',
    'Ghana': '+233',
    'Guinea': '+224',
    'Guinea-Bissau': '+245',
    'Kenya': '+254',
    'Lesotho': '+266',
    'Liberia': '+231',
    'Libya': '+218',
    'Madagascar': '+261',
    'Malawi': '+265',
    'Mali': '+223',
    'Mauritania': '+222',
    'Mauritius': '+230',
    'Morocco': '+212',
    'Mozambique': '+258',
    'Namibia': '+264',
    'Niger': '+227',
    'Nigeria': '+234',
    'Rwanda': '+250',
    'Sao Tome and Principe': '+239',
    'Senegal': '+221',
    'Seychelles': '+248',
    'Sierra Leone': '+232',
    'Somalia': '+252',
    'South Africa': '+27',
    'South Sudan': '+211',
    'Sudan': '+249',
    'Tanzania': '+255',
    'Togo': '+228',
    'Tunisia': '+216',
    'Uganda': '+256',
    'Zambia': '+260',
    'Zimbabwe': '+263'
};


const Asia: {[key: string]: string} = {
    'Afghanistan': '+93',
    'Armenia': '+374',
    'Azerbaijan': '+994',
    'Bahrain': '+973',
    'Bangladesh': '+880',
    'Bhutan': '+975',
    'Brunei': '+673',
    'Cambodia': '+855',
    'China': '+86',
    'Georgia': '+995',
    'India': '+91',
    'Indonesia': '+62',
    'Iran': '+98',
    'Iraq': '+964',
    'Israel': '+972',
    'Japan': '+81',
    'Jordan': '+962',
    'Kazakhstan': '+7',
    'Kuwait': '+965',
    'Kyrgyzstan': '+996',
    'Laos': '+856',
    'Lebanon': '+961',
    'Malaysia': '+60',
    'Maldives': '+960',
    'Mongolia': '+976',
    'Myanmar': '+95',
    'Nepal': '+977',
    'North Korea': '+850',
    'Oman': '+968',
    'Pakistan': '+92',
    'Palestine': '+970',
    'Philippines': '+63',
    'Qatar': '+974',
    'Saudi Arabia': '+966',
    'Singapore': '+65',
    'South Korea': '+82',
    'Sri Lanka': '+94',
    'Syria': '+963',
    'Taiwan': '+886',
    'Tajikistan': '+992',
    'Thailand': '+66',
    'Timor-Leste': '+670',
    'Turkey': '+90',
    'Turkmenistan': '+993',
    'United Arab Emirates': '+971',
    'Uzbekistan': '+998',
    'Vietnam': '+84',
    'Yemen': '+967'
};


const Australian: {[key: string]: string} = {
    'Australia': '+61',
    'Fiji': '+679',
    'Kiribati': '+686',
    'Marshall Islands': '+692',
    'Micronesia': '+691',
    'Nauru': '+674',
    'New Zealand': '+64',
    'Palau': '+680',
    'Papua New Guinea': '+675',
    'Samoa': '+685',
    'Solomon Islands': '+677',
    'Tonga': '+676',
    'Tuvalu': '+688',
    'Vanuatu': '+678'


}


const NorthAmerican: {[key: string]: string} = {
    AntiguaAndBarbuda: '+1-268',
    Bahamas: '+1-242',
    Barbados: '+1-246',
    Belize: '+501',
    Canada: '+1',
    CostaRica: '+506',
    Cuba: '+53',
    Dominica: '+1-767',
    DominicanRepublic: '+1-809, +1-829, +1-849',
    ElSalvador: '+503',
    Grenada: '+1-473',
    Guatemala: '+502',
    Haiti: '+509',
    Honduras: '+504',
    Jamaica: '+1-876',
    Mexico: '+52',
    Nicaragua: '+505',
    Panama: '+507',
    SaintKittsAndNevis: '+1-869',
    SaintLucia: '+1-758',
    SaintVincentAndTheGrenadines: '+1-784',
    TrinidadAndTobago: '+1-868',
    UnitedStates: '+1',
};




const Oceanian: {[key: string]: string} = {
    'Australia': '+61',
    'Fiji': '+679',
    'Kiribati': '+686',
    'Marshall Islands': '+692',
    'Micronesia': '+691',
    'Nauru': '+674',
    'New Zealand': '+64',
    'Palau': '+680',
    'Papua New Guinea': '+675',
    'Samoa': '+685',
    'Solomon Islands': '+677',
    'Tonga': '+676',
    'Tuvalu': '+688',
    'Vanuatu': '+678'
    // Add more Oceanian countries here
}


const SouthAmerican: {[key: string]: string} = {
    'Argentina': '+54',
    'Bolivia': '+591',
    'Brazil': '+55',
    'Chile': '+56',
    'Colombia': '+57',
    'Ecuador': '+593',
    'Guyana': '+592',
    'Paraguay': '+595',
    'Peru': '+51',
    'Suriname': '+597',
    'Uruguay': '+598',
    'Venezuela': '+58'
    // Add more South American countries here
};

export {
    African,
    SouthAmerican,
    Oceanian,
    NorthAmerican,
    Australian,
    Asia,
    Countries
}
