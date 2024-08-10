import Interview from './assets/interview.png';
import Coaching from './assets/coaching.png';
import Cert from './assets/cert.png';
import Online from './assets/online.png';
export const homeAbout = [
    {
      id: 1,
      cover: Online,
      title: "Onlinekurser",
      desc: "Lär dig de senaste teknikerna i programmering och IT från experter i branschen. Upptäck vårt omfattande utbud av kurser som täcker allt från grundläggande kodning till avancerad mjukvaruutveckling.",
    },
    {
      id: 1,
      cover: Cert,
      title: "Certifieringar",
      desc: "Förstärk ditt CV och visa dina färdigheter med bransch-erkända certifikat. Våra kurser är utformade för att förbereda dig för certifieringar som ökar din anställbarhet och marknadsvärde.",
    },
    {
      id: 1,
      cover: Coaching,
      title: "Karriärcoaching",
      desc: "Få personlig vägledning och coaching från branschexperter. Vi erbjuder en-till-en-sessioner för att finslipa dina tekniska färdigheter, förbereda dig för jobbintervjuer och hjälpa dig att navigera i din karriärväg effektivt.",
    },
    {
      id: 1,
      cover: Interview,
      title: "Intervjuförberedelser",
      desc: "Maximera dina chanser att imponera på potentiella arbetsgivare med våra skräddarsydda intervjucoachningar. Lär dig allt från CV-skrivning till att hantera tekniska intervjuer med självförtroende.",
    },
  ]
  export const awrapper = [
    {
      cover: "://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/80/ffffff/external-graduation-education-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png",
      data: "3,000",
      title: "SUCCESS STORIES",
    },
  
    {
      cover: "https://img.icons8.com/ios/80/ffffff/athlete.png",
      data: "320",
      title: "TRUSTED TUTORS",
    },
    {
      cover: "https://img.icons8.com/external-outline-icons-maxicons/80/ffffff/external-calender-insurance-outline-outline-icons-maxicons.png",
      data: "1,000",
      title: "SCHEDULES",
    },
    {
      cover: "https://img.icons8.com/ios/80/ffffff/macbook-idea--v3.png",
      data: "587",
      title: "COURSES",
    },
  ]

import HackImage from './assets/curse/Hack.png';
import FullStack from './assets/curse/fullstack.png';
import ItJob from './assets/curse/ItJob.png';
import ItCarear from './assets/curse/ItCarear.png';
import Datorer from './assets/curse/datorer.png';
import Python1 from './assets/curse/python.png';
import Csharp1 from './assets/curse/csharp.png';
import Matematik5 from './assets/curse/matte.png';
import Max from './assets/profile.png';

