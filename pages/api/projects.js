// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let data = [
  {
    projectname: "Lendbook",
    projectdesc:
      "App where the users can lend their books for free to someone who's in need.",
    projectlang: "dart , flutter",
    porjectlink: "https://github.com/RajSolai/lendbook-app",
  },
  {
    projectname: "Lroton",
    projectdesc: "Protonvpn GTK App for elementary OS (Linux).",
    projectlang: "vala , gtk3",
    porjectlink: "https://github.com/RajSolai/lroton",
  },
  {
    projectname: "Crime Records",
    projectdesc:
      "Angular + Ionic PWA to view the Crime Records of different (indian) states and of different categories.",
    projectlang: "TypeScript, Angular, ionic",
    porjectlink: "https://github.com/RajSolai/CrimeRecords",
  },
  {
    projectname: "Cake Days",
    projectdesc:
      "Simple birthday storing and retriving ( C R functions) using Angular,Ionic,Firebase.",
    projectlang: "TypeScript, Angular, ionic",
    porjectlink: "https://github.com/RajSolai/Cake-Day-App",
  },
  {
    projectname: "Flutter News",
    projectdesc: "Simple news app with quite features created using flutter",
    projectlang: "dart , flutter",
    porjectlink: "https://github.com/RajSolai/flutter-news-app",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json(data);
};
