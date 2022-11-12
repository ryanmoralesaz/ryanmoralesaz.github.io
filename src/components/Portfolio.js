import React, { Component } from "react";
import { Button, Container, Row, Col, CardImg, Card } from "reactstrap";

//import info pages
import TicTacToe from "./info/TicTacToe";
import QuoteAppInfo from "./info/QuoteAppInfo";
import PageFilter from "./info/PageFilter";
import EmployeeDirectory from "./info/EmployeeDirectory";
import InteractiveForm from "./info/InteractiveForm";
import TwitterApi from "./info/TwitterApi";
import FlickrAPI from "./info/FlickrApi";
import ContentScraper from "./info/ContentScraper";
//import gifs
import quoteAppPng from "./gifs/quote-generator-lg.gif";
import pageFilter from "./gifs/list-filter.gif";
import employeeDirectoryImg from "./gifs/employee-directory.gif";
import interactiveFormImg from "./gifs/interactive-form.gif";
import twitterAPI from "./gifs/tweeter.gif";
import ticTacToeImg from "./gifs/tictactoe.gif";
import flickrImage from "./gifs/flickr-image.gif";
import contentScraper from "./gifs/scraper.gif";
// import { ReactVideo } from "reactjs-media";
import Video from "../videos/lvbjp_demo_video.mp4";
// import jpg,png

