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
        signed: true
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
        signed: true
    },
];

// Add age property to each patient
export const updatedPatientInfo = patientInfo.map((patient) => ({
    ...patient,
    age: calculateAge(patient.birthdate),
}));



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