var teacher = "Max A.";
  export const coursesCard = [
    {
      id: 1,
      cover: HackImage,
      coursesName: "Etisk Hacking",
      courseUpdate: "Uppdaterad 2024",
      courseDescription: " I den här kursen kommer du att lära dig penetrationstestning; utvärdering av cybersäkerheten i datornätverk med hjälp av offensiva metoder. Dessa metoder syftar till att finna och utnyttja sårbarheter i programvarubaserade system.",
      courTeacher: [
        {
          dcover: Max,
          name: teacher,
          totalTime: "22 Lektioner (125 hrs)",
        },
      ],
      priceAll: "1999 kr alla kurser",
      pricePer: "199 kr per månad",
    },
    {
      id: 2,
      cover: FullStack,
      coursesName: "Fullstack webbutvecklare",
      courseUpdate: "Uppdaterad 2024",
      courseDescription: " Kursen ger dig en bred programmerings kompetens inom både backend och frontend. Du kommer att kunna utveckla moderna applikationer med hjälp av HTML, CSS och olika JavaScript-bibliotek och även ger dig kunskap om de specifika utvecklingsmiljöer, programspråk och riktlinjer som webben ställer krav på idag.",
      courTeacher: [
        {
          dcover: Max,
          name: teacher,
          totalTime: "22 Lektioner (125 hrs)",
        },
      ],
      priceAll: "1999 kr alla kurser",
      pricePer: "199 kr per månad",
    },
    {
      id: 3,
      cover: ItJob,
      coursesName: "Starta din karriär inom IT",
      courseUpdate: "Uppdaterad 2024",
      courseDescription:"Kursen ger dig förståelse för IT-branschen och dess olika områden och ger insikter i aktuella trender och möjligheter inom IT, samt råd och vägledning för att starta och främja en framgångsrik karriär inom området. Kursen fokuserar också på att utveckla mjuka färdigheter såsom problemlösning, kommunikation och samarbete, vilket är avgörande för att lyckas inom IT-sektorn.",
      courTeacher: [
        {
          dcover: Max,
          name: teacher,
          totalTime: "22 Lektioner (125 hrs)",
        },
      ],
      priceAll: "1999 kr alla kurser",
      pricePer: "199 kr per månad",
    },
    {
      id: 4,
      cover: ItCarear,
      coursesName: "Personlig Utveckling",
      courseUpdate: "Uppdaterad 2024",
      courseDescription:"Kursen ger dig kunskaper och färdigheter för att definiera dina mål samt strategier och tekniker för att nå dem. Du kommer även att lära dig att hitta balans i livet och att fokusera på det som är viktigast för dig personligen.",
      courTeacher: [
        {
          dcover: Max,
          name: teacher,
          totalTime: "22 Lektioner (125 hrs)",
        },
      ],
      priceAll: "1999 kr alla kurser",
      pricePer: "199 kr per månad",
    },
    {
      id: 5,
      cover: Datorer,
      coursesName: "Bästa Datorer",
      courseUpdate: "Uppdaterad 2024",
      courseDescription:" Kursen ger dig grundläggande kunskaper om olika datortyper, deras struktur och funktionalitet. Du kommer att lära dig hur datorer är uppbyggda och vilken typ av datorer som passar bäst för olika typer av arbete eller uppgifter. Genom kursen kommer du att få en översikt över olika datorarkitekturer och deras användningsområden, vilket kommer att hjälpa dig att välja rätt dator för dina behov och preferenser.",
      courTeacher: [
        {
          dcover: Max,
          name: teacher,
          totalTime: "22 Lektioner (125 hrs)",
        },
      ],
      priceAll: "1999 kr alla kurser",
      pricePer: "199 kr per månad",
    },
    {
      id: 6,
      cover: Python1,
      coursesName: "Programmering 1 med Python",
      courseUpdate: "Uppdaterad 2024",
      courseDescription:"  Kursen ger en introduktion till grunderna i programmering och koncept som variabler, datatyper, villkorssatser, loopar och funktioner. Kursen fokuserar också på problemlösning och algoritmiskt tänkande samt introducerar programmeringsprinciper och bästa praxis. Målet är att ge en stark grund för att fortsätta utforska och utveckla sina programmeringsfärdigheter i Python och andra programmeringsspråk.",
      courTeacher: [
        {
          dcover: Max,
          name: teacher,
          totalTime: "22 Lektioner (125 hrs)",
        },
      ],
      priceAll: "1999 kr alla kurser",
      pricePer: "199 kr per månad",
    },
    {
      id: 7,
      cover: Csharp1,
      coursesName: "Programmering 1 med C#",
      courseUpdate: "Uppdaterad 2024",
      courseDescription:"Denna är obligatorisk för Teknikprogrammet, inriktning Informations- och Medieteknik men ingår även i andra gymnasieprogram. Författare är Krister Trangius, gymnasielärare i Programmering.",
      courTeacher: [
        {
          dcover: Max,
          name: teacher,
          totalTime: "22 Lektioner (125 hrs)",
        },
      ],
      priceAll: "1999 kr alla kurser",
      pricePer: "199 kr per månad",
    },
    {
      id: 8,
      cover: Matematik5,
      coursesName: "Matematik 5",
      courseUpdate: "Uppdaterad 2024",
      courseDescription:" Matematik 5 är en gymnasiekurs i den svenska gymnasieskolan. Kursen omfattar 100 poäng. Kursen kom till efter införandet av läroplanen Gy11 och bygger på matematik 4. Kursen är inte obligatorisk på något gymnasieprogram.",
      courTeacher: [
        {
          dcover: Max,
          name: teacher,
          totalTime: "22 Lektioner (125 hrs)",
        },
      ],
      priceAll: "1999 kr alla kurser",
      pricePer: "199 kr per månad",
    },
    {
      id: 9,
      cover: Matematik5,
      coursesName: "Introducing to with HTML / CSS / JAVASCRIPT",
      courseUpdate: "Uppdaterad 2024",
      courseDescription:"",
      courTeacher: [
        {
          dcover: Max,
          name: teacher,
          totalTime: "22 Lektioner (125 hrs)",
        },
      ],
      priceAll: "1999 kr alla kurser",
      pricePer: "199 kr per månad",
    },
  ]
  export const online = [
    {
      cover: "./images/courses/online/o1.png",
      hoverCover: "./images/courses/online/o1.1.png",
      courseName: "UI/UX Design Courses",
      course: "25 Courses",
    },
    {
      cover: "./images/courses/online/o2.png",
      hoverCover: "./images/courses/online/o2.1.png",
      courseName: "Art & Design",
      course: "25 Courses",
    },
    {
      cover: "./images/courses/online/o3.png",
      hoverCover: "./images/courses/online/o3.1.png",
      courseName: "Computer Science",
      course: "10 Courses",
    },
    {
      cover: "./images/courses/online/o4.png",
      hoverCover: "./images/courses/online/o4.1.png",
      courseName: "History & Archeologic",
      course: "15 Courses",
    },
    {
      cover: "./images/courses/online/o5.png",
      hoverCover: "./images/courses/online/o5.1.png",
      courseName: "Software Engineering",
      course: "30 Courses",
    },
    {
      cover: "./images/courses/online/o6.png",
      hoverCover: "./images/courses/online/o6.1.png",
      courseName: "Information Software",
      course: "60 Courses",
    },
    {
      cover: "./images/courses/online/o7.png",
      hoverCover: "./images/courses/online/o7.1.png",
      courseName: "Health & Fitness",
      course: "10 Courses",
    },
    {
      cover: "./images/courses/online/o8.png",
      hoverCover: "./images/courses/online/o8.1.png",
      courseName: "Marketing",
      course: "30 Courses",
    },
    {
      cover: "./images/courses/online/o9.png",
      hoverCover: "./images/courses/online/o9.1.png",
      courseName: "Graphic Design",
      course: "80 Courses",
    },
    {
      cover: "./images/courses/online/o10.png",
      hoverCover: "./images/courses/online/o10.1.png",
      courseName: "Music",
      course: "120 Courses",
    },
    {
      cover: "./images/courses/online/o11.png",
      hoverCover: "./images/courses/online/o11.1.png",
      courseName: "Business Administration",
      course: "17 Courses",
    },
    {
      cover: "./images/courses/online/o12.png",
      hoverCover: "./images/courses/online/o12.1.png",
      courseName: "Web Management",
      course: "17 Courses",
    },
  ]
  export const team = [
    {
      cover: Max,
      name: "Ph.D Adrian Molises",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    {
      cover: Max,
      name: "Ph.D Arthur MaGregor",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    {
      cover: Max,
      name: "Ph.D Anna Hanzen",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    {
      cover: Max,
      name: "Ph.D Brian Wooden",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
  ]
  export const price = [
    {
      name: "BASIC PLAN",
      price: "49K",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      name: "BEGINNER PLAN",
      price: "79K",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      name: "PREMIUM PLAN",
      price: "109k",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      name: "ULTIMATE PLAN",
      price: "149K",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ]
  export const faq = [
    {
      title: "How to Enroll This Online Courses?",
      desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "Where It is hidden by default, until the collapse?",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "How It is hidden by default, until the collapse?",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "How to Enroll This Online Courses?",
      desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "Where It is hidden by default, until the collapse?",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "How It is hidden by default, until the collapse?",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
  ]
  export const blog = [
    {
      id: 1,
      type: "admin",
      date: "JAN. 18, 2021",
      com: "3 COMMENTS ",
      title: "Build your Dream Software & Engineering Career",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cover: "../images/blog/b1.webp",
    },
    {
      id: 2,
      type: "admin",
      date: "API. 25, 2022",
      com: "5 COMMENTS ",
      title: "Build your Dream Software & Engineering Career",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cover: "../images/blog/b2.webp",
    },
    {
      id: 3,
      type: "user",
      date: "MAY. 15, 2022",
      com: "10 COMMENTS ",
      title: "Build your Dream Software & Engineering Career",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cover: "../images/blog/b3.webp",
    },
    {
      id: 4,
      type: "admin",
      date: "JAN. 02, 2022",
      com: "3 COMMENTS ",
      title: "Build your Dream Software & Engineering Career",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cover: "../images/blog/b4.webp",
    },
    {
      id: 5,
      type: "admin",
      date: "DEC. 14, 2022",
      com: "3 COMMENTS ",
      title: "Build your Dream Software & Engineering Career",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cover: "../images/blog/b5.webp",
    },
    {
      id: 6,
      type: "user",
      date: "JAN. 18, 2021",
      com: "12 COMMENTS ",
      title: "Build your Dream Software & Engineering Career",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cover: "../images/blog/b6.webp",
    },
  ]
  export const testimonal = [
    {
      id: 1,
      name: "ROGER SCOTT",
      post: "MARKETING MANAGER",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      cover: "./images/testo/t1.webp",
    },
    {
      id: 2,
      name: "ROGER SCOTT",
      post: "MARKETING MANAGER",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      cover: "./images/testo/t2.webp",
    },
    {
      id: 3,
      name: "ROGER SCOTT",
      post: "MARKETING MANAGER",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      cover: "./images/testo/t3.webp",
    },
  ]