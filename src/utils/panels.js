import { PANELS } from '../constants/panels';

export const getPanelId = panelId => PANELS[panelId].id;

export const getPanelHeader = panelId => PANELS[panelId].header;
