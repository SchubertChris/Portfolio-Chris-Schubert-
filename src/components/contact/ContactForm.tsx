// src/components/contact/ContactForm.tsx
import React, { useState, useRef } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Echtzeit-Validierung bei Benutzereingabe
    if (errors[name as keyof FormErrors]) {
      validateField(name as keyof FormData, value);
    }
  };

  const validateField = (field: keyof FormData, value: string): boolean => {
    let errorMessage = '';
    let isValid = true;

    switch (field) {
      case 'name':
        if (!value.trim()) {
          errorMessage = 'Name ist erforderlich';
          isValid = false;
        } else if (value.trim().length < 2) {
          errorMessage = 'Name muss mindestens 2 Zeichen lang sein';
          isValid = false;
        }
        break;

      case 'email': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          errorMessage = 'E-Mail ist erforderlich';
          isValid = false;
        } else if (!emailRegex.test(value)) {
          errorMessage = 'Ungültige E-Mail-Adresse';
          isValid = false;
        }
        break;
      }

      case 'subject':
        if (!value.trim()) {
          errorMessage = 'Betreff ist erforderlich';
          isValid = false;
        } else if (value.trim().length < 3) {
          errorMessage = 'Betreff muss mindestens 3 Zeichen lang sein';
          isValid = false;
        }
        break;

      case 'message':
        if (!value.trim()) {
          errorMessage = 'Nachricht ist erforderlich';
          isValid = false;
        } else if (value.trim().length < 10) {
          errorMessage = 'Nachricht muss mindestens 10 Zeichen lang sein';
          isValid = false;
        }
        break;
    }

    setErrors(prev => ({ ...prev, [field]: errorMessage }));
    return isValid;
  };

  const validateForm = (): boolean => {
    const fields = ['name', 'email', 'subject', 'message'] as const;
    let isValid = true;

    const newErrors: FormErrors = {};

    fields.forEach(field => {
      const fieldIsValid = validateField(field, formData[field]);
      if (!fieldIsValid) {
        isValid = false;
        newErrors[field] = errors[field] || `${field} ist ungültig`;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Zu den Fehlern scrollen
      const firstErrorField = document.querySelector('.error-message');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      // EmailJS-Konfiguration - mit Ihren eigenen Daten ersetzen
      const serviceID = 'YOUR_EMAILJS_SERVICE_ID'; // z.B. 'gmail'
      const templateID = 'YOUR_EMAILJS_TEMPLATE_ID'; // z.B. 'contact_form'
      const userID = 'YOUR_EMAILJS_USER_ID'; // Ihr öffentlicher Schlüssel

      // Hier wird die E-Mail an Ihre Adresse gesendet
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: userID,
          template_params: {
            to_email: 'schubert_chris@rocketmail.com', // Ihre E-Mail-Adresse
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Ihre Nachricht wurde erfolgreich gesendet! Ich werde mich so schnell wie möglich bei Ihnen melden.');

        // Formular zurücksetzen
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Zu Erfolgsmeldung scrollen
        setTimeout(() => {
          const successMessage = document.querySelector('.success-message');
          if (successMessage) {
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      } else {
        throw new Error('Fehler beim Senden der E-Mail');
      }
    } catch (error) {
      console.error('Fehler beim Senden der Nachricht:', error);
      setSubmitStatus('error');
      setSubmitMessage('Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal oder kontaktieren Sie mich direkt per E-Mail.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Alternative direkte E-Mail-Option
  const handleDirectEmail = () => {
    const subject = encodeURIComponent('Kontaktanfrage von der Portfolio-Website');
    const body = encodeURIComponent('Hallo,\n\nIch möchte Sie kontaktieren wegen...\n\nMit freundlichen Grüßen,\n[Ihr Name]');
    window.location.href = `mailto:schubert_chris@rocketmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-form-section">
      <div className="section-container">
        <div className="title-wrapper">
          <h2 className="section-title" data-reveal="up">Schreiben Sie mir</h2>
        </div>

        <div className="contact-form-container">
          <div className="form-card" data-reveal="up">
            <p className="form-intro">Füllen Sie das Formular aus, um mich bezüglich Ihres Projekts zu kontaktieren. Ich werde mich so schnell wie möglich bei Ihnen melden.</p>

            {submitStatus === 'success' && (
              <div className="success-message">
                <p>{submitMessage}</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="error-message-global">
                <p>{submitMessage}</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={(e) => validateField('name', e.target.value)}
                  className={errors.name ? 'error' : ''}
                  placeholder="Ihr Name"
                  disabled={isSubmitting}
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="email">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={(e) => validateField('email', e.target.value)}
                  className={errors.email ? 'error' : ''}
                  placeholder="Ihre E-Mail-Adresse"
                  disabled={isSubmitting}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Betreff</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={(e) => validateField('subject', e.target.value)}
                  className={errors.subject ? 'error' : ''}
                  placeholder="Betreff Ihrer Nachricht"
                  disabled={isSubmitting}
                />
                {errors.subject && <div className="error-message">{errors.subject}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={(e) => validateField('message', e.target.value)}
                  className={errors.message ? 'error' : ''}
                  placeholder="Ihre Nachricht"
                  rows={6}
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && <div className="error-message">{errors.message}</div>}
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>

                <div className="alternative-contact">
                  <span>Oder</span>
                  <button
                    type="button"
                    className="direct-email-button"
                    onClick={handleDirectEmail}
                  >
                    Direkter E-Mail-Client
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="contact-image" data-reveal="right">
            <div className="image-container">
              <img src="/contact-image.jpg" alt="Kontakt" />
              <div className="neon-border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;