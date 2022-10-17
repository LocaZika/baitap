const contentTestimonial = async () => {
  const getFile = await fetch("./js/database.json");
  const getData = await getFile.json();
  // console.log(getData[0]);
  console.log(getData);
  for (let i = 0; (i = Object.keys(getData).length); i++) {
    // console.log(personNumber.name);
    // $(".comment p").innerText = getData.personNumber.narrative;
    // $(".person-name h3").innerText = getData.personNumber.name;
    // $(".person-name p").innerText = getData.personNumber.position;
    // $("#next").addEventListener("click", () => {
    //   if (index == getData.length) {
    //     $(".comment p").innerText = getData[0].narrative;
    //     $(".person-name h3").innerText = getData[0].name;
    //     $(".person-name p").innerText = getData[0].position;
    //   } else {
    //     $(".comment p").innerText = personData.narrative;
    //     $(".person-name h3").innerText = personData.name;
    //     $(".person-name p").innerText = personData.position;
    //     console.log(index);
    //   }
    // });
    // $("#prev").addEventListener("click", () => {
    //   if (index == 0) {
    //     $(".comment p").innerText = getData[2].narrative;
    //     $(".person-name h3").innerText = getData[2].name;
    //     $(".person-name p").innerText = getData[2].position;
    //   } else {
    //     $(".comment p").innerText = getData[index - 1].narrative;
    //     $(".person-name h3").innerText = getData[index - 1].name;
    //     $(".person-name p").innerText = getData[index - 1].position;
    //   }
    // });
    break;
  }
};
contentTestimonial();
const obj = {
  person1: {
    abc: "1345",
    xyz: "8458",
  },
  person2: {
    abc: "6955",
    xyz: "9158",
  },
};
// console.log(Object.keys(obj).length);
