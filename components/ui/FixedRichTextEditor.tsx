"use client";

import React, { useEffect, useRef, useState } from 'react';

interface FixedRichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
  name?: string;
  required?: boolean;
}

export const FixedRichTextEditor: React.FC<FixedRichTextEditorProps> = ({
  value,
  onChange,
  placeholder = 'Write something...',
  id,
  name,
  required = false,
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const isInitialRender = useRef(true);

  // Track active formatting states
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false
  });

  // Initialize the editor with the initial value
  useEffect(() => {
    if (editorRef.current && isInitialRender.current) {
      editorRef.current.innerHTML = value;
      isInitialRender.current = false;
    }
  }, [value]);

  // Handle toolbar button clicks
  const handleCommand = (command: string, value: string | null = null) => {
    // Focus the editor first to ensure commands work properly
    if (editorRef.current) {
      editorRef.current.focus();
    }

    // Execute the command
    document.execCommand(command, false, value);

    // Update the value and maintain focus
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
      editorRef.current.focus();
    }
  };

  // Handle input changes
  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
      updateActiveFormats();
    }
  };

  // Update active formatting states
  const updateActiveFormats = () => {
    setActiveFormats({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline')
    });
  };

  // Add selection change listener to update active formats when cursor moves
  useEffect(() => {
    const handleSelectionChange = () => {
      if (document.activeElement === editorRef.current) {
        updateActiveFormats();
      }
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, []);

  return (
    <div className="fixed-rich-text-editor">
      <div className="toolbar flex flex-wrap gap-2 p-2 bg-[#f9fafb] dark:bg-gray-700 border border-[#e5e7eb] dark:border-gray-600 rounded-t-lg">
        <button
          type="button"
          onClick={() => handleCommand('bold')}
          className={`p-1 rounded hover:bg-[#e5e7eb] dark:hover:bg-gray-600 ${activeFormats.bold ? 'bg-[#e5e7eb] dark:bg-gray-600 ring-2 ring-[#4f46e5] dark:ring-[#14b8a6]' : ''}`}
          title="Bold"
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          onClick={() => handleCommand('italic')}
          className={`p-1 rounded hover:bg-[#e5e7eb] dark:hover:bg-gray-600 ${activeFormats.italic ? 'bg-[#e5e7eb] dark:bg-gray-600 ring-2 ring-[#4f46e5] dark:ring-[#14b8a6]' : ''}`}
          title="Italic"
        >
          <em>I</em>
        </button>
        <button
          type="button"
          onClick={() => handleCommand('underline')}
          className={`p-1 rounded hover:bg-[#e5e7eb] dark:hover:bg-gray-600 ${activeFormats.underline ? 'bg-[#e5e7eb] dark:bg-gray-600 ring-2 ring-[#4f46e5] dark:ring-[#14b8a6]' : ''}`}
          title="Underline"
        >
          <u>U</u>
        </button>
        <div className="w-px h-6 bg-[#e5e7eb] dark:bg-gray-600 mx-1"></div>
        <button
          type="button"
          onClick={() => handleCommand('createLink', prompt('Enter link URL', 'https://'))}
          className="p-1 rounded hover:bg-[#e5e7eb] dark:hover:bg-gray-600"
          title="Insert Link"
        >
          🔗 Link
        </button>
      </div>

      <div
        ref={editorRef}
        id={id}
        contentEditable
        onInput={handleInput}
        className="min-h-[200px] p-4 bg-white dark:bg-gray-800 text-[#111827] dark:text-[#f9fafb] border border-t-0 border-[#e5e7eb] dark:border-gray-600 rounded-b-lg focus:outline-none"
        placeholder={placeholder}

        onBlur={(e) => {
          // Add placeholder behavior
          if (e.currentTarget.innerHTML === '') {
            e.currentTarget.innerHTML = '<p><br></p>';
            onChange('<p><br></p>');
          }
        }}
        onFocus={() => {
          // Update active formats when editor gets focus
          updateActiveFormats();
        }}
      />

      {/* Hidden input for form submission */}
      {name && (
        <input
          type="hidden"
          name={name}
          value={value}
          required={required}
        />
      )}
    </div>
  );
};
