// decap cms editor component for inline manual icons.
// inserts / parses: <Icon name="attach_file" color="black" size={20} />
// rendered on the site by src/components/Icon (registered globally for mdx).
import {
  MATERIAL_ICONS,
  LUCIDE_ICONS,
  DEFAULT_COLORS,
  SIZES,
} from './icon-catalog.js';

const MATERIAL_NAMES = new Set(MATERIAL_ICONS.map((i) => i.name));

// "ChevronLeft" -> "Chevron left"
function humanize(name) {
  const spaced = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  return spaced.charAt(0) + spaced.slice(1).toLowerCase();
}

// "ChevronLeft" -> "chevron-left" (lucide-static file names)
function kebab(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Za-z])([0-9])/g, '$1-$2')
    .toLowerCase();
}

function toOption(icon, family) {
  const base = icon.label || humanize(icon.name);
  return {
    label: (icon.pinned ? '\u2605 ' : '') + base + '  \u00b7 ' + icon.name,
    value: icon.name,
    pinned: !!icon.pinned,
    family,
  };
}

const allOptions = [
  ...MATERIAL_ICONS.map((i) => toOption(i, 'material')),
  ...LUCIDE_ICONS.map((i) => toOption(i, 'lucide')),
];

// most used first, then the rest alphabetically
const nameOptions = [
  ...allOptions.filter((o) => o.pinned),
  ...allOptions
    .filter((o) => !o.pinned)
    .sort((a, b) => a.label.localeCompare(b.label)),
].map((o) => ({ label: o.label, value: o.value }));

function resolveColor(data) {
  let color = data.color || 'black';
  if (color === 'custom') {
    color = (data.customColor || '').trim() || 'black';
  }
  return color;
}

function previewHtml(data) {
  const name = data.name || 'attach_file';
  const color = DEFAULT_COLORS[resolveColor(data)] || resolveColor(data);
  const size = SIZES[data.size || 'medium'] || 20;

  let glyph;
  if (MATERIAL_NAMES.has(name) || /^[a-z0-9_]+$/.test(name)) {
    glyph =
      '<span class="material-symbols-outlined" style="font-size:' +
      size +
      'px;color:' +
      color +
      ';vertical-align:text-bottom;line-height:1;">' +
      name +
      '</span>';
  } else {
    // lucide: static svg from unpkg used as a css mask so it takes the colour
    const url = 'https://unpkg.com/lucide-static@latest/icons/' + kebab(name) + '.svg';
    glyph =
      '<span style="display:inline-block;width:' +
      size +
      'px;height:' +
      size +
      'px;background-color:' +
      color +
      ';vertical-align:text-bottom;' +
      '-webkit-mask:url(' + url + ') center / contain no-repeat;' +
      'mask:url(' + url + ') center / contain no-repeat;"></span>';
  }

  return (
    '<span style="display:inline-flex;align-items:center;gap:6px;padding:2px 6px;' +
    'border:1px solid #e5e5e5;border-radius:4px;background:#fafafa;">' +
    glyph +
    '<code style="font-size:12px;color:#666;background:none;">' +
    name +
    '</code></span>'
  );
}

window.CMS.registerEditorComponent({
  id: 'icon',
  label: 'Icon',
  fields: [
    {
      name: 'name',
      label: 'Icon',
      widget: 'select',
      options: nameOptions,
      default: 'attach_file',
      hint: 'Most used icons are marked with a star. Type to search the full list.',
    },
    {
      name: 'color',
      label: 'Colour',
      widget: 'select',
      options: [
        { label: 'Black (default)', value: 'black' },
        { label: 'UvA red', value: 'red' },
        { label: 'Custom (fill in below)', value: 'custom' },
      ],
      default: 'black',
    },
    {
      name: 'customColor',
      label: 'Custom colour',
      widget: 'string',
      required: false,
      hint: 'Only used when colour is set to custom, e.g. #16a34a',
    },
    {
      name: 'size',
      label: 'Size',
      widget: 'select',
      options: [
        { label: 'Small (16px)', value: 'small' },
        { label: 'Medium (20px, default)', value: 'medium' },
        { label: 'Large (28px)', value: 'large' },
      ],
      default: 'medium',
    },
  ],
  pattern: /^<Icon\s+name="([^"]+)"\s+color="([^"]+)"\s+size=\{(\d+)\}\s*\/>$/,
  fromBlock: function (match) {
    const rawColor = match[2];
    const isPreset = rawColor === 'black' || rawColor === 'red';
    const sizeNum = parseInt(match[3], 10);
    const sizeKey =
      Object.keys(SIZES).find((k) => SIZES[k] === sizeNum) || 'medium';
    return {
      name: match[1],
      color: isPreset ? rawColor : 'custom',
      customColor: isPreset ? '' : rawColor,
      size: sizeKey,
    };
  },
  toBlock: function (data) {
    const name = data.name || 'attach_file';
    const color = resolveColor(data);
    const size = SIZES[data.size || 'medium'] || 20;
    return '<Icon name="' + name + '" color="' + color + '" size={' + size + '} />';
  },
  toPreview: previewHtml,
});
