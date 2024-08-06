import React, { useState } from "react";
import axios from "axios";

function CreateCard({ cards, setCards }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [interests, setInterests] = useState([]);
  const [linkto, setLinkTo] = useState([]);
  const [link, setLink] = useState([]);
  const [links, setLinks] = useState({});
  const [interestInp, setInterestInp] = useState([
    <input
      key={Math.random()}
      style={{ padding: "6px 5px" }}
      type="text"
      placeholder="Interests"
      onChange={(e) => {
        setTimeout(() => {
          setInterests([...interests, e.target.value]);
        }, 1000);
      }}
    />,
  ]);
  const [linksInp, setLinksInp] = useState([
    <div style={{ marginBottom: "2px" }} key={Math.random()}>
      <input
        style={{ padding: "6px 5px" }}
        type="text"
        placeholder="Link to..."
        onChange={(e) => {
          setTimeout(() => {
            setLinkTo([...linkto, e.target.value]);
          }, 1000);
        }}
      />
      <input
        style={{ padding: "6px 5px" }}
        type="text"
        placeholder="Link"
        onChange={(e) => {
          setTimeout(() => {
            setLink([...link, e.target.value]);
          }, 1000);
        }}
      />
    </div>,
  ]);
  return (
    <div style={{ textAlign: "center", marginBottom: "10px" }}>
      <h1>Create Card</h1>
      <div style={{ padding: "10px" }}>
        <input
          style={{ width: "30%", padding: "6px 5px" }}
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setTimeout(() => {
              setName(e.target.value);
            }, 3000);
          }}
        />
      </div>
      <div style={{ padding: "10px" }}>
        <input
          style={{ width: "30%", padding: "6px 5px" }}
          type="text"
          placeholder="Description"
          onChange={(e) => {
            setTimeout(() => {
              setDesc(e.target.value);
            }, 3000);
          }}
        />
      </div>
      <div style={{ padding: "10px" }}>
        {interestInp}
        <div>
          <button
            style={{
              border: "none",
              background: "#1877F2",
              width: "10%",
              color: "white",
              textAlign: "center",
              borderRadius: "3px",
              marginTop: "3px",
              padding: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              setTimeout(() => {
                setInterestInp([
                  ...interestInp,
                  <input
                    key={Math.random()}
                    style={{ padding: "6px 5px" }}
                    type="text"
                    placeholder="Interests"
                    onChange={(e) => {
                      setTimeout(() => {
                        setInterests([...interests, e.target.value]);
                      }, 1000);
                    }}
                  />,
                ]);
              }, 100);
            }}
          >
            Add more Interest
          </button>
        </div>
      </div>
      <div style={{ padding: "10px" }}>
        {linksInp}
        <div>
          <button
            style={{
              border: "none",
              background: "#1877F2",
              width: "10%",
              color: "white",
              textAlign: "center",
              borderRadius: "3px",
              marginTop: "3px",
              padding: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              setTimeout(() => {
                setLinksInp([
                  ...linksInp,
                  <div style={{ marginBottom: "2px" }} key={Math.random()}>
                    <input
                      style={{ padding: "6px 5px" }}
                      type="text"
                      placeholder="Link to..."
                      onChange={(e) => {
                        setTimeout(() => {
                          setLinkTo([...linkto, e.target.value]);
                        }, 1000);
                      }}
                    />
                    <input
                      style={{ padding: "6px 5px" }}
                      type="text"
                      placeholder="Link"
                      onChange={(e) => {
                        setTimeout(() => {
                          setLink([...link, e.target.value]);
                        }, 1000);
                      }}
                    />
                  </div>,
                ]);
              }, 100);
            }}
          >
            Add more Links
          </button>
          <div>
            <button
              style={{
                border: "none",
                background: "#1877F2",
                width: "20%",
                color: "white",
                textAlign: "center",
                borderRadius: "3px",
                marginTop: "10px",
                padding: "10px",
                fontWeight: "8px",
              }}
              onClick={async () => {
                let updatedLinks = [];
                for (let i = 0; i < linkto.length; i++) {
                  updatedLinks.push({ [linkto[i]]: link[i] });
                }
                setLinks(updatedLinks);
                console.log(links);
                await axios
                  .post("http://localhost:3000/cards", {
                    name: name,
                    description: desc,
                    interests: interests,
                    links: updatedLinks,
                  })
                  .then((response) => {
                    console.log("Success:", response.data);
                    setCards([
                      ...cards,
                      {
                        name: name,
                        description: desc,
                        interests: interests,
                        links: updatedLinks,
                      },
                    ]);
                  })
                  .catch((error) => {
                    console.error("There was an error!", error);
                  });
              }}
            >
              Add card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCard;
