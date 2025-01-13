import { userAvatar } from "../assets/icons/INDEX.JS"

export const test_user = [
    {
        username: "Michelle McDonald",
        role: "Super Admin",
        email: "superadmin@dentalapp.test",
        phone_number: "123-456-7890",
        password: "superadmin",
        gender: "male",
        profilePicture: userAvatar
    }
]

const servedData = [400, 300, 200];
const receivingSealantsData = [240, 198, 980];
const receivingFlourideData = [260, 230, 530];
export const csdpProgramTrendsSeriesLabels = ["2022", "2023", "2024"];

export const csdpProgramTrendsSeries = [
    {
        name: 'Served Data',
        data: servedData,
    },
    {
        name: 'Receiving Sealants',
        data: receivingSealantsData,
    },
    {
        name: 'Receiving Flouride',
        data: receivingFlourideData,
    },
];



const historyOfCarriesNo = 400;
const historyOfCarriesYes = 120;

const sealantPresentNo = 247;
const sealantPresentYes = 140;

const untreatedCariesNo = 260;
const untreatedCariesYes = 230;

export const oralHealthStatusSummaryLabels = ["History Of Carries", "Sealant Present", "Untreated Caries"];

export const oralHealthStatusSummarySeries = [
    {
        name: 'Yes',
        data: [historyOfCarriesYes, sealantPresentYes, untreatedCariesYes],
    },
    {
        name: 'No',
        data: [historyOfCarriesNo, sealantPresentNo, untreatedCariesNo],
    },
];



const phrophyNo = 400;
const phrophyYes = 120;

const varnishNo = 247;
const varnishYes = 140;

const sealantsNo = 260;
const sealantsYes = 230;

const referralNo = 260;
const referralYes = 230;

export const childrenReceivingServiceLabels = [
    "Phrophy",
    "Varnish",
    "Sealants",
    "Referral",
];

export const childrenReceivingServiceSeries = [
    {
        name: 'Yes',
        data: [phrophyYes, varnishYes, sealantsYes, referralYes],
    },
    {
        name: 'No',
        data: [phrophyNo, varnishNo, sealantsNo, referralNo],
    },
];

const generateRandomData = (numItems, label, range) => {
    const data = [];
    for (let i = 0; i < numItems; i++) {
        data.push({
            id: i,
            value: Math.floor(Math.random() * `${range}`) + 1,
            label: `${label} ${i + 1}`,
            highlight: { additionalRadius: 10 },
        });
    }
    return data;
};

export const gradeData = generateRandomData(10, "Grade", 100);

export const ageData = generateRandomData(10, "Age:", 18);

export const valueFormatter = (item) => `${item.value}%`;

export const raceData = [
    { id: 0, value: 10, label: 'Black' },
    { id: 1, value: 15, label: 'Native' },
    { id: 2, value: 20, label: 'White' },
    { id: 3, value: 15, label: 'Hispanic/Latin' },
    { id: 4, value: 20, label: 'English' },
];

const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

