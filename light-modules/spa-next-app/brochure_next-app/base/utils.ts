import { EditorContextHelper } from "@magnolia/template-annotations";
import { draftMode } from 'next/headers'
import { nodeName, languages, pagesApi, pageNavApi, templateAnnotationsApi } from '@/config/base-config';

export async function getProps(resolvedUrl:string) {

  const magnoliaContext = EditorContextHelper.getMagnoliaContext(resolvedUrl, nodeName, languages);
  const props:any = {
    nodeName,
    magnoliaContext,
  };
  // Fetching page content
  let pageUrl:string = pagesApi + magnoliaContext.nodePath + magnoliaContext.search;
  
  const response = await fetch(pageUrl, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",// body data type must match "Content-Type" header
  });

  const data2 =await response.json(); // parses JSON response into native JavaScript objects
  console.log("data2-------------------------------", data2);
  props.page= data2;
  // Fetching page navigation
  const pageNavRes = await fetch(pageNavApi + nodeName);
  props.pagenav = await pageNavRes.json();
  console.log("props.pagenav", props.pagenav);
  // Fetch template annotations only inside Magnolia WYSIWYG
  if (magnoliaContext.isMagnolia) {
    const templateAnnotationsRes = await fetch(templateAnnotationsApi + magnoliaContext.nodePath);
    props.templateAnnotations = await templateAnnotationsRes.json();
  }
  
  global.mgnlInPageEditor = magnoliaContext.isMagnoliaEdit;
  draftMode().enable()

  return {
    props
  };
}