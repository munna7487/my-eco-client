import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { Authcontex } from '../Provider/Authprovider';

const Update = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const { user } = useContext(Authcontex);

    if (!data || !data.result) {
        return <div className="text-center text-red-600 text-2xl mt-20">No Data Found!</div>;
    }

    const model = data.result;

    const handlesubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            alert("please Login ");
            return;
        }

        const token = await user.getIdToken();
        const formdata = {
            title: e.target.title.value,
            category: e.target.category.value,
            participants: model.participants || 0,
            duration: e.target.duration.value,
            description: e.target.description.value,
            imageUrl: e.target.image.value,
            target: e.target.target.value,
            impactMetric: e.target.impactMetric.value,
            startDate: e.target.startDate?.value || model.startDate,
            endDate: e.target.endDate?.value || model.endDate,
        };

        fetch(`https://eco-client-server.vercel.app/challange/${model._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(formdata),
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert("Update sucessfully");
                    navigate(`/allmodels/${model._id}`);
                } else {
                    alert("Updated faild");
                }
            })
            .catch(err => {
                console.error(err);
                alert("error");
            });
    };

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl p-10 my-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Update Challenge</h2>
            <form onSubmit={handlesubmit} className="space-y-6">

                <label className="label">Title</label>
                <input type="text" name="title" defaultValue={model.title} className="input input-bordered w-full" required />
                <label className="label">category</label>
                <input type="text" name="category" defaultValue={model.category} className="input input-bordered w-full" required />
                <label className="label">target</label>
                <input type="text" name="target" defaultValue={model.target} className="input input-bordered w-full" />
                <label className="label">impactMetric</label>
                <input type="text" name="impactMetric" defaultValue={model.impactMetric} className="input input-bordered w-full" />
                <label className="label">description</label>
                <textarea name="description" defaultValue={model.description} className="textarea textarea-bordered w-full" rows="4"></textarea>
                <label className="label">duration</label>
                <input type="text" name="duration" defaultValue={model.duration} className="input input-bordered w-full" />
                <label className="label">participants</label>
                <input type="number" name="participants" defaultValue={model.participants} className="input input-bordered w-full" />
                <label className="label">imageUrl</label>
                <input type="url" name="image" defaultValue={model.imageUrl} className="input input-bordered w-full" />

                <button type="submit" className="btn btn-success btn-lg w-full">
                    Update Challenge
                </button>
            </form>
        </div>
    );
};

export default Update;