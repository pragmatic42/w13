import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '7536aec19f424d789cd066df691ed1ec',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Webinarrative',
  domain: 'webinarrative',
  author: 'Webinarrative',
  seotitle: 'Webinarrative — Master Webinars 2023, Get Started, Host & Maximize Your Impact',

  // open graph metadata (optional)
  description: 'Discover the ultimate guide to webinars in 2023! Learn how to get started, host successful webinars, and explore the best software & hardware options to enhance your online presentations.',

  // social usernames (optional)
  twitter: 'webinarrative',
  // github: '',
  // linkedin: '',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
//   defaultPageIcon: '',
//   defaultPageCover: '',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [   
    {
      title: 'Articles',
      pageId: 'f8c07165f74e4825bfc6f16031cbe472'
    },    
    {
      title: 'About',
      pageId: '66d94269a0274c2ba3f148a866389cbf'
    },
    {
      title: 'Contact',
      pageId: '4b73fcfa182c402bb8bf9220bd9b1a60'
    }
  ]
})
