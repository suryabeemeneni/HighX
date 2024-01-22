import React, { useState } from 'react';

const AddService = () => {
    const [formData, setFormData] = useState({
        user: '',
        title: '',
        price: '',
        tags: '',
        description: '',
        userType: '',
        category: '',
        condition: '',
        state: '',
        city: '',
        locality: '',
        zipCode: '',
        lati: '',
        long: '',
        dateCreated: '',
        video: '',
        subCategoryType: '',
        subCategoryValue: '',
        viewsProduct: '',
        phoneNumber: '',
        planCategory: '',
        extraField: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add your form submission logic here
      };
    return (
        <>
            <form onSubmit={handleSubmit} className="form-container">
    <div className="form-group">
      <label htmlFor="user">User</label>
      <input
        type="text"
        id="user"
        name="user"
        value={formData.user}
        onChange={handleChange}
        placeholder="User"
        className="form-control"
      />
    </div>
    {/* Repeat for other fields */}
    <button type="submit" className="submit-button">Submit</button>
  </form>
        </>
    );
};

export default AddService;