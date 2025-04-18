import { redirect } from 'next/navigation';
import ProjectsPage from '../../projects/page';
import { isValidLanguage } from '../../../lib/i18n-config';

// Lokalizovaná stránka Projects
export default async function LocalizedProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  // Získaj parameter jazyka
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  // Kontrola, či je jazyk platný
  if (!isValidLanguage(lang)) {
    redirect('/projects');
  }

  // Použitie rovnakej stránky, ale s jazykovým parametrom
  return <ProjectsPage />;
}