export const patientInfo = [
    {
        id: 1,
        name: "Johnny J. Johnson",
        school: "Gilbert Mary School",
        year: "2023-2024",
        grade: 7,
        status: "Active",
        birthdate: "2016-04-18",
        gender: "Male",
        insurance: "Mass Health / 100223570365",
        room: "129",
        teacher: "Cinelli, Kristin L",
        school_year: "Csdp Program Sy 2024 - 2025",
        parent_gauridian: "Woodlene Charles",
        parent_gauridian_relationship: "Mother",
        parent_gauridian_phoneNumber: "774 946 4364",
        parent_gauridian_email: "woodlenecharles12@gmail.com",
        dentistName: "Dr Shahishichkchie",
        consented: true,
        consentedNotes: "The Worst teeth I have Ever seen",
        signed: false,
        signedNotes: "Has Insuarance",
    },
    {
        id: 2,
        name: "Sophia R. Martinez",
        school: "Bright Future Academy",
        year: "2023-2024",
        grade: 6,
        status: "Active",
        birthdate: "2017-01-12",
        gender: "Female",
        insurance: "Mass Health / 100223570365",
        room: "129",
        teacher: "Ross, Bob",
        school_year: "Csdp Program Sy 2024 - 2025",
        parent_gauridian: "Woodlene Charles",
        parent_gauridian_relationship: "Mother",
        parent_gauridian_phoneNumber: "774 946 4364",
        parent_gauridian_email: "woodlenecharles12@gmail.com",
        dentistName: "Dr Shahishichkchie",
        consented: true,
        consented_notes: "",
        signed: true,
        signed_notes: "",
    },
    {
        id: 3,
        name: "Liam K. Anderson",
        school: "Oak Valley Elementary",
        year: "2022-2023",
        grade: 8,
        status: "Inactive",
        birthdate: "2015-09-03",
        gender: "Male",
        insurance: "Mass Health / 100223570365",
        room: "129",
        teacher: "John, Johnny",
        school_year: "Csdp Program Sy 2024 - 2025",
        parent_gauridian: "Woodlene Charles",
        parent_gauridian_relationship: "Mother",
        parent_gauridian_phoneNumber: "774 946 4364",
        parent_gauridian_email: "woodlenecharles12@gmail.com",
        dentistName: "Dr Shahishichkchie",
        consented: true,
        signed: true
    },
    {
        id: 4,
        name: "Olivia P. Brown",
        school: "Hillside Middle School",
        year: "2023-2024",
        grade: 7,
        status: "Active",
        birthdate: "2016-06-22",
        gender: "Female",
        insurance: "Mass Health / 100223570365",
        room: "129",
        teacher: "Squarepants, Sponge Bob",
        school_year: "Csdp Program Sy 2024 - 2025",
        parent_gauridian: "Woodlene Charles",
        parent_gauridian_relationship: "Mother",
        parent_gauridian_phoneNumber: "774 946 4364",
        parent_gauridian_email: "woodlenecharles12@gmail.com",
        dentistName: "Dr Shahishichkchie",
        consented: true,
        signed: true
    },
    {
        id: 5,
        name: "Ethan W. Smith",
        school: "Riverside Academy",
        year: "2021-2022",
        grade: 5,
        status: "Inactive",
        birthdate: "2018-11-09",
        gender: "Male",
        insurance: "Mass Health / 100223570365",
        room: "129",
        teacher: "Squarepants, Sponge Bob",
        school_year: "Csdp Program Sy 2024 - 2025",
        parent_gauridian: "Woodlene Charles",
        parent_gauridian_relationship: "Mother",
        parent_gauridian_phoneNumber: "774 946 4364",
        parent_gauridian_email: "woodlenecharles12@gmail.com",
        dentistName: "Dr Shahishichkchie",
        consented: true,
        signed: true
    },
    {
        id: 6,
        name: "Ava J. Wilson",
        school: "Sunrise Primary School",
        year: "2023-2024",
        grade: 4,
        status: "Active",
        birthdate: "2019-02-14",
        gender: "Female",
        insurance: "Mass Health / 100223570365",
        room: "129",
        teacher: "Cinelli, Kristin L",
        school_year: "Csdp Program Sy 2024 - 2025",
        parent_gauridian: "Woodlene Charles",
        parent_gauridian_relationship: "Mother",
        parent_gauridian_phoneNumber: "774 946 4364",
        parent_gauridian_email: "woodlenecharles12@gmail.com",
        dentistName: "Dr Shahishichkchie",
        consented: true,
        signed: true
    },
    {
        id: 7,
        name: "William H. Lee",
        school: "Cedarwood International",
        year: "2022-2023",
        grade: 6,
        status: "Inactive",
        birthdate: "2017-07-05",
        gender: "Male",
        insurance: "Mass Health / 100223570365",
        room: "129",
        teacher: "Cinelli, Kristin L",
        school_year: "Csdp Program Sy 2024 - 2025",
        parent_gauridian: "Woodlene Charles",
        parent_gauridian_relationship: "Mother",
        parent_gauridian_phoneNumber: "774 946 4364",
        parent_gauridian_email: "woodlenecharles12@gmail.com",
        dentistName: "Dr Shahishichkchie",
        consented: true,
        signed: true
    },
    {
        id: 8,
        name: "Emily A. Davis",
        school: "Greenfield Academy",
        year: "2023-2024",
        grade: 7,
        status: "Active",
        birthdate: "2016-10-30",
        gender: "Female",
        insurance: "Mass Health / 100223570365",
        room: "129",
        teacher: "Cinelli, Kristin L",
        school_year: "Csdp Program Sy 2024 - 2025",
        parent_gauridian: "Woodlene Charles",
        parent_gauridian_relationship: "Mother",
        parent_gauridian_phoneNumber: "774 946 4364",
        parent_gauridian_email: "woodlenecharles12@gmail.com",
        dentistName: "Dr Shahishichkchie",
        consented: true,
        signed: true
    },
    {
        id: 9,
        name: "Michael T. Garcia",
        school: "Summit Hill School",
        year: "2020-2021",
        grade: 9,
        status: "Inactive",
        birthdate: "2014-03-19",
        gender: "Male",
        insurance: "Squarepants, Sponge Bob",
        room: "129",
        teacher: "Cinelli, Kristin L",
        school_year: "Csdp Program Sy 2024 - 2025",
        parent_gauridian: "Woodlene Charles",
        parent_gauridian_relationship: "Mother",
        parent_gauridian_phoneNumber: "774 946 4364",
        parent_gauridian_email: "woodlenecharles12@gmail.com",
        dentistName: "Dr Shahishichkchie",
        consented: true,
        signed: true
    },
    {
        id: 10,
        name: "Isabella M. Harris",
        school: "Maple Grove Elementary",
        year: "2023-2024",
        grade: 5,
        status: "Active",
        birthdate: "2018-05-07",
        gender: "Female",
        insurance: "Mass Health / 100223570365",
        room: "129",
        teacher: "Cinelli, Kristin L",
        school_year: "Csdp Program Sy 2024 - 2025",
        parent_gauridian: "Woodlene Charles",
        parent_gauridian_relationship: "Mother",
        parent_gauridian_phoneNumber: "774 946 4364",
        parent_gauridian_email: "woodlenecharles12@gmail.com",
        dentistName: "Dr Shahishichkchie",
        consented: true,
        signed: true
    },
    {
        id: 11,
        name: "Benjamin R. Clark",
        school: "Willow Creek High School",
        year: "2023-2024",
        grade: 10,
        status: "Active",
        birthdate: "2013-08-15",
        gender: "Male",
        insurance: "Mass Health / 100223570365",
        room: "129",
        teacher: "Cinelli, Kristin L",
        school_year: "Csdp Program Sy 2024 - 2025",
        parent_gauridian: "Woodlene Charles",
        parent_gauridian_relationship: "Mother",
        parent_gauridian_phoneNumber: "774 946 4364",
        parent_gauridian_email: "woodlenecharles12@gmail.com",
        dentistName: "Dr Shahishichkchie",
        consented: true,
        signed: true, 
        sdf: true
    },
];

