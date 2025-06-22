import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

function MainContent() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
  fetch("https://indianhub-backend-k46a.onrender.com/api/videos")
    .then((res) => res.json())
    .then((data) => setVideos(data))
    .catch((err) => console.error("Failed to fetch videos", err));
}, []);

  return (
    <div className="main-content">
      <div className="px-4 mt-5 pt-5">
        <Row className="g-4">
          {videos.length === 0 ? (
            <p style={{ color: "red"  }}>Sorry, no videos available.</p>
          ) : (
            videos.map((video, idx) => (
              <Col key={idx} sm={12} md={6} lg={3}>
                <Card className="bg-dark text-white h-100 video-card">
                  <Card.Img src={video.image} alt="video thumbnail" className="card-img-custom"/>
                  <Card.ImgOverlay className="d-flex justify-content-end align-items-start p-2">
                    <span className="badge bg-dark text-light">{video.duration}</span>
                  </Card.ImgOverlay>
                  <Card.Body style={{ backgroundColor: "black" }} className="text-start">
                    <Card.Title className="card-text" style={{ fontSize: "0.9rem" }} > {video.channel}</Card.Title>
                    <Card.Text style={{ fontSize: "0.8rem" }}> {video.title} </Card.Text>
                    <small className="text-muted">{video.views} views</small>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </div>
    </div>
  );
}

export default MainContent;
