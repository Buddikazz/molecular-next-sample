'use client';

import React from 'react';
import Link from 'next/link';
import {usePathname} from "next/navigation";
import { languages } from '@/config/base-config';

let NODE_NAME:string;
let BASENAME = '';

// In author build all links should go via preview API e.g. /contact => /api/preview?slug=/contact

function renderLink(item:any) {
  return (
    <React.Fragment key={item['@id']}>
      <Link href={BASENAME + item['@path'].replace(NODE_NAME, '') || '/'}>{item['@name']}</Link>
      {item['@nodes'].length > 0 && item['@nodes'].map((nodeName:string) => renderLink(item[nodeName]))}
      </React.Fragment>
  );
}

function Navigation(props:any) {
  const { nodeName, content, currentLanguage } = props;

  const pathname = usePathname();
  NODE_NAME = nodeName;
  BASENAME = currentLanguage === languages[0] ? "" : "/" + currentLanguage;

  return (
    <nav>
      {renderLink(content)}
      {languages.map((language, i) => (
          <Link key={language} style={{ padding: 'initial' }}  href={(i === 0 ? "" : "/" + language) + pathname.replace("/" + languages[1], "")}>
            <button>{language}</button>
          </Link>
      ))}
    </nav>
  );
}

export default Navigation;
