'use server';
import { Project } from '../../types';
import { getProjectsByLanguage } from '../../data/projects';
import { cookies } from 'next/headers';

const isNetlifyProduction = process.env.NETLIFY === 'true';

// Helper function to get the current language from cookies
const getCurrentLanguage = async (): Promise<string> => {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get('i18next');
  console.log('Current language from cookie:', langCookie?.value);
  return langCookie?.value || 'en';
};

export async function getProjectsAction(language?: string): Promise<Project[]> {
  try {
    // Use provided language or get from cookies
    const currentLanguage = language || await getCurrentLanguage();
    console.log('Using language for projects:', currentLanguage);

    if (isNetlifyProduction) {
      const { getStore } = await import('@netlify/blobs');
      const store = getStore({ name: 'projects', consistency: 'strong' });
      const data = await store.list();
      const projects: Project[] = [];

      for (const blob of data.blobs) {
        const project = await store.get(blob.key, { type: 'json' });
        if (project) {
          projects.push(project as Project);
        }
      }

      return projects;

      return getProjectsByLanguage(currentLanguage);
    } else {
      return getProjectsByLanguage(currentLanguage);
    }
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getProjectByIdAction(id: string, language?: string): Promise<Project | null> {
  try {
    // Use provided language or get from cookies
    const currentLanguage = language || await getCurrentLanguage();
    console.log('Using language for project detail:', currentLanguage);

    if (isNetlifyProduction) {
      const { getStore } = await import('@netlify/blobs');
      const store = getStore({ name: 'projects', consistency: 'strong' });
      const project = await store.get(id, { type: 'json' });
      return project as Project;

      const projects = getProjectsByLanguage(currentLanguage);
      return projects.find(project => project.id === id) || null;
    } else {
      const projects = getProjectsByLanguage(currentLanguage);
      return projects.find(project => project.id === id) || null;
    }
  } catch (error) {
    console.error(`Error fetching project with ID ${id}:`, error);
    return null;
  }
}

// This would typically be an admin function
export async function saveProjectAction(project: Project): Promise<boolean> {
  try {
    if (isNetlifyProduction) {
      const { getStore } = await import('@netlify/blobs');
      const store = getStore({ name: 'projects', consistency: 'strong' });
      await store.setJSON(project.id, project);
      console.log('Project would be saved in production:', project);
      return true;
    } else {
      console.log('Project would be saved:', project);
      return true;
    }
  } catch (error) {
    console.error('Error saving project:', error);
    return false;
  }
}

// Seed initial projects if none exist
export async function seedProjectsAction(): Promise<boolean> {
  try {
    if (!isNetlifyProduction) {
      return true;
    }

    const { getStore } = await import('@netlify/blobs');
    const store = getStore({ name: 'projects', consistency: 'strong' });
    const data = await store.list();

    // Only seed if no projects exist
    if (data.blobs.length === 0) {
      const language = await getCurrentLanguage();
      const projects = getProjectsByLanguage(language);
      for (const project of projects) {
        await store.setJSON(project.id, project);
      }
      return true;
    }

    return false;
  } catch (error) {
    console.error('Error seeding projects:', error);
    return false;
  }
}