// Add age property to each patient
export const updatedPatientInfo = patientInfo.map((patient) => ({
    ...patient,
    age: calculateAge(patient.birthdate),
}));

export const schoolData = [
    {
        id: 1,
        name: "GILMORE ELEMENTARY SCHOOL",
        address: "240 Center St, Brockton, MA",
        type: "School",
        grade: ["K", "1", "2", "3", "4", "5", "6"],
        status: "active",
    },
    {
        id: 2,
        name: "WEST MIDDLE SCHOOL",
        address: "271 West St, Brockton, MA",
        type: "School",
        grade: ["7", "8", "9", "10", "11", "12"],
        status: "active",
    },
    {
        id: 3,
        name: "SOUTH MIDDLE SCHOOL",
        address: "105 Keith Ave, Brockton, MA",
        type: "School",
        grade: ["K", "1", "2", "3", "4", "5", "6"],
        status: "active",
    },
    {
        id: 4,
        name: "RAYMOND ELEMENTARY SCHOOL",
        address: "125 Oak St, Brockton, MA",
        type: "School",
        grade: ["7", "8", "9", "10", "11", "12"],
        status: "inactive",
    },
    {
        id: 5,
        name: "PLOUFFE MIDDLE SCHOOL",
        address: "250 Crescent St, Brockton, MA",
        type: "School",
        grade: ["K", "1", "2", "3", "4", "5", "6"],
        status: "active",
    },
    {
        id: 6,
        name: "NORTH MIDDLE SCHOOL",
        address: "108 Oak St, Brockton, MA",
        type: "School",
        grade: ["7", "8", "9", "10", "11", "12"],
        status: "active",
    },
    {
        id: 7,
        name: "KENNEDY ELEMENTARY SCHOOL",
        address: "900 Ash St, Brockton, MA",
        type: "School",
        grade: ["K", "1", "2", "3", "4", "5", "6"],
        status: "inactive",
    },
    {
        id: 8,
        name: "BROCKTON THERAPEUTIC SCHOOL",
        address: "75 Warren Ave, Brockton, MA",
        type: "Facility",
        grade: ["7", "8", "9", "10", "11", "12"],
        status: "active",
    },
    {
        id: 9,
        name: "HANCOCK ELEMENTARY SCHOOL",
        address: "125 Pearl St, Brockton, MA",
        type: "School",
        grade: ["K", "1", "2", "3", "4", "5", "6"],
        status: "active",
    },
    {
        id: 10,
        name: "ANGELO ELEMENTARY SCHOOL",
        address: "135 Belmont St, Brockton, MA",
        type: "School",
        grade: ["7", "8", "9", "10", "11", "12"],
        status: "active",
    },
    {
        id: 11,
        name: "GEORGE ELEMENTARY SCHOOL",
        address: "180 Ash St, Brockton, MA",
        type: "School",
        grade: ["K", "1", "2", "3", "4", "5", "6"],
        status: "inactive",
    },
    {
        id: 12,
        name: "EAST MIDDLE SCHOOL",
        address: "155 Adams St, Brockton, MA",
        type: "School",
        grade: ["7", "8", "9", "10", "11", "12"],
        status: "active",
    },
    {
        id: 13,
        name: "BROOKFIELD ELEMENTARY SCHOOL",
        address: "200 West St, Brockton, MA",
        type: "School",
        grade: ["K", "1", "2", "3", "4", "5", "6"],
        status: "active",
    },
    {
        id: 14,
        name: "BARRETT RUSSELL",
        address: "100 North Ave, Brockton, MA",
        type: "School",
        grade: ["7", "8", "9", "10", "11", "12"],
        status: "inactive",
    },
    {
        id: 15,
        name: "BAKER ELEMENTARY SCHOOL",
        address: "125 Baker St, Brockton, MA",
        type: "School",
        grade: ["K", "1", "2", "3", "4", "5", "6"],
        status: "active",
    },
    {
        id: 16,
        name: "ASHFIELD MIDDLE SCHOOL",
        address: "300 Central St, Brockton, MA",
        type: "School",
        grade: ["7", "8", "9", "10", "11", "12"],
        status: "active",
    },
    {
        id: 17,
        name: "ARNONE SCHOOL",
        address: "135 Belmont St, Brockton, MA",
        type: "School",
        grade: ["K", "1", "2", "3", "4", "5", "6"],
        status: "active",
    },
];

