import { draftMode } from 'next/headers'
import {  languages, nodeName, pageNavApi } from "../../config/base-config";
import PlatformPage from '@/base/PlatformPage';
import { getProps } from '@/base/utils';

export async function getPropsFromURL(params?:any, searchParams?:any) {
  const {isEnabled} = draftMode();
  let resolvedUrl = params.pathname ? "/" + params.pathname.join("/") : "";
  if (isEnabled) {
    const {...query} = searchParams;
    let params = new URLSearchParams(query);
    resolvedUrl = resolvedUrl + '?' + params.toString();
  }
  return await getProps(resolvedUrl);
}

export async function generateStaticParams() {

  const navRes = await fetch(pageNavApi + nodeName);
  const nav = await navRes.json();
  const paths:any = [];
  getStaticPath(nav, paths);

  return paths;
}

function getStaticPath(node:any, paths:any) {
  console.log("paths------------5-----------",node)

  console.log("paths------------4-----------",paths)
  let pathname = node["@path"].replace(nodeName, "");
  console.log("pathname------------1-----------",pathname)
  pathname = pathname.split("/");
  console.log("pathname------------2-----------",pathname)
  pathname.shift();
  console.log("pathname------------3-----------",pathname)

  languages.forEach((language:string, i:number) => {
    let i18nPathname = JSON.parse(JSON.stringify(pathname));

    if (i !== 0) i18nPathname.unshift(language);

    paths.push({ pathname: i18nPathname });
  });

  node["@nodes"].forEach((nodeName:any) => getStaticPath(node[nodeName], paths));
}
// const [urlProps, setURLProps] = useState<any>("");

// useEffect(() => {
//   const urlParams = new URLSearchParams(window.location.search);
//   async function fetchAPI() {
//     let urlProps = await getUrlProps(urlParams);
//     setURLProps(urlProps)
//   }

//   fetchAPI();
// }, []);



export default async function Pathname({params, searchParams}:any) {
  
  console.log("paths-----------6-----------",params)
  let urlProps = await getPropsFromURL(params, searchParams);
  console.log("urlProps=", urlProps.props);
  return <PlatformPage props={urlProps.props} />;
}
