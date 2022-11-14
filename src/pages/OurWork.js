import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//import images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//import framermotion 
import { motion } from "framer-motion";
import {pageAnimation} from "../animation"

const OurWork=()=>{
  return(
    <Work exit="exit" variants={pageAnimation} initial="hidden"  animate="show" style={{background:"#fff"}}>
      <Move>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to={"/work/the-athlete"}>
        <img src={athlete} alt="athlete" />
        </Link>
      </Move>
      <Move>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to={"/work/the-racer"}>
        <img src={theracer} alt="theracer" />
        </Link>
      </Move>
      <Move>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to={"/work/good-times"}>
        <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Move>
    </Work>
  )
}

const Work=styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding:2.5rem 5rem;
  h2{
    padding:1rem 0rem;
    color:black
  }
`
const Move=styled.div`
  padding-bottom: 10rem;
  .line{
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img{
    width:100%;
    height: 70vh;
    object-fit: cover;
  }
`
export  default OurWork;  