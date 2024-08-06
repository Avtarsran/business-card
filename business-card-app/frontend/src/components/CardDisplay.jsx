import React from "react";

function CardDisplay({ cards }) {
  return (
    <div style={{ display: "flex",flexWrap:"wrap",justifyContent:"center" }}>
      {cards.map((element) => {
        return (
          <div
            key={element._id}
            style={{
              boxShadow: "0px 0px 2px gray",
              padding: "20px",
              margin: "10px",
              width: "33%",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h2 style={{marginTop:"-10px"}}>{element.name}</h2>
            <p>{element.description}</p>
            <h3>Interests</h3>
            {element.interests.map((elm) => {
              return <p key={elm}>{elm}</p>;
            })}
            <br />
            {element.links.map((el) => {
              return (
                <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
                <a
                  target="_blank"
                  key={el}
                  href={Object.values(el)}
                  style={{
                    background: "#1877F2",
                    width: "50%",
                    color: "white",
                    textDecoration: "none",
                    padding: "10px",
                    textAlign: "center",
                    borderRadius: "3px",
                    margin:'5px'
                  }}
                >
                  {Object.keys(el)}
                </a>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default CardDisplay;
