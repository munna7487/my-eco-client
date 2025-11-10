import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Details = () => {
    const data = useLoaderData()
    const model = data.result;
    console.log(model)
const handledelete=()=>{
 fetch(`http://localhost:3000/challange/${model._id}`, {
              method: "DELETE",
                    headers: {
                       "Content-Type": "application/json",
                   },
                       
                     })
                 .then((res) => res.json())
                    .then((data) => {
                       console.log("Success:", data);
                    })
                        .catch((error) => {
                       console.error("Error:", error);
         });
}

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <img src={model?.imageUrl} alt="Model"   className="h-56 w-full object-cover transition-transform
           duration-500 group-hover:scale-105"
                   />

                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {model.title}

                        <div className="badge h-10 badge-secondary">  <h1>{model.category}</h1></div>
                    </h2>
                    <p>{model.description}</p>
                    <p>{model.participants}</p>
                    <p>{model.impactMetric}</p>
                    <p>{model.startDate}</p>
                    <p>{model.endtDate}</p>
                    <div className="card-actions justify-end">
                        <p>{model.duration}</p>
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                    <Link to={`/update/${model._id}`} type='submit'
                     className='btn'>update </Link>
                     <button onClick={handledelete} className='btn'>Delete </button>
                </div>

            </div>
        </div>
    );
};

export default Details;