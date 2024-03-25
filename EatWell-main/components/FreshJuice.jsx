import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FreshJuice = ({ freshjuice: { image, name, slug, price, calories, highlight } }) => {
    return (
        <div>
            <Link href={`/freshjuice/${slug.current}`}>
                <div className="product-card">
                    <img
                        src={urlFor(image && image[0])}
                        width={250}
                        height={250}
                        className="product-image"
                    />
                    <p className="product-name">{name}</p>
                    {highlight && <p className="extra-info">{calories}&nbsp;|&nbsp;{highlight}</p>}
                    {!highlight && <p className="extra-info">{calories}</p>}
                    


                    <p className="product-price">₹{price}</p>
                </div>
            </Link>
        </div>
    )
}

export default FreshJuice