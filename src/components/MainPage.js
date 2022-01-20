import react from "react";
import "./MainPage.css";
import profilePicture from "../images/SD.jpg";
import { useState } from "react";
import { useEffect } from "react";
import WorkDisplayTemplate from "./WorkDisplayTemplate";
import downArrow from "../images/downArrow.png";
import rightArrow from "../images/rightArrow.png";
import leftArrow from "../images/leftArrow.png";
import upArrow from "../images/upArrow.png";
import hungary from "../images/Hungary.png";
import uk from "../images/UK.png";
import ah from "../images/AH.png";
import bookr from "../images/BOOKR.png";
import gmn from "../images/GMN.png";
import mapty from "../images/MAP.png";
import pig from "../images/PG.png";
import EducationDisplayTemplate from "./EducationDisplayTemplate";
import ProjectTemplate from "./ProjectTemplate";

function MainPage() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("Mode") === null
      ? true
      : localStorage.getItem("Mode") === "Dark"
      ? true
      : false
  );
  const [hungarian, setHungarian] = useState(
    localStorage.getItem("Language") === null
      ? false
      : localStorage.getItem("Language") === "Hungarian"
      ? true
      : false
  );
  const [edu, setEdu] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);
  const [animation, setAnimation] = useState(false);
  const [def, setDef] = useState(true);
  const [selectingL, setSelectingL] = useState(false);
  const [ButtonDisabled, setButtonDisabled] = useState(false);
  const [arrowDisabled, setArrowDisabled] = useState(false);
  let name;
  let selected;
  let downA;
  let upA;
  localStorage.setItem("Language", `${hungarian ? "Hungarian" : "English"}`);
  localStorage.setItem("Mode", `${darkMode ? "Dark" : "Light"}`);
  // project datas.
  let dataSlider = [
    {
      pName: "AdventureHub",
      pPicture: ah,
      pDescription: `${
        hungarian
          ? "Ezen a weboldalon online szerepjátékokat lehet kipróbálni és írni. A projekten egy beckend csapattal dolgoztam együttműködésben akik az adatokat szolgáltatták. Az oldalhoz emelett tartozik regisztráció és bejelentkezés illetve még sok funkció."
          : "You can try and write online role-playing games on this website. I worked on the project with a beckend team who provided the data to the site. The site has registration, login and many features."
      }`,
      pTechnologies: ["HTML,", "CSS,", "JS,", "React"],
      pLinks: "https://github.com/SomenDaniel/Dungeons-Dragons",
    },
    {
      pName: "Bookr",
      pPicture: bookr,
      pDescription: `${
        hungarian
          ? "Ez az projekt egy magántanár kereső és foglaló, valamint tanárként hirdető funkciókkal is szolgáló weboldal. A projekten egy négyfős csapattal dolgoztunk közösen a fejlesztő képzésünk lezárásaként. Az oldalon szinte minden alap funkció megtalálható amivel egy foglalással kapcsolatos oldalon lehet találkozni."
          : "On this page you can search and book private tutors. You can advertise yourself as a private teacher. We worked on the project with a team of four to complete this project. The site has almost all the basic features you can find on a booking page."
      }`,
      pTechnologies: ["HTML,", "CSS,", "JS,", "React,", "Bootstrap"],
      pLinks: "https://github.com/SomenDaniel/bookr",
    },
    {
      pName: "Mapty (Learning project)",
      pPicture: mapty,
      pDescription: `${
        hungarian
          ? "Ezt az oldalt egy udemy kurzus szorán építettem meg. Az volt a célom ezzel, hogy frissítsem a programozói tudásomat és új dolgokat tanuljak meg. Az oldalon az edzéseidet lehet feljegyezni illetve tartozik hozzá egy világtérkép is ami a te pozíciódat jelöli meg."
          : "I built this page during an udemy course. My goal with this was to update my programming skills and learn new things. On the page you can record your trainings and it also has a world map that indicates your position."
      }`,
      pTechnologies: ["HTML,", "CSS,", "JS"],
      pLinks: "https://github.com/SomenDaniel/learning-project-mapty",
    },
    {
      pName: "Pig game (Learning project)",
      pPicture: pig,
      pDescription: `${
        hungarian
          ? "Ezt az oldalt egy udemy kurzus szorán építettem meg. Az volt a célom ezzel, hogy frissítsem a programozói tudásomat és új dolgokat tanuljak meg. Az oldal egy egyszerű társasjátékot szimulál."
          : "I built this page during an udemy course. My goal with this was to update my programming skills and learn new things. The site simulates a simple board game."
      }`,
      pTechnologies: ["HTML,", "CSS,", "JS"],
      pLinks: "https://github.com/SomenDaniel/learning-porject-pig-game",
    },
    {
      pName: "Guess my number (Learning project)",
      pPicture: gmn,
      pDescription: `${
        hungarian
          ? "Ezt az oldalt egy udemy kurzus szorán építettem meg. Az volt a célom ezzel, hogy frissítsem a programozói tudásomat és új dolgokat tanuljak meg. Az oldalon egy egyszerű játék található, ami arról szól, hogy ki kell találnod egy random generált számot."
          : "I built this page during an udemy course. My goal with this was to update my programming skills and learn new things. There is a simple game on the site that is about having to guess a random generated number."
      }`,
      pTechnologies: ["HTML,", "CSS,", "JS"],
      pLinks: "https://github.com/SomenDaniel/learning-project-GMN",
    },
  ];

  // study datas.

  let studySlider = [
    {
      sName: `${
        hungarian ? "Junior Frontend fejlesztő" : "Junior Frontend developer"
      }`,
      sWhere: "Progmatic Academy",
      sWhen: `${
        hungarian ? "Március 2021 - Június 2021" : "March 2021 - June 2021"
      }`,
      sDatas: [
        `${
          hungarian
            ? "JavaScript és React tapasztalat."
            : "JavaScript and React knowledge."
        }`,
        `${
          hungarian
            ? "HTML, CSS, Git és GitHub tanulmányok."
            : "HTML, CSS, Git and GitHub knowledge."
        }`,
        `${
          hungarian
            ? "Projektmunka csapatban és egyedül."
            : "Project work in a team and alone."
        }`,
      ],
    },
    {
      sName: `${hungarian ? "Magasépítő technikus" : "Building Technician"}`,
      sWhere: `${
        hungarian
          ? "Schulek Frigyes Szakgimnázium"
          : "Schulek Frigyes High School"
      }`,
      sWhen: `${
        hungarian
          ? "Szeptember 2018 - Július 2019"
          : "September 2018 - July 2019"
      }`,
      sDatas: [
        `${
          hungarian
            ? "Építési technológiák ismerete."
            : "Knowledge of construction technologies."
        }`,
        `${
          hungarian
            ? "Épületfizikai alapok."
            : "Fundamentals of building physics."
        }`,
        `${
          hungarian
            ? "Építési környezet menedzselése."
            : "Construction environment management."
        }`,
      ],
    },
    {
      sName: `${hungarian ? "Érettségi" : "Graduation"}`,
      sWhere: `${
        hungarian
          ? "Schulek Frigyes Szakgimnázium"
          : "Schulek Frigyes High School"
      }`,
      sWhen: `${
        hungarian
          ? "Szeptember 2014 - Július 2018"
          : "September 2014 - July 2018"
      }`,
      sDatas: [
        `${hungarian ? "" : ""}`,
        `${hungarian ? "" : ""}`,
        `${hungarian ? "" : ""}`,
      ],
    },
  ];

  // work datas.
  let workSlider = [
    {
      wPosition: `${
        hungarian
          ? "Frontend fejlesztő (önkéntes)"
          : "Frontend developer (volunteer)"
      }`,
      wCompany: "Progmatic Academy",
      wTime: `${
        hungarian
          ? "November 2021 - December 2021"
          : "November 2021 - December 2021"
      }`,
      wDatas: [
        `${
          hungarian
            ? "Weboldal frontend fejlesztése."
            : "Website frontend development."
        }`,
        `${
          hungarian
            ? "Együttműködésben egy backend csapattal."
            : "In collaboration with a backend team."
        }`,
        `${
          hungarian
            ? "Scrum módszertanban dolgoztunk."
            : "We worked with scrum methodology."
        }`,
      ],
    },
    {
      wPosition: `${hungarian ? "Webshop fejlesztő." : "Webshop Developer."}`,
      wCompany: "Progmatic Academy",
      wTime: `${
        hungarian ? "Június 2021 - Július 2021" : "June 2021 - July 2021"
      }`,
      wDatas: [
        `${
          hungarian
            ? "- Négyfős csapatban dolgoztam."
            : "- I am worked in a four-person team."
        }`,
        `${
          hungarian
            ? "- Egy magántanár foglaló oldalt fejlesztettünk."
            : "- We developed a private-tutor booking site."
        }`,
        `${
          hungarian
            ? "- Tapsztalatokat szereztem fejlesztésben és csapatmunkában."
            : "- Experienced in real-life developing situations and teamwork."
        }`,
      ],
    },
    {
      wPosition: `${
        hungarian ? "Építésvezető." : "Construction Site Manager."
      }`,
      wCompany: "EB Hungary invest KFT.",
      wTime: `${
        hungarian
          ? "Október 2019 - Augusztus 2020"
          : "October 2019 - August 2020"
      }`,
      wDatas: [
        `${
          hungarian
            ? "- Felelős a munkák ellenőrzésért."
            : "- Responsible for checking the works."
        }`,
        `${
          hungarian
            ? "- Egy csapat és az építési folyamat irányítása."
            : "- Team and construction process management."
        }`,
        `${
          hungarian
            ? "- Egy projekt napi kivitelezésének felügyelete."
            : "- Overseeing the day-to-day construction of a project."
        }`,
      ],
    },
  ];

  //---------------------------------------------------------------------------------------------------------------------------------------------

  // disable button for 2 sec

  const ableButton = () => {
    setTimeout(() => setButtonDisabled(false), 2000);
  };

  const ableArrow = () => {
    setTimeout(() => setArrowDisabled(false), 2000);
  };

  // onclick active dots-----------------------------------------

  const ActiveDot = (event) => {
    ableButton();
    if (ButtonDisabled) {
      console.log("button unavailable");
    } else {
      setDef(false);
      let firstClear = document.querySelectorAll(`#Active`);
      console.log(firstClear);
      firstClear.forEach((el) => {
        el.id = `Inactive`;
      });
      AnimatedBox();
      name = event.target.className;
      selected = document.querySelector(`.${name}`);
      selected.id = `Active`;
      console.log(name);
      console.log(Number(name.charAt(name.length - 1)));
      setSlideIndex(Number(name.charAt(name.length - 1)));
      setButtonDisabled(true);
    }
  };

  // to the arrow clicking functions
  const ActiveDotWithArrows = (number) => {
    ableArrow();
    if (arrowDisabled) {
      console.log("button unavailable");
    } else {
      setDef(false);
      let firstClear = document.querySelectorAll(`#Active`);
      console.log(firstClear);
      firstClear.forEach((el) => {
        el.id = `Inactive`;
      });
      name = `dot${number}`;
      selected = document.querySelector(`.${name}`);
      selected.id = `Active`;
      setArrowDisabled(true);
    }
  };
  // ---------------------------------------------------------------------
  // slider arrow onclick right-------------------------------------------------------------------------------------------------------------------

  const nextSlide = () => {
    // a tömb hossza ahol az adatok vannak
    ableArrow();
    if (arrowDisabled) {
      console.log("button unavailable");
    } else {
      if (slideIndex !== dataSlider.length) {
        setSlideIndex(slideIndex + 1);
        AnimatedBox();
        ActiveDotWithArrows(slideIndex + 1);
      } else if (slideIndex === dataSlider.length) {
        setSlideIndex(1);
        AnimatedBox();
        ActiveDotWithArrows(1);
      }
      setArrowDisabled(true);
    }
  };

  // slider arrow onclick left  -------------------------------------------------------------------------------------------------------

  const prevSlide = () => {
    ableArrow();
    if (arrowDisabled) {
      console.log("button unavailable");
    } else {
      if (slideIndex !== 1) {
        setSlideIndex(slideIndex - 1);
        AnimatedBox();
        ActiveDotWithArrows(slideIndex - 1);
      } else if (slideIndex === 1) {
        setSlideIndex(dataSlider.length);
        AnimatedBox();
        ActiveDotWithArrows(dataSlider.length);
      }

      setArrowDisabled(true);
    }
  };

  //---------------------------------------------------------------------------------------------------------------------------------------------
  // education hide or show
  const showEdu = () => setEdu(true);
  const hideEdu = () => setEdu(false);

  useEffect(() => {
    downA = document.querySelector(".downArrow");
    upA = document.querySelector(".upArrow");
  }, []);

  // language  show

  const selectLanguage = () => {
    if (selectingL === false) {
      setSelectingL(true);
    }
    if (selectingL === true) {
      setSelectingL(false);
    }
  };

  // language select
  const chooseHun = () => {
    setSelectingL(false);
    setHungarian(true);
    localStorage.setItem("Language", `${hungarian ? "Hungarian" : "English"}`);
  };

  const chooseEn = () => {
    setSelectingL(false);
    setHungarian(false);
    localStorage.setItem("Language", `${hungarian ? "Hungarian" : "English"}`);
  };

  document.body.addEventListener(
    "click",
    () => {
      setSelectingL(false);
    },
    true
  );

  // ---------------------------------------------------------------------
  // ----------------- onclick animation--------------------------------

  const AnimatedBox = () => {
    // box animation begins
    setAnimation(true);

    // box animation stops after 2 seconds
    setTimeout(() => setAnimation(false), 2000);

    console.log(animation);
  };

  // ---------------------------------------------------------------------

  //-----------------------------------------------------------

  function changeMode() {
    setDarkMode(!darkMode);
    localStorage.setItem("Mode", `${darkMode ? "Dark" : "Light"}`);
  }

  function setToDark() {
    setDarkMode(true);
    localStorage.setItem("Mode", `${darkMode ? "Dark" : "Light"}`);
  }

  function setToLight() {
    setDarkMode(false);
    localStorage.setItem("Mode", `${darkMode ? "Dark" : "Light"}`);
  }

  function scrollto(event) {
    let upper = document.body.getBoundingClientRect();
    let place = document.querySelector(`.${event.target.id}`);
    let placePosition = place.getBoundingClientRect();
    let offset = placePosition.top - upper.top - 100;
    console.log(offset);
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="container">
        {/* ----------------------------------------------------------------navigation------------------------------------------------------------------- */}
        <nav className={`${darkMode ? "darkBackground" : "lightBackground"}`}>
          <div className="navButton" className="navigation">
            <button
              onClick={scrollto}
              id="introduction"
              className={`navButton ${darkMode ? "darkColor" : "lightColor"}`}
            >
              {hungarian ? "SÖMEN DÁNIEL" : " DÁNIEL SÖMEN"}
            </button>
            <button
              onClick={scrollto}
              id="aboutMe"
              className={`navButton ${darkMode ? "darkColor" : "lightColor"}`}
            >
              {hungarian ? "BEMUTATKOZÁS" : " INTRODUCTION"}
            </button>
            <button
              onClick={scrollto}
              id="experience"
              className={`navButton ${darkMode ? "darkColor" : "lightColor"}`}
            >
              {hungarian ? "TAPASZTALATOK" : " EXPERIENCES"}
            </button>
            <button
              onClick={scrollto}
              id="projects"
              className={`navButton ${darkMode ? "darkColor" : "lightColor"}`}
            >
              {hungarian ? "MUNKÁIM" : "PROJECTS"}
            </button>

            <button
              onClick={scrollto}
              id="skills"
              className={`navButton ${darkMode ? "darkColor" : "lightColor"}`}
            >
              {hungarian ? "KÉPESSÉGEK" : "SKILLS"}
            </button>
            <button
              onClick={scrollto}
              id="education"
              className={`navButton ${darkMode ? "darkColor" : "lightColor"}`}
            >
              {hungarian ? "TANULMÁNYOK" : "STUDIES"}
            </button>
            <button
              onClick={scrollto}
              id="footer"
              className={`navButton ${darkMode ? "darkColor" : "lightColor"}`}
            >
              {hungarian ? "ELÉRHETŐSÉGEIM" : "ACCOUNTS"}
            </button>
          </div>
          <div className="modes">
            <div className="modeContainer">
              <button
                onClick={setToDark}
                className={`toDark ${
                  darkMode
                    ? "darkBackgroundAndColor"
                    : "lightBackgroundAndColor"
                }`}
              >
                {hungarian ? "🌑" : "Dark"}
              </button>
              <button
                onClick={changeMode}
                className={`toggler ${
                  darkMode ? "darkBackground" : "lightBackground"
                }`}
              >
                <div
                  className={`togglerFrame ${
                    darkMode ? "darkTogglerFrame" : "lightTogglerFrame"
                  }`}
                >
                  <div
                    className={`togglerBall ${
                      darkMode ? "darkBackground" : "lightBackground"
                    }`}
                    style={{ justifySelf: `${darkMode ? "start" : "end"}` }}
                  ></div>
                </div>
              </button>
              <button
                onClick={setToLight}
                className={`toLight ${
                  darkMode
                    ? "darkBackgroundAndColor"
                    : "lightBackgroundAndColor"
                }`}
              >
                {hungarian ? "💡" : "Light"}
              </button>
            </div>

            <div className="language">
              <button onClick={selectLanguage}>
                <img
                  alt="Flag"
                  src={hungarian ? hungary : uk}
                  className="activeLanguage"
                ></img>
              </button>
            </div>
          </div>
        </nav>
        {/* ----------------------------------------------------------------intro------------------------------------------------------------------- */}
        <section
          className={`introduction ${
            darkMode
              ? "darkBackgroundAndColor darkBorderBottom"
              : "lightBackgroundAndColor lightBorderBottom"
          }`}
        >
          <div className="container">
            <img className="profilePicture" src={profilePicture}></img>
            <h1 className="name">
              {hungarian ? "👋 Szia! Dani vagyok." : "👋 Hi! I'm Daniel."}
            </h1>
            <h3 className="title">
              {hungarian
                ? " Junior Frontend Fejlesztő. 👨‍💻"
                : " Junior Frontend Developer. 👨‍💻"}
            </h3>
          </div>
        </section>
        {/* ----------------------------------------------------------------aboutme------------------------------------------------------------------- */}
        <section
          className={`aboutMe ${
            darkMode
              ? "darkBackground darkBorderBottom"
              : "lightBackground lightBorderBottom"
          }`}
        >
          <div
            className={`aboutMeContainer ${
              darkMode ? "darkBackgroundAndColor2" : "lightBackgroundLinear"
            }`}
          >
            <h1
              className={`aboutMeTitle ${
                darkMode ? "darkColor" : "lightColor"
              }`}
            >
              {hungarian ? "Magamról." : "About Me."}
            </h1>
            <div className="cont">
              <p className="aMDescription">
                {hungarian
                  ? `Mindig is érdekelt a programozás, az informatika, a számítógépek, és úgy döntöttem, hogy frontend fejlesztőként próbálok meg elhelyezkedni.
                  Friss tudással rendelkezem a webfejlesztés terén és olyan technológiákat tanultam meg mint a HTML, CSS, JavaScript és React.
                  Nagyon motivált vagyok a folyamatos szakmai fejlődésben. 
                  Mindig keresem a lehetőségeket, ahol kamatoztathatom fejlesztő képességeimet, és növelhetem a tudásomat. 
                  `
                  : `I've always been interested about programming, informatics, computers and I made a decision to start my career as a frontend developer. 
                  I am freshly graduated and learned the basics of HTML, CSS, JavaScript and React.
                   I am extremely motivated to constantly grow professionally.
                   I am always looking for opportunities where I can utilize my developing skills and where i can develop my knowledge.`}
              </p>
            </div>
          </div>
        </section>
        {/* ----------------------------------------------------------------experience------------------------------------------------------------------- */}
        {/* workSlider = [
    {
      wPosition: `${
        hungarian
          ? "Frontend fejlesztő (önkéntes)"
          : "Frontend developer (volunteer)"
      }`,
      wCompany: "Progmatic Academy",
      wTime: `${
        hungarian
          ? "November 2021 - December 2021"
          : "November 2021 - December 2021"
      }`,
      wDatas: [
        `${
          hungarian
            ? "- Weboldal frontend fejlesztése."
            : "- Website frontend development."
        }`,
        `${
          hungarian
            ? "- Együttműködésben egy backend csapattal."
            : "- In collaboration with a backend team."
        }`,
        `${
          hungarian
            ? "- Scrum módszertanban dolgoztunk."
            : "- We worked with scrum methodology."
        }`,
      ],
    }, */}
        <section
          className={`experience ${
            darkMode
              ? "darkBackgroundAndColor darkBorderBottom"
              : "lightBackgroundAndColor lightBorderBottom"
          }`}
        >
          <h1>
            {hungarian ? "Eddigi munkahelyeim. 👨‍💼" : "My recent jobs. 👨‍💼"}
          </h1>
          <div className="cont">
            <div className="workTempCont">
              <div className="left">
                <WorkDisplayTemplate
                  dark={darkMode}
                  position={workSlider[0].wPosition}
                  company={workSlider[0].wCompany}
                  workTime={workSlider[0].wTime}
                  workDesc={workSlider[0].wDatas}
                />
              </div>
              <div className="middle">
                <WorkDisplayTemplate
                  dark={darkMode}
                  position={workSlider[1].wPosition}
                  company={workSlider[1].wCompany}
                  workTime={workSlider[1].wTime}
                  workDesc={workSlider[1].wDatas}
                />
              </div>
              <div className="right">
                <WorkDisplayTemplate
                  dark={darkMode}
                  position={workSlider[2].wPosition}
                  company={workSlider[2].wCompany}
                  workTime={workSlider[2].wTime}
                  workDesc={workSlider[2].wDatas}
                />
              </div>
            </div>
          </div>
        </section>
        {/* ----------------------------------------------------------------projects------------------------------------------------------------------- */}

        <section
          className={`projects ${
            darkMode
              ? "darkBackgroundAndColor darkBorderBottom"
              : "lightBackgroundAndColor lightBorderBottom"
          }`}
        >
          <h1 className="projectTitle">
            {" "}
            {hungarian ? "Munkáim." : "My projects."}
          </h1>
          <div
            className={`ProjectContainer ${
              darkMode ? "darkBackgroundAndColor2" : "lightBackgroundLinear"
            }`}
          >
            <button onClick={prevSlide} className="leftArrow">
              <img className="lRArr" src={leftArrow}></img>
            </button>
            <ProjectTemplate
              picture={dataSlider[slideIndex - 1].pPicture}
              title={dataSlider[slideIndex - 1].pName}
              description={dataSlider[slideIndex - 1].pDescription}
              technologies={dataSlider[slideIndex - 1].pTechnologies.join(" ")}
              links={dataSlider[slideIndex - 1].pLinks}
              class={animation}
              activate={ActiveDot}
              dark={darkMode}
            />
            <button onClick={nextSlide} className="rightArrow">
              <img className="lRArr" src={rightArrow}></img>
            </button>
            <div className="dots">
              <button
                onClick={ActiveDot}
                id={`Active`}
                className="dot1"
              ></button>
              <button onClick={ActiveDot} className="dot2"></button>
              <button onClick={ActiveDot} className="dot3"></button>
              <button onClick={ActiveDot} className="dot4"></button>
              <button onClick={ActiveDot} className="dot5"></button>
            </div>
          </div>
        </section>
        {/* ----------------------------------------------------------------skills------------------------------------------------------------------- */}
        <section
          className={`skills ${
            darkMode
              ? "darkBackground darkBorderBottom"
              : "lightBackground lightBorderBottom"
          }`}
          id="skills"
        >
          <h1
            className={`skillsTitle ${darkMode ? "darkColor" : "lightColor"}`}
          >
            {hungarian ? "Programozási készségeim." : "Skills & Tools"}
          </h1>
          <div
            className={`skillsContainer ${
              darkMode ? "darkBackgroundAndColor2" : "lightBackgroundLinear"
            }`}
          >
            <h3 className="languages">
              {hungarian ? " 🗺️ Beszélt nyelvek." : "🗺️ Spoken languages"}
            </h3>
            <div
              className={`languageContainer ${
                darkMode ? "darkBorderBottomTop" : "lightBorderBottomTop"
              }`}
            >
              <div className="Hun">
                <div className="HunlanguageDesc">
                  <p className="fix">
                    {" "}
                    {hungarian ? " Magyar." : "Hungarian."}
                  </p>
                  <p className="fixx">
                    {hungarian ? " Anyanyelv." : "Native."}
                  </p>
                </div>
                <div className="Hunlanguage">
                  <img alt="Hun" src={hungary} className="activeLanguage"></img>
                </div>
              </div>
              <div className="En">
                <div className="Enlanguage">
                  <img src={uk} alt="En" className="activeLanguage"></img>
                </div>
                <div className="EnlanguageDesc">
                  <p className="fix">{hungarian ? " Angol." : "English."}</p>
                  <p className="fixx">
                    {hungarian ? " Középfok." : "Language certificate B2."}
                  </p>
                </div>
              </div>
            </div>
            <h3
              className={`progTitle ${
                darkMode ? "darkBorderBottom2" : "lightBorderBottom2"
              }`}
            >
              {hungarian
                ? "Eszközök és technológiák amiket már használtam. ⚛️"
                : "Tools and technologies I used. ⚛️"}
            </h3>
            <div className="progSkillsList">
              <ul className="one">
                <li>JS</li>
                <li>React</li>
                <li>HTml</li>
              </ul>
              <ul className="two">
                <li>Css</li>
                <li>git</li>
                <li>github</li>
              </ul>
              <ul className="three">
                <li>scrum</li>
                <li>bootstrap</li>
                <li>Slack</li>
              </ul>
            </div>
            <h3
              className={`SkillsFooter ${
                darkMode ? "darkBorderTop2" : "lightBorderTop2"
              }`}
            >
              {hungarian
                ? "Folyamatosan keresem a lehetőségeket a szakmai fejlősésre. 📈"
                : "I am constantly looking for opportunities to improve professionally. 📈"}
            </h3>
          </div>
        </section>

        {/* ----------------------------------------------------------------education------------------------------------------------------------------- */}
        <section
          className={`${
            darkMode
              ? "darkBackground darkBorderBottom"
              : "lightBackground lightBorderBottom"
          }`}
        >
          <div
            className={`education ${
              darkMode ? "darkBackgroundAndColor2" : "lightBackgroundLinear"
            }`}
          >
            <h1 className="educationTitle">
              {" "}
              {hungarian ? "Tanulmányok." : "Studies."}
            </h1>
            {edu ? (
              <div className="educationInfo">
                <EducationDisplayTemplate
                  dark={darkMode}
                  education={studySlider[0].sName}
                  where={studySlider[0].sWhere}
                  when={studySlider[0].sWhen}
                  desc={studySlider[0].sDatas}
                />
                <EducationDisplayTemplate
                  dark={darkMode}
                  education={studySlider[1].sName}
                  where={studySlider[1].sWhere}
                  when={studySlider[1].sWhen}
                  desc={studySlider[1].sDatas}
                />
                <EducationDisplayTemplate
                  dark={darkMode}
                  education={studySlider[2].sName}
                  where={studySlider[2].sWhere}
                  when={studySlider[2].sWhen}
                  desc={studySlider[2].sDatas}
                />
              </div>
            ) : null}
            {edu ? null : (
              <p className="cte">
                {hungarian ? "Kiterjesztés." : "Click to expand."}
              </p>
            )}
            {edu ? null : (
              <button onClick={showEdu} className="downArrow">
                <img className="dArr" src={downArrow}></img>
              </button>
            )}
            {edu ? (
              <button onClick={hideEdu} className="downArrow">
                <img className="dArr" src={upArrow}></img>
              </button>
            ) : null}
          </div>
        </section>
        {/* ----------------------------------------------------------------footer------------------------------------------------------------------- */}
        <footer
          className={`footer ${
            darkMode ? "darkBackgroundAndColor" : "lightBackgroundAndColor"
          }`}
        >
          <div className="footerContainer">
            <h1>somendaniel7@gmail.com</h1>
            <div className="footerButtons">
              <div>
                <button
                  className={`${darkMode ? "darkButton" : "lightbutton"}`}
                >
                  <a
                    target="_blank"
                    className={`footerLinks ${
                      darkMode ? "darkColor" : "lightColor"
                    }`}
                    href={
                      "https://www.linkedin.com/in/d%C3%A1niel-s%C3%B6men-695411217/"
                    }
                  >
                    LinkedIn
                  </a>
                </button>
                <button
                  className={`${darkMode ? "darkButton" : "lightbutton"}`}
                >
                  <a
                    target="_blank"
                    className={`footerLinks ${
                      darkMode ? "darkColor" : "lightColor"
                    }`}
                    href={"https://github.com/SomenDaniel"}
                  >
                    Github
                  </a>
                </button>
              </div>
            </div>
            <div className="footerDatas">
              <div className="place">
                <p>
                  {hungarian ? "Budapest, Magyarország." : "Budapest, Hungary."}
                </p>
              </div>

              <div className="signature">
                <p>
                  2022 |
                  {hungarian
                    ? " Tervezte és kódolta: Sömen Dániel."
                    : " Designed & coded by Dániel Sömen."}{" "}
                  &#169;
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* LanguageSelect------------------------------------------------------ */}
        <div
          className={`LanguageSelect ${
            darkMode
              ? "darkBackground darkBorderB"
              : "lightBackground lightBorderB"
          }`}
          style={{ display: `${selectingL ? "block" : "none"}` }}
        >
          <button
            className={`${
              darkMode ? "darkBackgroundAndColor" : "lightBackgroundAndColor"
            }`}
            onClick={chooseHun}
          >
            <img alt="Hun" src={hungary}></img>
            <p>{hungarian ? " Magyar." : "Hungarian."}</p>
          </button>
          <button
            className={`${
              darkMode ? "darkBackgroundAndColor" : "lightBackgroundAndColor"
            }`}
            onClick={chooseEn}
          >
            <img alt="En" src={uk}></img>
            <p>{hungarian ? " Angol." : "English."}</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default MainPage;
