import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const QuickSearch = (props) => {
  return (
    <div
      id="quickSearch"
      className="container col-lg-12"
      style={{ marginBottom: "94px" }}
    >
      <span id="QuickHeading" className="h2 text-dark">
        {" "}
        Quick Search{" "}
      </span>
      <span id="QuickSubHeading" className="text-muted text-dark">
        {" "}
        Find Restaurants By MealType{" "}
      </span>
      <div className="mainTileContainer row">
        <div
          className="col-lg-4 col-md-12 col-sm-12  mt-3 scale  "
          style={{ height: "200px" }}
        >
          <div
            className="row ms-0 img-thumbnail d-flex justify-content-start shadow"
            style={{ height: "100%" }}
          >
            <div className="col-4">
              <img
                src={require("./images/food-tile.png")}
                alt="breakfast"
                className="img-fluid py-2 rounded-2 "
                style={{height:"100%"}}
              />
            </div>
            <div className=" ps-2 col-8">
              <div className="h3 mb-2">
                <Link
                  to="../listing/listing.html"
                  className="text-decoration-none text-dark"
                >
                  Breakfast
                </Link>
              </div>
              <div className="text-dark">Best BreakFast Places</div>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-sm-12 col-md-12  mt-3 scale "
          style={{height: "200px"}}
        >
          <div
            className="row ms-0 img-thumbnail d-flex justify-content-start shadow"
            style={{height: "100%"}}
          >
            <div className=" col-4">
              <img
                src={require("./images/nightlife.png")}
                alt="breakfast"
                className="img-fluid py-2 rounded-2 "
                style={{height:"100%"}}
              />
            </div>
            <div className="ps-2 col-8">
              <div className="h3 mb-2">
                <Link
                  to="../listing/listing.html"
                  className="text-decoration-none text-dark"
                >
                  Nightlife
                </Link>
              </div>
              <div className="text-dark">
                Best Pubs and Bars around the area
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-sm-12 col-md-12  mt-3 scale "
          style={{height: "200px"}}
        >
          <div
            className="row ms-0 img-thumbnail d-flex justify-content-start shadow "
            style={{height: "100%"}}
          >
            {" "}
            <div className="col-4">
              <img
                src={require("./images/snacks.png")}
                alt="breakfast"
                className="img-fluid py-2 rounded-2 "
                style={{height:"100%"}}
              />
            </div>
            <div className="ps-2 col-8">
              <div className="h3 mb-2">
                <Link
                  to="../listing/listing.html"
                  className="text-decoration-none text-dark"
                >
                  Lunch
                </Link>
              </div>
              <div className="text-dark">Best Deal For Lunch in the area</div>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-sm-12 col-md-12   mt-3 scale "
          style={{height: "200px"}}
        >
          <div
            className="row ms-0 img-thumbnail d-flex justify-content-start shadow"
            style={{height: "100%"}}
          >
            {" "}
            <div className="col-4">
              <img
                src={require("./images/snacks.png")}
                alt="breakfast"
                className="img-fluid py-2 rounded-2"
                style={{height:"100%"}}
              />
            </div>
            <div className="ps-2 col-8">
              <div className="h3 mb-2">
                <Link
                  to="../listing/listing.html"
                  className="text-decoration-none text-dark"
                >
                  Chaats
                </Link>
              </div>
              <div className="text-dark">Best Chaat hubs in the area</div>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-sm-12 col-md-12   mt-3  scale"
          style={{height: "200px"}}
        >
          <div
            className="row ms-0 img-thumbnail d-flex justify-content-start shadow"
            style={{height: "100%"}}
          >
            <div className="col-4">
              <img
                src={require("./images/drinks.png")}
                alt="breakfast"
                className="img-fluid py-2 rounded-2"
                style={{height:"100%"}}
              />
            </div>
            <div className="ps-2 col-8">
              <div className="h3 mb-2">
                <Link
                  to="../listing/listing.html"
                  className="text-decoration-none text-dark"
                >
                  Sweets and Condiments
                </Link>
              </div>
              <div className="text-dark">Best Sweet Sellers in the area</div>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-sm-12 col-md-12 mt-3 mb-3 scale"
          style={{height: "200px"}}
        >
          <div
            className="row ms-0 img-thumbnail d-flex justify-content-start shadow"
            style={{height: "100%"}}
          >
            {" "}
            <div className="col-4">
              <img
                src={require("./images/south.png")}
                alt="breakfast"
                className="img-fluid py-2 rounded-2 "
                style={{height:"100%"}}
              />
            </div>
            <div className="ps-2 col-8">
              <div className="h3 mb-2">
                <Link
                  to="../listing/listing.html"
                  className="text-decoration-none text-dark"
                >
                  Dinner
                </Link>
              </div>
              <div className="text-dark">
                Best Dining restaurants in the area
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
