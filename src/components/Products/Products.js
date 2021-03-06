import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import ProductCard from './ProductCard';

const containerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem 0 1rem 0'
};

export default function Products(props) {
  return (
    <StaticQuery
      query={graphql`
        query ProductPrices {
          prices: allStripePrice(
            filter: { active: { eq: true } }
            sort: { fields: [unit_amount] }
          ) {
            edges {
              node {
                id
                active
                currency
                unit_amount
                product {
                  id
                  name
                }
              }
            }
          }
        }
      `}
      render={({ prices }) => {
        // Group prices by product
        const products = {};
        for (const { node: price } of prices.edges) {
          const product = price.product;
          if (!products[product.id]) {
            products[product.id] = product;
            products[product.id].prices = [];
          }
          products[product.id].prices.push(price);
        }
        return (
          <section className="px-4 py-12">
            <h2 className="mb-8 text-4xl font-semibold text-center font-heading">Our products</h2>
            <div className="flex flex-wrap -mx-4">
              {Object.keys(products).map(key => (
                <ProductCard key={products[key].id} product={products[key]} />
              ))}
            </div>
          </section>
        );
      }}
    />
  );
}
