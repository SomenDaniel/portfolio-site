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
              Sömen Dániel
            </button>
            <button
              onClick={scrollto}
              id="aboutMe"
              className={`navButton ${darkMode ? "darkColor" : "lightColor"}`}
            >
              introduction
            </button>
            <button
              onClick={scrollto}
              id="experience"
              className={`navButton ${darkMode ? "darkColor" : "lightColor"}`}
            >
              work
            </button>
            <button
              onClick={scrollto}
              id="projects"
              className={`navButton ${darkMode ? "darkColor" : "lightColor"}`}
            >
              projects
            </button>
            <button
              onClick={scrollto}
              id="education"
              className={`navButton ${darkMode ? "darkColor" : "lightColor"}`}
            >
              education
            </button>
            <button
              onClick={scrollto}
              id="skills"
              className={`navButton ${darkMode ? "darkColor" : "lightColor"}`}
            >
              skills
            </button>
            <button
              onClick={scrollto}
              id="footer"
              className={`navButton ${darkMode ? "darkColor" : "lightColor"}`}
            >
              elérhetőségek
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
                dark
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
                light
              </button>
            </div>

            <div className="language">
              <button onClick={selectLanguage}>
                <img
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
            <h1 className="name">Hi, I'm Daniel</h1>
            <h3 className="title">foglalkozás</h3>
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
              {hungarian ? "Magamról" : "About Me"}
            </h1>
            <div className="cont">
              <p className="aMDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
                ex elit. Mauris tincidunt pharetra lectus, consectetur imperdiet
                leo condimentum et. Donec metus nibh, laoreet sed aliquet vitae,
                ultrices laoreet massa. Nam ut elementum ante, eget luctus orci.
                Curabitur id accumsan odio. Sed id quam vitae mauris interdum
                convallis eu ac nulla. Aliquam erat volutpat. Vestibulum
                volutpat ut tortor id cursus. In ac nulla commodo, dignissim
                lectus vel, egestas tortor. Curabitur molestie congue varius.
                Fusce faucibus lectus nec porttitor tempus. Etiam et facilisis
                ex. Nam eu magna in tortor tempus volutpat ut nec urna. Nunc id
                neque velit. Curabitur pulvinar odio et nulla mollis, sit amet
              </p>
            </div>
          </div>
        </section>
        {/* ----------------------------------------------------------------experience------------------------------------------------------------------- */}
        <section
          className={`experience ${
            darkMode
              ? "darkBackgroundAndColor darkBorderBottom"
              : "lightBackgroundAndColor lightBorderBottom"
          }`}
        >
          <h1>munka tapasztalat</h1>
          <div className="cont">
            <div className="workTempCont">
              <div className="left">
                <WorkDisplayTemplate dark={darkMode} />
              </div>
              <div className="middle">
                <WorkDisplayTemplate dark={darkMode} />
              </div>
              <div className="right">
                <WorkDisplayTemplate dark={darkMode} />
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
            skills
          </h1>
          <div
            className={`skillsContainer ${
              darkMode ? "darkBackgroundAndColor2" : "lightBackgroundLinear"
            }`}
          >
            <h1 className="languages">languages</h1>
            <div
              className={`languageContainer ${
                darkMode ? "darkBorderBottomTop" : "lightBorderBottomTop"
              }`}
            >
              <div className="Hun">
                <div>
                  <p>Hungarian</p>
                  <p>native</p>
                </div>
                <div className="Hunlanguage">
                  <img src={hungary} className="activeLanguage"></img>
                </div>
              </div>
              <div className="En">
                <div className="Enlanguage">
                  <img src={uk} className="activeLanguage"></img>
                </div>
                <div>
                  <p>English</p>
                  <p>intermediate. Language certificate B2</p>
                </div>
              </div>
            </div>
            <h1 className="progTitle">some thing i have used</h1>
            <div className="progSkillsList">
              <ul>
                <li>JS</li>
                <li>React</li>
                <li>HTml</li>
              </ul>
              <ul>
                <li>Css</li>
                <li>git</li>
                <li>github</li>
              </ul>
              <ul>
                <li>scrum</li>
                <li>bootstrap</li>
                <li>Slack</li>
              </ul>
            </div>
            <p
              className={`SkillsFooter ${
                darkMode ? "darkBorderTop2" : "lightBorderTop2"
              }`}
            >
              valami szöveg arról h folyamatosan fejlődni szeretnék
            </p>
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
            <div className="footerDatas">
              <div className="place">
                <p>Budapest, hungary</p>
              </div>
              <div className="footerButtons">
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
            <img src={hungary}></img>
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
