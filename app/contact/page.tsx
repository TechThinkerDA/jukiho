'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../../components/ui/AnimatedSection';
import { FixedRichTextEditor } from '../../components/ui/FixedRichTextEditor';
import { ProtectedEmail } from '../../components/ui/ProtectedEmail';
import { FiLinkedin, FiMail } from 'react-icons/fi';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation('contact');
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [editorTouched, setEditorTouched] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (value: string) => {
    if (formData.message !== value) {
      setFormData(prev => ({ ...prev, message: value }));
      if (!editorTouched) setEditorTouched(true);
    }
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.message === '' || formData.message === '<p><br></p>') {
      setEditorTouched(true);
      return;
    }

    setFormStatus('submitting');

    try {
      // Submit to Netlify
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          "message-format": "html",
          ...formData
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setEditorTouched(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

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

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="relative"
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

                  <div className="space-y-4">
                    {formStatus !== 'success' && (
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="btn btn-lg w-full bg-[#4f46e5] text-[#f9fafb] border-2 border-[#4f46e5] hover:bg-[#14b8a6] hover:border-[#14b8a6] hover:text-[#f9fafb] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {formStatus === 'submitting' ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {t('sending')}
                          </span>
                        ) : (
                          t('send')
                        )}
                      </button>
                    )}

                    {/* Form Status Messages */}
                    {formStatus === 'success' && (
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                        <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="font-medium">{t('form.successTitle')}</p>
                          <p className="text-sm text-green-600/80 dark:text-green-400/80">{t('form.successMessage')}</p>
                        </div>
                      </div>
                    )}

                    {formStatus === 'error' && (
                      <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                        <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="font-medium">{t('form.errorTitle')}</p>
                          <p className="text-sm text-red-600/80 dark:text-red-400/80">{t('form.errorMessage')}</p>
                        </div>
                      </div>
                    )}
                  </div>
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
