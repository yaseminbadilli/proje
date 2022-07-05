import { useState } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default function Product() {
    const [product, setProduct] = useState(
        [
            { id: "1", categoryID: "1", productName: "XXX" },
            { id: "2", categoryID: "2", productName: "YYY" }
        ]
    )


    function veriGetir() {
        fetch("http://localhost:3000/Product")
            .then(responses => responses.json())
            .then(data => setProduct(data))

    }

    return (
        <>
            <ListGroup>
                {product.map((cat) => (
                    <ListGroupItem key={cat.id}>{cat.productName}</ListGroupItem>
                ))
                }

                <button type='button' onClick={veriGetir}>Veritabanı</button>

            </ListGroup>
        </>
    )

}