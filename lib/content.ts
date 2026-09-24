/* All copy is lifted from gakenterprises.co.uk (sitemap scraped 24 Sep 2026). Headings and lists are kept
   verbatim; the only edits are scraping artefacts (a stray "à" bullet glyph, a sentence the live page cuts off). */

export type Block =
  | { type: "p"; text: string }
  | { type: "label"; text: string }
  | { type: "list"; items: string[] }
  | { type: "groups"; groups: { title: string; items: string[] }[] };

export type Group = { title: string; body?: string; items?: string[]; groups?: { title: string; items: string[] }[] };

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  intro: string;
  groups: Group[];
};

export type Work = {
  slug: string;
  title: string;
  kind: "hardware" | "software" | "programme";
  image?: string;
  blocks: Block[];
};

export type Portfolio = {
  slug: string;
  title: string;
  short: string;
  kinds: Work["kind"][];
};

export const company = {
  name: "GAK Enterprises Limited",
  hero: { lead: "Empowering Global", accent: "Industries with Excellence" },
  heroBody: "Delivering success to clients by appropriate implementation and incorporation of strategies and technologies in an effective way.",
  about: "GAK Enterprises Limited is one of the leading engineering services providers to the global automotive, aerospace, defence, medical, instrumental, IT and manufacturing and production industries. Founded in September 2011 with a highly experienced resource pool in engineering & product development, the company is headquartered in Milton Keynes, United Kingdom.",
  industries: ["Automotive", "Aerospace", "Defence", "Medical", "Instrumental", "IT", "Manufacturing & Production"],
  founded: "September 2011",
  consult: "Get In Touch With Us For Professional Consultation",
};

export const about = {
  title: "Providing Cutting Edge Solutions",
  body: [
    "We are a services company with zeal for excellence through innovation. We are focussed on providing engineering solutions for automotive, aerospace, consumer products and other general industries. The company was founded with the idea of delivering world-class innovative engineering services in the most cost-effective manner with no compromise on quality and time.",
    "The current scenario of service industry reflects a plethora of constraints on offering cost effective, value added services to the customers. In this ever changing competitive global market, we believe that this is possible only through innovative business models and process. Our unique business model depends on our people and partners.",
  ],
  results: {
    title: "Driven By Results. Motivated By Success",
    body: "We understand that the demand of services is cyclical and often leads to lower utilization of the existing resources – software licenses, associated hardware and the human resources among others. Our business model resolves this issue through strategies which are beneficial to our customers, our partners and ourselves. It brings together various niche service players and product developers/distributors along with our staff to offer a gamut of solutions to our customers in the most cost-effective manner.",
  },
  // The live infographic: our people, product partners and service partners all feed GAK.
  model: ["Our People", "Product Partners", "Service Partners"],
  partners: ["Sukhena Technology", "Theorax Technology", "Blue Binaries", "Qsquare Infotech", "Theorax Dynamics", "Blue Binaries Engineering and Solutions Ltd"],
  vision: "To enable our clients to achieve engineering excellence through innovation in the best manner possible.",
  mission: "To offer solutions of the highest quality in the most appropriate and affordable manner to increase customers competitiveness.",
  image: "/media/service-1.webp",
};

export const careers = {
  title: "We strongly believe that people are the biggest asset of our company.",
  body: [
    "We sustain success only with the dedication and support of our talented employees.",
    "As opportunities continues to grow around the mobility industry, we need to expand our industry leading expertise, find the best people and stay ahead of the competition. We are looking for great talents to join our growing teams!",
    "In case you do not find your dream job, just write us an email with your CV and cover letter. We will contact you as soon as we have an opening that fits your profile.",
  ],
  email: "hr@gakenterprises.co.uk",
};

export const contact = {
  title: "Call Us or Fill the Form",
  phones: [
    { label: "01908 698918", href: "tel:+441908698918" },
    { label: "07903437557", href: "tel:+447903437557" },
  ],
  email: "contact@gakenterprises.co.uk",
  offices: [
    { name: "UK", lines: ["606, Milton Keynes Business Centre", "Fox hunter Drive, Linfordwood West", "Milton Keynes MK14 6GD"] },
    { name: "Netherlands", lines: ["GAK Enterprise (B.V)", "Trasmolenlaan 12", "3447 GZ Woerden"] },
  ],
  linkedin: "https://uk.linkedin.com/company/gak-enterprises",
};

