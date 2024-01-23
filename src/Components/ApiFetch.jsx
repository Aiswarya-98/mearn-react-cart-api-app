import React, { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "../Components/Api.css"
import Modal from "react-bootstrap/Modal"

function ApiFetch() {
  const [product, setProduct] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null) // new state to store selected product

  const base_url = "https://dummyjson.com/products"

  // API FETCHING

  // The async keyword is used to define an asynchronous function.
  //It allows the use of the await keyword inside the function, indicating that the function will perform asynchronous operations.

  // The fetch function is a modern JavaScript API for making network requests.
  //It returns a Promise that resolves to the Response to that request.

  //await is used to wait for the Promise to resolve, effectively pausing the execution of the function until the Promise is fulfilled.

  // The then method is used to handle the Promise returned by fetch. In this case,
  //it takes the Response object and calls the json method on it.
  // The second then method is used to handle the result of the JSON parsing. It takes the parsed JSON data (referred to as products)
  // and sets it as the state of the component using the setProduct function.

  const fetchData = async () => {
    const result = await fetch(base_url)
      .then((res) => res.json())
      .then((products) => setProduct(products.products))
  }

  console.log("product data", product)

  useEffect(() => {
    fetchData()
  }, [])

  // modal usestate
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  // selectedProduct: This parameter represents the product that was clicked, and its details will be displayed in the modal.

  // setSelectedProduct(selectedProduct): This line sets the selectedProduct state with the product
  //that was passed as an argument to the function. T
  //his is done to keep track of the product that the user clicked on.

  //setShow(true): This line sets the show state to true, which makes the modal visible. When the user clicks the "BUY" button on a
  //card, this function is called, and it sets the selectedProduct and opens the modal.

  // So, when the "BUY" button is clicked, handleShow is called with the corresponding product as an argument.
  //It sets the selectedProduct state with that product's information and opens the modal by setting show to true.
  //This way, the modal displays the details of the product that the user clicked on.

  const handleShow = (selectedProduct) => {
    setSelectedProduct(selectedProduct)
    setShow(true)
  }

  return (
    <div className="card">
      {product.map((item) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.thumbnail} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description} </Card.Text>
            <Card.Text>PRICE: ${item.price}</Card.Text>

            {/* when a user clicks the "BUY" button on a specific card, it triggers the handleShow function with the corresponding item (product) as an argument. This, in turn, sets the selectedProduct state and opens the modal to display the 
details of the selected product. */}

            <Button variant="primary" onClick={() => handleShow(item)}>
              BUY
            </Button>
          </Card.Body>
        </Card>
      ))}

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct && selectedProduct.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <>
              <p>{selectedProduct.description}</p>
              <p>PRICE: ${selectedProduct.price}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ApiFetch
