import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import { generateMedia } from "styled-media-query";
import { Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useAuth } from "../../context/AuthContext";
import { db, storage } from "../../firebase";

function MyList() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [edit, setEdit] = useState(false);
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);
  const { currentUser } = useAuth();

  const handleEdit = () => {
    db.collection("users")
      .doc(currentUser.uid)
      .collection("profile")
      .doc("NAME")
      .set(
        {
          name: name,
        },
        { merge: true }
      );
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  React.useEffect(() => {
    db.collection("users")
      .doc(currentUser.uid)
      .collection("profile")
      .doc("NAME")
      .get()
      .then((doc) => {
        setLink(doc.data().profileImage);
        setName(doc.data().name);
      });
  }, []);

  React.useEffect(() => {
    db.collection("users")
      .doc(currentUser.uid)
      .collection("movies")
      .onSnapshot((snapshot) => {
        setSavedMovies(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            movieName: doc.data().movieName,
            moviePoster: doc.data().posterLink,
          }))
        );
      });
  }, []);

  const handleUpload = () => {
    const uploadTask = storage.ref(`profileImages/${image.name}`).put(image);
    storage
      .ref("profileImages")
      .child(image.name)
      .getDownloadURL()
      .then((url) => {
        db.collection("users")
          .doc(currentUser.uid)
          .collection("profile")
          .doc("NAME")
          .set(
            {
              profileImage: url,
            },
            { merge: true }
          );
      });
    setImage(null);
  };
  const handleDelete = (movieId) => {
    db.collection("users")
      .doc(currentUser.uid)
      .collection("movies")
      .doc(movieId)
      .delete();
  };

  return (
    <MyListContainer>
      <Button
        startIcon={
          <ArrowBackIosIcon
            style={{ fontSize: "1rem", paddingLeft: "0.5rem" }}
          />
        }
        style={{
          background: "red",
          position: "fixed",
          left: "1rem",
          top: "1rem",
          fontSize: "1rem",
          color: "#fff",
          padding: "0 0.5rem",
          zIndex: 1000,
        }}
        onClick={() => history.push("/")}
      >
        Back
      </Button>
      <MyListDownContainer>
        <MyListLeftContainer>
          <Avatar
            src={link}
            style={{
              zIndex: 10,
              margin: "1rem 3rem",
              height: "8rem",
              width: "8rem",
            }}
            alt={name}
          />
          <input
            className="profilePhoto"
            id="profile-image-file"
            type="file"
            accept="image/*"
            onChange={handleChange}
            style={{ margin: "1rem", transform: "translateX(20%)" }}
          />
          <div style={{ display: "flex" }}>
            <Button
              className="profilePhoto"
              style={{
                marginBottom: "1rem",
                background: "rgb(71, 0, 0)",
                opacity: "0.6",
                marginRight: "1rem",
              }}
              onClick={handleUpload}
            >
              <span className="profilePhoto"> Upload Picture</span>
            </Button>
            <Button
              style={{
                marginBottom: "1rem",
                background: "rgb(71, 0, 0)",
                opacity: "0.6",
                zIndex: 10,
                color: "#FFF",
              }}
              onClick={() => handleEdit()}
            >
              Update name
            </Button>
          </div>
          <input
            className="inputName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h2
            style={{
              color: "#fff",
              zIndex: 10,
              margin: "2rem 0",
              wordBreak: "break-word",
              width: "20rem",
              height: "auto",
              fontSize: "1rem",
            }}
          >
            Email: <span>{currentUser?.email}</span>
          </h2>
          <p
            style={{
              color: "#999",
              zIndex: 10,
              marginTop: "3rem",
            }}
          >
            Enjoyed? Give a star{" "}
            <a
              href="https://github.com/Tushardeepak/netflixclone"
              style={{ textDecoration: "none", color: "#999" }}
            >
              <GitHubIcon
                style={{
                  color: "#999",
                  fontSize: "1rem",
                  padding: "0 0.2rem",
                }}
              />
            </a>
          </p>
        </MyListLeftContainer>
        <MyListRightContainer>
          {savedMovies?.map((movie) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <MovieTab src={movie.moviePoster}></MovieTab>
              <Button
                style={{
                  margin: "0.5rem 0",
                  marginTop: "-1.7rem",
                  background: "rgb(71, 0, 0)",
                  opacity: "0.8",
                  zIndex: 10,
                  color: "#FFF",
                }}
                onClick={() => handleDelete(movie.id)}
              >
                Delete
              </Button>
            </div>
          ))}
        </MyListRightContainer>
      </MyListDownContainer>
    </MyListContainer>
  );
}

export default MyList;

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px",
});

const MyListContainer = styled.div`
  background-color: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MyListDownContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #000;
  margin-top: 3rem;
  width: 100%;
  height: auto;

  ${customMedia.lessThan("tablet")`
    display: flex;
    flex-direction:column;
    justify-content: center;
    `}
`;

const MyListLeftContainer = styled.div`
  margin: 3rem;
  background-color: #000;
  border: 0.5px solid red;
  border-bottom: none;
  border-left: none;
  padding: 0 2rem;
  width: 38%;
  height: 30rem;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${customMedia.lessThan("tablet")`
     width: 60%;
     height: 35rem;
    `}

  .inputName {
    color: #fff;
    background: #000;
    width: 20rem;
    font-size: 2rem;
    font-weight: 400;
    padding: 1rem;
    text-align: center;
    outline: none;
    border: none;
    border-radius: 10px;
    height: 2rem;
    z-index: 10;

    ${customMedia.lessThan("tablet")`
    width: 15rem;
    font-size: 1.5rem;
    `};
  }

  h2 {
    ${customMedia.lessThan("tablet")`
    width: 15rem;
    font-size: 0.7rem;
    `};
  }

  .profilePhoto {
    z-index: 10;
    color: #fff;
  }
`;
const MyListRightContainer = styled.div`
  margin: 3rem;
  background-color: #000;
  border: 0.5px solid red;
  border-bottom: none;
  border-right: none;
  padding: 0 2rem;
  width: 38%;
  height: 30rem;
  border-radius: 3rem;
  overflow-x: hidden;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  &::-webkit-scrollbar-track {
    height: 20rem !important;
    display: none;
  }

  ${customMedia.lessThan("tablet")`
     width: 60%;
     height: 35rem;
     grid-template-columns: 1fr ;
    `};
`;

const MovieTab = styled.img`
  height: 11rem;
  width: 9rem;
  margin: 2rem 0rem;
  padding: 0.5rem;
  object-fit: contain;
  border: 2px solid rgb(129, 2, 2);
  border-radius: 20px;
  border-top: none;
  border-left: none;
`;

// const MovieTabContainer = styled.div`
//   background-color: red;
//   margin: 2rem 0rem;
//   height: 11.3rem;
//   width: 7.8rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