export const clients = [
  { name: "Nissan", logo: "/media/logo-1.webp" },
  { name: "Mercedes-Benz", logo: "/media/logo-2.webp" },
  { name: "Sky", logo: "/media/logo-3.webp" },
  { name: "Tech Mahindra", logo: "/media/logo-4.webp" },
  { name: "Sapient", logo: "/media/logo-5.webp" },
  { name: "Rakuten", logo: "/media/logo-6.webp" },
  { name: "Secret Escapes", logo: "/media/logo-7.webp" },
];

export const services: Service[] = [
  {
    slug: "product-design-support",
    title: "Product Design & Support",
    short: "3D CAD modelling, reverse engineering, DFM/DFMEA, value engineering and cost optimisation.",
    image: "/media/service-1.webp",
    intro: "Our product design and engineering services includes 3D CAD modelling, reverse engineering, product detailing for plastics and metals, design for manufacturing studies (DFM/DFMEA), product re-engineering, value engineering to study alternate manufacturing methods, cost optimization. Furthermore, the team at GAK Enterprises Limited has a great deal of collective experience in several domains, which enables us to provide consulting services in almost any field. We have consulted on a wide range of projects to both Governmental and Non-Governmental organizations. Our vision is to help the start-ups and organizations with limited resources to build revolutionary products with the help of our experience and resources fostering the growth of both organizations.",
    groups: [
      { title: "Area of Expertise", items: ["Seating Systems", "Automotive interiors/ exteriors", "Automotive BIW", "Medical products", "Machine Design", "Static, Dynamic & Fatigue Testing", "Multi-physics", "Computational Fluid Dynamics", "Value Engineering", "Vehicle E/E Engineering", "E/E Systems Engineering", "E/E Verification Validation"] },
      { title: "We provide consultancy in", items: ["R & D in Electrical and Electronics", "Robotics", "Indigenous Products", "Firmware & Software"] },
      { title: "Product Design & Development", items: ["Strong Design capability for practical solutions and designed for manufacturability.", "Simultaneous engineered BIW design.", "Lightweight BIW solutions.", "Design capabilities – Wiring harnesses, connectors, moulded plastic components, injection moulding tools, rear vision systems and complete module designing and strong benchmarking experience.", "Safer BIW structures to meet the requirements."] },
      { title: "Interiors", items: ["Instrument Panel", "Centre Console", "Door Trims (Soft & Hard skin)", "Garnish Trims", "Luggage compartment", "Impact beam", "Seating"] },
      { title: "Exteriors", items: ["Bumper & Front end module", "Body side Cladding & Garnish", "Rocker Moulding", "Roof Rail System", "Exterior Grill", "Head light interface"] },
      { title: "Engineering", items: ["Benchmarking", "Tolerance Stack-up Analysis", "Flush-Gap study", "Homologation & Localization Support", "Manufacturing & Assembly Feasibility"] },
      { title: "Chassis Component Development", items: ["Package development", "Static & Dynamic clearance studies", "Interface development", "Sub-system interface development", "DFA evaluation", "Component & system tolerance study", "Reverse Engineering"] },
      { title: "BIW Panel and Material Development", items: ["Support styling & studio requirements", "Support panel for feasibility", "Assembly fitment/Removal study", "Static/Dynamic clearance", "Forming feasibility material", "Material selection based on the joint & tolerance", "Component breakdown"] },
      { title: "BIW Concept Study", items: ["Incorporate styling lines", "Develop master sections", "Accommodate aggregate", "Positioning to ensure function", "Ergonomics study", "Process development based on section requirement"] },
    ],
  },
  {
    slug: "manufacturing-support",
    title: "Manufacturing Support",
    short: "Line-side supply, inventory visibility and E/E systems engineering from prototype to fleet test.",
    image: "/media/service-2.webp",
    intro: "Production efficiency is critical to your entire operation, which means that managing the supply to your line side is vital. Our manufacturing support services improve visibility and inventory configuration so you receive inbound flows at the right time and in the right sequence. We work with you to maximize flexibility and efficiency by streamlining your supply chain.",
    groups: [
      { title: "Area of Expertise", items: ["Prototyping", "Manufacturing", "Manufacturing Consulting", "Vehicle E/E Engineering", "E/E Systems Engineering", "E/E Verification Validation", "Benchmarking & Tech Synthesis", "System Design", "Requirements Engineering", "Safety Analysis", "DFMEA & DVP Definition", "Verification & Validation", "EOL Development", "Supplier Management"] },
      { title: "E/E Architecture Design & Integration", items: ["Functional Architecture", "Software & Network Architecture", "Electrical Architecture", "Security & Safety Management", "Diagnostics Design & Development", "EOL Design"] },
      { title: "System Design & Application Engineering", items: ["System Definition", "System Safety Management", "System & Software Development", "System Calibration", "System Integration"] },
      { title: "Testing & Validation (System & Vehicle Level)", items: ["Test System Design & Development", "Tests Definition, Test Cases Preparation", "Automated Testing", "Vehicle Integration Testing", "Fleet Testing & Validation"] },
      { title: "E/E Systems", items: ["Electrical Systems", "Convenience & Body Controls", "Infotainment & Connectivity", "Chassis & ADAS", "Display Systems", "Energy Management System"] },
    ],
  },
  {
    slug: "information-technology",
    title: "Information & Technology",
    short: "Application development, legacy migration, cloud enablement and security management.",
    image: "/media/service-3.webp",
    intro: "Based on our assessments, we design and approach solutions that help clients with strategies for enterprise application integrations, legacy migrations, system architecture and design, and mobility/Cloud enablement. Our security management capabilities include: monitoring and analysis (portable devices), threat modelling, network vulnerability/risk assessment, ethical hacking, application security testing and malware remediation.",
    groups: [
      { title: "Area of Expertise", items: ["Software Development", "Website Development", "E-commerce Development", "Direct to Consumer Business Development (D2C)", "Complete B2B and B2C Solutions", "Custom Development", "Artificial Intelligence", "Machine Learning"] },
      { title: "Application Development", body: "We have successfully completed and delivered many innovative application development projects globally by adopting flexible and scalable architectures that ensure 24×7 Business availability and reduced development cycle times." },
      { title: "Application Management", body: "Our application management service provides high value and quality support and maintenance services by operating on a continually improving service model based on advanced processes." },
      { title: "Offshore and Onshore Software Product Development", body: "We have provided a lot of cost effective value addition to the overall product management process, right from the conceptualization to development to beta testing to launch to post launch support and maintenance and have helped established and start up software product companies get their products to the market faster." },
      { title: "User Interface Enhancement", body: "The technology is moving fast and there are several options and interfaces available through which the users can interact with the current applications." },
      { title: "Legacy Migration", body: "We understand how critical it is to adopt new technology and keep current applications in place. Legacy Migration is an opportunity to align business processes more closely with new IT capabilities." },
      { title: "Technologies Used", items: [".Net", "C Programming", "C++, EVC", "J2EE", "PHP", "Java", "Mobile Application Development (Native Applications for Android and iOS)"] },
    ],
  },
  {
    slug: "knowledge-management",
    title: "Knowledge Management",
    short: "Content development, technical documentation, e-learning and corporate training.",
    image: "/media/service-4.webp",
    intro: "Fast and transparent knowledge generation coupled with powerful management of intellectual property help your organization to increase this value. Our knowledge management services help our clients in deriving the same business value by building effective and efficient knowledge management solutions and products meeting specific client requirements.",
    groups: [
      { title: "Area of Expertise", items: ["Content Development", "Technical Documentation", "E-learning Solutions", "Corporate Training"] },
    ],
  },
];