class Portfolio extends Component {
  render() {
    return (
      <Container style={{ width: "100%" }}>
        {/*</div>*/}
        {/* <ReactVideo src="../../public/videos/lvbjp_demo_video.mp4" autoPlay /> */}
        {/* <video width="500" height="500" controls>
          <source src="../../public/videos/lvbjp_demo_video.mp4" type="video/mp4" />
           <source src="../../public/videos/lvbjp_demo_video.mp4" type="video/mp4" /> 
        </video> */}
        <div style={{ height: "5vh", width: "100%" }}></div>
        <div style={{ fontSize: "5vh", fontWeight: "bold" }}>My Projects</div>
        <div style={{ height: "5vh", width: "100%" }}></div>
        <div style={{ fontSize: "5vh", fontWeight: "bold", color: "yellow", background: "rgba(0,100, 200, .5)" }}>LV Black Jack PRO</div>
        <div style={{ fontSize: "3vh" }}>
          <div>Built with React Native</div>
          <a class="social-icon-link github" href="https://apps.apple.com/us/app/lv-black-jack-pro/id6443757220" target="_blank" rel="noopener" aria-label="Github">
            <div>Find it on the Apple App store </div>
          </a>
        </div>

        <video controls autostart autoPlay src={Video} type="video/mp4" width="60%" />
        <Row className="mb-2">
          <Col sm style={styles.projectCard}>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Quote Generator</h2>
            </Card>
            <CardImg className="h-50" src={quoteAppPng} width="60%" />
            <Row className="mt-2" style={styles.goButtons}>
              <Col className="pb-5" style={styles.projectButton}>
                <a href="https://ryanmoralesaz.github.io/quote_generator/">
                  <Button className="w-100" color="success">
                    Live Demo
                  </Button>
                </a>
              </Col>
              <Col className="pb-5" style={styles.projectButton}>
                <QuoteAppInfo />
              </Col>
              <Col className="pb-5" style={styles.projectButton}>
                <a href="https://github.com/ryanmoralesaz/quote_generator/">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm style={styles.projectCard}>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Tic Tac Toe</h2>
            </Card>
            <CardImg className="h-50" src={ticTacToeImg} width="60%" />
            <Row className="mt-2" style={styles.goButtons}>
              <Col className="pb-5" style={styles.projectButton}>
                <a href="https://ryanmoralesaz.github.io/tic-tac-toe/">
                  <Button className="w-100" color="success">
                    Live Demo
                  </Button>
                </a>
              </Col>
              <Col className="pb-5" style={styles.projectButton}>
                <TicTacToe />
              </Col>
              <Col className="pb-5" style={styles.projectButton}>
                <a href="https://github.com/ryanmoralesaz/tic-tac-toe/">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm style={styles.projectCard}>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Pagination Filter</h2>
            </Card>
            <CardImg className="h-50" src={pageFilter} width="60%" />
            <Row className="mt-2" style={styles.goButtons}>
              <Col className="pb-5" style={styles.projectButton}>
                <a href="https://ryanmoralesaz.github.io/pagination-filter/">
                  <Button className="w-100" color="success">
                    Live Demo
                  </Button>
                </a>
              </Col>
              <Col className="pb-5" style={styles.projectButton}>
                <PageFilter />
              </Col>
              <Col className="pb-5" style={styles.projectButton}>
                <a href="https://github.com/ryanmoralesaz/pagination-filter">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm style={styles.projectCard}>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Employee Directory</h2>
            </Card>
            <CardImg className="h-50" src={employeeDirectoryImg} width="60%" />
            <Row className="mt-2" style={styles.goButtons}>
              <Col className="pb-5" style={styles.projectButton}>
                <a href="https://ryanmoralesaz.github.io/employee-directory/">
                  <Button className="w-100" color="success">
                    Live Demo
                  </Button>
                </a>
              </Col>
              <Col className="pb-5" style={styles.projectButton}>
                <EmployeeDirectory />
              </Col>
              <Col className="pb-5" style={styles.projectButton}>
                <a href="https://github.com/ryanmoralesaz/employee-directory">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm style={styles.projectCard}>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Interactive Form</h2>
            </Card>
            <CardImg className="h-50" src={interactiveFormImg} width="60%" />
            <Row className="mt-2" style={styles.goButtons}>
              <Col className="pb-5" style={styles.projectButton}>
                <a href="https://ryanmoralesaz.github.io/interactive-form/">
                  <Button className="w-100" color="success">
                    Live Demo
                  </Button>
                </a>
              </Col>
              {/* <Col className="pb-5" style={styles.projectButton}>
                <InteractiveForm />
              </Col> */}
              <Col className="pb-5" style={styles.projectButton}>
                <a href="https://github.com/ryanmoralesaz/interactive-form/">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm style={styles.projectCard}>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Twitter API (SPA)</h2>
            </Card>
            <CardImg className="h-50" src={twitterAPI} width="60%" />
            <Row className="mt-2" style={styles.goButtons}>
              <Col className="pb-5" style={styles.projectButton}>
                <a href="https://github.com/ryanmoralesaz/twit-api-project">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
              {/* <Col className="pb-5" style={styles.projectButton}>
                <TwitterApi />
              </Col> */}
            </Row>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm style={styles.projectCard}>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Flickr Gallery API</h2>
            </Card>
            <CardImg className="h-50" src={flickrImage} width="60%" />
            <Row className="mt-2" style={styles.goButtons}>
              {/* <Col className="pb-5" style={styles.projectButton}>
                <FlickrAPI />
              </Col> */}
              {/* <Col className="pb-5" style={styles.projectButton}></Col> */}
              <Col className="pb-5" style={styles.projectButton}>
                <a href="https://github.com/ryanmoralesaz/gallery-app">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm style={styles.projectCard}>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Content Scraper</h2>
            </Card>
            <CardImg className="h-50" src={contentScraper} width="60%" />
            <Row className="mt-2" style={styles.goButtons}>
              {/* <Col className="pb-5" style={styles.projectButton}>
                <ContentScraper />
              </Col> */}

              <Col className="pb-5" style={styles.projectButton}>
                <a href="https://github.com/ryanmoralesaz/content-scraper">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;

const styles = {
  projectCard: {
    marginTop: "3vh",
    marginBottom: "3vh",
    borderBottom: "5px solid royalblue",
    fontSize: "4vh",
  },
  goButtons: { display: "flex", flexDirection: "row", margin: 0, padding: 0, fontSize: "3vh", alignItems: "center", justifyContent: "center" },
  projectButton: { flex: 1 },
};
