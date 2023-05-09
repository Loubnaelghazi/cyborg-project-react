import React from 'react'
import './MostPopular.css'
import {FaStar,FaDownload} from 'react-icons/fa' /* import de l icone fastar */

const Card = (props) => {
  return (
    <>
      <div className="most-popular-item">
        <div className="card-wrapper">
          <img src="#" alt="card img m3ndich w9t n7tha lkum " />
          <div className="most-popular-item-content">
            <h4 className="most-popular-item-title">
              {" "}
              {props.title} <br /> <span>{props.sandbox}</span>
            </h4>
            <ul>
              <li>
                {" "}
                <span style={{ color: "yellow" }}>
                  <FaStar />{" "}
                  {/* les icones druri ntpiw cmd f terminal bch t instalihum f project */}
                </span>
                <span> {props.rate}</span>
              </li>
              <li>
                <span style={{ color: "red" }}>
                  <FaDownload />
                </span>
                <span>{props.download}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Card
