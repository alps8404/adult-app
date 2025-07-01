import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

function MainContent() {
  const [videos, setVideos] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null); // track which video is playing

  //fetch("https://indianhub-backend-k46a.onrender.com/api/videos") 

  useEffect(() => {
  fetch("http://localhost:8080/api/videos")
    .then((res) => res.json())
    .then((data) => {
      console.log("Received from backend:", data);
      setVideos(data); // ← adjust this line after inspecting
    })
    .catch((err) => console.error("Failed to fetch videos", err));
}, []);
console.log("Video URL:", videos.url);
  return (
    
    <div className="main-content">
      <div className="px-4 mt-5 pt-5">
        <Row className="g-4">
          {videos.length === 0 ? (
            <p style={{ color: "red" }}>Sorry, no videos available.</p>
          ) : 
          (
            
            videos.map((video, idx) => (
              <Col key={idx} sm={12} md={6} lg={3}>
                <Card className="bg-dark text-white h-100 video-card">
                  {playingIndex === idx && video.videoLink ? (
                    <video
                      width="100%"
                      controls
                      autoPlay
                      style={{ maxHeight: "200px", objectFit: "cover" }}
                    >
                      <source src={video.videoLink} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                   <a href={video.videoLink} target="_blank" rel="noopener noreferrer">
                    <Card.Img
                      src={video.image}
                      alt="video thumbnail"
                      style={{
                        cursor: "pointer",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  </a>

                  )}

                  <Card.ImgOverlay className="d-flex justify-content-end align-items-start p-2" 
                   style={{ pointerEvents: "none" }}
                   >
                    <span className="badge bg-dark text-light">
                      {video.duration} seconds
                    </span>
                  </Card.ImgOverlay>

                  <Card.Body
                    style={{ backgroundColor: "black" }}
                    className="text-start"
                  >
                    <Card.Title
                      className="card-text"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {video.channel}
                    </Card.Title>
                    <Card.Text style={{ fontSize: "0.8rem" }}>
                      {video.title}
                    </Card.Text>
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
