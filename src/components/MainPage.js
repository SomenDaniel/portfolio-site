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
import hungary from "../images/Hungary.webp";
import uk from "../images/UK.png";
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
      pName: "projekt",
      pDescription:
        "a projekt rövid leírása.a projekt rövid leírása.a projekt rövid leírása.a projekt rövid leírása.a projekt rövid leírása.a projekt rövid leírása.",
      pTechnologies: ["HTML", "css", "js", "react"],
      pLinks: "github link",
    },
    {
      pName: "projekt2",
      pDescription: "a projekt rövid leírása.2",
      pTechnologies: ["HTML", "css", "js", "react", "2"],
      pLinks: "github",
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
            ? "Négyfős csapatban dolgoztam."
            : "I am worked in a four-person team."
        }`,
        `${
          hungarian
            ? "Egy magántanár foglaló oldalt fejlesztettünk."
            : "We developed a private-tutor booking site."
        }`,
        `${
          hungarian
            ? "Tapsztalatokat szereztem fejlesztésben és csapatmunkában."
            : "Experienced in real-life developing situations and teamwork."
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
            ? "Felelős a munkák ellenőrzésért."
            : "Responsible for checking the works."
        }`,
        `${
          hungarian
            ? "Egy csapat és az építési folyamat irányítása."
            : "Team and construction process management."
        }`,
        `${
          hungarian
            ? "Egy projekt napi kivitelezésének felügyelete."
            : "Overseeing the day-to-day construction of a project."
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
                  Mindig keresem a lehetőségeket ahol kamatoztathatom fejlesztő képességeimet, és fejleszthetem a tudásomat. 
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
          <h1 className="projectTitle">projektek</h1>
          <div
            className={`ProjectContainer ${
              darkMode ? "darkBackgroundAndColor2" : "lightBackgroundLinear"
            }`}
          >
            <button onClick={prevSlide} className="leftArrow">
              <img className="lRArr" src={leftArrow}></img>
            </button>
            <ProjectTemplate
              picture={profilePicture}
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
              <button onClick={ActiveDot} className="dot"></button>
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
                  <p className="fix">Hungarian</p>
                  <p className="fixx">native</p>
                </div>
                <div className="Hunlanguage">
                  <img
                    alt="Flag"
                    src={hungary}
                    className="activeLanguage"
                  ></img>
                </div>
              </div>
              <div className="En">
                <div className="Enlanguage">
                  <img src={uk} className="activeLanguage"></img>
                </div>
                <div className="EnlanguageDesc">
                  <p className="fix">English</p>
                  <p className="fixx">Language certificate B2</p>
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
            <h1 className="educationTitle">képzettség</h1>
            {edu ? (
              <div className="educationInfo">
                <EducationDisplayTemplate dark={darkMode} />
                <EducationDisplayTemplate dark={darkMode} />
                <EducationDisplayTemplate dark={darkMode} />
                <EducationDisplayTemplate dark={darkMode} />
                <EducationDisplayTemplate dark={darkMode} />
                <EducationDisplayTemplate dark={darkMode} />
              </div>
            ) : null}
            {edu ? null : <p className="cte">click to expand.</p>}
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
                  linkedin
                </button>
                <button
                  className={`${darkMode ? "darkButton" : "lightbutton"}`}
                >
                  linkedin
                </button>
              </div>
            </div>
            <div className="footerDatas">
              <div className="place">
                <p>Budapest, hungary</p>
              </div>

              <div className="signature">
                <p>2022 | Designed & coded by Dániel Sömen. &#169;</p>
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
            <img alt="Flag" src={hungary}></img>
            <p>Hungarian</p>
          </button>
          <button
            className={`${
              darkMode ? "darkBackgroundAndColor" : "lightBackgroundAndColor"
            }`}
            onClick={chooseEn}
          >
            <img src={uk}></img>
            <p>English</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default MainPage;