export const listOfDradeData = [
    {
        id: "1",
        name: "Pre K",
        description: ""
    },
    {
        id: "2",
        name: "K",
        description: ""
    },
    {
        id: "3",
        name: "1",
        description: ""
    },
    {
        id: "4",
        name: "2",
        description: ""
    },
    {
        id: "5",
        name: "3",
        description: ""
    },
    {
        id: "6",
        name: "4",
        description: ""
    },
    {
        id: "7",
        name: "5",
        description: ""
    },
    {
        id: "8",
        name: "6",
        description: ""
    },
    {
        id: "9",
        name: "7",
        description: ""
    },
    {
        id: "10",
        name: "8",
        description: ""
    },
    {
        id: "11",
        name: "9",
        description: ""
    },
    {
        id: "12",
        name: "10",
        description: ""
    },
    {
        id: "13",
        name: "11",
        description: ""
    },
    {
        id: "14",
        name: "12",
        description: ""
    }
];


export const csdpsStatisticsBySchool = [
    {
        school: "GILMORE ELEMENTARY SCHOOL",
        numStudentsServed: 400,
        numReceivingSealant: 400,
        numReceivingFlouride: 400,
        numReceivingPhrophy: 400,
        numReferals: 400,
    },
    {
        school: "GILMORE ELEMENTARY SCHOOL",
        numStudentsServed: 400,
        numReceivingSealant: 400,
        numReceivingFlouride: 400,
        numReceivingPhrophy: 400,
        numReferals: 400,
    },
    {
        school: "GILMORE ELEMENTARY SCHOOL",
        numStudentsServed: 400,
        numReceivingSealant: 400,
        numReceivingFlouride: 400,
        numReceivingPhrophy: 400,
        numReferals: 400,
    },
    {
        school: "GILMORE ELEMENTARY SCHOOL",
        numStudentsServed: 400,
        numReceivingSealant: 400,
        numReceivingFlouride: 400,
        numReceivingPhrophy: 400,
        numReferals: 400,
    },
    {
        school: "GILMORE ELEMENTARY SCHOOL",
        numStudentsServed: 400,
        numReceivingSealant: 400,
        numReceivingFlouride: 400,
        numReceivingPhrophy: 400,
        numReferals: 400,
    },
    {
        school: "GILMORE ELEMENTARY SCHOOL",
        numStudentsServed: 400,
        numReceivingSealant: 400,
        numReceivingFlouride: 400,
        numReceivingPhrophy: 400,
        numReferals: 400,
    },
    {
        school: "GILMORE ELEMENTARY SCHOOL",
        numStudentsServed: 400,
        numReceivingSealant: 400,
        numReceivingFlouride: 400,
        numReceivingPhrophy: 400,
        numReferals: 400,
    },
    {
        school: "GILMORE ELEMENTARY SCHOOL",
        numStudentsServed: 400,
        numReceivingSealant: 400,
        numReceivingFlouride: 400,
        numReceivingPhrophy: 400,
        numReferals: 400,
    },
    {
        school: "GILMORE ELEMENTARY SCHOOL",
        numStudentsServed: 400,
        numReceivingSealant: 400,
        numReceivingFlouride: 400,
        numReceivingPhrophy: 400,
        numReferals: 400,
    },
    {
        school: "GILMORE ELEMENTARY SCHOOL",
        numStudentsServed: 400,
        numReceivingSealant: 400,
        numReceivingFlouride: 400,
        numReceivingPhrophy: 400,
        numReferals: 400,
    },
    {
        school: "GILMORE ELEMENTARY SCHOOL",
        numStudentsServed: 400,
        numReceivingSealant: 400,
        numReceivingFlouride: 400,
        numReceivingPhrophy: 400,
        numReferals: 400,
    },
    {
        school: "GILMORE ELEMENTARY SCHOOL",
        numStudentsServed: 400,
        numReceivingSealant: 400,
        numReceivingFlouride: 400,
        numReceivingPhrophy: 400,
        numReferals: 400,
    }

]

