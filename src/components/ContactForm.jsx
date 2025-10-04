import { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { formValidation } from '../functions/formValidation';
import { Card } from '@mui/material';
import { sendContactViaEmailJS } from '../functions/sendContactViaEmailJS';


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => formValidation(formData, setErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async () => {
  if (!validateForm()) return;
  try {
    await sendContactViaEmailJS(formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  } catch (err) {
    setErrors((e) => ({ ...e, submit: err.message || "Failed to send." }));
  }
};

  const styles = {
    container: {
      minHeight: '100vh',
    //   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    card: {
      width: '100%',
      maxWidth: '600px',
    //   background: 'white',
      borderRadius: '16px',
    //   boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      overflow: 'hidden',
      border: '1px solid #e5e7eb'
    },
    header: {
      padding: '32px 32px 24px',
      textAlign: 'center',
    //   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    //   color: 'white'
    },
    title: {
      fontSize: '32px',
      fontWeight: '600',
      margin: '0 0 8px 0'
    },
    subtitle: {
      fontSize: '16px',
      margin: 0,
      opacity: 0.9
    },
    formContainer: {
      padding: '32px'
    },
    inputGroup: {
      marginBottom: '24px'
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
      fontWeight: '500',
    //   color: '#374151',
      marginBottom: '8px'
    },
    labelIcon: {
      marginRight: '8px'
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      fontSize: '16px',
    //   border: '2px solid #e5e7eb',
      borderRadius: '8px',
      outline: 'none',
      transition: 'all 0.2s',
      fontFamily: 'inherit',
      boxSizing: 'border-box'
    },
    inputFocus: {
      borderColor: '#667eea'
    },
    inputError: {
      borderColor: '#ef4444'
    },
    textarea: {
      width: '100%',
      padding: '12px 16px',
      fontSize: '16px',
    //   border: '2px solid #e5e7eb',
      borderRadius: '8px',
      outline: 'none',
      transition: 'all 0.2s',
      fontFamily: 'inherit',
      resize: 'vertical',
      minHeight: '120px',
      boxSizing: 'border-box'
    },
    errorText: {
      color: '#ef4444',
      fontSize: '14px',
      marginTop: '4px',
      marginLeft: '4px'
    },
    button: {
      width: '100%',
      padding: '14px 24px',
    //   fontSize: '16px',
    //   fontWeight: '600',
    //   color: 'white',
    //   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'all 0.2s',
    //   boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
    },
    successContainer: {
      textAlign: 'center',
      padding: '48px 32px'
    },
    successIcon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '64px',
      height: '64px',
      background: '#10b981',
      borderRadius: '50%',
      marginBottom: '16px'
    },
    successTitle: {
      fontSize: '24px',
      fontWeight: '600',
    //   color: '#1f2937',
      margin: '0 0 8px 0'
    },
    successText: {
      fontSize: '16px',
    //   color: '#6b7280',
      margin: 0
    }
  };

  const [focusedField, setFocusedField] = useState('');

  return (
    <Card variant="outlined" sx={{ boxShadow: 2, padding: 2, borderRadius: 2 }}>     
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Get In Touch</h1>
          <p style={styles.subtitle}>I'd love to hear from you. Send me a message!</p>
        </div>
        
        {submitted ? (
          <div style={styles.successContainer}>
            <div style={styles.successIcon}>
              <CheckCircle size={32} color="white" />
            </div>
            <h3 style={styles.successTitle}>Message Sent!</h3>
            <p style={styles.successText}>Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <div style={styles.formContainer}>
            <div style={styles.inputGroup}>
              <label htmlFor="name" style={styles.label}>
                <User size={16} style={styles.labelIcon} />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField('')}
                style={{
                  ...styles.input,
                  ...(focusedField === 'name' ? styles.inputFocus : {}),
                  ...(errors.name ? styles.inputError : {})
                }}
                placeholder="Your name"
              />
              {errors.name && <div style={styles.errorText}>{errors.name}</div>}
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>
                <Mail size={16} style={styles.labelIcon} />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
                style={{
                  ...styles.input,
                  ...(focusedField === 'email' ? styles.inputFocus : {}),
                  ...(errors.email ? styles.inputError : {})
                }}
                placeholder="your.email@example.com"
              />
              {errors.email && <div style={styles.errorText}>{errors.email}</div>}
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="subject" style={styles.label}>
                <MessageSquare size={16} style={styles.labelIcon} />
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField('')}
                style={{
                  ...styles.input,
                  ...(focusedField === 'subject' ? styles.inputFocus : {}),
                  ...(errors.subject ? styles.inputError : {})
                }}
                placeholder="What's this about?"
              />
              {errors.subject && <div style={styles.errorText}>{errors.subject}</div>}
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="message" style={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField('')}
                style={{
                  ...styles.textarea,
                  ...(focusedField === 'message' ? styles.inputFocus : {}),
                  ...(errors.message ? styles.inputError : {})
                }}
                placeholder="Your message here..."
              />
              {errors.message && <div style={styles.errorText}>{errors.message}</div>}
            </div>

            <button
              onClick={handleSubmit}
              style={styles.button}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
              }}
            >
              <Send size={20} />
              Send Message
            </button>
          </div>
        )}
      </div>
    </div>
    </Card>
  );
}