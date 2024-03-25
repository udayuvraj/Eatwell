import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';



function parseNutritionInfo(inputString) {
    // If inputString is empty, return an empty array
    if (!inputString) return [];

    // Split the input string by newline character to get individual lines
    const lines = inputString.split(',');

    // Initialize an empty array to store the parsed details
    const detailsArray = [];

    // Iterate over each line and extract the details
    lines.forEach(line => {
        // Split each line by '-' to separate the key and value
        const [key, value] = line.split('-');

        // Trim whitespace from key and value
        const trimmedKey = key.trim();
        const trimmedValue = value.trim();

        // Push key and value into the detailsArray
        detailsArray.push(trimmedKey, trimmedValue);
    });

    return detailsArray;
}




const SandwichDetails = ({ product, products }) => {
    const { image, name, details, price, calories, highlight, nutritionFact, ingredients } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
    const parsedDetails = parseNutritionInfo(nutritionFact);
    const parsedIngredients = parseNutritionInfo(ingredients);



    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src={urlFor(image && image[index])} className="product-detail-image" />
                    </div>
                    <div className="small-images-container">
                        {image?.map((item, i) => (
                            <img
                                key={i}
                                src={urlFor(item)}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>

                <div className="product-detail-desc">
                    <h1>{name}</h1>

                    {highlight && <p>{calories}&nbsp;|&nbsp;{highlight}</p>}
                    {!highlight && <p>{calories}</p>}
                    <p className="price-display">₹{price}</p>

                    <h4>Nutrition Facts: </h4>
                    <div className="products-containerss">
                        {parsedDetails.map((detail, index) => (
                            <div key={index}>
                                <p style={{ fontWeight: index % 2 === 1 ? 'bold' : 'normal' }}>{detail}&nbsp;&nbsp;</p>
                            </div>
                        ))}

                    </div>

                    <h4>List of Ingredients: </h4>
                    <div className="products-containerss">
                        {parsedIngredients.map((detail, index) => (
                            <div key={index}>
                                <p style={{ fontWeight: index % 2 === 1 ? 'bold' : 'normal' }}>{detail}&nbsp;&nbsp;</p>
                            </div>
                        ))}
                    </div>
                    {details && <h4>Details:</h4>}

                    <p>{details}</p>



                </div>
            </div>

            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        {products.map((item) => (
                            <Product key={item._id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "sandwiches"] {
    slug {
      current
    }
  }
  `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "sandwiches" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);


    return {
        props: { products, product }
    }
}

export default SandwichDetails