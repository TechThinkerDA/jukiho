import { redirect } from 'next/navigation';
import ProjectsPage from '../../projects/page';
import { isValidLanguage } from '../../../lib/i18n-config';

export default async function LocalizedProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  if (!isValidLanguage(lang)) {
    redirect('/projects');
  }

  return <ProjectsPage />;
}
