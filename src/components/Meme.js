import React, { Component, useState } from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';
import Gary from "../images/IMG_2528.JPG"
import Button from "react-bootstrap/Button"
import useImage from "use-image"

const GaryPic = () => {
  const [image] = useImage(Gary)
  return <Image image={image}/>
}

const dragHandler = (e) => {
  let x = e.target.x()
  let y = e.target.y()

  console.log("x", x, "y", y)
}


const Meme = (props) => {
  const [lineA, setLineA] = useState("Gary")
  const [lineB, setLineB] = useState("Meme Generator")
  
  const listA = ["That Feeling When", "Tries to be Nice", "Don't Be Stupid", "That Face When", "Forgot to Record"]
  const listB = ["Lacey", "Bre", "Tequila", "React", "Forgot to Record", "Congratulations"]

  const generateMeme = () => {
    setLineA(listA[(Math.floor(Math.random()*(listA.length)))])
    setLineB(listB[(Math.floor(Math.random()*(listB.length)))])
  }

  return (
    <div className='d-flex justify-content-center w-100'>
      <Stage
      height={374}
      width={374}
      >
        <Layer> 
          <GaryPic/>
        

          <Text 

          align={"center"}
          verticalAlign={"top"}
          text={lineA} 
          draggable
          onDragEnd={dragHandler}
          fontSize={40}
          fontFamily={"Impact"}
          fontStyle={"Bold"}
          shadowColor="#ffffff"
          shadowOffsetX={2}
          shadowOffsetY={2}
          />

          
          <Text 
          align={"center"}
          verticalAlign="bottom"
          text={lineB} 
          draggable
          onDragEnd={dragHandler}
          fontSize={40}
          fontFamily={"Impact"}
          fontStyle={"Bold"}
          shadowColor="#ffffff"
          shadowOffsetX={2}
          shadowOffsetY={2}
          />

        </Layer>
      </Stage>
      <Button className='btn btn-primary' onClick={generateMeme}>Generate Meme</Button>
    </div>
  )
}

export default Meme