export const designManufacture = {
  slug: "design-manufacture-automotive",
  title: "Design & Manufacture – Automotive",
  short: "VAVE design optimisation, testing & validation, tool & die design and special-purpose stations.",
  image: "/media/uk-sports-car-oem.webp",
  groups: [
    { title: "VAVE (Design Optimisation)", body: "Three main objectives were met:", items: ["Reduction in the mass of PAB bracket", "Increase in steering column vertical and lateral mode frequency", "Head impact ‘g’<75"] },
    { title: "Testing & Validation", body: "Following tests were done on various members of the automobile namely – Rear Twist Beam (Rear Twist Axle), Front Cross Member (Front Cradle), Lower Control Arm and Body Bracket.", items: ["Durability & Fatigue", "Strength & Stiffness", "Corrosion"] },
    {
      title: "Tool & Die Design",
      groups: [
        { title: "CAD Modelling", items: ["Design Feasibility Study", "Part Geometry", "Blank & Design Forming"] },
        { title: "Die Design", items: ["Stamping Die Design (Progressive, Transfer & Tandem)", "Design Verification", "Formability Check", "Process Validation", "Quality Control"] },
        { title: "Die Simulation", items: ["Thinning", "Splitting", "Compression", "Wrinkling", "Trim Line Optimization"] },
      ],
    },
  ] as Group[],
  stations: ["Design of Pellets", "Holding Fixtures", "Manufacturing Drawings", "Sealant Application Station", "Cylinder Block Leak Testing Application", "Fuel Tank Leak Testing Machine", "Bundling Station", "MH Covering & Screwing", "Engraving Station", "Unload Station", "Product Design & Development"],
};

