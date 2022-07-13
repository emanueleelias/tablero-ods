import React from 'react'
import { motion } from "framer-motion"
import "./card.scss";

const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

const Card = ({ title, number, description, icon }) => {
  return (
    <motion.div 
        variants={variants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.99 }} 
        className='card'
    >
 
        <div className="card__head">
            <div>
                <h4>{title}</h4>
                <span>{number}</span>
            </div>
            <div className='card__head-icon'>
                {icon}
            </div>
        </div>
        <div className="card__footer">
            <p>{description}</p>
        </div>
    </motion.div>
  )
}

export default Card;
