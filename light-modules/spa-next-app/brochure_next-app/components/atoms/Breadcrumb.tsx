import React from 'react';
import { BreadcrumbItem } from 'staysure-component-library';

interface BreadcrumbsProps {
  path: string | object | null;
}

export const Breadcrumb = ({ path }: BreadcrumbsProps): JSX.Element => {
  if (!path) {
    return <div>No Breadcrumbs</div>;
  }

  const pathNames = typeof path === 'string' ? path.split('/').filter((path) => path) : [];

  return (
    <div className="flex flex-row pl-96 pt-5">
      {pathNames.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join('/')}`;
        const isCurrent = typeof path === 'string' && path === href;

        const itemClass = index < (pathNames.length - 1) ? 'text-purple' : 'text-black';

        return (
          <React.Fragment key={index}>
            <BreadcrumbItem href={href} isCurrent={isCurrent} className={itemClass}>
              {link}
            </BreadcrumbItem>
          </React.Fragment>
        );
      })}
    </div>
  );
};
