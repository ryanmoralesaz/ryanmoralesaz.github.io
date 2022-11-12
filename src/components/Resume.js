import React, { useEffect, useRef } from "react";
import { ImStarFull } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { RiBookReadFill } from "react-icons/ri";
import { GiHummingbird } from "react-icons/gi";
import { BsCollectionPlayFill } from "react-icons/bs";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GiBrainstorm } from "react-icons/gi";
import { AiOutlinePartition } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { GiSmartphone } from "react-icons/gi";
import { FaPuzzlePiece } from "react-icons/fa";
import { MdSwipe } from "react-icons/md";
import { FaCat } from "react-icons/fa";
import { personalInfo, knowledgeBase, hardSkills, softSkills, education, technicalTraining, experience } from "./data/resume_data";
import signature from "./signature.PNG";
import ReactToPrint from "react-to-print";

/* #region size consts */
const sizeXs = "4pt";
const sizeXs2 = "6pt";
const sizeS = "8pt";
const sizeS2 = "10pt";
const sizeM = "12pt";
const sizeM2 = "14pt";
const sizeL = "16pt";
const sizeL2 = "20pt";
const sizeX = "24pt";
const sizeX2 = "26pt";
/* #endregion */
const PersonalInfo = () => {
  return (
    <>
      {personalInfo.map((item) => {
        return (
          <div style={styles.underRibbon}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
              {item.type === "Phone" ? (
                <FaPhoneSquareAlt color="white" size={sizeL} />
              ) : item.type === "E-mail" ? (
                <MdEmail color="white" size={sizeL} />
              ) : item.type === "Portfolio" ? (
                <RiBookReadFill color="white" size={sizeL} />
              ) : item.type === "Scratch Projects" ? (
                <FaCat color="orange" size={sizeL} />
              ) : item.type === "Twitter" ? (
                <GiHummingbird color="white" size={sizeL} />
              ) : item.type === "Twitch" ? (
                <BsCollectionPlayFill color="white" size={sizeL} />
              ) : undefined}
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: sizeM }}>
              <text style={{ lineheight: 1.2 }}>{item.type}:</text>
              <text>{item.content}</text>
            </div>
          </div>
        );
      })}
    </>
  );
};
const SoftSkills = () => {
  return (
    <>
      {softSkills.map((item) => {
        return (
          <div style={styles.underRibbon}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
              {item.type === "Problem Solving" ? <GiBrainstorm color="white" size={sizeL} /> : item.type === "Creativity" ? <AiOutlinePartition color="white" size={sizeL} /> : item.type === "Team Player" ? <RiTeamFill color="white" size={sizeL} /> : undefined}
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: sizeM }}>
              <text style={{ lineheight: 1.2 }}>{item.type}:</text>
              <div style={{ flexDirection: "row", display: "flex" }}>
                {[...Array(item.rating)].map(() => {
                  return <GoldStar size={sizeL} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
const HardSkills = () => {
  return (
    <>
      {hardSkills.map((item) => {
        return (
          <div style={styles.underRibbon}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
              {item.type === "Custom Components" ? <FaPuzzlePiece color="white" size={sizeL} /> : item.type === "RN App Development" ? <GiSmartphone color="white" size={sizeL} /> : item.type === "UX Design" ? <MdSwipe color="white" size={sizeL} /> : undefined}
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: sizeM }}>
              <text style={{ lineheight: 1.2 }}>{item.type}:</text>
              <div style={{ flexDirection: "row", display: "flex" }}>
                {[...Array(item.rating)].map(() => {
                  return <GoldStar size={sizeL} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
const LeftRibbonBar = ({ title }) => {
  return (
    <div style={styles.leftRibbon}>
      <text>{title}</text>
    </div>
  );
};
const RightRibbonBar = ({ title }) => {
  return (
    <div style={styles.rightRibbon}>
      <text>{title}</text>
    </div>
  );
};
const TechTraining = () => {
  return (
    <>
      {technicalTraining.map((item) => {
        return (
          <div style={{ display: "flex", flexDirection: "row", width: "100%", marginBottom: sizeXs }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, padding: sizeS, textAlign: "left" }}>
              <text style={{ fontSize: sizeM }}>{item.dateRange}</text>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", flex: 3, textAlign: "left" }}>
              <text style={{ display: "block", fontWeight: "bold", fontSize: sizeM2, textAlign: "left" }}>{item.courseName}</text>
              <text style={{ display: "block", fontSize: sizeM, fontStyle: "italic" }}>{item.schoolName}</text>
              <text style={{ fontSize: sizeS2 }}>{item.location}</text>
              <text style={{ fontSize: sizeS2 }}>{item.duration}</text>
            </div>
          </div>
        );
      })}
    </>
  );
};
const Education = () => {
  return (
    <>
      {education.map((item) => {
        return (
          <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, padding: sizeS, textAlign: "left" }}>
              <text style={{ fontSize: sizeM }}>{item.dateRange}</text>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", flex: 3, textAlign: "left" }}>
              <text style={{ display: "block", fontWeight: "bold", fontSize: sizeM2, textAlign: "left" }}>{item.major}</text>
              <text style={{ display: "block", fontSize: sizeM }}>{item.schoolName}</text>
              <text style={{ fontSize: sizeS2, fontStyle: "italic", fontWeight: "bold" }}>{item.subSchool}</text>
              <text style={{ fontSize: sizeS2, fontStyle: "italic" }}>{item.subSubSchool}</text>
              <text style={{ fontSize: sizeS2, fontStyle: "italic", fontWeight: "bold" }}>{item.subSchool2}</text>
              <text style={{ fontSize: sizeS2, fontStyle: "italic" }}>{item.subSubSchool2}</text>
              <text style={{ fontSize: sizeS2 }}>{item.location}</text>
              {/* <text style={{ fontSize: sizeS2 }}>{item.minor}</text>
              <text style={{ fontSize: sizeS2, fontStyle: "italic" }}>{item.certs}</text> */}
            </div>
          </div>
        );
      })}
    </>
  );
};
const Experience = () => {
  return (
    <>
      {experience.map((item, index) => {
        const responsibilities = item.responsibilities;
        // console.log(responsibilities);
        return (
          <div style={{ display: "flex", flexDirection: "column", width: "100%", marginBottom: index === experience.length - 1 ? undefined : sizeM, borderBottom: index === experience.length - 1 ? undefined : "1pt solid navy" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, padding: sizeS, textAlign: "left" }}>
                <text style={{ fontSize: sizeM }}>{item.dateRange}</text>
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", flex: 3, textAlign: "left" }}>
                <text style={{ display: "block", fontWeight: "bold", fontSize: sizeM2, textAlign: "left" }}>{item.title}</text>
                {/* <text style={{ fontSize: sizeS2, fontStyle: "italic", fontWeight: "bold" }}>{item.payCategory}</text> */}
                <text style={{ fontSize: sizeS2, fontStyle: "italic" }}>{item.domain1}</text>
                <text style={{ fontSize: sizeS2 }}>{item.contentKnowledge}</text>
                <text style={{ fontSize: sizeS2 }}>{item.employer}</text>
                <text style={{ fontSize: sizeS2, fontStyle: "italic" }}>{item.location}</text>
                <text style={{ fontSize: sizeS2, fontStyle: "italic", fontWeight: "bold" }}>{item.notes}</text>
              </div>
            </div>
            <div>
              <>
                {responsibilities.map((item) => {
                  return (
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", flex: 1, padding: sizeS, textAlign: "left", lineheight: 1.2 }}>
                      <div style={styles.bulletPoint}></div>
                      <div style={{ width: "90%" }}>
                        <text style={{ fontSize: sizeS2 }}>{item}</text>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          </div>
        );
      })}
    </>
  );
};
const GoldStar = ({ size }) => {
  return (
    <>
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="20%" y2="30%">
          <stop stopColor="#BF953F" offset="0%" />
          <stop stopColor="#FCF6BA" offset="100%" />
        </linearGradient>
      </svg>
      <ImStarFull style={styles.goldStar} size={size} />
    </>
  );
};
const print = () => {
  let printContents = document.getElementById("printablediv").innerHTML;
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
};
function Resume() {
  let componentRef = useRef();

  return (
    <>
      {/* <button type="button" onClick={print}>
        Print
      </button> */}
      <ReactToPrint trigger={() => <button>Print this out!</button>} content={() => componentRef} />
      <div id="printablediv">
        <div style={styles.pageContainer} ref={(el) => (componentRef = el)}>
          <div style={styles.leftSide}>
            <text style={{ fontSize: sizeX, marginBottom: sizeS }}>Ryan Morales</text>
            <text style={{ fontSize: sizeL, textAlign: "left" }}>
              React | JS <br />
              Full-Stack Developer
            </text>
            {/* <div style={styles.headingThreeText}>This is a heading three.</div> */}

            <LeftRibbonBar title="Personal Info" />
            <PersonalInfo />
            <LeftRibbonBar title="Soft Skills" />
            <SoftSkills />
            <LeftRibbonBar title="Hard Skills" />
            <HardSkills />
            <LeftRibbonBar title="Knowledge Base" />
            <text style={{ textAlign: "left", lineheight: 1.2 }}>
              {knowledgeBase.map((item, index) => {
                if (index === knowledgeBase.length - 1) {
                  return `${item}`;
                } else {
                  return `${item}, `;
                }
              })}
            </text>
          </div>
          <div style={styles.rightSide}>
            <div style={styles.summaryView}>
              <text style={styles.summary}>
                Ryan Morales is a demonstrated problem solver with 10 years of experience in education, marketing, administration, & customer-service. He is currently seeking an opportunity to utilize his full-stack Web and React JS development skills in a junior to mid-level developer role with a
                customer-oriented, modern technology company.
              </text>
            </div>
            <RightRibbonBar title="Experience" />
            <Experience />
            <RightRibbonBar title="Education" />
            <div style={{ display: "flex", flexDirection: "row", width: "90%" }}>
              <Education />
            </div>
            <RightRibbonBar title="Technical Training" />
            <TechTraining />
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;

const styles = {
  pageContainer: {
    display: "flex",
    // marginBottom: "1in",
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    // border: "1px solid white",
    width: "8.3in",
    height: "11.7in",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  leftSide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1,
    height: "100%",
    background: "linear-gradient(0deg, royalblue, navy)",
    paddingRight: ".2in",
    paddingLeft: ".2in",
    paddingTop: ".2in",
    color: "white",

    // border: "2px solid red",
  },
  leftRibbon: {
    display: "flex",
    background: "linear-gradient(45deg, white 60%, transparent)",
    color: "black",
    marginTop: ".2in",
    marginBottom: ".2in",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: ".2in",
    paddingRight: ".2in",
    paddingTop: sizeXs,
    paddingBottom: sizeXs,
    marginLeft: "-.2in",
    fontSize: sizeL,
    width: "100%",
    // marginRight: "-.2in",
    // border: "2px solid red",
  },
  rightRibbon: {
    display: "flex",
    background: "linear-gradient(45deg, navy 60%, transparent)",
    color: "white",
    marginTop: ".1in",
    marginBottom: ".1in",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: ".2in",
    paddingRight: ".2in",
    paddingTop: sizeXs,
    paddingBottom: sizeXs,
    // marginLeft: ".2in",
    fontSize: sizeL,
    width: "90%",

    // marginRight: "-.2in",
    // border: "2px solid red",
  },
  underRibbon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: sizeS,
    fontSize: sizeM,
  },

  rightSide: {
    display: "flex",
    flexDirection: "column",
    flex: 6,
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    paddingRight: ".2in",
    paddingLeft: ".2in",
    paddingTop: ".2in",
    lineheight: 1.2,
  },

  summaryView: {
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    width: "95%",
    marginTop: "4pt",
    marginBottom: "4pt",
  },
  summary: {
    textAlign: "start",
    fontSize: "10pt",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  sectionView: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryOne: {
    display: "flex",
    paddingLeft: "8pt",
    width: "95%",
    borderTopWidth: 1,
    borderTopColor: "blue",
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    alignContent: "center",
    justifyContent: "flex-start",
  },
  categoryOneText: {
    fontSize: "20pt",
    textAlign: "left",
  },
  segmentHolder: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "yellow",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  segmentLeft: {
    display: "flex",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    padding: "8pt",
  },
  segmentRight: {
    display: "flex",
    flex: 6,
    padding: "8pt",
    alignItems: "center",
    backgroundColor: "white",
    // borderWidth: 1,
  },
  ulHolderOne: {
    display: "flex",
    flexDirection: "row",
    height: "18pt",
    width: "100%",
    background: "linear-gradient(45deg, navy 70%, gray)",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "white",
  },
  bulletPoint: {
    width: sizeS,
    height: sizeS,

    background: "linear-gradient(90deg, blue, gray)",
    marginRight: sizeM,
  },
  listItem: {},
  goldStar: {
    // filter: "invert(56%) sepia(82%) saturate(376%) hue-rotate(125deg) brightness(83%) contrast(90%)",
    fill: "url(#blue-gradient)",
  },
};
