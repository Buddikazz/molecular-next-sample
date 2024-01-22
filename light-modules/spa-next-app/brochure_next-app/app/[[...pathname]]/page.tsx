import PlatformPage from "@/base/PlatformPage";
import { getProps } from "@/base/utils";
import { languages, nodeName, pageNavApi } from "../../config/base-config";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getStaticPath(node: any, paths: any) {
  const pathname = node["@path"].replace(nodeName, "");
  languages.forEach((language: string, i: number) => {
    const i18nPathname = JSON.parse(JSON.stringify(pathname));

    if (i !== 0) i18nPathname.unshift(language);

    paths.push({ pathname: i18nPathname });
  });

  // eslint-disable-next-line @typescript-eslint/no-shadow, @typescript-eslint/no-explicit-any
  node["@nodes"].forEach((nodeName: any) =>
    getStaticPath(node[nodeName], paths),
  );
}

export async function generateStaticParams() {
  const navRes = await fetch(pageNavApi + nodeName);
  const nav = await navRes.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paths: any = [];
  getStaticPath(nav, paths);

  return paths;
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Pathname(params: any) {

  let resolvedUrl = nodeName;
  if (params.searchParams && params.searchParams.slug) {
    const { searchParams } = params;
    resolvedUrl = searchParams.slug ? searchParams.slug : nodeName;
    if (searchParams.mgnlPreview === "false") {
      resolvedUrl += "?mgnlPreview=false";
    }
  } else if (params.params) {
    resolvedUrl = params.params.pathname
      ? `/${params.params.pathname.join("/")}`
      : "";
  }

  const urlProps = await getProps(resolvedUrl);
  return <PlatformPage props={urlProps.props} />;
}
