export const nodeName:string = process.env.NEXT_APP_MGNL_SITE_PATH||"";
export const pagesApi:string = process.env.NEXT_APP_MGNL_API_PAGES||"";
export const templateAnnotationsApi:string = process.env.NEXT_APP_MGNL_API_TEMPLATES||"";
export const pageNavApi:string = process.env.NEXT_APP_MGNL_API_NAV||"";
export const languages:string[] = process.env.NEXT_PUBLIC_MGNL_LANGUAGES!.split(" ")||[];
