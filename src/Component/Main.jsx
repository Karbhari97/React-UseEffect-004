import React, { useEffect, useState } from "react";
import axios from "axios";

function Main() {
  const AccessKey = "S7bCPpV54ImyhgR4Kch56FiS1uB7P_4Le9FqKAiz3qw";
  let [image, setImage] = useState([]);
  let [value, setValue] = useState("night");

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?client_id=${AccessKey}&query=${value}&page=30&per_page=30`
      )
      .then((res) => {
        setImage(res.data.results);
        console.log(res.data.results);
      })
      .catch(() => {
        alert("Data Not Found");
      });
  }, [value]);

  return (
    <>
      <div
        className="container-fluid"
        style={{
          display: "flex",
          alignItems: "center",
          boxShadow: "0px 0px 10px black",
          backgroundColor: "black",
          color: "whitesmoke",
        }}
      >
        <div style={{ width: "20%" }}>
          <h4 className="h6 mt-3" style={{ fontWeight: "bolder" }}>
            GeekGallery
          </h4>
        </div>

        <div
          style={{ width: "40%", marginRight: "30px" }}
          className="container input-group mb-3 mt-3"
        >
          <input
            type="text"
            className="form-control"
            placeholder="Search For Images"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>

      <div
        className="gallery"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {image.map((ele) => {
          return (
            <>
              <img
                style={{
                  margin: "30px",
                  border: "2px solid black",
                  borderRadius: "20px",
                }}
                key={ele.id}
                src={ele.urls.regular}
                alt="Photo"
                width={300}
                height={380}
              />
              <div
                style={{ position: "relative", top: "90px", right: "300px" }}
              >
                <p
                  style={{
                    position: "absolute",
                    color: "white",
                    fontWeight: "bolder",
                    textAlign:"start"
                  }}
                >
                    {ele.user.username}<br/><br/>
                  {ele.alt_description} <br/><br></br>
                  {ele.created_at}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Main;
