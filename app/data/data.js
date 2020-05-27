export default {
  patients: [
    {
      id: 110,
      name: "Tom",
      address: "somewher, planet earth",
      gender: "Male",
      dob: "32-12-1990",
      age: 23,
      symptoms: ["pain in stomach"],
      prescription: ["xyz tablet", "abcsyrup"],
      visitedDate: "2020-05-12",
      creds: {
        email: "patient.a@patient.com",
        password: "patient",
        role: "patient",
      },
    },
    {
      id: 111,
      name: "Dick",
      address: "earth X",
      gender: "Male",
      dob: "03-03-1850",
      age: 115,
      symptoms: ["Fever"],
      prescription: ["pqr tablets"],
      visitedDate: "2020-05-15",
      creds: {
        email: "patient.b@patient.com",
        password: "patient",
        role: "patient",
      },
    },
    {
      id: 112,
      name: "Harry",
      address: "X-men",
      gender: "Male",
      dob: "04-04-1950",
      age: 70,
      symptoms: ["headache"],
      prescription: ["cb tablet", "calcium tablets"],
      visitedDate: "2020-05-10",
      creds: {
        email: "patient.c@patient.com",
        password: "patient",
        role: "patient",
      },
    },
  ],
  doctors: [
    {
      id: 121,
      name: "Vivek",
      creds: {
        email: "doctor@doctor.com",
        password: "qwerty",
        role: "doctor",
      },
    },
  ],
};
