import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';

// Component for updating existing feedback
function UpdateFeedback() {
    const { id } = useParams(); // Get the id parameter from the URL
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();

    // Fetch feedback data based on id when component mounts or id changes
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_ENDPOINT}/getFeedback/${id}`);
                setName(response.data.name);
                setEmail(response.data.email);
                setFeedback(response.data.feedback);
            } catch (error) {
                console.error('Error fetching feedback:', error);
            }
        };

        fetchData();
    }, [id]); // Dependency array ensures this effect runs when id changes

    // Handle form submission to update feedback
    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            // Send PUT request to update feedback with current state values
            await axios.put(`${process.env.REACT_APP_SERVER_ENDPOINT}/updatefeedback/${id}`, { name, email, feedback });
            navigate('/streamdetail');
            // window.location.reload(); // Redirect to feedback list page after successful update
        } catch (error) {
            console.error('Error updating feedback:', error);
        }
    };

    return (
        <div className="min-h-screen bg-[#2A2B2F]"> {/* Apply bg-gray-900 and min-h-screen to cover the entire page */}
        <Header/>
            <h1 className='mb-3 text-3xl font-bold text-center text-orange-500'>Update Feedback</h1>
            <div className="container mx-auto">
                <div className="max-w-lg p-8 mx-auto rounded-lg shadow-md bg-neutral-800">
                    <h2 className="mb-4 text-2xl font-semibold text-center text-orange-700">Update Feedback Form</h2>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-zinc-400">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                readOnly
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-zinc-400">Email</label>
                            <input 
                                type="email" 
                                id="email"                                
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                readOnly
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="feedback" className="block text-sm font-medium text-zinc-400">Feedback</label>
                            <input 
                                type="text" 
                                id="feedback" 
                                placeholder="Enter Feedback" 
                                value={feedback} 
                                onChange={(e) => setFeedback(e.target.value)} 
                                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <button type="submit" className="px-4 py-2 text-orange-500 border border-orange-500 rounded hover:bg-orange-500 hover:text-white hover:border-range-600">Update</button>
                    </form>

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default UpdateFeedback;
