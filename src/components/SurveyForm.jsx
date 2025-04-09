import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SurveyForm.css'; 

function Survey() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    message: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, rating, message } = formData;

    if (!name || !email || !rating || !message) {
      alert('Fill out everything before launching.');
      return;
    }

    if (rating < 1 || rating > 5) {
      alert('Rating must be between 1 and 5.');
      return;
    }

    alert('Your response has been submitted successfully.');
    navigate('/');
  };

  return (
    <div className="survey-wrapper">
      <h1 className="survey-heading">Please rate our services.</h1>

      <form className="survey-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name" className="field-label">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="field-input"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email" className="field-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="field-input"
            placeholder="you@domain.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

      <div className="form-field">
        <label htmlFor="rating" className="field-label">Rating (1-5)</label>
        <input
          id="rating"
          name="rating"
          type="number"
          className="field-input"
          placeholder="Rate your experience from 1-5"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          required
        />
      </div>

        <div className="form-field">
          <label htmlFor="message" className="field-label">What do you think ?</label>
          <textarea
            id="message"
            name="message"
            className="field-textarea"
            placeholder="Share your thoughts..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default Survey;
