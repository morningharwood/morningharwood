export interface MainNavigationData {
  items: MainNavigationDataItem;
}

export interface MainNavigationDataItem {
  text: string;
  href: string;
  target?: string;
}
