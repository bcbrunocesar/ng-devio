export interface AlertModel {
  title: string;
  type: 'success' | 'info' | 'warning' | 'danger';
  messages: string[];
}
