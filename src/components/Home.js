import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {

    const contacts = useSelector(state => state);

    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        toast.success('Contact deleted successfully!');
    }


    // jsx returning for our home page 
    return (
        <div className='container '>
            <div className='row'>
                <div className='col-md-12 my-5 text-center'>
                    {/* add contact button for adding new contact */}
                    <Link to='/add' className='btn btn-lg btn-primary'>Add New Contact</Link>
                </div>
                <div className='col-md-10 mx-auto'>
                    <table className='table table-dark table-striped table-hover border border-info'>
                        <thead className='text-danger bg-light text-center'>
                            <tr>
                                <th scope='col'>Sr.No.</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Email-Id</th>
                                <th scope='col'>Phone-Number</th>
                                <th scope='col'>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // displaying data which we have fetched from api
                                contacts.map((contact, id) => (
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td>
                                            {/* update and delete buttons with their respective icons */}
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/32/143/143437.png"
                                                alt="Edit Contact"
                                            />

                                            <Link to={`/edit/${contact.id}`} className='btn btn-small btn-outline-warning me-2'>Update</Link>
                                            <button type='button' onClick={() => deleteContact(contact.id)} className='btn btn-small btn-outline-danger'>Delete</button>

                                            <img
                                                src="https://cdn-icons-png.flaticon.com/32/6861/6861362.png"
                                                alt="Delete Contact"
                                            />

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}
// exporting our home component
export default Home;