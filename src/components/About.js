import React from 'react';

export default function About() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5', padding: '20px' }}>
            <div style={{ maxWidth: '1000px', backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#333' }}>About iNotebook</h1>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
                    I Notebook is an intuitive and user-friendly online notes application designed to streamline your note-taking experience. Whether you're jotting down thoughts, organizing tasks, or storing important information, I Notebook provides a secure and efficient platform to manage all your notes.
                </p>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginTop: '20px', color: '#333' }}>Key Features</h2>
                <ul style={{ fontSize: '18px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '10px' }}>
                        <strong>Secure Note Storage:</strong> Your notes are safely stored in a robust database, ensuring that your valuable information is always protected and easily accessible.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <strong>User Authentication:</strong> I Notebook comes with built-in user authentication, offering a personalized and secure environment. Your notes are only accessible to you, providing peace of mind that your data is private and secure.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <strong>Easy-to-Use Interface:</strong> The app boasts a clean and intuitive interface, making it simple to create, edit, and organize your notes. Whether you're a student, professional, or casual user, I Notebook adapts to your needs with ease.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <strong>Seamless Accessibility:</strong> Access your notes from anywhere, at any time. I Notebook is designed to be responsive and works seamlessly across different devices, ensuring your notes are always within reach.
                    </li>
                </ul>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginTop: '20px', color: '#333' }}>Why Choose I Notebook?</h2>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
                    I Notebook is more than just a note-taking app. It's a comprehensive solution for managing your thoughts and ideas efficiently. With a strong focus on security and user experience, I Notebook is the perfect companion for anyone looking to keep their notes organized and accessible.
                </p>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
                    Start using I Notebook today and experience the convenience and security of having all your notes in one place.
                </p>
            </div>
        </div>
    );
}
