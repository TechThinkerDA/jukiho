import { redirect } from 'next/navigation';
import ProjectDetailPage from '../../../projects/[id]/page';
import { isValidLanguage } from '../../../../lib/i18n-config';

export default async function LocalizedProjectDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const resolvedParams = await params;
  const { lang, id } = resolvedParams;

  if (!isValidLanguage(lang)) {
    redirect(`/projects/${id}`);
  }

  return <ProjectDetailPage />;
}
