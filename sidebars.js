// Example Docusaurus sidebar that shows Parts and exposes subsection anchors in the TOC.
module.exports = {
  docs: [
    {
      type: 'category',
      label: 'English',
      collapsed: false,
      items: [
        'en/01-before-you-start',
        'en/02-core-features',
        'en/03-personalization-collaboration',
        'en/04-advanced-usage',
        'en/05-faq',
        'en/06-glossary',
      ],
    },
    {
      type: 'category',
      label: 'Nederlands',
      collapsed: false,
      items: [
        'nl/01-voordat-je-begint',
        'nl/02-de-kernfunctionaliteiten',
        'nl/03-personalisatie-en-samenwerking',
        'nl/04-geavanceerd-gebruik',
        'nl/05-veelgestelde-vragen',
        'nl/06-begrippenlijst',
      ],
    },
  ],
};