import { redirect } from 'next/navigation';
import ProjectDetailPage from '../../../projects/[id]/page';
import { isValidLanguage } from '../../../../lib/i18n-config';

// Lokalizovaná stránka detailu projektu
export default async function LocalizedProjectDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  // Získaj parametre
  const resolvedParams = await params;
  const { lang, id } = resolvedParams;

  // Kontrola, či je jazyk platný
  if (!isValidLanguage(lang)) {
    redirect(`/projects/${id}`);
  }

  // Použitie rovnakej stránky, ale s jazykovým parametrom
  return <ProjectDetailPage />;
}
