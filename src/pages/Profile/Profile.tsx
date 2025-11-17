import React, { useState } from 'react';
import './Profile.css';

const initial = {
  fullName: 'Amiri',
  nickName: '',
  timeZone: 'GMT+5:30',
  gender: 'Male',
  country: 'India',
  language: 'Tamil',
  email: 'Amiri@gmail.com',
  phoneNo: '',
};

const Profile: React.FC = () => {
  const [form, setForm] = useState(initial);
  const [editing, setEditing] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  return (
    <div className="profile-page">
      <header className="profile-header">
        <div className="profile-meta">
          <div className="profile-avatar">
            <img src="/images/avatar.jpg" alt="avatar" />
          </div>
          <div className="profile-info">
            <h3>Amiri</h3>
            <p className="profile-email">Amiri@gmail.com</p>
          </div>
          <div className="profile-actions">
            <button className="btn primary" onClick={() => setEditing((v) => !v)}>
              {editing ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </header>

      <main className="profile-content">
        <form className="profile-form" onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <label>Full Name</label>
            <input name="fullName" value={form.fullName} onChange={onChange} disabled={!editing} placeholder="Your Full Name" />
          </div>

          <div className="row">
            <label>Nick Name</label>
            <input name="nickName" value={form.nickName} onChange={onChange} disabled={!editing} placeholder="Your Nick Name" />
          </div>

          <div className="row">
            <label>Gender</label>
            <select name="gender" value={form.gender} onChange={onChange} disabled={!editing}>
              <option value="">Select</option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </div>

          <div className="row">
            <label>Country</label>
            <input name="country" value={form.country} onChange={onChange} disabled={!editing} placeholder="Country" />
          </div>

          <div className="row">
            <label>Language</label>
            <input name="language" value={form.language} onChange={onChange} disabled={!editing} placeholder="Language" />
          </div>

          <div className="row">
            <label>Time Zone</label>
            <input name="timeZone" value={form.timeZone} onChange={onChange} disabled={!editing} placeholder="Time Zone" />
          </div>

          <div className="row">
            <label>Email Address</label>
            <input name="email" value={form.email} onChange={onChange} disabled={!editing} placeholder="Email Address" />
          </div>

          <div className="row">
            <label>Phone No</label>
            <input name="phoneNo" value={form.phoneNo} onChange={onChange} disabled={!editing} placeholder="Phone No" />
          </div>

          {/* <section className="email-section">
            <h4>My email Address</h4>
            <div className="email-item">
              <span className="email-dot" />
              <div className="email-text">
                <div className="email-address">{initial.email}</div>
                <div className="email-when">1 month ago</div>
              </div>
            </div>
            <button className="btn ghost">+ Add Email Address</button>
          </section> */}
        </form>
      </main>
    </div>
  );
};

export default Profile;