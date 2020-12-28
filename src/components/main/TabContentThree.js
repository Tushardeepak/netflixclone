import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { Typography } from "@material-ui/core";
import { generateMedia } from "styled-media-query";

function TabContentTwo() {
  return (
    <TabOneContainer>
      <TabTwoContent>
        <TabTop>
          <span>Choose one plan and watch everything on Netflix.</span>
          <Button
            style={{
              background: "red",
              width: "15rem",
              gridColumn: "9/11",
              margin: "0 1.25rem 1.25rem",
              transform: "scale(0.7)",
            }}
            className="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            try it now
          </Button>
        </TabTop>
        <TabBottom>
          <table style={{ color: "#fff" }}>
            <thead>
              <tr>
                <th></th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly price</td>
                <td>$9.99</td>
                <td>$13.99</td>
                <td>$16.99</td>
              </tr>
              <tr>
                <td>HD available</td>
                <td>
                  <ClearIcon style={{ color: "#fff", fontSize: 20 }} />
                </td>
                <td>
                  <CheckIcon style={{ color: "#fff", fontSize: 20 }} />
                </td>
                <td>
                  <CheckIcon style={{ color: "#fff", fontSize: 20 }} />
                </td>
              </tr>
              <tr>
                <td>Ultra HD available</td>
                <td>
                  <ClearIcon style={{ color: "#fff", fontSize: 20 }} />
                </td>
                <td>
                  <ClearIcon style={{ color: "#fff", fontSize: 20 }} />
                </td>
                <td>
                  <CheckIcon style={{ color: "#fff", fontSize: 20 }} />
                </td>
              </tr>
              <tr>
                <td>Screen you can watch on the same time </td>
                <td>
                  <Typography style={{ color: "#fff", fontSize: 20 }}>
                    1
                  </Typography>
                </td>
                <td>
                  <Typography style={{ color: "#fff", fontSize: 20 }}>
                    2
                  </Typography>
                </td>
                <td>
                  <Typography style={{ color: "#fff", fontSize: 20 }}>
                    4
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>Watch on laptop, TV, phone, tablet</td>
                <td>
                  <CheckIcon style={{ color: "#fff", fontSize: 20 }} />
                </td>
                <td>
                  <CheckIcon style={{ color: "#fff", fontSize: 20 }} />
                </td>
                <td>
                  <CheckIcon style={{ color: "#fff", fontSize: 20 }} />
                </td>
              </tr>
              <tr>
                <td>Unlimited movies and TV shows</td>
                <td>
                  <CheckIcon style={{ color: "#fff", fontSize: 20 }} />
                </td>
                <td>
                  <CheckIcon style={{ color: "#fff", fontSize: 20 }} />
                </td>
                <td>
                  <CheckIcon style={{ color: "#fff", fontSize: 20 }} />
                </td>
              </tr>
              <tr>
                <td>Cancel anytime</td>
                <td>
                  <CheckIcon style={{ color: "#fff", fontSize: 20 }} />
                </td>
                <td>
                  <CheckIcon style={{ color: "#fff", fontSize: 20 }} />
                </td>
                <td>
                  <CheckIcon style={{ color: "#fff", fontSize: 20 }} />
                </td>
              </tr>
            </tbody>
          </table>
        </TabBottom>
      </TabTwoContent>
    </TabOneContainer>
  );
}

export default TabContentTwo;

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px",
});

const TabOneContainer = styled.div`
  padding: 0 5rem;
  ${customMedia.lessThan("tablet")`
   padding: 0rem;

    `}
  span {
    grid-column: 2 / 8;
    color: #fff;
    font-size: 1.5rem;
  }

  table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
  }
  table thead th {
    text-transform: uppercase;
    padding: 0.8rem;
  }
  table tbody {
    display: table-table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  table tbody tr:nth-child(even) {
    background: rgb(27, 27, 27);
  }

  table tbody tr td {
    color: #999;
    padding: 0.8rem 1.2rem;
    text-align: center;
  }

  table tbody tr td:first-child {
    text-align: left;
  }
`;
const TabTwoContent = styled.div`
  ${customMedia.lessThan("tablet")`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin: 0 1rem;
`}
`;
const TabTop = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: center;
  align-items: center;
  padding: 2.5rem 0;
  ${customMedia.lessThan("tablet")`
    display:flex;
    flex-direction:column;
    text-align:center;
    `}
`;
const TabBottom = styled.div`
  margin: 2rem auto;
  ${customMedia.lessThan("tablet")`
   margin: 0rem ;

    `}
`;
