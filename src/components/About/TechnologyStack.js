import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { TbCSharp } from "react-icons/tb";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import {
  DiJavascript1, DiReact, DiNodejs, DiAngularSimple, DiMongodb, DiPython, DiGit,  DiJava, DiHtml5, DiCss3Full, DiSass, DiBootstrap,
  DiDjango
} from "react-icons/di";
import {
  SiPytorch, SiFirebase, SiNextdotjs, SiJquery, SiFlask, SiDotnet, SiFlutter, SiUnity, SiNumpy, SiPandas, SiPlotly, SiScikitlearn,
  SiTensorflow, SiKeras, SiMysql, SiVisualstudio, SiVisualstudiocode, SiAndroidstudio, SiPycharm, SiJupyter, SiTableau
} from "react-icons/si";

function ProgrammingLanguages() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={60} >
            <CgCPlusPlus />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={85} >
            <TbCSharp />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
          <CircularProgressbarWithChildren value={80} >
              <DiJavascript1 />
          </CircularProgressbarWithChildren>
        </Col>
        <Col xs={4} md={1} className="tech-icons">
          <CircularProgressbarWithChildren value={88} >
              <DiPython />
          </CircularProgressbarWithChildren>
        </Col>
        <Col xs={4} md={1} className="tech-icons">
          <CircularProgressbarWithChildren value={60} >
              <DiJava />
          </CircularProgressbarWithChildren>
        </Col>
    </Row>
  );
}

function WebTechnologies() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={82} >
            <DiHtml5 />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={75} >
            <DiCss3Full />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={63} >
            <DiSass />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={70} >
            <DiBootstrap />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={60} >
            <SiJquery />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={78} >
            <DiReact />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={65} >
            <DiNodejs />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={66} >
            <DiAngularSimple />
        </CircularProgressbarWithChildren>
      </Col>
    </Row>
  );
}

function Frameworks() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={80} >
            <DiDjango />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={60} >
            <SiFlask />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
          <CircularProgressbarWithChildren value={88} >
              <SiDotnet />
          </CircularProgressbarWithChildren>
        </Col>
        <Col xs={4} md={1} className="tech-icons">
          <CircularProgressbarWithChildren value={65} >
              <SiFlutter />
          </CircularProgressbarWithChildren>
        </Col>
        <Col xs={4} md={1} className="tech-icons">
          <CircularProgressbarWithChildren value={50} >
              <SiUnity />
          </CircularProgressbarWithChildren>
        </Col>
    </Row>
  );
}

function PythonLib() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={70} >
            <SiNumpy />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={80} >
            <SiPandas />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={74} >
            <SiPlotly />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={82} >
            <SiScikitlearn />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={65} >
            <SiTensorflow />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={72} >
            <SiKeras />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={55} >
            <SiPytorch />
        </CircularProgressbarWithChildren>
      </Col>
    </Row>
  );
}

function Databases() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={75} >
            <SiMysql />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={60} >
            <DiMongodb />
        </CircularProgressbarWithChildren>
      </Col>
    </Row>
  );
}

function DevTools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={80} >
            <DiGit />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={70} >
            <SiFirebase />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={75} >
            <SiVisualstudio />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={70} >
            <SiVisualstudiocode />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={55} >
            <SiAndroidstudio />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={78} >
            <SiPycharm />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={62} >
            <SiJupyter />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CircularProgressbarWithChildren value={50} >
            <SiTableau />
        </CircularProgressbarWithChildren>
      </Col>
    </Row>
  );
}


export { ProgrammingLanguages, WebTechnologies, Frameworks, PythonLib, Databases, DevTools };
