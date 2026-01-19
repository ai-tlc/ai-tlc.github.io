import React, {useState, useEffect} from 'react';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {isActiveSidebarItem} from '@docusaurus/plugin-content-docs/client';
import {usePluginData} from '@docusaurus/useGlobalData';
import {useLocation} from '@docusaurus/router';
import IconExternalLink from '@theme/Icon/ExternalLink';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const {href, label, className, autoAddBaseUrl} = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);
  const location = useLocation();
  
  // get headings data from our custom plugin
  let headingsData = {};
  try {
    headingsData = usePluginData('headings-extractor') || {};
  } catch (e) {
    // plugin data not available
  }
  
  // extract doc id from the href (e.g., /core-features -> core-features)
  const docId = href ? href.replace(/^\//, '').replace(/\/$/, '') : '';
  
  // check for locale prefix in current path
  const isNl = location.pathname.startsWith('/nl/');
  const lookupId = isNl ? `nl/${docId}` : docId;
  
  const headings = headingsData[lookupId] || headingsData[docId] || [];
  const hasHeadings = headings.length > 0;
  
  // start expanded if this is the active item
  const [expanded, setExpanded] = useState(isActive);
  
  // auto-expand when becoming active
  useEffect(() => {
    if (isActive) {
      setExpanded(true);
    }
  }, [isActive]);

  return (
    <li
      className={clsx(
        'theme-doc-sidebar-item-link',
        'theme-doc-sidebar-item-link-level-' + level,
        'menu__list-item',
        className,
        styles.itemContainer,
        hasHeadings && styles.hasHeadings,
      )}
      key={label}>
      <div className={styles.linkRow}>
        {hasHeadings && (
          <button
            className={clsx(styles.expandButton, expanded && styles.expanded)}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            aria-label={expanded ? 'collapse' : 'expand'}
            type="button">
            <span className={styles.arrow}>›</span>
          </button>
        )}
        <Link
          className={clsx(
            'menu__link',
            !isInternalLink && styles.menuExternalLink,
            isActive && 'menu__link--active',
            styles.mainLink,
          )}
          autoAddBaseUrl={autoAddBaseUrl}
          aria-current={isActive ? 'page' : undefined}
          to={href}
          {...(isInternalLink && {
            onClick: onItemClick ? () => onItemClick(item) : undefined,
          })}
          {...props}>
          {label}
          {!isInternalLink && <IconExternalLink />}
        </Link>
      </div>
      {hasHeadings && expanded && (
        <ul className={clsx('menu__list', styles.headingsList)}>
          {headings.map((heading) => (
            <li key={heading.id} className="menu__list-item">
              <Link
                className={clsx('menu__link', styles.headingLink)}
                to={`${href}#${heading.id}`}
                onClick={onItemClick ? () => onItemClick(item) : undefined}>
                {heading.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