export const illnessList = [
    { value: 'None', label: 'None' },
    { value: 'ADD/ADHD', label: 'ADD/ADHD' },
    { value: 'Diabetes', label: 'Diabetes' },
    { value: 'Epilepsy/Seizure', label: 'Epilepsy/Seizure' },
    { value: 'Heart Murmur', label: 'Heart Murmur' },
    { value: 'Plavix (chopidogerel)', label: 'Plavix (chopidogerel)' },
    { value: 'Blood Disorder / Hemophilia', label: 'Blood Disorder / Hemophilia' },
    { value: 'Congenital Heart Disease/Defect', label: 'Congenital Heart Disease/Defect' },
    { value: 'Heart Atteck/Heart Failure', label: 'Heart Atteck/Heart Failure' },
    { value: 'Artificial Heart Valve', label: 'Artificial Heart Valve' },
    { value: 'Tuberculosis', label: 'Tuberculosis' },
    { value: 'Hepatitis/Liver Disease', label: 'Hepatitis/Liver Disease' },
    { value: 'Biophosphonate Thearapy (Oral or IV)', label: 'Biophosphonate Thearapy (Oral or IV)' },
    { value: 'Heart Atteck/Heart Failure', label: 'Heart Atteck/Heart Failure' },
    { value: 'Costisone - Corticosteroid Thearapy', label: 'Costisone - Corticosteroid Thearapy' },
    { value: 'Systemic Lupus Erythematosus', label: 'Systemic Lupus Erythematosus' },
  ];

export const allergiedList = [
    { value: 'none', label: 'None' },
    { value: 'colophonium', label: 'Colophonium' },
    { value: 'latex', label: 'Latex' },
    { value: 'tree_nuts', label: 'Tree Nuts' },
    { value: 'resins', label: 'Resins' },
    { value: 'food', label: 'Food' },
    { value: 'artificial_flavoring', label: 'Artificial Flavoring' },
    { value: 'red_dye', label: 'Red Dye' },
];