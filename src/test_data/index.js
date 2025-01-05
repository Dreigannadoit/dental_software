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