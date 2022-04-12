import React from 'react'
import Box from '../box/Box'
import { Description } from '../typography/description';
import { Title } from '../typography/title';
import './product.css'
const prodcut = [
  {
    id: "1",
    productName: "Product Name",
    midName: "candy",
    text1: "Lorem Ipsum is simply dummy",
    text2: "Lorem Ipsum has been industry ",
    backgroundColor: "#C72553",
  },
  {
    id: "2",
    productName: "Product Name",
    midName: "candy",
    text1: "Lorem Ipsum is simply dummy",
    text2: "Lorem Ipsum has been industry ",
    backgroundColor: "#6460AA",
  },
  {
    id: "3",
    productName: "Product 1",
    midName: "candy",
    text1: "Lorem Ipsum is simply dummy",
    text2: "Lorem Ipsum has been industry ",
    backgroundColor: "#48C1BB",
  },
  {
    id: "4",
    productName: "Product 1",
    midName: "candy",
    text1: "Lorem Ipsum is simply dummy",
    text2: "Lorem Ipsum has been industry",
    backgroundColor: "#F5BD17",
  },
  {
    id: "5",
    productName: "Product 1",
    midName: "candy",
    text1: "Lorem Ipsum is simply dummy",
    text2: "Lorem Ipsum has been industry",
    backgroundColor: "#F5333F",
  },
  {
    id: "6",
    productName: "Product 1",
    midName: "candy",
    text1: "Lorem Ipsum is simply dummy",
    text2: "Lorem Ipsum has been industry",
    backgroundColor: "#FE7968",
  },
]

const info = {
  title: "What's your flavour?",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Justo, pharetra egestas in massa faucibus vitae. 
     Blandit porttitor quam tortor lacus. 
     Justo, pharetra egestas in massa faucibus vitae. 
     Blandit porttitor quam tortor lacus. 
     Euismod cursus gravida semper.`,
}

function Product() {
  return (
    <div className="container">
      <div className="product_header">
        <Title text={info.title} color="#FE7968" />
        <Description text={info.description} />
      </div>
      <div className="box">
        <div className="wrapper">
          {prodcut.map(i => {
            return (
              <div
                style={{ background: `${i.backgroundColor}` }}
                className="card"
              >
                <Box prodcut={i} />
                <div style={{ height: "20px" }}></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Product