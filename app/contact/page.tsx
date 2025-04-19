'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../../components/ui/AnimatedSection';
import { FixedRichTextEditor } from '../../components/ui/FixedRichTextEditor';
import { ProtectedEmail } from '../../components/ui/ProtectedEmail';
import { FiLinkedin, FiMail } from 'react-icons/fi';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);



  // Use i18n for translations
  const { t } = useTranslation('contact');

  // Only run on client side
  useEffect(() => {
    setMounted(true);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to track if the HTML editor has been modified
  const [editorTouched, setEditorTouched] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle rich text editor changes
  const handleEditorChange = (value: string) => {
    // Only update if the value actually changed to prevent unnecessary re-renders
    if (formData.message !== value) {
      setFormData(prev => ({ ...prev, message: value }));
      if (!editorTouched) setEditorTouched(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the message is empty (Quill editor returns <p><br></p> when empty)
    if (formData.message === '' || formData.message === '<p><br></p>') {
      setEditorTouched(true);
      return;
    }

    setFormStatus('submitting');

    try {
      // Simulate form submission for development
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In production, Netlify will handle the form submission automatically
      // because we've added the data-netlify="true" attribute to the form

      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setEditorTouched(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  // Don't render anything until the component is mounted on the client
  if (!mounted) {
    return <div className="flex flex-col gap-16 min-h-screen"><div className="animate-pulse h-screen w-full bg-gray-100 dark:bg-gray-800 rounded-lg"></div></div>;
  }

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">{t('title')}</h1>
            <p className="text-xl text-[#111827]/80 dark:text-[#f9fafb]/80 mb-8">
              {t('subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <AnimatedSection className="lg:w-2/3" delay={0.1}>
              <div className="bg-white dark:bg-gray-800/30 rounded-lg p-8 shadow-md border border-[#e5e7eb] dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">{t('form.reachOut')}</h2>

                {formStatus === 'success' ? (
                  <div className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 p-4 rounded-lg mb-6 border border-green-200 dark:border-green-800">
                    <p className="font-medium">{t('form.successTitle')}</p>
                    <p>{t('form.successMessage')}</p>
                  </div>
                ) : formStatus === 'error' ? (
                  <div className="bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 p-4 rounded-lg mb-6 border border-red-200 dark:border-red-800">
                    <p className="font-medium">{t('form.errorTitle')}</p>
                    <p>{t('form.errorMessage')}</p>
                  </div>
                ) : null}

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  {/* Hidden fields for Netlify form handling */}
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="message-format" value="html" />
                  <div hidden>
                    <input name="bot-field" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-[#111827] dark:text-[#f9fafb] mb-2">
                      {t('name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-[#111827] dark:text-[#f9fafb] border border-[#e5e7eb] dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4f46e5] dark:focus:ring-[#14b8a6]"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-[#111827] dark:text-[#f9fafb] mb-2">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-[#111827] dark:text-[#f9fafb] border border-[#e5e7eb] dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4f46e5] dark:focus:ring-[#14b8a6]"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-[#111827] dark:text-[#f9fafb] mb-2">
                      {t('message')}
                    </label>
                    {/* Key prop forces re-render when form is reset */}
                    <FixedRichTextEditor
                      key={`editor-${formStatus === 'success' ? 'reset' : 'active'}`}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleEditorChange}
                      required
                      placeholder={t('messagePlaceholder') || 'Write your message here...'}
                    />
                    {editorTouched && (formData.message === '<p><br></p>' || formData.message === '') && (
                      <p className="text-red-500 text-sm mt-1">{t('messageRequired') || 'Please enter a message'}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn btn-lg w-full bg-[#4f46e5] text-[#f9fafb] border-2 border-[#4f46e5] hover:bg-[#14b8a6] hover:border-[#14b8a6] hover:text-[#f9fafb] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      t('send')
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection className="lg:w-1/3" delay={0.2}>
              <div className="bg-white dark:bg-gray-800/30 rounded-lg p-8 shadow-md border border-[#e5e7eb] dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">{t('contactInfo')}</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <FiMail className="text-[#4f46e5] dark:text-[#14b8a6] mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-bold mb-1 text-[#111827] dark:text-[#f9fafb]">{t('email')}</h3>
                      <ProtectedEmail
                        username="contact"
                        domain="jukiho.com"
                        className="text-[#111827]/80 dark:text-[#f9fafb]/80"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold mb-4 text-[#111827] dark:text-[#f9fafb]">{t('connectWithMe')}</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/juraj-kicko-horbal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#4f46e5] dark:bg-gray-700/50 hover:bg-[#14b8a6] dark:hover:bg-[#14b8a6]/50 text-[#f9fafb] p-3 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


    </div>
  );
}
