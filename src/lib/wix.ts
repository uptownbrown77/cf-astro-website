/**
 * Wix Headless integration boundary.
 * Local preview content remains fully functional without credentials.
 * Future Wix SDK clients for CMS, Forms, CRM, and Media belong here.
 */
export const wixConfig = {
  clientId: import.meta.env.PUBLIC_WIX_CLIENT_ID,
  siteId: import.meta.env.PUBLIC_WIX_SITE_ID,
};

export const isWixConnected = Boolean(wixConfig.clientId && wixConfig.siteId);
