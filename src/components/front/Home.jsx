import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { fetchBooks } from '../../api/api';
import ProductSection from "../common/ProductSection";

const Home = () => {
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetchBooks();
                console.log(response);
                setProducts(response);
            } catch (error) {
            } finally {
            }
        };

        getProducts();
    }, []);
        
    const categories = Array.from({ length: 3 }).map(() => ({
        name: faker.commerce.department(),
        image: faker.image.urlLoremFlickr({ category: 'grocery' })
    }));
    const testimonials = Array.from({ length: 3 }).map(() => ({
        name: faker.company.name(), 
        text: faker.lorem.sentences(),
        avatar: faker.image.avatar()
    }));

    

    return (
        <div>
            <section className="welcome-section" style={{margin: "8rem"}}>
                <div className="container text-center">
                    <h1>Welcome to SpellBooks!</h1>
                    <p>We are thrilled to have you here, we are here to help you achieve your goals.</p>
                </div>
            </section>

            <section className="top-products-section mb-5">
                <h2 className="text-center mb-4">Top Products</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <ProductSection products={products} />
                </div>
            </section>

            <section className="categories-section mb-5">
                <h2 className="text-center mb-4">Categories</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {categories.map((category, index) => (
                        <div className="col" key={index}>
                            <div className="card shadow-sm">
                                <img src={category.image} className="card-img-top" alt={category.name} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{category.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="testimonials-section mb-5">
                <h2 className="text-center mb-4">What Our Customers Say</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {testimonials.map((testimonial, index) => (
                        <div className="col" key={index}>
                            <div className="card shadow-sm">
                                <div className="card-body text-center">
                                    <img src={testimonial.avatar} className="rounded-circle mb-3" alt={testimonial.name} style={{ width: "80px", height: "80px" }} />
                                    <h5 className="card-title">{testimonial.name}</h5>
                                    <p className="card-text">{testimonial.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
