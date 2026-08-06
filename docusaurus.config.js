const config = {
  title: 'UvA AI Chat Manual',
  tagline: 'User manual for UvA AI Chat',
  favicon: 'img/favicon.ico',

  url: 'https://ai-tlc.github.io',
  baseUrl: '/',

  scripts: [
    {
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      defer: true,
      'data-cf-beacon': '{"token": "394d337c4f624dc1a2a8330c07a228fe"}',
    },
  ],

  stylesheets: [
    {
      // material symbols outlined, subset to the icons in src/data/icon-catalog.js
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=account_circle,add,add_photo_alternate,attach_file,book_2,bookmark,chat,chat_add_on,domino_mask,edit_document,extension,folder_open,group,image,info,language,left_panel_close,logout,more_vert,neurology,right_panel_close,school,tune&display=block',
      type: 'text/css',
    },
  ],

  organizationName: 'ai-tlc',
  projectName: 'ai-tlc.github.io',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      nl: {
        label: 'Nederlands',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/',
            to: '/before-you-start',
          },
        ],
      },
    ],
    require.resolve('./plugins/headings-extractor'),
  ],

  themeConfig: {
    navbar: {
      title: 'UvA AI Chat Manual',
      logo: {
        alt: 'UvA AI Chat Logo',
        src: 'img/logo.png',
        href: '/before-you-start',
        style: {
          height: '32px',
          marginRight: '12px',
        },
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `UvA AI Chat Manual   |   <a href="https://tlc.uva.nl/en/article-category/teaching-and-ai/?faculty=55" target="_blank" rel="noopener noreferrer">tlc.uva.nl/ai</a>`,
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;
