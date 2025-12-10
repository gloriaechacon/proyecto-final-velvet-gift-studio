export const Contact = () => {
    return (
        <section className="item-list-container">
            <h1>Contact Us</h1>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', padding: '2rem' }}>
                <p style={{ marginBottom: '1rem', lineHeight: '1.8', color: '#666' }}>
                    We'd love to hear from you! Get in touch with us through any of the following ways:
                </p>
                <div style={{ marginTop: '2rem' }}>
                    <h2 style={{ marginBottom: '1rem', color: '#333' }}>Contact Information</h2>
                    <p style={{ marginBottom: '0.5rem', lineHeight: '1.8', color: '#666' }}>
                        <strong>Email:</strong> info@velvetgiftstudio.com
                    </p>
                    <p style={{ marginBottom: '0.5rem', lineHeight: '1.8', color: '#666' }}>
                        <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                    <p style={{ marginBottom: '0.5rem', lineHeight: '1.8', color: '#666' }}>
                        <strong>Address:</strong> 123 Gift Street, City, State 12345
                    </p>
                    <p style={{ marginTop: '2rem', lineHeight: '1.8', color: '#666' }}>
                        Our customer service team is available Monday through Friday, 9 AM to 6 PM EST.
                    </p>
                </div>
            </div>
        </section>
    );
};

