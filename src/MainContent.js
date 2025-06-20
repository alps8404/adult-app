import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const videos = [
  {
    title: "hot stepmom forgot to put on panties in bed",
    channel: "horny69rabbits",
    duration: "21:48",
    views: "453K",
    image: "/images/alpesh.jpg"
  },
  {
    title: "Me follo mi hermanastro mientras ve el partido",
    channel: "GABRIELAFoxx",
    duration: "10:10",
    views: "2.1M",
    image: "/images/alpesh.jpg"
  },
  {
    title: "Stunning Lia Lin Pussy Penetrated...",
    channel: "FILOUFITT",
    duration: "14:46",
    views: "1.4M",
    image: "/images/alpesh.jpg"
  },
  {
    title: "BEAUTIFUL YOUNG WOMAN WITH OLDER MAN",
    channel: "Alekzium",
    duration: "7:26",
    views: "1.3M",
    image: "/images/alpesh.jpg"
  }
];

function MainContent() {
  return (
    <div className="main-content">
      <div className="px-4 mt-5 pt-5">
      <Row className="g-4">
        {videos.map((video, idx) => (
          <Col key={idx} sm={12} md={6} lg={3}>
            <Card className="bg-dark text-white border-0 h-100 video-card"  style={{ backgroundColor: 'black' }} >
              <Card.Img src={video.image} alt="video thumbnail" className="card-img-custom" />
              <Card.ImgOverlay className="d-flex justify-content-end align-items-start p-2">
                <span className="badge bg-dark text-light">{video.duration}</span>
              </Card.ImgOverlay>
              <Card.Body style={{ backgroundColor: 'black' }}>
                <Card.Title className="card-text" style={{ fontSize: "0.9rem" }}>{video.channel}</Card.Title>
                <Card.Text style={{ fontSize: "0.8rem" }}>{video.title}</Card.Text>
                <small className="text-muted">{video.views} views</small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </div>
  );
}

export default MainContent;
