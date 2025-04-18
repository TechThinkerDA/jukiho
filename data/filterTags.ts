/**
 * This file defines the technology tags that should appear in the project filter.
 * Tags will be displayed in the order they are defined here.
 * Each tag should match exactly how it appears in the project data.
 */

export interface FilterTag {
  tag: string;
  displayName?: string; // Optional display name if different from tag
  priority: number; // Higher priority tags will appear first
}

export const filterTags: FilterTag[] = [
  { tag: 'Python', priority: 100 },
  { tag: 'Java', priority: 90 },
  { tag: 'C#', priority: 80 },
  { tag: '.NET', displayName: '.NET', priority: 75 },
  { tag: 'React', priority: 70 },
  { tag: 'R3 Corda', displayName: 'Corda', priority: 60 },
  { tag: 'Blockchain', priority: 50 },
  { tag: 'AI', priority: 40 },
  { tag: 'Docker', priority: 30 },
  { tag: 'PostgreSQL', priority: 20 },
  { tag: 'MySQL', priority: 10 },
];

// Helper function to check if a tag is in the priority list
export function isPriorityTag(tag: string): boolean {
  return filterTags.some(filterTag => filterTag.tag === tag);
}

// Helper function to get display name for a tag
export function getTagDisplayName(tag: string): string {
  const filterTag = filterTags.find(filterTag => filterTag.tag === tag);
  return filterTag?.displayName || tag;
}
