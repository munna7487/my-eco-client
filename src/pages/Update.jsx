import React from 'react';
import { useLoaderData } from 'react-router';

const Update = () => {
    const data = useLoaderData();
    
    // Safety check - jodi data na thake
    if (!data || !data.result) {
        return <div>Loading or No Data Found...</div>;
    }

    const model = data.result;
    console.log(model);

    const handlesubmit = (e) => {
        e.preventDefault();

        const formdata = {
            title: e.target.title.value,
            category: e.target.category.value,
            participants: 0, // reset or keep previous? tumi 0 diccho
            duration: e.target.duration.value,
            description: e.target.description.value,
            imageUrl: e.target.image.value,
            target: e.target.target.value,
            impactMetric: e.target.impactMetric.value,
            // user na thakle email pathabe na → optional
            ...(model.createdBy && { createdBy: model.createdBy }) // puran createdBy rakho
        };

        fetch(`http://localhost:3000/challange/${model._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("Success:", data);
            if (data.success) {
                alert("Updated successfully!");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 my-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Update Challenge</h2>
            <form onSubmit={handlesubmit} className="space-y-4">

                <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input type="text" name="title" defaultValue={model.title} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <input type="text" name="category" defaultValue={model.category} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Target</label>
                    <input type="text" name="target" defaultValue={model.target} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Impact Metric</label>
                    <input type="text" name="impactMetric" defaultValue={model.impactMetric} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Short Description</label>
                    <textarea name="description" rows="3" defaultValue={model.description} className="textarea textarea-bordered w-full"></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Duration</label>
                    <input type="text" name="duration" defaultValue={model.duration} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Participants</label>
                    <input type="number" name="participants" defaultValue={model.participants} className="input input-bordered w-full" readOnly />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Image URL</label>
                    <input type="url" name="image" defaultValue={model.imageUrl} className="input input-bordered w-full" />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                    Update Challenge
                </button>
            </form>
        </div>
    );
};

export default Update;