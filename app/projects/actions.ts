'use server';
import { Project } from '../../types';
import { projects as localProjects, getProjectsByLanguage } from '../../data/projects';
import { cookies } from 'next/headers';

// Funkcia na kontrolu, či sme v produkčnom prostredí Netlify
const isNetlifyProduction = process.env.NETLIFY === 'true';

// Ak sme v produkčnom prostredí Netlify, použijeme Netlify Blobs
// V opačnom prípade použijeme lokálne dáta
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
      // Toto by sa malo použiť len v produkčnom prostredí Netlify
      // const { getStore } = await import('@netlify/blobs');
      // const store = getStore({ name: 'projects', consistency: 'strong' });
      // const data = await store.list();
      // const projects: Project[] = [];
      //
      // for (const blob of data.blobs) {
      //   const project = await store.get(blob.key, { type: 'json' });
      //   if (project) {
      //     projects.push(project as Project);
      //   }
      // }
      //
      // return projects;

      // Zatiaľ vrátime lokálne dáta aj v produkcii podľa jazyka
      return getProjectsByLanguage(currentLanguage);
    } else {
      // V lokálnom prostredí vrátime lokálne dáta podľa jazyka
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
      // Toto by sa malo použiť len v produkčnom prostredí Netlify
      // const { getStore } = await import('@netlify/blobs');
      // const store = getStore({ name: 'projects', consistency: 'strong' });
      // const project = await store.get(id, { type: 'json' });
      // return project as Project;

      // Zatiaľ vrátime lokálne dáta aj v produkcii podľa jazyka
      const projects = getProjectsByLanguage(currentLanguage);
      return projects.find(project => project.id === id) || null;
    } else {
      // V lokálnom prostredí vrátime lokálne dáta podľa jazyka
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
      // Toto by sa malo použiť len v produkčnom prostredí Netlify
      // const { getStore } = await import('@netlify/blobs');
      // const store = getStore({ name: 'projects', consistency: 'strong' });
      // await store.setJSON(project.id, project);
      console.log('Project would be saved in production:', project);
      return true;
    } else {
      // V lokálnom prostredí len logujeme
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
    // V lokálnom prostredí nič nerobíme, pretože používame lokálne dáta
    if (!isNetlifyProduction) {
      return true;
    }

    // Toto by sa malo použiť len v produkčnom prostredí Netlify
    // const { getStore } = await import('@netlify/blobs');
    // const store = getStore({ name: 'projects', consistency: 'strong' });
    // const data = await store.list();
    //
    // // Only seed if no projects exist
    // if (data.blobs.length === 0) {
    //   const language = getCurrentLanguage();
    //   const projects = getProjectsByLanguage(language);
    //   for (const project of projects) {
    //     await store.setJSON(project.id, project);
    //   }
    //   return true;
    // }

    return false;
  } catch (error) {
    console.error('Error seeding projects:', error);
    return false;
  }
}