const list = (...items: string[]): Block => ({ type: "list", items });
const p = (text: string): Block => ({ type: "p", text });
const label = (text: string): Block => ({ type: "label", text });

const bmsCopy = [
  list(
    "BMS is a Battery Monitoring & Managing System which keeps a check on the key operational parameters during charging and discharging.",
    "Checks voltages and currents and the battery’s internal and ambient temperature.",
    "Monitoring circuits would provide inputs to protection devices which would generate alarms.",
  ),
  label("Benefits"),
  list("Cell Protection", "Cell Balancing", "History – (Log Book Function)", "Communications", "Authentication and Identification", "SOC Determination", "Charge control"),
];

const homeSwitchIntro = "There are many products in the market currently which tout advanced home automation and smart capabilities. Not only are they restricted in their capabilities, but also they are extremely expensive, require high maintenance and are expensive to operate (require SIM for internet, etc.).";

export const work: Work[] = [
  { slug: "vehicle-immobilizer", title: "Vehicle Immobilizer", kind: "hardware", image: "/media/vehicle-immobilizer.webp", blocks: [
    list("A vehicle tracking and security system with real-time GPS and immobilizer.", "Can be used by owners of single and fleets of vehicles alike.", "Equipped with Geo-Fencing, GPS Tracking, Theft Protection, etc.", "One can block the ignition of the vehicle or to bring the vehicle to halt if it crosses certain pre-defined geo-points.", "In case of theft, it updates the owner about the location of the vehicle and enables one to stop it remotely as well."),
    label("Features"), list("Dynamic Geo-fencing", "Remote Access and Control", "GPS Tracking", "Lock"),
  ] },
  { slug: "battery-management-system", title: "Battery Management System", kind: "hardware", image: "/media/battery-management-system.webp", blocks: bmsCopy },
  { slug: "digital-addressable-lighting-interface", title: "Digital Addressable Lighting Interface", kind: "hardware", image: "/media/3.webp", blocks: [
    p("Around 40% of the energy consumed globally is related to buildings. Artificial lighting consumes a significant part of all electrical energy consumed. In offices from 20 to 50 percent of total energy consumed is due to lighting. And most importantly, for some buildings over 90 percent of lighting energy consumed can be an unnecessary expense through over-illumination."),
    p("In most cases, someone switches on and off lights at the start and at the end of the day. Other more sophisticated buildings (few of them) implement some sort of automatic control of lighting making this switching on and off by automatic control based on presence detection or calendar/hourly basis. And other even more sophisticated ones (very few of them all) implement really effective lighting control providing just the appropriate light level in any part of the building at any time, having in consideration many variables like daylight coming from outside, presence of people in each area, the required light level according to workplaces, etc."),
  ] },
  { slug: "can-enabled-bms-for-automobiles", title: "CAN enabled BMS for automobiles", kind: "hardware", image: "/media/can-enabled-bms-for-automobiles.webp", blocks: bmsCopy },
  { slug: "electric-bike", title: "Electric Bike", kind: "hardware", image: "/media/electric-bike-1.webp", blocks: [
    list("Works on BLDC (Brushless DC) Motors and has a Battery Management System (BMS) with a range of 36V to 48V.", "Works on a Closed Loop Control System.", "Capable of data acquisition and analysis and provides useful data during each ride.", "Data can be uploaded to a cloud infrastructure as well for ride analytics and other performance enhancements"),
  ] },
  { slug: "smart-lock", title: "Smart Lock", kind: "hardware", image: "/media/smart-lock-1.webp", blocks: [
    list("Smart Lock solution is a smart multi-utility lock solution for office and home purposes.", "It is based on an intelligent IoT platform and suffices to a wide array of uses.", "Remote Lock/Unlock", "Connects via Bluetooth (can only be locked/unlocked by paired devices in vicinity)", "Connects via GSM (can be locked/unlocked from anywhere from authorized devices)", "Google Now integration", "In case user loses access to the lock, then they can request a remote lock/unlock.", "User can view and download access log in case of a break-in."),
  ] },
  { slug: "miniature-data-logger", title: "Miniature Data Logger", kind: "hardware", image: "/media/miniature-data-logger.webp", blocks: [
    list("Is of the size of one’s thumb and can record millions of values over time.", "Has an expandable memory, thus enabling the user to store enormous amounts of values on this device.", "Recorded data can be seamlessly transferred to computers.", "Has been extensively used in the collection of data for grenade and shell explosions, etc.", "Comes with configurable frequency and time, thus enabling the user to have greater control over the data. It has frequencies higher than the general data loggers in the market."),
  ] },
  { slug: "electronic-detonator-system", title: "Electronic Detonator system", kind: "hardware", image: "/media/electronic-detonator-system.webp", blocks: [
    list("Has been used for blast optimizations, and increasing the efficiency of various mining and other operations.", "Has a higher accuracy as compared to the traditional chemical detonators.", "Accurate timing enables one to control delays.", "Works without the use of battery after the ejection of the projectile.", "Comes equipped with configurable frequency and time"),
  ] },
  { slug: "1-din-car-infotainment-system", title: "1-DIN Car Infotainment System", kind: "hardware", image: "/media/1-din-car-infotainment.webp", blocks: [
    list("Our single DIN range of products boasts of multiple firsts in the industry.", "Patented multi axis, multi directional universal holder allows one to use any tablet (even a Galaxy Note 9) in the car.", "Plug the USB into the device and you automatically get a remote for your tablet."),
    label("Models"), list("ZX – The high end system offering the ultimate experience even with a low end tablet.", "VX – Integrate other devices to your android smartphone/tablet while enjoying music from it.", "AN – Enjoy music from your tablet/phone with AN-01 in your car. Also provides an FM radio when you do not wish to plug your device in."),
  ] },
  { slug: "2-din-car-infotainment-system", title: "2-DIN Car Infotainment System", kind: "hardware", image: "/media/2-din-car-infotainment.webp", blocks: [
    list("Our 2 DIN Car infotainment system is an in-dash car infotainment system providing seamless integration of Android systems with the car.", "Boasts a 7″ capacitive touchscreen coupled to a powerful processor.", "Provides a good Android experience in the car. You can control your own playlists, watch HD movies while on the move."),
    label("Salient Features"), list("7 inch capacitive touchscreen", "HD video playback", "3G (external), Wi-Fi", "Apps through Google Play", "Reverse camera support", "Peripheral USB support (eg. keyboard, mouse)", "Dynamic Playlists"),
  ] },
  { slug: "smart-switch", title: "Smart Switch", kind: "hardware", image: "/media/smart-switch.webp", blocks: [
    list(homeSwitchIntro, "Our solution is an advanced robust and simple to install and operate system, which leverages the already installed infrastructure inside a house to provide an easy and convenient access and use.", "Also, it is completely operational in a no Internet regime. It is an Internet of Things (IoT) capable system which still provides functionality even when internet is offline."),
  ] },
  { slug: "mppt-with-remote-monitoring-system", title: "MPPT with Remote Monitoring System", kind: "hardware", image: "/media/mppt-with-remote-monitoring-system.webp", blocks: [
    list("The Qevin charge control unit is an MPPT charge control unit offering an excellent charge efficiency and a best in class remote monitoring and control ability.", "One may enhance the unit by adding other modules like wireless modem module for localized (< 2 km) monitoring & control, or the 2G wireless module for cloud support.", "Unit supports advanced security options like remote lockdown, password protection (even on RS232 port), disconnect notification, etc.", "Being a modular design, one can add features at a later date as well, with the options not being limited to just communications, but also display as well.", "As a fully digital device, one also has the ability to control the most basic of charging options, and can save profiles as well. The charge control unit offers an excellent charge efficiency and a best in class remote monitoring and control ability."),
  ] },
  { slug: "mobile-man-surveillance-system", title: "Mobile Man Surveillance System", kind: "hardware", image: "/media/mobile-man-surveillance-system.webp", blocks: [
    list("The mobile man portable surveillance system (Palantir) is a surveillance system for urban environments.", "Designed to operate well in closed spaces and provide a view of spaces which might be either hard to reach or are in hazardous conditions.", "Targeted at forces carrying out anti-terrorist operations."),
  ] },
  { slug: "wearable-sensor", title: "Wearable Sensor", kind: "hardware", image: "/media/14.webp", blocks: [
    list("ECG electrodes to detect Electrical Activities / Heart rate", "ICG electrodes measures the impedance (resistance) in thoracic cavity caused by increased fluid accumulation in lungs to detect pulmonary edema indicating chronic heart failure.", "Respiratory Rate Sensor", "Oxygen Saturation Sensor to measure peripheral capillary oxygen saturation, an estimate of the amount of oxygen in the blood.", "BP Sensor to measure pressure exerted by circulating blood upon the wall of blood vessels.", "MEMS accelerometer to detect motion", "Thermistor to detect skin temperature"),
  ] },
  { slug: "intelligent-homes", title: "Intelligent Homes", kind: "hardware", image: "/media/15.webp", blocks: [
    p(`${homeSwitchIntro} Our solution is an advanced robust and simple to install and operate system, which leverages the already installed infrastructure inside a house to provide an easy and convenient access and use. Also, it is completely operational in a no Internet regime. It is an Internet of Things (IoT) capable system which still provides functionality even when internet is offline.`),
    list("Aesthetically pleasing, easy to operate, extremely safe advanced switching.", "Ability to operate via Android apps.", "Highly secure encrypted SSL based communication between components."),
    { type: "groups", groups: [
      { title: "Access", items: ["From anywhere when Internet is available to the system.", "From inside the house when Internet is not available to the system.", "Internet security password.", "Device security password.", "Wi-Fi WPA2 only."] },
      { title: "Two type of 3 pin sockets are available", items: ["Chained sockets. All the sockets turn ON and OFF together. They are chained together for switching operations.", "Independent Sockets. These sockets are independent of each other’s state. As such they can be switched ON and OFF independently of each other."] },
    ] },
    list("Simple to configure.", "Advanced diagnostics capability for easy fault correction.", "Early Warning Fault Detection System (EWFDS) with Life Cycle Management System.", "Multipoint surge protecting spikes with independent switches are also available."),
  ] },
  { slug: "hscan", title: "HSCAN", kind: "hardware", image: "/media/hscan.webp", blocks: [
    list("HLP support", "UDS capable", "Multi Frame Messaging", "Multi ECU Detection and Targeting", "Data Collision Monitoring", "OOB (Out Of Band) Data support"),
  ] },
  { slug: "trackers", title: "Trackers", kind: "hardware", image: "/media/trackers.webp", blocks: [
    { type: "groups", groups: [
      { title: "Indoor", items: ["Active tracking", "Track indoor", "Latest technology"] },
      { title: "Outdoor", items: ["GPS based", "App based", "Tracking easy"] },
    ] },
  ] },
  { slug: "helmet-mounted-display", title: "Helmet Mounted Display", kind: "hardware", image: "/media/helmet-mounted-display.webp", blocks: [
    p("This carrier board uses Snapdragon 626 SoC and interface it with Camera (1080P x 2), Microphone, Speakers, Display (RGB888 interface – needs conversion from MIPI-DSI to RGB888), LEDs, Charging port, power button, Battery (Li-on) in the smallest form factor possible. The system is going to be mounted on a motorcycle helmet. It displays the map of the road on which user riding the vehicle which will help him/her to reach the destination. It also connects to the internet from which user can browse."),
    list("User friendly", "IOT Based", "Low power consumption"),
  ] },
  { slug: "ultrasonic-sensor", title: "Ultrasonic Sensor", kind: "hardware", image: "/media/ultrasonic-sensor.webp", blocks: [
    p("This Ultrasonic sensor equipped with filtering firmware which allows the sensor to ignore small & larger noise, and still report the target that gives the largest acoustic return. The sensor will also reject periodic noise, even noise that has a higher amplitude than the acoustic return from the target. This gives users the flexibility to consistently range larger targets in the presence of clutter and noise."),
    p("Ultrasonic Range Sensing – Accuracy is factory-matched providing a typical accuracy of 1% or better. Determines range smaller (1mm) to largest object in distance of 6 metres. Input supply-5V"),
    label("Applications & Uses"), list("Tank level measurement.", "Proximity zone detection", "People detection", "Robot ranging sensor", "Small & Long range object detection", "Height monitors"),
  ] },
  { slug: "home-automation-system", title: "Home Automation System", kind: "hardware", image: "/media/home-automation1circuit.webp", blocks: [
    p("This is an android application project which presents a design and prototype implementation of new home automation system that uses Wi-Fi technology as a network infrastructure connecting its parts. In the ESP-8266 hardware interface module, which provides appropriate interface to sensors and actuator of home automation system operating at 3.3V. By coding we can make esp8266 as a host or by programming we can connect it with local network. 5 V supply through Adapter. ESP-8266 connection to Mobile hotspot. Fan, Tube lights & Bulbs are connected to relay output. Accepts command from Mobile application to switch appliances."),
    label("Applications"), list("Wireless Web Server", "Pressure Sensors on Railway Tracks", "Humidity and temperature monitoring", "Wi-Fi controlled robot", "Temperature logging system"),
  ] },
  { slug: "remote-terminal-unit", title: "Remote Terminal Unit", kind: "hardware", image: "/media/remote-terminal-unit.webp", blocks: [
    p("This device measure the flow rate of liquid as well as measure the current consumption of Mechanical machines up to 20Amps. Device takes the input analog from flow sensors (Ex: YF-S201 & YF-S401) and calculate the flow rate in Millilitres/hr/min/sec & Litres/hr/min/sec."),
    label("Supply"), list("220V AC, 12 – 25V DC Supply & 12-25V solar power.", "Generates output from 5V to 25V to run other peripherals.", "Can take multiple ADC & Interrupts inputs.", "Remote terminal unit"),
  ] },
  { slug: "wireless-temperature-sensor", title: "Wireless Temperature Sensor", kind: "hardware", image: "/media/wireless-temperature-sensor.webp", blocks: [
    p("Using the Internet of Things (IoT) in homes and industries it is possible to control any electrical or electronic equipment. Moreover, you can get the information from any sensor and analyse it graphically or in any user-defined format from anywhere in the world. The IoT using Node MCU Esp-8266 is easy and fun for those who are new to the field. Presented here is a humidity and temperature monitoring using ESP-8266. The DHT11 is a commonly used Temperature and humidity sensor. We are integrating this DHT11 to ESP-WROOM-32 , ESP-WROOM-32 is a powerful, generic Wi-Fi+BT+BLE MCU module that targets a wide ranging from low-power sensor networks to the most demanding tasks, such as voice encoding, music streaming and MP3 decoding."),
    list("Uses 3.0V to 3.3V Supply.", "Can be controlled from an Android App.", "Measure temperature and humidity", "Environment Climate monitoring"),
  ] },
  { slug: "suv-platform-e-e-architecture-chinese-oem", title: "Design and Develop an E/E Architecture of a new SUV Platform with Three Powertrain Configurations (Chinese OEM)", kind: "programme", image: "/media/chinese-oem-1.webp", blocks: [
    list("Benchmarking", "EU & China Regulatory Analysis", "Requirement Specifications", "Vehicle E/E Architecture Design", "Functional Safety", "Electrical Schematics", "Power Balance & Distribution", "Network & Cyber Security", "EOL Solution", "Process & ALM"),
  ] },
  { slug: "e-e-architecture-localisation-german-oem", title: "Systems & E/E Architecture Re-engineering and Localisation for Emerging Markets – 3 Vehicle Platforms and 12 Variants (German OEM)", kind: "programme", image: "/media/german-oem-1.webp", blocks: [
    list("Benchmarking & Regulatory Analysis", "System Requirement Engineering", "Module & Function Ownership", "E/E Architecture Adaptation", "Systems Integration & Calibration", "Test Management (System, Architecture & Vehicle)", "Program, Quality and Supplier Management"),
  ] },
  { slug: "e-e-architecture-testing-uk-sports-car-oem", title: "Systems & E/E Architecture Design, and Testing in Multiple Vehicle Programs (UK Sports Car OEM)", kind: "programme", image: "/media/uk-sports-car-oem.webp", blocks: [
    list("Vehicle Functions Requirement Engineering", "Functional Safety (Architecture & System Level)", "E/E Architecture Design"),
  ] },
  { slug: "alcohol-dispenser", title: "Alcohol Dispenser", kind: "software", image: "/media/1-1-1.webp", blocks: [
    list("The Android based alcohol dispenser is a state-of-the-art product which can dramatically cut down costs and increase productivity and customer satisfaction of bars, pubs, etc. It can handle all these while providing an aesthetically pleasing look to the surroundings. The intensity and colour of the glow lights can be adjusted to match the theme of the environment and meet the ambiance requirements as well.", "The Alcohol dispenser machine is able to dispense 8 different brands. Machine is IOT based and can be commanded from anywhere. It has the functionality to detect empty Alcohol bottles which are mounted on adapter of machine. It works on 24V DC power supply.", "This machine is manufactured to bring technology in alcohol industry. The glass on behind the machine gives a fabulous look which displays RGB light. The user can set 10 different colours to display glass. By using alcohol dispenser machine we can prevent the wastage of alcohol in pub & bars."),
  ] },
  { slug: "vigil-box", title: "Vigil Box", kind: "software", image: "/media/1-1-2.webp", blocks: [
    p("Created an Android App for the vehicle protection and tracking product listed above. The app allows users to remotely turn off the ignition of their vehicles, geo-fence the car or to track a fleet of vehicles."),
  ] },
  { slug: "subscriber-management-system-for-cable-tv", title: "Subscriber Management System for Cable TV", kind: "software", image: "/media/1-1-3.webp", blocks: [
    list("After the digitization of cable TV operators needed a solution for maintenance of payment & channel subscription record of customers which should be linked to their existing Conditional Access System.", "The application acts as basic CRM and front end for Conditional Access System. We have developed a product meeting their requirement which accessed ABV Conditional Access system using TCP/IP communication. Project is currently in use at Vande Mahamaya Cable Network & City Cable Network both in Chhattisgarh state."),
  ] },
  { slug: "banking-system-for-pacs", title: "Banking System for PACS", kind: "software", blocks: [
    list("The application fulfils all the basic banking needs of primary agriculture credit societies like customer account opening & maintenance, transaction posting & verification, various reports.", "Application works in offline local installation and supports multi users. Currently implemented at Marokhana PACS, Bonhijly PACS (West Bengal)."),
  ] },
  { slug: "orgbook", title: "Orgbook", kind: "software", blocks: [
    p("This is a networking platform where companies get to manage their organizational work- flow."),
    list("Employees get a platform to communicate and work on projects better and these can be reviewed by those in an upper hierarchy. The entire information flow throughout the company’s network can be controlled efficiently.", "Worked on Item-Demand forecasting engine using advanced neural networks like LSTMs and Kalman Filter based adaptive modelling. Our work also involved oozie pipeline building and hive-based query optimizations for pre-processing stages.", "Completed a project on NLP (Natural Language Processing): Semantic analysis based relationship extraction to fetch employee names and associated resignation/appointment events along with dates from 10-K documents published on sec.gov site. Text engineering tools having SVM support were used to perform supervised learning on relationship modelling and real time mined data was persisted in SQL database. It has been deployed as a scheduled service for regularly updating the database of companies and their employees’ joining and resigning information’s.", "Designed and developed Autopilot system, various other avionic and other mission critical systems like Ground Control System, etc.", "Developed Remote Monitoring and Control System for solar based systems. Leveraging the telecommunication infrastructure in India, the system provided a single point monitoring and analysis utility to monitor and maintain the widely distributed solar systems of the client."),
  ] },
];

export const portfolios: Portfolio[] = [
  { slug: "e-e-hardware-based", title: "E/E Hardware Based", short: "Embedded products, IoT devices and vehicle E/E architecture programmes.",  kinds: ["hardware", "programme"] },
  { slug: "e-e-software-based", title: "E/E Software Based", short: "Android, IoT and enterprise software from dispensers to banking systems.",  kinds: ["software"] },
];

export const portfolioOf = (item: Work) => portfolios.find((entry) => entry.kinds.includes(item.kind))!;
export const workIn = (portfolio: Portfolio) => work.filter((item) => portfolio.kinds.includes(item.kind));
export const kindLabel: Record<Work["kind"], string> = { hardware: "Hardware", software: "Software", programme: "OEM programme" };
