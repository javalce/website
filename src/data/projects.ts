import type { Project } from '@/types';

export const projects: Project[] = [
  {
    name: '@javalce/eslint-config',
    description:
      'Configuración de ESLint para proyectos de JavaScript, TypeScript, React, Next.js, etc. con mis criterios de desarrollo predeterminados.',
    image: '/projects/eslint-config.webp',
    link: 'https://www.npmjs.com/package/@javalce/eslint-config',
    github: 'https://github.com/javalce/eslint-config',
  },
  {
    name: '@javalce/prettier-config',
    description:
      'Configuración de Prettier para proyectos de JavaScript/TypeScript con mis reglas de estilo predeterminadas.',
    image: '/projects/prettier-config.webp',
    link: 'https://www.npmjs.com/package/@javalce/prettier-config',
    github: 'https://github.com/javalce/prettier-config',
  },
  {
    name: '@javalce/config',
    description:
      'CLI for bootstrapping ESLint and Prettier configurations using my custom presets.',
    image: '/projects/config-cli.webp',
    github: 'https://github.com/javalce/config-cli',
    link: 'https://www.npmjs.com/package/@javalce/config',
  },
];
