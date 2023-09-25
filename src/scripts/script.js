const yearDropdown = $('#year');
const makeDropdown = $('#make');
const modelDropdown = $('#model');

// Form reset
ResetForm();

// Start adding data here.....
const carData = {

    1985: {
        'Nissan': ['240SX', '300ZX', 'Truck', 'Maxima', 'Pathfinder', 'Pulsar', 'Sentra',],
        'Lincoln': [ 'Conitinental', 'Mark VII', 'Town Car', ],
        'Buick': ['Century', 'Electra', 'Le sabre', 'Regal','Rivera','Skyhawk','Skylark', 'Somerset'],
        'Chevy': ['Astro','Blazer','Cavalier','CK','Camaro','S10','Suburban','Caprice Classic','G-Series','Corvette','El Camino','Monte Carlo','Nova','Celebrity','Citation'],
        'BMW': [ '3-Series',  '7-Series', '6-Series', ],
        'Chrysler': ['Executive', 'Fifth Avenue', 'Laser', 'LeBaron', 'New Yorker', ],
        'Acura': [ 'Intergra', 'Legend',  ],
        'Cadillac': ['Cimarron', 'DeVille', 'Eldorado', 'Fleetwood', 'Seville', ],
        'Honda': ['Accord', 'CRX', 'Civic', 'Prelude', ],
        'Jeep': ['CJ-8', 'J-Series' ],
        'Mazda': ['626', 'B-Series', 'GLC', 'RX7' ],
        'Dodge': ['600', 'Aries', 'B-Series', 'Caravan', 'Charger', 'Colt', 'Conquest', 'D150', 'Daytona', 'Diplomat', 'Lancer', 'Mini Ram Van', 'Omni', 'Ram 50', 'Ramcharger'],
        'GMC': [ 'Jimmy', 'Savana', 'Sierra', 'Suburban', ],
        'Ford': ['Bronco', 'EXP', 'Excort', 'F-Series', 'LTD', 'Mustang', 'Tempo', 'Thunderbird',  'Probe', ],
        'Toyota': ['4Runner', 'Supra', 'Mr-2', 'Previa', 'T100', 'Camry', 'Corolla', 'Land Cruiser',  ],
    },
    1986: {
        'Nissan': ['240SX', '300ZX', 'Truck', 'Maxima', 'Pathfinder', 'Pulsar', 'Sentra',],
        'Lincoln': [ 'Conitinental', 'Mark VII', 'Town Car', ],
        'Buick': ['Century', 'Electra', 'Le sabre', 'Regal','Rivera','Skyhawk','Skylark','Somerset'],
        'Chevy': ['Astro','Blazer','Cavalier','CK','Camaro','S10','Suburban','Caprice Sedan','G-Series','Corvette','El Camino','Monte Carlo','Nova','Celebrity'],
        'BMW': [ '3-Series',  '7-Series', '6-Series', ],
        'Hyundai': ['Excel', ],
        'Chrysler': ['Executive', 'Fifth Avenue', 'LeBaron', 'New Yorker', ],
        'Acura': [ 'Intergra', 'Legend',  ],
        'Cadillac': ['Cimarron', 'DeVille', 'Eldorado', 'Fleetwood', 'Seville', ],
        'Honda': ['Accord', 'CRX', 'Civic', 'Prelude', ],
        'Jeep': ['Comanche', 'J-Series' ],
        'Mazda': ['323', '626', 'B-Series', 'RX7' ],
        'Dodge': ['600', 'Aries', 'B-Series', 'Caravan', 'Charger', 'Colt', 'Conquest', 'D150', 'Daytona', 'Diplomat', 'Lancer', 'Mini Ram Van', 'Omni', 'Ram 50', 'Ramcharger'],
        'GMC': [ 'Jimmy', 'Savana', 'Sierra', 'Suburban', ],
        'Ford': ['Bronco', 'EXP', 'Excort', 'F-Series', 'LTD', 'Mustang', 'Tempo', 'Thunderbird',  'Probe', 'Ranger', 'Taurus', ],
        'Toyota': ['4Runner', 'Supra', 'Mr-2', 'Previa', 'T100', 'Camry', 'Corolla', 'Land Cruiser',  ],
    },
    1987: {
        'Nissan': ['200SX', '300ZX', 'Truck', 'Maxima', 'Pathfinder', 'Pulsar', 'Sentra',],
        'Lincoln': [ 'Conitinental', 'Mark VII', 'Town Car', ],
        'Buick': ['Century', 'Electra', 'Le sabre', 'Regal','Rivera','Skyhawk','Skylark','Somerset'],
        'Chevy': ['Astro','Beretta','Blazer','Cavalier','Camaro','S10','Suburban','Caprice Sedan','G-Series','Corisca','Corvette','Monte Carlo','Nova',],
        'BMW': [ '3-Series',  '7-Series', '6-Series', ],
        'Hyundai': ['Excel', ],
        'Chrysler': ['Conquest', 'Fifth Avenue', 'LeBaron', 'New Yorker', ],
        'Acura': [ 'Intergra', 'Legend',  ],
        'Cadillac': ['Allante', 'Brougham', 'DeVille', 'Eldorado', 'Fleetwood', 'Seville', ],
        'Honda': ['Accord', 'CRX', 'Civic', 'Prelude', ],
        'Jeep': ['Comanche', 'J-Series' ],
        'Mazda': ['323', '626', 'B-Series', 'RX7' ],
        'Dodge': ['600', 'Aries', 'B-Series', 'Caravan', 'Charger', 'Colt', 'D150','Dakota', 'Daytona', 'Diplomat', 'Lancer', 'Mini Ram Van', 'Omni','Raider','Ram 50', 'Ramcharger', 'Shadow'],
        'GMC': [ 'Jimmy', 'Savana', 'Sierra', 'Suburban', ],
        'Ford': ['Bronco', 'EXP', 'Excort', 'F-Series', 'LTD', 'Mustang', 'Tempo', 'Thunderbird',  'Probe', 'Ranger', 'Taurus', ],
        'Toyota': ['4Runner', 'Supra', 'Mr-2', 'Previa', 'T100', 'Camry', 'Corolla', 'Land Cruiser',  ],
    },
    1988: {
        'Nissan': ['240SX', '300ZX', 'Truck', 'Maxima', 'Pathfinder', 'Pulsar', 'Sentra',],
        'Lincoln': [ 'Conitinental', 'Mark VII', 'Town Car', ],
        'Buick': ['Century', 'Electra', 'Le sabre', 'Regal','Rivera','Skyhawk','Skylark'],
        'Chevy': ['Astro','Beretta','Blazer','C/K','Cavalier','Camaro','S10','Suburban','Caprice Sedan','G-Series','Corisca','Corvette','Monte Carlo','Nova','Celebrity',],
        'BMW': [ '3-Series',  '7-Series', '6-Series', 'Z1'],
        'Hyundai': ['Excel', ],
        'Chrysler': ['Conquest', 'Fifth Avenue', 'LeBaron', 'New Yorker', ],
        'Acura': [ 'Intergra', 'Legend',  ],
        'Cadillac': ['Allante', 'Brougham', 'DeVille', 'Eldorado', 'Fleetwood', 'Seville', ],
        'Honda': ['Accord', 'CRX', 'Civic', 'Prelude', ],
        'Jeep': ['Comanche'],
        'Mazda': ['323', '626', 'B-Series', 'MPV', 'MX', 'RX7' ],
        'Dodge': ['600', 'Aries', 'B-Series', 'Caravan', 'Colt', 'D150','Dakota', 'Daytona', 'Diplomat', 'Dynasty', 'Lancer', 'Mini Ram Van', 'Omni','Raider','Ram 50', 'Ramcharger', 'Shadow'],
        'GMC': [ 'Jimmy', 'Savana', 'Sierra', 'Suburban', ],
        'Ford': ['Bronco', 'EXP', 'Excort', 'F-Series', 'LTD', 'Mustang', 'Tempo', 'Thunderbird',  'Probe', 'Ranger', 'Taurus', 'Aerostar' ],
        'Toyota': ['4Runner', 'Supra', 'Mr-2', 'Previa', 'T100', 'Camry', 'Corolla', 'Land Cruiser', ],
    },
    1989: {
        'Nissan': ['240SX', '300ZX', 'Truck', 'Maxima', 'Pathfinder', 'Sentra',],
        'Lincoln': [ 'Conitinental', 'Mark VII', 'Town Car', ],
        'Buick': ['Century', 'Electra', 'Le sabre', 'Reatta','Regal','Rivera','Skyhawk','Skylark'],
        'Chevy': ['Astro','Beretta','Blazer','C/K','Cavalier','Camaro','S10','Suburban','Caprice Sedan','G-Series','Corisca','Corvette'],
        'BMW': [ '3-Series',  '7-Series', '6-Series', 'Z1'],
        'Hyundai': ['Excel', 'Scoupe', 'Sonata', ],
        'Chrysler': ['Conquest', 'Fifth Avenue', 'LeBaron', 'TC', 'New Yorker', ],
        'Acura': [ 'Intergra', 'Legend',  ],
        'Cadillac': ['Allante', 'Brougham', 'DeVille', 'Eldorado', 'Fleetwood', 'Seville', ],
        'Honda': ['Accord', 'CRX', 'Civic', 'Prelude', ],
        'Jeep': ['Comanche'],
        'Mazda': ['323', '626', '929', 'B-Series', 'MPV', 'MX', 'Miata', 'RX7' ],
        'Dodge': ['Aries', 'B-Series', 'Caravan', 'Colt', 'D150','Dakota', 'Daytona', 'Diplomat', 'Dynasty', 'Lancer', 'Omni','Raider','Ram 50', 'Ramcharger', 'Shadow', 'Spirit', 'Viper'],
        'GMC': [ 'Jimmy', 'Sierra', 'Suburban', ],
        'Ford': ['Bronco', 'EXP', 'Excort', 'F-Series', 'LTD', 'Mustang', 'Tempo', 'Thunderbird',  'Probe', 'Ranger', 'Taurus', 'Aerostar' ],
        'Toyota': ['4Runner', 'Supra', 'Mr-2', 'Previa', 'T100', 'Camry', 'Corolla', 'Land Cruiser',  ],
    },
    1990: {
        'Nissan': ['240SX', '300ZX', 'Truck', 'Maxima', 'Pathfinder', 'Sentra',],
        'Lincoln': [ 'Conitinental', 'Mark VII', 'Town Car', ],
        'Buick': ['Century', 'Electra', 'Le sabre', 'Reatta','Regal','Rivera','Skylark'],
        'Chevy': ['Astro','Beretta','Blazer','C/K','Cavalier','Camaro','Lumina','S10','Suburban','Caprice Sedan','G-Series','Corisca','Corvette'],
        'BMW': [ '3-Series',  '7-Series', '8-Series', 'Z1'],
        'Hyundai': ['Excel', 'Scoupe', 'Sonata', ],
        'Chrysler': ['Imperial', 'LeBaron', 'New Yorker', 'TC', 'Town&Country', ],
        'Acura': [ 'Intergra', 'Legend',  ],
        'Cadillac': ['Allante', 'Brougham', 'DeVille', 'Eldorado', 'Fleetwood', 'Seville', ],
        'Honda': ['Accord', 'CRX', 'Civic', 'Prelude', ],
        'Jeep': ['Comanche'],
        'Mazda': ['323', '626', '929', 'B-Series', 'MPV', 'MX', 'Miata', 'Navajo', 'Protege', 'RX7' ],
        'Dodge': ['B-Series', 'Caravan', 'Colt', 'D150','Dakota', 'Daytona', 'Dynasty','Monaco', 'Omni','Raider','Ram 50', 'Ramcharger', 'Shadow', 'Spirit',],
        'GMC': [ 'Jimmy', 'Savana', 'Sierra', 'Suburban', ],
        'Ford': ['Bronco', 'EXP', 'Excort', 'F-Series', 'LTD', 'Mustang', 'Tempo', 'Thunderbird',  'Probe', 'Ranger', 'Taurus', 'Aerostar' ],
        'Toyota': ['4Runner', 'Supra', 'Previa', 'T100', 'Camry', 'Corolla', 'Land Cruiser',  ],
    },
    1991: {
        'Nissan': ['240SX', '300ZX', 'Truck', 'Maxima', 'Pathfinder', 'Sentra',],
        'Lincoln': [ 'Conitinental', 'Mark VII', 'Town Car', ],
        'Buick': ['Century','Park Avenue','Le sabre', 'Reatta','Regal','Roadster','Rivera','Skylark'],
        'Chevy': ['Astro','Beretta','Blazer','C/K','Cavalier','Camaro','Lumina','S10','Suburban','Caprice Sedan','G-Series','Corisca','Corvette'],
        'BMW': [ '3-Series',  '7-Series', '8-Series', 'Z1'],
        'Hyundai': ['Excel', 'Scoupe', 'Sonata', ],
        'Chrysler': ['Imperial', 'LeBaron', 'New Yorker', 'TC', 'Town&Country', ],
        'Acura': [ 'Intergra', 'Legend', 'NSX',  ],
        'Cadillac': ['Allante', 'Brougham', 'DeVille', 'Eldorado', 'Fleetwood', 'Seville', ],
        'Honda': ['Accord', 'CRX', 'Civic', 'Prelude', ],
        'Jeep': ['Comanche'],
        'Mazda': ['323', '626', '929', 'B-Series', 'MPV', 'MX', 'Miata', 'Navajo', 'Protege', 'RX7' ],
        'Dodge': ['B-Series', 'Caravan', 'Colt', 'D150','Dakota', 'Daytona', 'Dynasty','Monaco','Ram 50', 'Ramcharger', 'Shadow', 'Spirit','Stealth'],
        'GMC': [ 'Jimmy', 'Savana', 'Sierra', 'Suburban', ],
        'Ford': ['Bronco', 'EXP', 'Excort', 'F-Series', 'LTD', 'Mustang', 'Tempo', 'Thunderbird',  'Probe', 'Ranger', 'Taurus', 'Aerostar' ],
        'Toyota': ['4Runner', 'Supra', 'Previa', 'T100', 'Tercel', 'Camry', 'Corolla', 'Land Cruiser',  'Rav4', 'Tacoma', ],
    },
    1992: {
        'Nissan': ['240SX', '300ZX', 'Truck', 'Maxima', 'Pathfinder', 'Sentra', 'Stanza' ],
        'Lincoln': [ 'Conitinental', 'Mark VII', 'Town Car', ],
        'Buick': ['Century','Park Avenue','Le sabre','Regal','Roadster','Rivera','Skylark'],
        'Chevy': ['Astro','Beretta','Blazer','C/K','Cavalier','Camaro','Lumina','S10','Suburban','Caprice Sedan','G-Series','Corisa','Corvette'],
        'BMW': [ '3-Series',  '7-Series', '8-Series',],
        'Hyundai': ['Excel', 'Elantra', 'Scoupe', 'Sonata', ],
        'Chrysler': ['Imperial', 'LeBaron', 'New Yorker', 'Town&Country', ],
        'Acura': [ 'Intergra', 'Legend', 'NSX', 'Vigor' ],
        'Cadillac': ['Allante', 'Brougham', 'DeVille', 'Eldorado', 'Fleetwood', 'Seville', ],
        'Honda': ['Accord', 'Civic', 'Prelude', ],
        'Jeep': ['Comanche'],
        'Mazda': ['323', '626', '929', 'B-Series', 'MPV', 'MX', 'Miata', 'Navajo', 'Protege', 'RX7' ],
        'Dodge': ['B-Series', 'Caravan', 'Colt', 'D150','Dakota', 'Daytona', 'Dynasty','Monaco', 'Omni','Raider','Ram 50', 'Ramcharger', 'Shadow', 'Spirit',],
        'GMC': [ 'Jimmy', 'Savana', 'Sierra', 'Suburban', ],
        'Ford': ['Bronco', 'EXP', 'Excort', 'F-Series', 'Crown Victoria', 'Mustang', 'Tempo', 'Thunderbird',  'Probe', 'Ranger', 'Taurus', 'Aerostar' ],
        'Toyota': ['4Runner', 'Avalon', 'Supra', 'Previa', 'T100', 'Tercel', 'Camry', 'Corolla', 'Highlander', 'Land Cruiser',  'Rav4', 'Sequoia', 'Tacoma', ],
    },
    1993: {
        'Nissan': ['240SX', '300ZX', 'Altima', 'Truck', 'Maxima', 'Pathfinder', 'Quest', 'Sentra', ],
        'Lincoln': [ 'Conitinental', 'Mark VIII', 'Town Car', ],
        'Buick': ['Century','Park Avenue','Le sabre','Regal','Roadster','Rivera','Skylark'],
        'Chevy': ['Astro','Beretta','Blazer','C/K','Cavalier','Camaro','Lumina','Corvette','S10','Suburban','Caprice Sedan','G-Series','Corisa'],
        'BMW': [ '3-Series',  '7-Series', '8-Series',],
        'Hyundai': ['Excel', 'Elantra', 'Scoupe', 'Sonata', ],
        'Chrysler': ['Concorde', 'Imperial', 'LeBaron', 'New Yorker', 'Town&Country', ],
        'Acura': [ 'Intergra', 'Legend', 'NSX', 'Vigor' ],
        'Cadillac': ['Allante', 'DeVille', 'Eldorado', 'Fleetwood', 'Seville', ],
        'Honda': ['Accord', 'Civic', 'Prelude', ],
        'Jeep': ['Grand Cherokee'],
        'Mazda': ['323', '626', '929', 'B-Series', 'MPV', 'MX', 'Navajo', 'Protege', 'RX7' ],
        'Dodge': ['B-Series', 'Caravan', 'Colt', 'D150','Dakota', 'Daytona', 'Dynasty','Intrepid','Ram 50', 'Ramcharger', 'Shadow', 'Spirit','Stealth', "Viper"],
        'GMC': [ 'Jimmy', 'Savana', 'Sierra', 'Suburban', ],
        'Ford': ['Bronco', 'EXP', 'Excort', 'F-Series', 'Crown Victoria', 'Mustang', 'Tempo', 'Thunderbird',  'Probe', 'Ranger', 'Taurus', 'Aerostar' ],
        'Toyota': ['4Runner', 'Avalon', 'Supra', 'Previa', 'T100', 'Tercel', 'Camry', 'Corolla', 'Highlander', 'Land Cruiser',  'Rav4', 'Sequoia', 'Tacoma', ],
    },
    1994: {
        'Nissan': ['240SX', '300ZX', 'Altima', 'Truck', 'Maxima', 'Pathfinder', 'Quest', 'Sentra', ],
        'Lincoln': [ 'Conitinental', 'Mark VIII', 'Town Car', ],
        'Buick': ['Century','Park Avenue','Le sabre','Regal','Roadster','Skylark'],
        'Chevy': ['Astro','Beretta','Blazer','C/K','Cavalier','Camaro','Lumina','Corvette','S10','Suburban','Caprice Classic/ Impala','G-Series','Corisa'],
        'BMW': [ '3-Series',  '7-Series', '8-Series',],
        'Hyundai': ['Excel', 'Elantra', 'Scoupe', 'Sonata', ],
        'Chrysler': ['Concorde', 'LHS', 'LeBaron', 'New Yorker', 'Town&Country', ],
        'Acura': [ 'Intergra', 'Legend', 'NSX', 'Vigor' ],
        'Cadillac': ['DeVille', 'Eldorado', 'Fleetwood', 'Seville', ],
        'Honda': ['Accord', 'Civic', 'Passport', 'Prelude', ],
        'Jeep': ['Grand Cherokee'],
        'Mazda': ['323', '626', '929', 'B-Series', 'MPV', 'MX', 'Millenia', 'Protege', 'RX7' ],
        'Dodge': ['B-Series', 'Caravan', 'Colt','Dakota','Expresso', 'Intrepid','Ram 1500', 'Shadow', 'Spirit','Stealth', "Viper"],
        'GMC': ['Envoy', 'Jimmy','Safari', 'Savana', 'Sierra', 'Suburban', 'Yukon', ],
        'Ford':  ['Bronco', 'EXP', 'Excort', 'F-Series', 'Crown Victoria', 'Mustang', 'Tempo', 'Thunderbird',  'Probe', 'Ranger', 'Taurus', 'Aerostar' ],
        'Toyota': ['4Runner', 'Avalon', 'Supra', 'Previa', 'T100', 'Tercel', 'Camry', 'Corolla', 'Highlander', 'Land Cruiser',  'Rav4', 'Sequoia', 'Tacoma', ],
    },
    1995: {
        'Nissan': ['240SX', '300ZX', 'Altima', 'Truck', 'Maxima', 'Pathfinder', 'Quest', 'Sentra', ],
        'Lincoln': [ 'Conitinental', 'Mark VIII', 'Town Car', ],
        'Buick': ['Century','Park Avenue','Le sabre','Regal','Roadster','Riviera','Skylark'],
        'Chevy': ['Astro','Beretta','Blazer','C/K','Cavalier','Camaro','Lumina','Corvette','Monte Carlo','S10','Suburban','Tahoe','Caprice Classic/ Impala','G-Series','Corisa'],
        'BMW': [ '3-Series',  '7-Series', '8-Series',],
        'Hyundai': ['Accent', 'Elantra', 'Sonata', ],
        'Chrysler': ['Cirrus', 'Concorde', 'LHS', 'LeBaron', 'New Yorker', 'Sebring', 'Town&Country', ],
        'Acura': [ 'Intergra', 'Legend', 'NSX', ],
        'Cadillac': ['DeVille', 'Eldorado', 'Fleetwood', 'Seville', ],
        'Honda': ['Accord', 'Civic', 'Odyssey', 'Passport', 'Prelude', ],
        'Jeep': ['Cherokee', 'Grand Cherokee', 'Wrangler'],
        'Mazda': ['626', '929', 'B-Series', 'MPV', 'MX', 'Millenia', 'Protege', 'RX7' ],
        'Dodge': ['Avenger', 'Caravan','Dakota', 'Intrepid','Neon', 'Ram 1500','Ram', 'Spirit','Stealth','Stratus', 'Viper'],
        'GMC': ['Envoy', 'Jimmy','Safari', 'Savana', 'Sierra', 'Suburban', 'Yukon', ],
        'Ford': ['Bronco', 'EXP', 'Excort', 'F-Series', 'Crown Victoria', 'Mustang', 'Tempo', 'Thunderbird',  'Probe', 'Ranger', 'Taurus', 'Aerostar', 'Aspire', 'Contour', 'Windstar' ],
        'Toyota': ['4Runner', 'Avalon', 'Supra', 'T100', 'Tercel', 'Camry', 'Corolla', 'Highlander', 'Land Cruiser',  'Rav4', 'Sequoia', 'Tacoma', ],
    },
    1996: {
        'Nissan': ['240SX', '300ZX', 'Altima', 'Truck', 'Maxima', 'Pathfinder', 'Quest', 'Sentra', ],
        'Lincoln': [ 'Conitinental', 'Mark VIII', 'Town Car', ],
        'Buick': ['Century','Park Avenue','Le sabre','Regal','Roadster','Riviera','Skylark'],
        'Chevy': ['Astro','Beretta','Blazer','C/K','Cavalier','Camaro','Lumina','Corvette','Monte Carlo','S10','Suburban','Tahoe','Caprice Classic/ Impala'],
        'BMW': [ '3-Series',  '7-Series', '8-Series', 'Z3', ],
        'Hyundai': ['Accent', 'Elantra', 'Sonata', 'Tiburon', ],
        'Chrysler': ['Cirrus', 'Concorde', 'LHS', 'New Yorker', 'Sebring', 'Town&Country', ],
        'Acura': [ 'Intergra', 'NSX', 'RL', 'SLX', 'TL', ],
        'Cadillac': ['DeVille', 'Eldorado', 'Fleetwood', 'Seville', ],
        'Honda': ['Accord', 'Civic', 'Odyssey', 'Passport', 'Prelude', ],
        'Jeep': ['Cherokee', 'Grand Cherokee', 'Rubicon'],
        'Mazda': ['626', 'B-Series', 'MPV', 'MX6', 'Millenia', 'Protege',  ],
        'Dodge': ['Avenger', 'Caravan','Dakota', 'Intrepid','Neon', 'Ram 1500','Ram','Stealth','Stratus', 'Viper'],
        'GMC': ['Envoy', 'Jimmy','Safari', 'Savana', 'Sierra', 'Suburban', 'Yukon', ],
        'Ford': ['Bronco', 'Explorer', 'EXP', 'Excort', 'F-Series', 'Crown Victoria', 'Mustang', 'Tempo', 'Thunderbird',  'Probe', 'Ranger', 'Taurus', 'Aerostar', 'Aspire', 'Contour', 'Windstar' ],
        'Toyota': ['4Runner', 'Avalon', 'Supra', 'T100', 'Tercel', 'Camry', 'Corolla', 'Highlander', 'Land Cruiser',  'Rav4', 'Sequoia', 'Tacoma', ],
    },
    1997: {
        'Nissan': ['240SX', 'Altima', 'Truck', 'Maxima', 'Pathfinder', 'Quest', 'Sentra', ],
        'Lincoln': [ 'Conitinental', 'Mark VIII', 'Town Car', ],
        'Buick': ['Century','Park Avenue','Le sabre','Regal','Roadster','Riviera','Skylark'],
        'Chevy': ['Astro','Blazer','C/K','Cavalier','Camaro','Lumina','Corvette','Monte Carlo','S10','Malibu','Suburban','Tahoe','Venture'],
        'BMW': [ '3-Series', '5-Series', '7-Series', '8-Series', 'Z3', ],
        'Hyundai': ['Accent', 'Elantra', 'Sonata', 'Tiburon', ],
        'Chrysler': ['Cirrus', 'Concorde', 'LHS', 'Sebring', 'Town&Country', ],
        'Acura': ['CL', 'Intergra', 'NSX', 'RL', 'SLX', 'TL', ],
        'Cadillac': ['Catera', 'DeVille', 'Eldorado', 'Seville', ],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Odyssey', 'Passport', 'Prelude',  ],
        'Jeep': ['Cherokee', 'Grand Cherokee', 'Wrangler'],
        'Mazda': ['626', 'B-Series', 'MPV', 'MX6', 'Millenia', 'Protege',  ],
        'Dodge': ['Avenger','Caravan','Dakota', 'Intrepid','Neon', 'Ram 1500','Ram','Stratus', 'Viper'],
        'GMC': ['Envoy', 'Jimmy','Safari', 'Savana', 'Sierra', 'Suburban', 'Yukon', ],
        'Ford': ['Bronco', 'Explorer', 'EXP', 'Excort', 'F-Series', 'Crown Victoria', 'Mustang', 'Tempo', 'Thunderbird',  'Probe', 'Ranger', 'Taurus', 'Aerostar', 'Aspire', 'Contour', 'Windstar' ],
        'Toyota': ['4Runner', 'Avalon', 'Supra', 'T100', 'Tercel', 'Camry', 'Corolla', 'Highlander', 'Land Cruiser',  'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', ],
    },
    1998: {
        'Nissan': ['240SX', 'Altima', 'Frontier', 'Maxima', 'Pathfinder', 'Quest', 'Sentra', ],
        'Lincoln': [ 'Conitinental', 'Mark VIII', 'Navigator', 'Town Car', ],
        'Buick': ['Century','Park Avenue','Le sabre','Regal','Riviera'],
        'Chevy': ['Astro','Blazer','C/K','Cavalier','Camaro','Prizm','Corvette','Express','Monte Carlo','S10','Malibu','Suburban','Tahoe','Tracker','Venture'],
        'BMW': [ '3-Series', '5-Series', '7-Series', 'Z3', ],
        'Hyundai': ['Accent', 'Elantra', 'Sonata', 'Tiburon', ],
        'Chrysler': ['Cirrus', 'Concorde', 'Sebring', 'Town&Country', ],
        'Acura': ['CL', 'Intergra', 'NSX', 'RL', 'SLX', 'TL', ],
        'Cadillac': ['Catera', 'DeVille', 'Eldorado', 'Seville', ],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Odyssey', 'Passport', 'Prelude',  ],
        'Jeep': ['Cherokee', 'Grand Cherokee', 'Wrangler'],
        'Mazda': ['B-Series', 'MPV', 'Miata', 'Millenia', 'Protege', ],
        'Dodge': ['Avenger','Caravan','Dakota','Durango', 'Intrepid','Neon', 'Ram 1500','Ram','Stratus', 'Viper'],
        'GMC': ['Envoy', 'Jimmy','Safari', 'Savana', 'Sierra', 'Suburban', 'Yukon', ],
        'Ford': ['Bronco', 'Explorer', 'EXP', 'Excort', 'F-Series', 'Crown Victoria', 'Mustang', 'Tempo', 'Thunderbird',  'Probe', 'Ranger', 'Taurus', 'Aerostar', 'Aspire', 'Contour', 'Windstar' ],
        'Toyota': ['4Runner', 'Avalon', 'Supra', 'T100', 'Tercel', 'Camry', 'Corolla', 'Highlander', 'Land Cruiser',  'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', ],
    },
    1999: {
        'Nissan': ['Altima', 'Frontier', 'Maxima', 'Pathfinder', 'Quest', 'Sentra', ],
        'Lincoln': [ 'Conitinental', 'Mark VIII', 'Navigator', 'Town Car', ],
        'Buick': ['Century','Park Avenue','Le sabre','Regal','Riviera'],
        'Chevy': ['Astro','Blazer','Cavalier','Camaro','Prizm','Corvette','Express','Monte Carlo','Malibu','Silverado','Suburban','Tahoe','Tracker','Venture'],
        'BMW': [ '3-Series', '5-Series', '7-Series', 'Z3', ],
        'Hyundai': ['Accent', 'Elantra', 'Sonata', 'Tiburon', ],
        'Chrysler': ['Cirrus', 'Concorde', 'LHS', 'Sebring', 'Town&Country',  ],
        'Acura': ['CL', 'Intergra', 'NSX', 'SLX', 'TL', ],
        'Cadillac': ['Catera', 'DeVille', 'Eldorado', 'Escalade', 'Seville', ],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Odyssey', 'Passport', 'Prelude',  ],
        'Jeep': ['Cherokee', 'Grand Cherokee', 'Wrangler'],
        'Mazda': ['626', 'B-Series', 'MP3', 'MPV', 'Miata', 'Millenia', 'Protege', ],
        'Dodge': ['Avenger','Caravan','Dakota','Durango', 'Intrepid','Neon', 'Ram 1500','Ram','Stratus', 'Viper'],
        'GMC': ['Envoy', 'Jimmy','Safari', 'Savana', 'Sierra', 'Suburban', 'Yukon', ],
        'Ford': ['Explorer', 'Excort', 'F-Series', 'Crown Victoria', 'Mustang', 'Thunderbird',  'Probe', 'Ranger', 'Taurus', 'Aerostar', 'Expedition', ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Echo', 'Celica', 'Corolla', 'Highlander', 'Land Cruiser',  'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', ],
    },
    2000: {
        'Nissan': ['Frontier', 'Maxima', 'Pathfinder', 'Quest', 'Sentra', 'Xterra' ],
        'Buick': ['Century','Park Avenue','Le sabre','Regal',],
        'Chevy': ['Astro','Blazer','Cavalier','Camaro','Lumina','Prizm','Corvette','S10','Express','Impala','Monte Carlo','Malibu','Silverado','Suburban','Tahoe','Tracker','Venture'],
        'Lincoln': [ 'Conitinental', 'LS', 'Navigator', 'Town Car', ],
        'BMW': [ '3-Series', '5-Series', '7-Series', 'X5', 'Z3', ],
        'Hyundai': ['Accent', 'Elantra', 'Sonata', 'Tiburon', ],
        'Chrysler': ['Cirrus', 'Concorde', 'LHS', 'Sebring', 'Town&Country',  ],
        'Acura': ['Intergra', 'NSX', 'RL', 'TL', ],
        'Cadillac': ['Catera', 'DeVille', 'Eldorado', 'Escalade', 'Seville', ],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Insight', 'Odyssey', 'Passport', 'Prelude', 'S2000' ],
        'Jeep': ['Cherokee', 'Grand Cherokee', 'Wrangler'],
        'Mazda': ['626', 'B-Series', 'MP3', 'MPV', 'Miata', 'Millenia', 'Protege', ],
        'Dodge': ['Avenger','Caravan','Dakota','Durango', 'Intrepid','Neon', 'Ram 1500','Ram','Stratus', 'Viper'],
        'GMC': ['Envoy', 'Jimmy','Safari', 'Savana', 'Sierra', 'Yukon', ],
        'Ford': ['Explorer', 'Excort', 'F-Series', 'Crown Victoria', 'Mustang', 'Thunderbird',  'Ranger', 'Taurus', 'E-van', 'Expedition', 'Excursion', 'Focus' ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Echo', 'MR2 Spyder', 'Celica', 'Corolla', 'Highlander', 'Land Cruiser', 'MR2 Syyder', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra' ],
    },
    2001: {
        'Nissan': ['Frontier', 'Maxima', 'Pathfinder', 'Quest', 'Sentra', 'Xterra' ],
        'Buick': ['Century','Park Avenue','Le sabre','Regal',],
        'Chevy': ['Astro','Blazer','Cavalier','Camaro','Prizm','Metro','Corvette','S10','Express','Impala','Monte Carlo','Malibu','Silverado','Suburban','Tahoe','Tracker'],
        'Lincoln': [ 'Conitinental', 'LS', 'Navigator', 'Town Car', ],
        'BMW': [ '3-Series', '5-Series', '7-Series', 'X5', 'Z3', 'Z8' ],
        'Hyundai': ['Accent', 'Elantra', 'Santa Fe', 'Sonata', 'Tiburon', 'XG300' ],
        'Chrysler': ['300M', 'Concorde', 'LHS', 'PT Cruiser', 'Prowler', 'Sebring', 'Town&Country', 'Voyager' ],
        'Acura': ['CL', 'Intergra', 'MDX', 'NSX', 'RL', 'TL', ],
        'Cadillac': ['Catera', 'DeVille', 'Eldorado', ],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Insight', 'Odyssey', 'Passport', 'Prelude', 'S2000' ],
        'Jeep': ['Cherokee', 'Grand Cherokee', 'Wrangler'],
        'Mazda': ['626', 'B-Series', 'MP3', 'MPV', 'Miata', 'Millenia', 'Protege', 'Tribute' ],
        'Dodge': ['Caravan','Dakota','Durango', 'Intrepid','Neon', 'Ram 1500','Ram','Stratus', 'Viper'],
        'GMC': ['Jimmy','Safari', 'Savana', 'Sierra', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Crown Victoria', 'Mustang', 'Thunderbird', 'Ranger', 'Taurus', 'E-van', 'Contour','Expedition', 'Excursion', 'Focus' ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Echo', 'MR2 Spyder', 'Celica', 'Corolla', 'Highlander', 'Land Cruiser', 'MR2 Syyder', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra' ],
    },
    2002: {
        'Nissan': ['Altima', 'Frontier', 'Maxima', 'Murano', 'Pathfinder', 'Quest', 'Sentra', 'Xterra' ],
        'Buick': ['Century','Park Avenue','Le sabre','Regal','Rendezvous'],
        'Chevy': ['Astro','Avalanche' ,'Blazer','Cavalier','Camaro','Prizm','Corvette','S10','Express','Impala','Monte Carlo','Malibu','SSR','Silverado','Suburban','Tahoe','Trailblazer','Tracker','Venture'],
        'Lincoln': [ 'Blackwood', 'Conitinental', 'LS', 'Navigator', 'Town Car', ],
        'BMW': [ '3-Series', '5-Series', '7-Series', 'X5', 'Z3', 'Z8' ],
        'Hyundai': ['Accent', 'Elantra', 'Santa Fe', 'Sonata', 'Tiburon', 'XG350' ],
        'Chrysler': ['300M', 'Concorde',  'PT Cruiser', 'Prowler', 'Sebring', 'Town&Country', 'Voyager' ],
        'Acura': ['CL', 'MDX', 'NSX', 'RSX', 'RL', 'TL', ],
        'Cadillac': ['Catera', 'DeVille', 'Eldorado', 'Escalade', 'Seville',],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Elemnt', 'Insight', 'Odyssey', 'S2000' ],
        'Jeep': [ 'Grand Cherokee','Liberty', 'Wrangler'],
        'Mazda': ['626', 'B-Series', 'MP3', 'MPV', 'Miata', 'Millenia', 'Protege', 'Tribute' ],
        'Dodge': ['Caravan','Dakota','Durango', 'Intrepid','Neon', 'Ram 1500','Ram','Stratus', 'Viper'],
        'GMC': ['Envoy', 'Safari', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Crown Victoria', 'Mustang', 'Thunderbird', 'Ranger', 'Taurus', 'Expedition', 'Excursion', 'Focus' ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Echo', 'MR2 Spyder', 'Celica', 'Corolla', 'Highlander', 'Land Cruiser', 'MR2 Syyder', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra' ],
    },
    2003: {
        'Nissan': ['350Z', 'Altima', 'Frontier', 'Maxima', 'Murano', 'Pathfinder', 'Sentra', 'Xterra' ],
        'Buick': ['Century','Park Avenue','Le sabre','Regal','Rendezvous'],
        'Chevy': ['Astro','Avalanche' ,'Blazer','Cavalier','Corvette','S10','Express','Impala','Malibu','Monte Carlo','SSR','Silverado','Suburban','Tahoe','Trailblazer','Tracker','Venture'],
        'Lincoln': [ 'Aviator', 'LS', 'Navigator', 'Town Car', ],
        'BMW': [ '3-Series', '5-Series', '7-Series', 'M3', 'M5', 'Z4', ],
        'Hyundai': ['Accent', 'Elantra', 'Santa Fe', 'Sonata', 'Tiburon', 'XG350' ],
        'Chrysler': ['300M', 'Concorde',  'PT Cruiser', 'Sebring', 'Town&Country', 'Voyager' ],
        'Acura': ['CL', 'MDX', 'NSX', 'RSX', 'RL', 'TL', ],
        'Cadillac': ['CTS', 'DeVille', 'Escalade', 'Seville',],
        'Honda': ['Accord', 'CR-V', 'Civic', 'FCX', 'Elemnt', 'Insight', 'Odyssey', 'Pilot', 'S2000' ],
        'Jeep': [ 'Grand Cherokee','Liberty', 'Wrangler'],
        'Mazda': ['B-Series', 'Miata', 'Mazda6', 'MPV', 'Truibut', 'Protege', ],
        'Dodge': ['Caravan','Dakota','Durango', 'Intrepid','Neon', 'Ram 1500', 'Ram 2500/3500','Ram','Sprinter', 'Stratus', 'Viper', ],
        'GMC': ['Canyon', 'Envoy', 'Safari', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Crown Victoria', 'Mustang', 'Thunderbird', 'Ranger', 'Taurus', 'Expedition', 'Excursion', 'Focus', 'Thunderbird', 'Windstar', 'ZX2' ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Celica', 'Corolla', 'FJ Cruiser',  'Highlander', 'Land Cruiser', 'MR2 Spyder', 'Matrix', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra' ],
    },
    2004: {
        'Nissan': ['350Z', 'Altima', 'Armada', 'Frontier', 'Maxima', 'Murano', 'Pathfinder', 'Quest', 'Sentra', 'Titan', 'Xterra' ],
        'Buick': ['Century','Park Avenue','Le sabre','Regal','Rendezvous','Rainier'],
        'Chevy': ['Astro','Avalanche' ,'Aveo','Blazer','Cavalier','Classic','Colorado','Corvette','S10','Express','Impala','Monte Carlo','Malibu','SSR','Silverado','Suburban','Tahoe','Trailblazer','Tracker','Venture'],
        'Lincoln': [ 'Aviator', 'LS', 'Navigator', 'Town Car', ],
        'BMW': [ '3-Series', '5-Series', '6-Series', '7-Series', 'M3', 'X3', 'X5', 'Z4', ],
        'Hyundai': ['Accent', 'Elantra', 'Santa Fe', 'Sonata', 'Tiburon', 'XG350' ],
        'Chrysler': ['300M', 'Concorde', 'Crossfire', 'PT Cruiser', 'Pacifica', 'Sebring', 'Town&Country', ],
        'Acura': ['MDX', 'NSX', 'RSX', 'RL', 'TL', 'TSX', ],
        'Cadillac': ['CTS', 'DeVille', 'Escalade', 'SRX','SLS', 'XLR'],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Elemnt', 'Insight', 'Odyssey', 'Pilot', 'S2000' ],
        'Jeep': [ 'Grand Cherokee','Liberty', 'Wrangler'],
        'Mazda': ['B-Series', 'CX', 'MX-5', 'Mazda5', 'Mazda3', 'Mazda6', 'MPV', 'RX8', 'Truibut', ],
        'Dodge': ['Caravan','Dakota','Durango', 'Intrepid','Neon', 'Ram 1500','Ram 2500/3500','Ram','Sprinter', 'Stratus', 'Viper SRT-10' ],
        'GMC': ['Canyon', 'Envoy', 'Safari', 'Savana', 'Sierra', 'Terrain', 'Sonoma', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Crown Victoria', 'Mustang', 'Thunderbird', 'Ranger', 'Taurus', 'Expedition', 'Excursion', 'Focus', 'Thunderbird', 'Freestar', 'ZX2' ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Celica', 'Corolla', 'FJ Cruiser',  'Highlander', 'Land Cruiser', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', ]
    },
    2005: {
        'Nissan': ['350Z', 'Altima', 'Armada', 'Frontier', 'Maxima', 'Murano', 'Pathfinder', 'Quest', 'Sentra', 'Titan', 'Xterra' ],
        'Buick': ['Century','Park Avenue','Le sabre','Regal','Rendezvous','Rainier','Terraza','LaCrosse'],
        'Chevy': ['Astro','Avalanche' ,'Aveo','Blazer','Cavalier','Cobalt','Colorado','Corvette','Equinox','Express','Impala','Monte Carlo','Malibu','SSR','Silverado','Suburban','Tahoe','Trailblazer', 'Uplander','Venture'],
        'Lincoln': [ 'Aviator', 'LS', 'Navigator', 'Town Car', ],
        'BMW': [ '3-Series', '5-Series', '6-Series', '7-Series', 'M3', 'X3', 'X5', 'Z4', ],
        'Hyundai': ['Accent', 'Elantra', 'Santa Fe', 'Sonata', 'Tiburon', 'Tucson', 'ZG350' ],
        'Chrysler': ['300', 'Crossfire', 'PT Cruiser', 'Pacifica', 'Sebring', 'Town&Country', ],
        'Acura': ['MDX', 'NSX', 'RSX', 'RL', 'TL', 'TSX', ],
        'Cadillac': ['CTS', 'DeVille', 'Escalade', 'SRX','STS', 'XLR'],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Elemnt', 'FCX', 'Insight', 'Odyssey', 'Pilot', 'S2000' ],
        'Jeep': [ 'Grand Cherokee','Liberty', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['B-Series', 'CX', 'MX-5', 'Mazda5', 'Mazda3', 'Mazda6', 'MPV', 'RX8', 'Truibut', ],
        'Dodge': ['Caravan','Dakota','Durango', 'Magnum','Neon', 'Ram 1500','Ram 2500/3500','Sprinter', 'Stratus', 'Viper SRT-10' ],
        'GMC': ['Canyon', 'Envoy', 'Safari', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Crown Victoria', 'Mustang', 'Thunderbird', 'Ranger', 'Taurus', 'Expedition', 'Excursion', 'Focus', 'Thunderbird', 'Freestar', 'ZX2', 'Five Hundred', 'GT' ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Corolla', 'Echo', 'FJ Cruiser',  'Highlander', 'Land Cruiser', 'MR2 Spyder', 'Matrix', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', ]
    },
    2006: {
        'Nissan': ['350Z', 'Altima', 'Armada', 'Frontier', 'Maxima', 'Murano', 'Pathfinder', 'Quest', 'Sentra', 'Titan', 'Xterra' ],
        'Buick': ['Rendezvous','Rainier','Terraza','LaCrosse','Lucerne'],
        'Chevy': ['Avalanche' ,'Aveo','Cobalt','Colorado','Corvette','Equinox','Express','HHR','Kodiak','Monte Carlo','Malibu','SSR','Silverado','Suburban','Tahoe','Trailblazer', 'Uplander',],
        'Lincoln': [ 'LS', 'Mark LT', 'Navigator', 'Town Car', 'Zephyr' ],
        'BMW': [ '3-Series', '5-Series', '6-Series', '7-Series', 'M3', 'M5', 'M6', 'X3', 'X5', 'Z4', ],
        'Hyundai': ['Accent', 'Azera', 'Elantra', 'Santa Fe', 'Sonata', 'Tiburon', 'Tucson', ],
        'Chrysler': ['300', 'PT Cruiser', 'Pacifica', 'Sebring', 'Town&Country', ],
        'Acura': ['MDX', 'RDX', 'RL', 'TL', 'TSX', ],
        'Cadillac': ['CTS', 'DTS', 'Escalade', 'SRX','STS', 'XLR'],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Elemnt', 'FCX', 'Insight', 'Odyssey', 'Pilot', 'Ridgeline', 'S2000' ],
        'Jeep': [ 'Commander', 'Grand Cherokee', 'Liberty', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['B-Series', 'CX', 'MX-5', 'Mazda5', 'Mazda3', 'Mazda6', 'MPV', 'RX8', 'Truibut', ],
        'Dodge': ['Caravan','Charger','Dakota','Durango', 'Magnum','Neon', 'Ram 1500','Ram 2500/3500','Sprinter', 'Stratus', 'Viper' ],
        'GMC': ['Acadia', 'Canyon', 'Envoy', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Crown Victoria', 'Mustang', 'Thunderbird', 'Ranger', 'Taurus', 'Expedition', 'Excursion', 'Focus', 'Thunderbird', 'Freestar', 'ZX2', 'Five Hundred', 'GT', 'Fusion' ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Corolla', 'FJ Cruiser',  'Highlander', 'Land Cruiser', 'Matrix', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', ],
    },
    2007: {
        'Nissan': ['350Z', 'Altima', 'Armada', 'Frontier', 'GTR',  'Maxima', 'Murano', 'Rogue', 'Quest', 'Sentra', 'Titan', 'Versa', 'Xterra' ],
        'Buick': ['Rendezvous','Rainier','Terraza','LaCrosse','Lucerne'],
        'Chevy': ['Avalanche' ,'Aveo','Cobalt','Colorado','Corvette','Equinox','Express','HHR','Impala','Malibu','Silverado','Suburban','Tahoe','Trailblazer', 'Uplander',],
        'Lincoln': ['MKX', 'MKZ', 'Mark LT', 'Navigator', 'Town Car', ],
        'BMW': [ '3-Series', '5-Series', '6-Series', '7-Series', 'M5', 'M6', 'X3', 'X5', 'X6', 'Z4', ],
        'Hyundai': ['Accent', 'Azera', 'Elantra', 'Entourage', 'Santa Fe', 'Sonata', 'Tiburon', 'Tucson', 'Veracruz'],
        'Chrysler': ['300', 'Aspen', 'Crossfire', 'PT Cruiser', 'Pacifica', 'Sebring', 'Town&Country', ],
        'Acura': ['MDX', 'RDX', 'RL', 'TL', 'TSX', ],
        'Cadillac': ['CTS', 'DTS', 'Escalade', 'SRX','STS', 'XLR'],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Elemnt', 'Fit', 'Odyssey', 'Pilot', 'Ridgeline', 'S2000' ],
        'Jeep': [ 'Commander', 'Compass', 'Grand Cherokee', 'Liberty', 'Patriot', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['B-Series', 'CX', 'MX-5', 'Mazda5', 'Mazda3', 'Mazda6', 'RX8', 'Truibut', ],
        'Dodge': ['Caliber','Caravan','Charger','Dakota','Durango', 'Magnum','Nitro', 'Ram 1500','Ram 2500/3500','Sprinter', 'Stratus', 'Viper' ],
        'GMC': ['Acadia', 'Canyon', 'Envoy', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Crown Victoria', 'Mustang',  'Expedition', 'Excursion', 'Focus', 'Freestar', 'ZX2', 'Five Hundred', 'GT', 'Fusion', 'Edge' ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Corolla', 'FJ Cruiser',  'Highlander', 'Land Cruiser', 'Matrix', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Yaris', ],
    },
    2008: {
        'Nissan': ['350Z', 'Altima', 'Armada', 'Frontier', 'GTR',  'Maxima', 'Murano', 'Rogue', 'Quest', 'Sentra', 'Titan', 'Versa', 'Xterra' ],
        'Buick': ['Enclave','LaCrosse','Lucerne'],
        'Chevy': ['Avalanche' ,'Aveo','Cobalt','Colorado','Corvette','Equinox','Express','HHR','Impala','Malibu','Silverado','Suburban','Tahoe','Trailblazer', 'Uplander',],
        'Lincoln': ['MKS', 'MKZ', 'Mark LT', 'Navigator', 'Town Car', ],
        'BMW': ['1-Series', '3-Series', '5-Series', '6-Series', '7-Series', 'M3', 'M5', 'M6', 'X3', 'X5', 'X6', 'Z4', ],
        'Hyundai': ['Accent', 'Azera', 'Elantra', 'Entourage', 'Santa Fe', 'Sonata', 'Tiburon', 'Tucson', 'Veracruz'],
        'Chrysler': ['300', 'Aspen', 'Crossfire', 'PT Cruiser', 'Pacifica', 'Sebring', 'Town&Country', ],
        'Acura': ['MDX', 'RDX', 'RL', 'TL', 'TSX', ],
        'Cadillac': ['CTS', 'DTS', 'Escalade', 'SRX','STS', 'XLR'],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Elemnt', 'Fit', 'Odyssey', 'Pilot', 'Ridgeline', 'S2000' ],
        'Jeep': [ 'Commander', 'Compass', 'Grand Cherokee', 'Liberty', 'Patriot', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['B-Series', 'CX', 'MX-5', 'Mazda5', 'Mazda3', 'Mazda6', 'RX8', 'Truibut', ],
        'Dodge': ['Avenger', 'Caliber','Challenger','Charger','Dakota','Durango','Grand Caravan', 'Magnum','Nitro', 'Ram 1500','Ram 2500/3500','Ram 4500/5500','Sprinter', 'Viper' ],
        'GMC': ['Acadia', 'Canyon', 'Envoy', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Crown Victoria', 'Mustang',  'Expedition', 'Excursion', 'Focus', 'Freestar', 'ZX2', 'Five Hundred', 'Fusion', 'Edge', 'Ranger', 'Taurus' ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Corolla', 'FJ Cruiser',  'Highlander', 'Land Cruiser', 'Matrix', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Yaris', ],
    },
    2009: {
        'Nissan': ['350Z', 'Altima', 'Armada', 'Cube', 'Frontier', 'GTR',  'Maxima', 'Murano', 'Rogue', 'Quest', 'Sentra', 'Titan', 'Versa', 'Xterra' ],
        'Buick': ['Enclave','LaCrosse','Lucerne'],
        'Chevy': ['Avalanche' ,'Aveo','Cobalt','Colorado','Corvette','Equinox','Express','HHR','Impala','Malibu','Silverado','Suburban','Tahoe','Trailblazer', 'Traverse'],
        'Lincoln': ['MKS', 'MKT', 'MKZ', 'Navigator', 'Town Car', ],
        'BMW': ['1-Series', '3-Series', '5-Series', '6-Series', '7-Series', 'M5', 'M6', 'X3', 'X5', 'X6', 'Z4', ],
        'Hyundai': ['Accent', 'Azera', 'Elantra', 'Genesis', 'Santa Fe', 'Sonata', 'Tucson', 'Veracruz'],
        'Chrysler': ['300', 'Aspen', 'PT Cruiser', 'Sebring', 'Town&Country', ],
        'Acura': ['MDX', 'RDX', 'RL', 'TL', 'TSX', ],
        'Cadillac': ['CTS', 'DTS', 'Escalade', 'SRX','STS', 'XLR'],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Elemnt', 'Clarity', 'Insight', 'Fit', 'Odyssey', 'Pilot', 'Ridgeline', 'S2000' ],
        'Jeep': [ 'Commander', 'Compass', 'Grand Cherokee', 'Liberty', 'Patriot', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['B-Series', 'CX', 'MX-5', 'Mazda5', 'Mazda3', 'Mazda6', 'RX8', 'Truibut', ],
        'Dodge': ['Avenger', 'Caliber','Challenger','Charger','Dakota','Durango','Grand Caravan', 'Journey','Nitro', 'Ram 1500','Ram 2500/3500','Ram 4500/5500','Sprinter', 'Viper' ],
        'GMC': ['Acadia', 'Canyon', 'Envoy', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Mustang',  'Expedition', 'Focus', 'Fusion', 'Edge', 'Ranger', 'Taurus', 'Flex' ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Corolla', 'FJ Cruiser',  'Highlander', 'Land Cruiser', 'Matrix', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Yaris', ],
    },
    2010: {
        'Nissan': ['370Z', 'Altima', 'Armada', 'Cube', 'Frontier', 'GTR', 'Juke', 'Leaf', 'Maxima', 'Murano', 'Pathfinder', 'Rogue', 'Sentra', 'Titan', 'Versa', 'Xterra' ],
        'Buick': ['Enclave','LaCrosse','Lucerne'],
        'Chevy': ['Avalanche' ,'Aveo','Camaro','Cobalt','Colorado','Corvette','Equinox','Express','HHR','Impala','Malibu','Silverado','Suburban','Tahoe', 'Traverse'],
        'Lincoln': ['MKS', 'MKT', 'MKX', 'MKZ', 'Navigator', 'Town Car', ],
        'BMW': ['1-Series', '3-Series', '5-Series', '6-Series', '7-Series', 'M5', 'M6', 'X3', 'X5', 'X6', 'Z4', ],
        'Hyundai': ['Accent', 'Azera', 'Elantra', 'Genesis', 'Santa Fe', 'Sonata', 'Tucson', 'Veracruz'],
        'Chrysler': ['300', 'PT Cruiser', 'Sebring', 'Town&Country', ],
        'Acura': ['MDX', 'RDX', 'RL', 'TL', 'TSX', 'ZDX',],
        'Cadillac': ['CTS', 'DTS', 'Escalade', 'SRX','STS'],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Elemnt', 'Clarity', 'Insight', 'Fit', 'Odyssey', 'Pilot', 'Ridgeline' ],
        'Jeep': [ 'Commander', 'Compass', 'Grand Cherokee', 'Liberty', 'Patriot', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['CX', 'MX-5', 'Mazda5', 'Mazda3', 'Mazda6', 'RX8', 'Truibut', ],
        'Dodge': ['Avenger', 'Caliber','Challenger','Charger','Dakota','Grand Caravan', 'Journey','Nitro', 'Ram 1500','Ram 2500/3500','Ram 4500/5500', 'Viper' ],
        'GMC': ['Acadia', 'Canyon', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford':  ['Explorer', 'F-Series', 'Mustang',  'Expedition', 'Focus', 'Fusion', 'Edge', 'Ranger', 'Taurus', 'Flex', 'Fiesta',  ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Corolla', 'FJ Cruiser',  'Highlander', 'Land Cruiser', 'Matrix', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Yaris', ],
    },
    2011: {
        'Nissan': ['370Z', 'Altima', 'Armada', 'Cube', 'Frontier', 'GTR', 'Juke', 'Leaf', 'Maxima', 'Murano', 'Pathfinder', 'Quest', 'Rogue', 'Sentra', 'Titan', 'Versa', 'Xterra' ],
        'Buick': ['Enclave','LaCrosse','Lucerne','Regal'],
        'Chevy': ['Avalanche' ,'Aveo','Camaro','Colorado','Corvette','Cruze','Equinox','Express','HHR','Impala','Malibu','Silverado','Suburban','Tahoe', 'Traverse','Volt',],
        'Lincoln': ['MKS', 'MKT', 'MKX', 'MKZ', 'Navigator', 'Town Car', ],
        'BMW': ['1-Series', '3-Series', '5-Series', '6-Series', '7-Series', 'X3', 'X5', 'X6', 'Z4', ],
        'Hyundai': ['Accent', 'Azera', 'Elantra', 'Equus', 'Genesis', 'Santa Fe', 'Sonata', 'Tucson', 'Veracruz'],
        'Chrysler': ['200', '300', 'Town&Country', ], 
        'Acura': ['MDX', 'RDX', 'RL', 'TL', 'TSX', 'ZDX',],
        'Cadillac': ['CTS', 'DTS', 'Escalade', 'SRX','STS'],
        'Honda': ['Accord', 'CR-V', 'CR-Z', 'Civic', 'Elemnt', 'Clarity', 'Insight', 'Fit', 'Odyssey', 'Pilot', 'Ridgeline' ],
        'Jeep': [ 'Compass', 'Grand Cherokee', 'Liberty', 'Patriot', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['CX', 'MX-5', 'Mazda2', 'Mazda5', 'Mazda3', 'Mazda6' ],
        'Ram': ['Dakota', '1500', '2500', '3500'],
        'Dodge': ['Avenger', 'Caliber','Challenger','Charger','Durango','Grand Caravan', 'Journey','Nitro'],
        'GMC': ['Acadia', 'Canyon', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford':  ['Explorer', 'F-Series', 'Mustang',  'Expedition', 'Focus', 'Fusion', 'Edge', 'Ranger', 'Taurus', 'Flex', 'Fiesta',  ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Corolla', 'FJ Cruiser',  'Highlander', 'Land Cruiser', 'Matrix', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Yaris', ],
    },
    2012: {
        'Nissan': ['370Z', 'Altima', 'Armada', 'Cube', 'Frontier', 'GTR', 'Juke', 'Leaf', 'Maxima', 'Murano', 'Pathfinder', 'Quest', 'Rogue', 'Sentra', 'Titan', 'Versa', 'Xterra' ],
        'Buick': ['Enclave','LaCrosse','Verano','Regal'],
        'Chevy': ['Avalanche' ,'Camaro','Colorado','Corvette','Cruze','Equinox','Express','Impala','Malibu','Silverado','Suburban','Spark','Tahoe', 'Traverse','Volt'],
        'Lincoln': ['MKS', 'MKT', 'MKX', 'MKZ', 'Navigator', ],
        'BMW': ['1-Series', '3-Series', '5-Series', '6-Series', '7-Series', 'X3', 'X5', 'X6', 'Z4', ],
        'Hyundai': ['Accent', 'Azera', 'Elantra', 'Equus', 'Genesis', 'Santa Fe', 'Sonata', 'Tucson', 'Veloster', 'Veracruz'],
        'Chrysler': ['200', '300', 'Town&Country', ],
        'Acura': ['MDX', 'RDX', 'TL', 'TSX', 'ZDX',],
        'Cadillac': ['CTS', 'Escalade', 'SRX',],
        'Honda': ['Accord', 'CR-V', 'CR-Z', 'Civic', 'Fit', 'Crosstour', 'Insight', 'Odyssey', 'Pilot', 'Ridgeline' ],
        'Jeep': [ 'Compass', 'Grand Cherokee', 'Liberty', 'Patriot', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['CX', 'MX-5', 'Mazda2', 'Mazda5', 'Mazda3', 'Mazda6' ],
        'Ram': ['Cargo Van', 'Dakota', '1500', '2500', '3500'],
        'Dodge': ['Avenger', 'Caliber','Challenger','Charger','Durango','Grand Caravan', 'Journey'],
        'GMC': ['Acadia', 'Canyon', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Mustang',  'Expedition', 'Focus', 'Fusion', 'Edge', 'Ranger', 'Taurus', 'Flex', 'Fiesta',  ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Corolla', 'FJ Cruiser',  'Highlander', 'Land Cruiser', 'Matrix', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Yaris', ],
    },
    2013: {
        'Nissan': ['370Z', 'Altima', 'Armada', 'Cube', 'Frontier', 'GTR', 'Juke', 'Leaf', 'Maxima', 'Murano', 'Pathfinder', 'Quest', 'Rogue', 'Sentra', 'Titan', 'Versa', 'Xterra' ],
        'Buick': ['Enclave','LaCrosse','Verano','Regal','Encore'],
        'Chevy': ['Avalanche','Bolt EV' ,'Camaro','Corvette','Cruze','Equinox','Express','Impala','Malibu','Silverado','Suburban','Spark','Tahoe', 'Traverse','Volt'],
        'Lincoln': ['MKS', 'MKT', 'MKX', 'MKZ', 'Navigator', ],
        'BMW': ['1-Series', '3-Series', '5-Series', '6-Series', '7-Series', 'X1', 'X3', 'X5', 'X6', 'Z4', ],
        'Hyundai': ['Accent', 'Azera', 'Elantra', 'Equus', 'Genesis', 'Santa Fe', 'Sonata', 'Tucson', 'Veloster'],
        'Chrysler': ['200', '300', 'Town&Country', ],
        'Acura': ['ILX', 'MDX', 'RDX', 'RLX', 'TL', 'TSX', 'ZDX',],
        'Cadillac': ['ATS', 'CTS', 'Escalade', 'SRX', 'XTS',],
        'Honda': ['Accord', 'CR-V', 'CR-Z', 'Civic', 'Fit', 'Crosstour', 'Insight', 'Odyssey', 'Pilot', 'Ridgeline' ],
        'Jeep': [ 'Compass', 'Grand Cherokee', 'Patriot', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['CX', 'MX-5', 'Mazda2', 'Mazda5', 'Mazda3', 'Mazda6' ],
        'Ram': ['Cargo Van', '1500', '2500', '3500'],
        'Dodge': ['Avenger','Challenger','Charger','Dart','Durango','Grand Caravan', 'Journey'],
        'GMC': ['Acadia', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Mustang',  'Expedition', 'Focus', 'Fusion', 'Edge', 'Ranger', 'Taurus', 'Flex', 'Fiesta',  ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Corolla', 'FJ Cruiser',  'Highlander', 'Land Cruiser', 'Matrix', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Yaris', ],
    },
    2014: {
        'Nissan': ['370Z', 'Altima', 'Armada', 'Cube', 'Frontier', 'GTR', 'Juke', 'Leaf', 'Maxima', 'Murano', 'Pathfinder', 'Quest', 'Rogue', 'Sentra', 'Titan', 'Versa', 'Xterra' ],
        'Buick': ['Enclave','LaCrosse','Verano','Regal','Encore'],
        'Chevy': ['Bolt EV' ,'Camaro','Colorado','Corvette','Cruze','Equinox','Express','Impala','Malibu','SS','Silverado','Suburban','Spark','Tahoe', 'Traverse','Volt'],
        'Lincoln': ['MKS', 'MKT', 'MKX', 'MKZ', 'Navigator', ],
        'BMW': ['2-Series', '3-Series', '4-Series', '5-Series', '6-Series', '7-Series', 'X1', 'X3', 'X5', 'X6', 'i3', 'Z4', 'i8' ],
        'Hyundai': ['Accent', 'Azera', 'Elantra', 'Equus', 'Genesis', 'Santa Fe', 'Sonata', 'Tucson', 'Veloster'],
        'Chrysler': ['200', '300', 'Town&Country', ],
        'Acura': ['ILX', 'MDX', 'RDX', 'RLX', 'TL', 'TSX',],
        'Cadillac': ['ATS', 'CTS', 'ELR', 'Escalade', 'SRX', 'XTS',],
        'Honda': ['Accord', 'CR-V', 'CR-Z', 'Civic', 'Crosstour', 'Insight', 'Odyssey', 'Pilot', 'Ridgeline' ],
        'Jeep': ['Cherokee', 'Compass', 'Grand Cherokee', 'Patriot','Renegade', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['CX', 'MX-5', 'Mazda2', 'Mazda5', 'Mazda3', 'Mazda6' ],
        'Ram': ['Cargo Van', 'ProMaster',  '1500', '2500', '3500'],
        'Dodge': ['Avenger','Challenger','Charger','Dart','Durango','Grand Caravan', 'Journey'],
        'GMC': ['Acadia', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Mustang',  'Expedition', 'Focus', 'Fusion', 'Edge', 'Ranger', 'Taurus', 'Flex', 'Fiesta',  ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Corolla',  'Highlander', 'Land Cruiser', 'Venza', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Yaris', ],
    },
    2015: {
        'Nissan': ['370Z', 'Altima', 'Armada', 'Frontier', 'GTR', 'Juke', 'Leaf', 'Maxima', 'Murano', 'Pathfinder', 'Quest', 'Rogue', 'Sentra', 'Titan', 'Versa', ],
        'Buick': ['Enclave','LaCrosse','Verano','Regal','Encore'],
        'Chevy': ['Bolt EV' ,'Camaro','Colorado','Corvette','Cruze','Equinox','Express','Impala','Malibu','SS','Silverado', 'Sonic','Suburban','Spark','Tahoe', 'Traverse','Volt','Trax'],
        'Lincoln': ['MKC', 'MKS', 'MKT', 'MKX', 'MKZ', 'Navigator', ],
        'BMW': ['2-Series', '3-Series', '4-Series', '5-Series', '6-Series', '7-Series', 'X1', 'X3', 'X4', 'X5', 'Z4', 'X6', 'i3', 'i8' ],
        'Hyundai': ['Accent', 'Azera', 'Elantra', 'Equus', 'Genesis', 'Santa Fe', 'Sonata', 'Tucson', 'Veloster'],
        'Chrysler': ['200', '300', 'Town&Country', ],
        'Acura': ['ILX', 'MDX', 'RDX', 'RLX', 'TLX',],
        'Cadillac': ['ATS', 'CTS', 'Escalade', 'SRX', 'XTS',],
        'Honda': ['Accord', 'CR-V', 'CR-Z', 'Civic', 'Crosstour', 'Fit', 'Odyssey', 'Pilot',  ],
        'Jeep': ['Cherokee', 'Compass', 'Grand Cherokee', 'Patriot','Renegade', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['CX', 'MX-5', 'Mazda5', 'Mazda3', 'Mazda6' ],
        'Ram': ['Cargo Van', 'ProMaster',  '1500', '2500', '3500'],
        'Dodge': ['Challenger','Charger','Dart','Durango','Grand Caravan', 'Journey', 'Viper'],
        'GMC': ['Acadia', 'Canyon', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Mustang',  'Expedition', 'Focus', 'Fusion', 'Edge', 'Ranger', 'Taurus', 'Flex', 'Fiesta',  ],
        'Toyota': ['4Runner', 'Avalon',  'Camry', 'Corolla',  'Highlander', 'Land Cruiser', 'Mirai', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Yaris', ],
    },
    2016: {
        'Nissan': ['370Z', 'Altima', 'Armada', 'Frontier', 'GTR', 'Juke', 'Leaf', 'Maxima', 'Murano', 'Pathfinder', 'Quest', 'Rogue', 'Sentra', 'Titan', 'Versa', ],
        'Buick': ['Cascada','Enclave','LaCrosse','Verano','Regal','Encore','Envision'],
        'Chevy': ['Bolt EV' ,'Camaro','Colorado','Corvette','Cruze','Equinox','Express','Impala','Malibu','SS','Silverado', 'Sonic','Suburban','Spark','Tahoe', 'Traverse','Volt','Trax'],
        'Lincoln': ['MKC', 'MKT', 'MKX', 'MKZ', 'Navigator', ],
        'BMW': ['2-Series', '3-Series', '4-Series', '5-Series', '6-Series', '7-Series', 'X1', 'X3', 'X4', 'X5', 'X6', 'i3', 'i8' ],
        'Hyundai': ['Accent', 'Azera', 'Elantra', 'Equus', 'Genesis', 'Santa Fe', 'Sonata', 'Tucson', 'Veloster'],
        'Chrysler': ['200', '300', 'Town&Country', ],
        'Acura': ['ILX', 'MDX', 'RDX', 'RLX', 'TLX',],
        'Cadillac': ['ATS', 'CT6', 'CTS', 'ELR', 'Escalade', 'SRX', 'XTS',],
        'Honda': ['Accord', 'CR-V', 'CR-Z', 'Civic', 'Fit', 'HR-V', 'Odyssey', 'Pilot',  ],
        'Mazda': ['CX', 'MX-5', 'Mazda3', 'Mazda6' ],
        'Ram': [ 'ProMaster',  '1500', '2500', '3500'],
        'Dodge': ['Challenger','Charger','Dart','Durango','Grand Caravan', 'Journey', 'Viper'],
        'GMC': ['Acadia', 'Canyon', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Mustang',  'Expedition', 'Focus', 'Fusion', 'Edge', 'Ranger', 'Taurus', 'Flex', 'Fiesta', 'Escape',  ],
        'Toyota':  ['4Runner', 'Avalon',  'Camry', 'Corolla',  'Highlander', 'Land Cruiser', 'Mirai', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Yaris', ],
    },
    2017: {
        'Nissan': ['370Z', 'Altima', 'Armada', 'Frontier', 'GTR', 'Juke', 'Leaf', 'Maxima', 'Murano', 'Pathfinder', 'Rogue', 'Sentra', 'Titan', 'Versa', ],
        'Buick': ['Cascada','Enclave','LaCrosse','Regal','Encore','Envision'],
        'Chevy': ['Bolt EV' ,'Camaro','Colorado','Corvette','Cruze','Equinox','Express','Impala','Malibu','SS','Silverado', 'Sonic','Suburban','Spark','Tahoe', 'Traverse','Volt'],
        'Lincoln': ['Continental', 'MKC', 'MKT', 'MKX', 'MKZ', 'Navigator', ],
        'BMW': ['2-Series', '3-Series', '4-Series', '5-Series', '6-Series', '7-Series', 'X1', 'X3', 'X4', 'X5', 'X6', 'i3', ],
        'Hyundai': ['Accent', 'Azera', 'Elantra', 'Ioniq', 'Santa Fe', 'Sonata', 'Tucson', 'Veloster'],
        'Chrysler': ['200', '300', 'Pacifica', ],
        'Acura': ['ILX', 'MDX', 'NSX', 'RDX', 'RLX', 'TLX',],
        'Cadillac': ['ATS', 'CT6', 'CTS', 'Escalade', 'XT5', 'XTS',],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Clarity', 'Fit', 'HR-V', 'Odyssey', 'Pilot', 'Ridgeline', ],
        'Jeep': ['Cherokee', 'Compass', 'Grand Cherokee','Renegade', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['CX', 'MX-5', 'Mazda3', 'Mazda6' ],
        'Ram': [ 'ProMaster',  '1500', '2500', '3500'],
        'Dodge': ['Challenger','Charger','Durango','Grand Caravan', 'Journey', 'Viper'],
        'GMC': ['Acadia', 'Canyon', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Mustang',  'Expedition', 'Focus', 'Fusion', 'Edge', 'Taurus', 'Flex', 'Fiesta', 'Escape', 'GT'  ],
        'Toyota': ['4Runner', 'Avalon', 'C-HR', 'Camry', '86', 'Corolla', 'Highlander', 'Land Cruiser', 'Mirai', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Yaris', ],
    },
    2018: {
        'Nissan': ['370Z', 'Altima', 'Armada', 'Frontier', 'GTR', 'Kicks', 'Leaf', 'Maxima', 'Murano', 'Pathfinder', 'Rogue', 'Sentra', 'Titan', 'Versa', ],
        'Buick': ['Cascada','Enclave','LaCrosse','Regal','Encore','Envision'],
        'Chevy': ['Bolt EV' ,'Camaro','Colorado','Corvette','Cruze','Equinox','Express','Impala','Malibu','Silverado', 'Sonic','Suburban','Spark','Tahoe', 'Traverse','Volt'],
        'Lincoln': ['Continental', 'MKC', 'MKT', 'MKX', 'MKZ', 'Navigator', ],
        'BMW': ['2-Series', '3-Series', '4-Series', '5-Series', '6-Series', '7-Series', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'i3', ],
        'Hyundai': ['Accent', 'Elantra', 'Ioniq', 'Kona', 'Santa Fe', 'Sonata', 'Tucson', ],
        'Chrysler': ['300', 'Pacifica', ],
        'Acura': ['ILX', 'MDX', 'NSX', 'RDX', 'RLX', 'TLX',],
        'Cadillac': ['ATS', 'CT6', 'CTS', 'Escalade', 'XT5', 'XTS',],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Clarity', 'Fit', 'HR-V', 'Odyssey', 'Pilot', 'Ridgeline', ],
        'Mazda': ['CX', 'MX-5', 'Mazda3', 'Mazda6' ],
        'Ram': [ 'ProMaster',  '1500', '2500', '3500'],
        'Dodge': ['Challenger','Charger','Durango','Grand Caravan', 'Journey'],
        'GMC': ['Acadia', 'Canyon', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Mustang',  'Expedition', 'Focus', 'Fusion', 'Edge', 'Taurus', 'Flex', 'Fiesta', 'Escape', 'GT', 'Ranger'  ],
        'Toyota': ['4Runner', 'Avalon', 'C-HR', 'Camry', '86', 'Corolla', 'Supra', 'Highlander', 'Land Cruiser', 'Mirai', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Yaris', ],
    },
    2019: {
        'Nissan': ['370Z', 'Altima', 'Armada', 'Frontier', 'GTR', 'Kicks', 'Leaf', 'Maxima', 'Murano', 'Pathfinder', 'Rogue', 'Sentra', 'Titan', 'Versa', ],
        'Buick': ['Cascada','Enclave','LaCrosse','Regal','Encore','Envision'],
        'Chevy': ['Blazer', 'Bolt EV' ,'Camaro','Colorado','Corvette','Cruze','Equinox','Express','Impala','Malibu','Silverado', 'Sonic','Suburban','Spark','Tahoe', 'Trailblazer', 'Traverse','Volt'],
        'Lincoln': ['Continental', 'MKC', 'MKT', 'MKZ', 'Nautilus', 'Navigator', ],
        'BMW': ['2-Series', '3-Series', '4-Series', '5-Series', '7-Series', '8-Series', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4', 'i3', ],
        'Hyundai': ['Accent', 'Elantra', 'Ioniq', 'Kona', 'Nexo', 'Palisade', 'Santa Fe', 'Sonata', 'Tucson', 'Veloster',],
        'Chrysler': ['300', 'Pacifica', ],
        'Acura': ['ILX', 'MDX', 'NSX', 'RDX', 'RLX', 'TLX',],
        'Cadillac': ['ATS', 'CT6', 'CTS', 'Escalade', 'XT4', 'XT5', 'XTS',],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Clarity', 'Fit', 'HR-V', 'Insight', 'Odyssey', 'Passport', 'Pilot', 'Ridgeline', ],
        'Jeep': ['Cherokee', 'Compass', 'Grand Cherokee','Renegade', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['CX', 'MX-5', 'Mazda3', 'Mazda6' ],
        'Ram': [ 'ProMaster',  '1500', '2500', '3500'],
        'Dodge': ['Challenger','Charger','Durango','Grand Caravan', 'Journey'],
        'GMC': ['Acadia', 'Canyon', 'Savana', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Mustang',  'Expedition', 'Focus', 'Fusion', 'Edge', 'Taurus', 'Flex', 'Fiesta', 'Escape', 'GT', 'Ranger'  ],
        'Toyota': ['4Runner', 'Avalon', 'C-HR', 'Camry', '86', 'Corolla', 'Supra', 'Highlander', 'Land Cruiser', 'Mirai', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Yaris', ],
    },
    2020: {
        'Nissan': ['370Z', 'Altima', 'Armada', 'Frontier', 'GTR', 'Kicks', 'Leaf', 'Maxima', 'Murano', 'Pathfinder', 'Rogue', 'Sentra', 'Titan', 'Versa', ],
        'Buick': ['Enclave','Regal','Encore','Envision'],
        'Chevy': ['Blazer', 'Bolt EV' ,'Camaro','Colorado','Corvette','Equinox','Express','Impala','Malibu','Silverado', 'Sonic','Suburban','Spark','Tahoe', 'Trailblazer', 'Traverse','Trax'],
        'Lincoln': ['Aviator', 'Continental', 'Corsair', 'MKZ', 'Nautilus', 'Navigator', ],
        'BMW': ['2-Series', '3-Series', '4-Series', '5-Series', '7-Series', '8-Series', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4', 'i3', ],
        'Hyundai': ['Accent', 'Elantra', 'Ioniq', 'Kona', 'Nexo', 'Palisade', 'Santa Fe', 'Sonata', 'Tucson', 'Veloster', 'Venue'],
        'Chrysler': ['300', 'Pacifica', 'Voyager'],
        'Acura': ['ILX', 'MDX', 'NSX', 'RDX', 'RLX', 'TLX',],
        'Cadillac': ['CT4', 'CT5', 'Escalade', 'XT4', 'XT5', 'XT6',],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Clarity', 'Fit', 'HR-V', 'Insight', 'Odyssey', 'Passport', 'Pilot', 'Ridgeline', ],
        'Jeep': ['Cherokee', 'Compass','Gladiator', 'Grand Cherokee','Renegade', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['CX', 'MX-5', 'Mazda3', 'Mazda6' ],
        'Ram': [ 'ProMaster',  '1500', '2500', '3500'],
        'Dodge': ['Challenger','Charger','Durango','Grand Caravan', 'Journey'],
        'GMC': ['Acadia', 'Canyon', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Mustang',  'Expedition', 'Focus', 'Edge',  'Escape', 'Ranger'  ],
        'Toyota': ['4Runner', 'Avalon', 'C-HR', 'Camry', '86', 'Corolla', 'Supra', 'Highlander', 'Land Cruiser', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Yaris', ],
    },
    2021: {
        'Nissan': ['Altima', 'Armada', 'Frontier', 'GTR', 'Kicks', 'Leaf', 'Maxima', 'Murano', 'Pathfinder', 'Rogue', 'Sentra', 'Titan', 'Versa', ],
        'Buick': ['Enclave','Encore','Envision'],
        'Chevy': ['Blazer', 'Bolt' ,'Camaro','Colorado','Corvette','Equinox','Express','Malibu','Silverado', 'Suburban', 'Tahoe', 'Trailblazer', 'Traverse'],
        'Lincoln': ['Aviator', 'Corsair', 'Nautilus', 'Navigator', ],
        'BMW': ['2-Series', '3-Series', '4-Series', '5-Series', '7-Series', '8-Series', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4', 'i3', ],
        'Hyundai': ['Accent', 'Elantra', 'Ioniq', 'Kona', 'Nexo', 'Palisade', 'Santa Cruz', 'Santa Fe', 'Sonata', 'Tucson', 'Veloster', 'Venue'],
        'Chrysler': ['300', 'Pacifica', 'Voyager'],
        'Acura': ['ILX', 'NSX', 'RDX', 'TLX',],
        'Cadillac': ['CT4', 'CT5', 'Escalade', 'XT4', 'XT5', 'XT6',],
        'Honda': ['Accord', 'CR-V', 'Civic', 'Clarity', 'HR-V', 'Insight', 'Odyssey', 'Passport', 'Pilot', 'Ridgeline', ],
        'Jeep': ['Cherokee', 'Compass','Gladiator', 'Grand Cherokee','Renegade', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['CX', 'MX-5', 'Mazda3', 'Mazda6' ],
        'Ram': [ 'ProMaster',  '1500', '2500', '3500'],
        'Dodge': ['Challenger','Charger','Durango'],
        'GMC': ['Acadia', 'Canyon', 'Hummer', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford' : ['Explorer', 'F-Series', 'Mustang',  'Expedition', 'Focus', 'Edge', 'Escape', 'Ranger', 'Bronco', 'GT', 'Maverick'  ],
        'Toyota': ['4Runner', 'Avalon', 'C-HR', 'Camry', 'GR86', 'Corolla', 'Supra', 'Highlander', 'Land Cruiser',  'Mirai', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Venza', ],
    },
    2022: {
        'Nissan': ['Altima', 'Armada', 'Frontier', 'GTR', 'Kicks', 'Leaf', 'Maxima', 'Murano', 'Pathfinder', 'Rogue', 'Sentra', 'Titan', 'Versa', ],
        'Buick': ['Enclave','Encore','Envision'],
        'Chevy': ['Blazer', 'Bolt' ,'Camaro','Colorado','Corvette','Equinox','Malibu','spark','Silverado', 'Suburban', 'Tahoe', 'Trailblazer', 'Traverse','Trax'],
        'Lincoln': ['Aviator', 'Corsair', 'Nautilus', 'Navigator', ],
        'BMW': ['2-Series', '3-Series', '4-Series', '5-Series', '7-Series', '8-Series', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'XM', 'Z4', 'i4', 'iX', ],
        'Hyundai': ['Accent', 'Elantra', 'Ioniq', 'Kona', 'Nexo', 'Palisade', 'Santa Cruz', 'Santa Fe', 'Sonata', 'Tucson', 'Veloster', 'Venue'],
        'Chrysler': ['300', 'Pacifica', 'Voyager'],
        'Acura': ['ILX', 'MDX', 'NSX', 'RDX', 'TLX',],
        'Cadillac': ['CT4', 'CT5', 'Escalade', 'XT4', 'XT5', 'XT6',],
        'Honda': ['Accord', 'CR-V', 'Civic', 'HR-V', 'Insight', 'Odyssey', 'Passport', 'Pilot', 'Ridgeline', ],
        'Jeep': ['Cherokee', 'Compass','Gladiator', 'Grand Cherokee','Renegade','Wagoneer', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['CX', 'MX-5', 'Mazda3',],
        'Ram': [ 'ProMaster',  '1500', '2500', '3500'],
        'Dodge': ['Challenger','Charger','Durango'],
        'GMC': ['Acadia', 'Canyon', 'Hummer', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Mustang',  'Expedition', 'Focus', 'Edge', 'Escape', 'Ranger', 'Bronco', 'GT', 'Maverick'  ],
        'Toyota': ['4Runner', 'Avalon', 'C-HR', 'Camry', 'GR86', 'Corolla', 'Supra', 'Highlander', 'Mirai', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Venza', ],
    },
    2023: {
        'Nissan': ['Altima', 'Ariya', 'Armada', 'Frontier', 'GTR', 'Kicks', 'Leaf', 'Maxima', 'Murano', 'Pathfinder', 'Rogue', 'Sentra', 'Titan', 'Versa', 'Z', ],
        'Buick': ['Enclave','Encore','Envision'],
        'Chevy': ['Blazer', 'Bolt' ,'Camaro','Colorado','Corvette','Equinox','Express','Malibu','Silverado', 'Suburban', 'Tahoe', 'Trailblazer', 'Traverse'],
        'Lincoln': ['Aviator', 'Corsair', 'Nautilus', 'Navigator', ],
        'BMW': ['2-Series', '3-Series', '4-Series', '5-Series', '7-Series', '8-Series', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'XM', 'Z4', 'i4', 'iX', ],
        'Hyundai': ['Elantra', 'Ioniq', 'Kona', 'Nexo', 'Palisade', 'Santa Cruz', 'Santa Fe', 'Sonata', 'Tucson', 'Venue'],
        'Chrysler': ['300', 'Pacifica'],
        'Acura': ['Intergra', 'MDX', 'RDX', 'TLX',],
        'Cadillac': ['CT4', 'CT5', 'Escalade', 'Lyriq', 'XT5', 'XT6',],
        'Honda': ['Accord', 'CR-V', 'Civic', 'HR-V', 'Odyssey', 'Passport', 'Pilot', 'Ridgeline', ],
        'Jeep': ['Cherokee', 'Compass','Gladiator', 'Grand Cherokee','Renegade','Wagoneer', 'Wrangler', 'Wrangler Unlimited'],
        'Mazda': ['CX', 'MX-5', 'Mazda3',],
        'Ram': [ 'ProMaster',  '1500', '2500', '3500'],
        'Dodge': ['Challenger','Charger','Durango','Hornet'],
        'GMC': ['Acadia', 'Canyon', 'Hummer', 'Sierra', 'Terrain', 'Yukon', ],
        'Ford': ['Explorer', 'F-Series', 'Mustang',  'Expedition', 'Focus', 'Edge', 'Escape', 'Ranger', 'Bronco', 'GT', 'Maverick'  ],
        'Toyota': ['4Runner', 'Camry', 'Crown', 'GR86', 'Corolla', 'Supra', 'Highlander', 'Mirai', 'Pruis', 'Rav4', 'Sequoia', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Venza', 'bZ4X' ],
    },
    
}

// When the year is chosen, then "Make" dropdown shows the listed makes
yearDropdown.on('change', function() {
    const selectedYear = this.value;

    makeDropdown.attr('disabled', false);
    makeDropdown.html('<option value="" disabled selected>Select Make</option>');
    SelectorEnabledStyle(makeDropdown);

    for (const make in carData[selectedYear]) {
        const option = document.createElement('option');
        option.value = make;
        option.innerText = make;
        makeDropdown.append(option);
    }
    
    if (modelDropdown.disabled != true) {
        modelDropdown.attr('disabled', true);
        modelDropdown.html('');
        SelectorDisabledStyle(modelDropdown);
    }

    ToggleDIYSelector(false);
});

// When the make changes, update the "Model" dropdown
makeDropdown.on('change', function() {
    const selectedYear = yearDropdown.val();
    const selectedMake = this.value;

    modelDropdown.attr('disabled', false);
    modelDropdown.html('<option value="" disabled selected>Select Model</option>');
    SelectorEnabledStyle(modelDropdown);
    
    for (const model of carData[selectedYear][selectedMake]) {
        const option = document.createElement('option');
        option.value = model;
        option.innerText = model;
        modelDropdown.append(option);
    }
    
    ToggleDIYSelector(false);
});

// When the model changes, bring out the DIY Project Selection
modelDropdown.on('change', function() {
    ToggleDIYSelector(true);
});

//Listener for the reset button
// $('#submit-button').click(function() {
//     const selectedYear = $('#year').val();
//     const selectedMake = $('#make').val();
//     const selectedModel = $('#model').val();
//     const selectedProject = $('#DYI').val();  // Changed from DIY to DYI

//     if (selectedYear && selectedMake && selectedModel && selectedProject) {
//         // Redirect to the results page
//         window.location.href = `results.html?year=${selectedYear}&make=${selectedMake}&model=${selectedModel}&project=${selectedProject}`;
//     } else {
//         alert('Please select all fields');
//     }
// });



// Listener for the Reset button
$('#reset-form').click(function() {
    ResetForm();
})

// Search YouTube
function searchYouTube(year, make, model, project) {
    const apiKey = 'AIzaSyDOcavaDDwrIqLu1yyHn3f9jUgceP9ch0k'; //Youtube Key goes here
    const query = `${year} ${make} ${model} ${project} DIY`;
    const url = `https://youtube.googleapis.com/`; //Need Youtube site here

    $.get(url, function(data) {
       
    });
}

// $(document).ready(function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const year = urlParams.get('year');
//     const make = urlParams.get('make');
//     const model = urlParams.get('model');
//     const project = urlParams.get('project');

//     if (year && make && model && project) {
//         // Search YouTube
//         searchYouTube(year, make, model, project);

//         // Search eBay
//         searchEbay(year, make, model, project);
//     } else {
//         alert('Missing search parameters');
//     }
// });

function SelectorEnabledStyle(selector) {
    selector.parent()
        .removeClass("bg-gray-100/60 ")
        .addClass("bg-sky-500/75");

    selector.siblings('.selectors')
        .removeClass("text-gray-600/90")
        .addClass("text-white");

    selector
        .removeClass("bg-gray-100/80 border-gray-800/40")
        .addClass("cursor-pointer bg-white/90 border-transparent hover:border-indigo-200");
}

function SelectorDisabledStyle(selector) {
    selector.parent()
        .removeClass("bg-sky-500/75")
        .addClass("bg-gray-100/60");
    
    selector.siblings('.selectors')
        .removeClass("text-white")
        .addClass("text-gray-600/90");

    selector
        .removeClass("cursor-pointer bg-white/90 border-transparent hover:border-indigo-200")
        .addClass("bg-gray-100/80 border-gray-800/40");
}

function ToggleDIYSelector(enable) {
    const projectButtons = $('#project-selection').children();
    const enabledStyle = 'bg-sky-600/80 hover:bg-sky-700/75 hover:border-indigo-200 text-white';
    const disabledStyle = 'text-black bg-gray-100/60 cursor-default';

    if (enable) {
        projectButtons
            .removeClass(disabledStyle)
            .addClass(enabledStyle);
        projectButtons.each(function() {
            $(this).on('click', function() {
                SubmitForm($(this).text());
            });
        });
    } else {
        projectButtons
            .removeClass(enabledStyle)
            .addClass(disabledStyle)
            .off('click');
    }
}

function ResetForm() {
    yearDropdown.html('<option value="" disabled selected>Select Year</option>');

    makeDropdown.attr('disabled', true);
    makeDropdown.html('');
    SelectorDisabledStyle(makeDropdown);

    modelDropdown.attr('disabled', true);
    modelDropdown.html('');
    SelectorDisabledStyle(modelDropdown);

    ToggleDIYSelector(false);

    // Populate Year Dropdown
    const currentYear = new Date().getFullYear();
    for (let year = 1985; year <= currentYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.innerText = year;
        yearDropdown.append(option);
    }
}

function SubmitForm(project) {
    var yearVal = yearDropdown.val();
    var makeVal = makeDropdown.val();
    var modelVal = modelDropdown.val();

    console.log(yearVal + ' ' + makeVal + ' ' + modelVal + ' ' + project);

    if (yearVal && makeVal && modelVal && project) {
        // Redirect to the results page
        window.location.href = `results.html?year=${yearVal}&make=${makeVal}&model=${modelVal}&project=${project}`;
    } else {
        alert('Please select all fields');
    }
}