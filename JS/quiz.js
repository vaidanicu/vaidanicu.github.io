var employees = [
  {
    id: 1,
    firstName: "Solly",
    lastName: "Coon",
    email: "scoon0@miitbeian.gov.cn",
    gender: "Male",
    salary: "293.27",
  },
  {
    id: 2,
    firstName: "Myron",
    lastName: "Clissold",
    email: "mclissold1@over-blog.com",
    gender: "Male",
    salary: "463.44",
  },
  {
    id: 3,
    firstName: "Perla",
    lastName: "Fauguel",
    email: "pfauguel2@discovery.com",
    gender: "Female",
    salary: "764.17",
  },
  {
    id: 4,
    firstName: "Aundrea",
    lastName: "Kegan",
    email: "akegan3@tripod.com",
    gender: "Female",
    salary: "574.63",
  },
  {
    id: 5,
    firstName: "Eadith",
    lastName: "Chene",
    email: "echene4@prnewswire.com",
    gender: "Female",
    salary: "417.37",
  },
  {
    id: 6,
    firstName: "Lorette",
    lastName: "Tuther",
    email: "ltuther5@admin.ch",
    gender: "Female",
    salary: "377.40",
  },
  {
    id: 7,
    firstName: "Robenia",
    lastName: "Robins",
    email: "rrobins6@networkadvertising.org",
    gender: "Female",
    salary: "206.26",
  },
  {
    id: 8,
    firstName: "Moe",
    lastName: "Bottoms",
    email: "mbottoms7@php.net",
    gender: "Male",
    salary: "425.70",
  },
  {
    id: 9,
    firstName: "Talia",
    lastName: "Cutsforth",
    email: "tcutsforth8@delicious.com",
    gender: "Female",
    salary: "711.72",
  },
  {
    id: 10,
    firstName: "Ives",
    lastName: "Crennan",
    email: "icrennan9@microsoft.com",
    gender: "Male",
    salary: "668.98",
  },
];

// 2.Create a function that returns only the firstName of each Person

function collectFristName(employees) {
  if (!employees) {
    console.info("you did not provide any value");
  }

  var firstName = employees.map(function (employee) {
    return employee.firstName;
  });
  console.log(firstName);
  return firstName;
}

collectFristName(employees);

// 3.Create a function that caclculates the average salary then print result in the console(result: 490.29)

function calculateAverageSalary(employees) {
  var totalSalary = 0;
  var avgSarary = 0;
  avgSarary = totalSalary / employees.length;
  employees.forEach(function (employee) {
    totalSalary += parseFloat(employee.salary);
    console.info(totalSalary, "Ex1", employee.salary);
  });
}

var average = calculateAverageSalary(employees);

// 4.Create a function the calculates the average female salary. Log the result in the console. (result: 508.59)

function calculateAverageFemSaraly(employees) {
  var TotalSalaryFem = 0;
  var averageFem = 0;

  employees.forEach(function (employee) {
    if (employee.gender === "Female") {
      TotalSalaryFem += parseFloat(employee.salary);
    }
    averageFem = TotalSalaryFem / employee.salary.length;
    console.log(averageFem, "EX2");
  });
}
var average = calculateAverageFemSaraly(employees);

// 5.As always, create a function that return 2 arrays, one of male  and the other of female employees.

function splitEmployees(employees) {
  const allEmployees = [["male"], ["Female"]];
  console.log(allEmployees);
}

splitEmployees(employees);

// 6.

var converted = {
  Coon: {
    id: 1,
    firstName: "Solly",
    lastName: "Coon",
    email: "scoon0@miitbeian.gov.cn",
    gender: "Male",
    salary: "293.27",
  },
  Clissold: {
    id: 2,
    firstName: "Myron",
    lastName: "Clissold",
    email: "mclissold1@over-blog.com",
    gender: "Male",
    salary: "463.44",
  },
  Fauguel: {
    id: 3,
    firstName: "Perla",
    lastName: "Fauguel",
    email: "pfauguel2@discovery.com",
    gender: "Female",
    salary: "764.17",
  },
  Kegan: {
    id: 4,
    firstName: "Aundrea",
    lastName: "Kegan",
    email: "akegan3@tripod.com",
    gender: "Female",
    salary: "574.63",
  },
  Chene: {
    id: 5,
    firstName: "Eadith",
    lastName: "Chene",
    email: "echene4@prnewswire.com",
    gender: "Female",
    salary: "417.37",
  },
  Tuther: {
    id: 6,
    firstName: "Lorette",
    lastName: "Tuther",
    email: "ltuther5@admin.ch",
    gender: "Female",
    salary: "377.40",
  },
  Robins: {
    id: 7,
    firstName: "Robenia",
    lastName: "Robins",
    email: "rrobins6@networkadvertising.org",
    gender: "Female",
    salary: "206.26",
  },
  Bottoms: {
    id: 8,
    firstName: "Moe",
    lastName: "Bottoms",
    email: "mbottoms7@php.net",
    gender: "Male",
    salary: "425.70",
  },
  Cutsforth: {
    id: 9,
    firstName: "Talia",
    lastName: "Cutsforth",
    email: "tcutsforth8@delicious.com",
    gender: "Female",
    salary: "711.72",
  },
  Crennan: {
    id: 10,
    firstName: "Ives",
    lastName: "Crennan",
    email: "icrennan9@microsoft.com",
    gender: "Male",
    salary: "668.98",
  },
};
console.log(converted);

const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955,
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727,
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642,
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630,
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543,
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947,
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979,
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852,
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905,
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968,
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909,
  },
];
const people = [inventors];
